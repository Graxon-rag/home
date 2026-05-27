import { Zap, Brain, Star, ChevronRight } from "lucide-react";
import PageHeader from "../components/PageHeader";

function QueryStep({ num, text }: { num: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
        {num}
      </span>
      <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {text}
      </span>
    </div>
  );
}

function DepthTable({
  rows,
}: {
  rows: { depth: string; retrieval: string }[];
}) {
  return (
    <div className="space-y-2">
      {rows.map((r) => (
        <div
          key={r.depth}
          className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-dark-700"
        >
          <span className="badge bg-primary-500/10 text-primary-400 border border-primary-500/20 shrink-0 text-xs">
            {r.depth}
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {r.retrieval}
          </span>
        </div>
      ))}
    </div>
  );
}

export function QueryQuick() {
  return (
    <div>
      <PageHeader
        badge="Query Engine · Quick"
        title="Quick Query"
        subtitle="Lightweight retrieval with document context. Faster than Smart and Expert — ideal for straightforward queries where speed matters."
      />
      <div className="section-card mb-6 bg-primary-500/5 border-primary-500/20">
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          Normal RAG hands the LLM isolated fragments — a sentence with no
          surrounding context. Quick Query adds PREV/NEXT chunk neighbors from
          Neo4j, giving the LLM the paragraph before and after every retrieved
          chunk.
        </p>
      </div>
      <div className="section-card mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Zap size={14} className="text-primary-400" /> Retrieval Steps
        </h3>
        <div className="space-y-3">
          <QueryStep
            num="1"
            text="Expand the query via LLM for better coverage"
          />
          <QueryStep
            num="2"
            text="Generate dense + sparse (BM25) embeddings of the expanded query"
          />
          <QueryStep
            num="3"
            text="Hybrid retrieval — top chunks from Qdrant (dense + sparse)"
          />
          <QueryStep
            num="4"
            text="Fetch PREV / NEXT neighbors for each chunk from Neo4j"
          />
          <QueryStep
            num="5"
            text="Rerank the full set, take Top-K, pass to LLM, return answer + sources"
          />
        </div>
      </div>
      <div className="section-card">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
          Depth Levels
        </h3>
        <DepthTable
          rows={[
            {
              depth: "Standard",
              retrieval: "Vector DB chunks + PREV / NEXT neighbors from Neo4j",
            },
            { depth: "Advanced", retrieval: "Same as Standard" },
          ]}
        />
      </div>
    </div>
  );
}

export function QuerySmart() {
  return (
    <div>
      <PageHeader
        badge="Query Engine · Smart"
        title="Smart Query"
        subtitle="Adds Knowledge Graph traversal on top of Quick — surfacing chunks that discuss the same concept in different words."
      />
      <div className="section-card mb-6 bg-primary-500/5 border-primary-500/20">
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          Hybrid RAG asks: <em>"what is similar to my query?"</em> Smart Query
          also asks: <em>"what is similar to what I already found?"</em> —
          traversing VECTOR_SIMILAR edges in Neo4j to surface conceptually
          related chunks that would never appear in a raw embedding search.
        </p>
      </div>
      <div className="section-card mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Brain size={14} className="text-primary-400" /> Retrieval Steps
        </h3>
        <div className="space-y-3">
          <QueryStep num="1" text="Expand query via LLM" />
          <QueryStep num="2" text="Dense + sparse embeddings" />
          <QueryStep num="3" text="Hybrid retrieval from Qdrant" />
          <QueryStep
            num="4"
            text="Fetch PREV / NEXT neighbors for each chunk (Standard + Advanced)"
          />
          <QueryStep
            num="5"
            text="Traverse VECTOR_SIMILAR edges in Neo4j for each retrieved chunk (Standard)"
          />
          <QueryStep
            num="6"
            text="Fetch PREV / NEXT neighbors for each VECTOR_SIMILAR chunk too (Advanced only)"
          />
          <QueryStep num="7" text="Rerank, Top-K, answer + sources" />
        </div>
      </div>
      <div className="section-card">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
          Depth Levels
        </h3>
        <DepthTable
          rows={[
            {
              depth: "Standard",
              retrieval:
                "Quick (Standard) + VECTOR_SIMILAR chunks from Neo4j for each retrieved chunk",
            },
            {
              depth: "Advanced",
              retrieval:
                "Smart (Standard) + PREV / NEXT neighbors for every VECTOR_SIMILAR chunk",
            },
          ]}
        />
      </div>
    </div>
  );
}

