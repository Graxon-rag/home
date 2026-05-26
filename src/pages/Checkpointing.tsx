import { Shield, Zap, HardDrive, RefreshCw, CheckCircle } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Checkpointing() {
  return (
    <div>
      <PageHeader
        badge="Resilient Ingestion"
        title="Zero-Loss Checkpointing"
        subtitle="Graxon treats ingestion like a transaction log. If a worker crashes mid-document, the pipeline hot-boots and resumes from the exact chunk it left off."
      />

      <div className="section-card mb-6 bg-amber-500/5 border-amber-500/20">
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <strong>The real-world problem:</strong> If your ingestion pipeline
          fails at page 800 of a 1,000-page document, an all-or-nothing
          architecture forces a full restart — burning engineering time and
          duplicate LLM tokens. Graxon eliminates this by design.
        </p>
      </div>

      {/* Two-layer checkpointing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="section-card">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center">
              <Zap size={16} />
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white text-sm">
                Micro Checkpoints
              </div>
              <div className="text-xs text-gray-400">Redis — Hot State</div>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Per-chunk state tracked in Redis. Graxon always knows exactly which
            chunk is being processed. On crash, the pipeline reads hot state and
            resumes immediately — no cold start.
          </p>
        </div>

        <div className="section-card">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/10 text-yellow-400 flex items-center justify-center">
              <HardDrive size={16} />
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white text-sm">
                Macro Checkpoints
              </div>
              <div className="text-xs text-gray-400">
                MinIO — Cold Artifacts
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Full artifact backups persisted to MinIO (S3-compatible) per
            document and batch. Durable across worker restarts, node failures,
            and deployment cycles.
          </p>
        </div>
      </div>

      {/* Idempotency */}
      <div className="section-card mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Shield size={16} className="text-primary-400" />
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Ironclad Idempotency
          </h3>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Resuming a failed pipeline usually introduces duplicate vectors or
          corrupted graph linkages. Graxon guarantees a zero-duplicate footprint
          by design:
        </p>
        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-dark-700">
            <div className="font-mono text-xs text-primary-400 mb-1">
              Qdrant
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Deterministic{" "}
              <code className="badge bg-primary-500/10 text-primary-400 text-xs">
                uuid5
              </code>{" "}
              hashing seeded by structured{" "}
              <code className="badge bg-primary-500/10 text-primary-400 text-xs">
                chunk_id
              </code>
              s — every vector upsert is fully idempotent. Re-ingesting a chunk
              overwrites cleanly, never duplicates.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-dark-700">
            <div className="font-mono text-xs text-primary-400 mb-1">Neo4j</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Single-transaction bulk uploads via optimized Cypher{" "}
              <code className="badge bg-primary-500/10 text-primary-400 text-xs">
                UNWIND
              </code>{" "}
              clauses with strict{" "}
              <code className="badge bg-primary-500/10 text-primary-400 text-xs">
                ON CREATE
              </code>{" "}
              /{" "}
              <code className="badge bg-primary-500/10 text-primary-400 text-xs">
                ON MATCH
              </code>{" "}
              isolation. Preserves temporal metadata and guarantees ACID
              consistency.
            </p>
          </div>
        </div>
      </div>

      {/* Failure table */}
      <div className="section-card">
        <div className="flex items-center gap-2 mb-4">
          <RefreshCw size={16} className="text-primary-400" />
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Failure & Recovery
          </h3>
        </div>
        <div className="space-y-2">
          {[
            {
              scenario: "API rate limit spike",
              behavior: "Pipeline pauses, checkpoint saved, resumes on retry",
            },
            {
              scenario: "Worker node crash",
              behavior:
                "Hot-boots from Redis micro-checkpoint, zero chunk loss",
            },
            {
              scenario: "Re-ingesting same document",
              behavior: "uuid5 idempotency — overwrites cleanly, no duplicates",
            },
            {
              scenario: "Neo4j write failure",
              behavior:
                "ACID transaction rolls back, chunk retried on next run",
            },
            {
              scenario: "Complete pipeline success",
              behavior: "Checkpoints cleared, document handed to query layer",
            },
          ].map((r) => (
            <div
              key={r.scenario}
              className="flex items-start gap-3 py-2 border-b border-gray-50 dark:border-dark-600 last:border-0"
            >
              <CheckCircle
                size={13}
                className="text-primary-400 shrink-0 mt-0.5"
              />
              <div>
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {r.scenario}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {r.behavior}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
