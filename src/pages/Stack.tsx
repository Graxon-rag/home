import {
  Database,
  Network,
  HardDrive,
  MessageSquare,
  Zap,
  Server,
} from "lucide-react";
import PageHeader from "../components/PageHeader";

const STACK = [
  {
    icon: <Database size={20} />,
    name: "Qdrant",
    role: "Vector Database",
    desc: "Stores dense and sparse (BM25) embeddings per chunk. Powers hybrid ANN search at query time.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: <Network size={20} />,
    name: "Neo4j",
    role: "Graph Database",
    desc: "Stores chunk nodes and all semantic edges — PREV/NEXT, HAS_TAG, HAS_KEYWORD, VECTOR_SIMILAR, and more. Foundation of the Knowledge Graph.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: <HardDrive size={20} />,
    name: "MinIO",
    role: "Object Storage",
    desc: "Stores raw document files per org. Bucket = org_id. Also stores macro-checkpoint artifacts for ingestion resume.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    icon: <MessageSquare size={20} />,
    name: "RabbitMQ",
    role: "Message Broker",
    desc: "Async orchestration of ingestion pipeline tasks. Decouples document uploads from processing workers.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: <Zap size={20} />,
    name: "Redis",
    role: "In-Memory Cache",
    desc: "Hot micro-state tracking for ingestion checkpoints. Also used for sessions, queues, and fast lookups.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: <Server size={20} />,
    name: "PostgreSQL + PgBouncer",
    role: "Primary Database",
    desc: "Stores org, project, document metadata. PgBouncer handles connection pooling for production-scale load.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
];

const EDGES = [
  { type: "PREV / NEXT", desc: "Sequential chunk order within a document" },
  { type: "HAS_TAG", desc: "LLM-extracted semantic tags" },
  { type: "HAS_KEYWORD", desc: "TF-IDF significant keywords" },
  { type: "HAS_PHRASE", desc: "Shared n-gram phrases between chunks" },
  { type: "HAS_ENTITY", desc: "Named entities (NER) — people, orgs, products" },
  {
    type: "HAS_CONCEPT",
    desc: "Extracted noun phrases and technical concepts",
  },
  {
    type: "HAS_ACRONYM",
    desc: "Acronym-to-definition links across the document",
  },
  {
    type: "VECTOR_SIMILAR",
    desc: "High cosine similarity between chunk embeddings",
  },
];

export default function Stack() {
  return (
    <div>
      <PageHeader
        badge="Architecture"
        title="Infrastructure Stack"
        subtitle="Graxon is built on a production-grade, multi-engine infrastructure. Each component has a precise role in the hybrid retrieval pipeline."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {STACK.map((s) => (
          <div key={s.name} className="section-card flex gap-4">
            <div
              className={`w-10 h-10 rounded-xl ${s.bg} ${s.color} flex items-center justify-center shrink-0`}
            >
              {s.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-900 dark:text-white">
                  {s.name}
                </span>
                <span className="badge bg-gray-100 dark:bg-dark-600 text-gray-500 dark:text-gray-400 text-xs">
                  {s.role}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <PageHeader
        badge="Data Model"
        title="Knowledge Graph Schema"
        subtitle="Every chunk is a node in Neo4j. Nodes are connected by typed, weighted edges that capture the full semantic topology of each document."
      />

      {/* Hierarchy */}
      <div className="section-card mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
          Document Hierarchy
        </h3>
        <div className="font-mono text-sm text-gray-600 dark:text-gray-300 space-y-1">
          <div>Organization</div>
          <div className="ml-4 text-gray-400">└── Project</div>
          <div className="ml-8 text-gray-400">└── Document</div>
          <div className="ml-12 text-primary-400">
            └── Chunk (Node in Neo4j + Vector in Qdrant)
          </div>
        </div>
      </div>

      {/* Edge types */}
      <div className="section-card">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
          Edge Types
        </h3>
        <div className="space-y-2">
          {EDGES.map((e) => (
            <div
              key={e.type}
              className="flex items-start gap-3 py-2 border-b border-gray-50 dark:border-dark-600 last:border-0"
            >
              <span className="badge bg-primary-500/10 text-primary-400 border border-primary-500/20 font-mono text-xs shrink-0 mt-0.5">
                {e.type}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {e.desc}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-4">
          All edges carry a{" "}
          <strong className="text-gray-500 dark:text-gray-300">weight</strong>{" "}
          for ranked graph traversal during retrieval.
        </p>
      </div>
    </div>
  );
}