export function QueryExpert() {
  const scoreSignals = [
    { signal: "Present in Vector DB results", score: "++" },
    {
      signal: "Present as PREV / NEXT or VECTOR_SIMILAR neighbor",
      score: "++",
    },
    {
      signal: "Matched via query–tag / keyword / concept embedding",
      score: "++",
    },
    { signal: "Matched via Lexical Engine lane (Advanced only)", score: "++" },
  ];

  return (
    <div>
      <PageHeader
        badge="Query Engine · Expert"
        title="Expert Query"
        subtitle="Full hybrid retrieval with multi-signal chunk scoring. The most powerful query mode — combining vector, graph, and lexical signals into a unified ranking."
      />
      <div className="section-card mb-6 bg-primary-500/5 border-primary-500/20">
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          Expert mode doesn't just retrieve — it <em>scores</em>. Every chunk
          accumulates a score across all retrieval signals simultaneously. The
          more signals agree on a chunk, the higher it ranks. Four independent
          signals. One ranked answer.
        </p>
      </div>

      <div className="section-card mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Star size={14} className="text-primary-400" /> Retrieval Steps
          (Standard)
        </h3>
        <div className="space-y-3">
          <QueryStep
            num="1–5"
            text="Everything from Smart Advanced (hybrid retrieval + graph traversal + VECTOR_SIMILAR + their neighbors)"
          />
          <QueryStep
            num="6"
            text="Embed the query and compare against every Tag, Keyword, Concept, Entity, Phrase, Acronym in the Knowledge Graph — filtered by EQ_GTE_LANE_WEIGHT_THRESHOLD"
          />
          <QueryStep
            num="7"
            text="Run unified scoring across every chunk_id found. Top EQ_MAX_CHUNKS by score go to reranker."
          />
        </div>
      </div>

      <div className="section-card mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
          Advanced — Lexical Engine Layer
        </h3>
        <div className="space-y-3 mb-4">
          <QueryStep
            num="+1"
            text="Lexical Engine analyzes the query and context to pick the highest-signal lanes (tags, keywords, concepts most relevant to this query)"
          />
          <QueryStep
            num="+2"
            text="Takes top EQ_MAX_LANE_ENTITY matches per lane"
          />
          <QueryStep
            num="+3"
            text="Chunk IDs also present in lexical results receive an additional score boost"
          />
        </div>
      </div>

      <div className="section-card mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
          Chunk Scoring
        </h3>
        <div className="space-y-2">
          {scoreSignals.map((s) => (
            <div
              key={s.signal}
              className="flex items-center gap-3 py-2 border-b border-gray-50 dark:border-dark-600 last:border-0"
            >
              <ChevronRight size={13} className="text-primary-400 shrink-0" />
              <span className="text-sm text-gray-600 dark:text-gray-300 flex-1">
                {s.signal}
              </span>
              <span className="badge bg-primary-500/10 text-primary-400 border border-primary-500/20 font-mono">
                {s.score}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="section-card mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
          Depth Levels
        </h3>
        <DepthTable
          rows={[
            {
              depth: "Standard",
              retrieval:
                "Smart (Advanced) + embedding comparison against Tags, Keywords, Concepts, Entities, Phrases, Acronyms filtered by EQ_GTE_LANE_WEIGHT_THRESHOLD",
            },
            {
              depth: "Advanced",
              retrieval:
                "Expert (Standard) + Lexical Engine picks best lanes + top EQ_MAX_LANE_ENTITY matches + chunk scoring boost",
            },
          ]}
        />
      </div>

      <div className="section-card">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
          Configuration
        </h3>
        <div className="space-y-2">
          {[
            {
              key: "EQ_GTE_LANE_WEIGHT_THRESHOLD",
              desc: "Minimum similarity score for tag / keyword / concept lane matching",
            },
            {
              key: "EQ_MAX_CHUNKS",
              desc: "Maximum chunks selected after expert scoring",
            },
            {
              key: "EQ_MAX_LANE_ENTITY",
              desc: "Top entities picked per lane by the Lexical Engine (Expert Advanced)",
            },
          ].map((c) => (
            <div
              key={c.key}
              className="flex items-start gap-3 py-2 border-b border-gray-50 dark:border-dark-600 last:border-0"
            >
              <code className="badge bg-primary-500/10 text-primary-400 border border-primary-500/20 font-mono text-xs shrink-0">
                {c.key}
              </code>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {c.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
