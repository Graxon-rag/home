import { Check, X, GitFork, Cpu } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function GraxonVsGraphRAG() {
  const comparisonData = [
    {
      feature: "Open Source Status",
      graxon: "Fully open-source (GitHub, Docker Hub)",
      graphRAG: "Fully open-source (GitHub, MIT license)",
    },
    {
      feature: "Primary Innovation",
      graxon: "Persistent KG + hybrid retrieval + checkpointing",
      graphRAG: "Community hierarchy + summarization",
    },
    {
      feature: "Graph Node Type",
      graxon: "Chunk-level (Fine-grained topology)",
      graphRAG: "Entity-level (High-level extraction)",
    },
    {
      feature: "Edge Typery",
      graxon: "8 typed edges with dynamic weights",
      graphRAG: "Semantic relationships (LLM-only)",
    },
    {
      feature: "Hybrid Retrieval",
      graxon: "Dense + Sparse (BM25) + Graph Traversal",
      graphRAG: "Community summaries + optional vector",
    },
    {
      feature: "Query Orchestration",
      graxon: "LangGraph Multi-Agent (3 types × 2 depths)",
      graphRAG: "Linear pipeline; community/global search",
    },
    {
      feature: "LLM Providers",
      graxon: "OpenAI, Claude, Gemini, DeepSeek (Dynamic Postgres registry)",
      graphRAG: "OpenAI, Azure OpenAI (or OpenAI-compatible endpoints)",
    },
    {
      feature: "Embedding Providers",
      graxon: "OpenAI, Gemini, Voyage AI",
      graphRAG: "OpenAI / Azure OpenAI default",
    },
    {
      feature: "Sparse Embeddings",
      graxon: "FastEmbed (Native BM25 for Qdrant)",
      graphRAG: false,
      graxonDetail: "FastEmbed (Native BM25 for Qdrant)", // Fallback if you use the boolean renderer
      graphRAGDetail: "Not supported (No sparse retrieval layer)",
    },
    {
      feature: "Reranker Provider",
      graxon: "Dedicated pluggable reranker models via Agent",
      graphRAG: false,
      graxonDetail: "Dedicated pluggable reranker models via Agent",
      graphRAGDetail: "Not supported (Relies on LLM community summarization)",
    },
    {
      feature: "Multi-Tenancy",
      graxon: true, // Render Check
      graphRAG: false, // Render X
      graxonDetail: "Built-in (Org → Project → Doc → Chunk)",
      graphRAGDetail: "Not supported natively",
    },
    {
      feature: "Fault Tolerance",
      graxon: true,
      graphRAG: false,
      graxonDetail: "Zero-loss checkpointing (Redis + MinIO)",
      graphRAGDetail: "All-or-nothing; no resume",
    },
    {
      feature: "Multipart Upload",
      graxon: true,
      graphRAG: false,
      graxonDetail: "Browser-side resumable uploads",
      graphRAGDetail: "Not supported",
    },
    {
      feature: "Lexical Analysis",
      graxon: "SpaCy-powered (NER, TF-IDF, n-grams, acronyms)",
      graphRAG: "LLM-only (No traditional NLP layer)",
    },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        badge="Graxon vs Microsoft"
        title="Graxon vs GraphRAG"
        subtitle="A side-by-side engineering breakdown of a production-first hybrid RAG architecture against a research-grade prototype."
      />

      {/* Philosophy Quick Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="section-card border-l-4 border-yellow-500">
          <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-2">
            <Cpu size={16} className="text-yellow-500" />
            Graxon Philosophy
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Engineered for high-throughput, multi-tenant enterprise SaaS
            applications. Focuses on horizontal scale, incremental idempotent
            updates, real-time query dynamic routing, and infrastructure-first
            fault tolerance.
          </p>
        </div>

        <div className="section-card border-l-4 border-gray-400 dark:border-gray-600">
          <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-2">
            <GitFork size={16} className="text-gray-400" />
            GraphRAG Philosophy
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Designed as an offline academic research methodology for complex
            data discovery over a single, fixed data corpus. Excels at global
            dataset summarization but requires expensive full re-indexing
            operations.
          </p>
        </div>
      </div>

      {/* Main Comparison Table */}
      <div className="section-card overflow-hidden !p-0 border border-gray-100 dark:border-dark-600">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-dark-700/50 border-b border-gray-100 dark:border-dark-600">
                <th className="p-4 text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 w-1/4">
                  Feature
                </th>
                <th className="p-4 text-xs font-mono uppercase tracking-wider text-yellow-600 dark:text-yellow-500 w-3/8 bg-yellow-500/5">
                  Graxon
                </th>
                <th className="p-4 text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 w-3/8">
                  Microsoft GraphRAG
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-dark-600 text-sm">
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50/50 dark:hover:bg-dark-700/20 transition-colors"
                >
                  {/* Feature Label */}
                  <td className="p-4 font-medium text-gray-900 dark:text-white border-r border-gray-100 dark:border-dark-600">
                    {row.feature}
                  </td>

                  {/* Graxon Value Column */}
                  <td className="p-4 text-gray-700 dark:text-gray-300 bg-yellow-500/[0.01] border-r border-gray-100 dark:border-dark-600">
                    {typeof row.graxon === "boolean" ? (
                      <div className="flex items-center gap-2 font-medium text-gray-900 dark:text-white">
                        <span className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-500">
                          <Check size={14} />
                        </span>
                        <span className="text-xs">{row.graxonDetail}</span>
                      </div>
                    ) : (
                      row.graxon
                    )}
                  </td>

                  {/* Microsoft GraphRAG Value Column */}
                  <td className="p-4 text-gray-600 dark:text-gray-400">
                    {typeof row.graphRAG === "boolean" ? (
                      <div className="flex items-center gap-2">
                        <span className="p-0.5 rounded-full bg-rose-500/10 text-rose-500">
                          <X size={14} />
                        </span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {row.graphRAGDetail}
                        </span>
                      </div>
                    ) : (
                      row.graphRAG
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
