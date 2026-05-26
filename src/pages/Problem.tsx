import { AlertTriangle, XCircle, CheckCircle } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Problem() {
  return (
    <div>
      <PageHeader
        badge="Why Graxon Exists"
        title="The Problem with RAG"
        subtitle="Vector similarity is a weak foundation for retrieval. Here's why standard RAG fails at scale — and what Graxon does differently."
      />

      <div className="section-card mb-6">
        <h2 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">
          What Standard RAG Does
        </h2>
        <div className="space-y-3">
          {[
            "Embed the query",
            "Find top-K similar chunks by cosine similarity",
            "Stuff them into the LLM context",
            "Return an answer",
          ].map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-dark-700"
            >
              <span className="w-6 h-6 rounded-full bg-gray-200 dark:bg-dark-600 text-xs font-mono font-bold flex items-center justify-center text-gray-500 dark:text-gray-400 shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                {step}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
          That's it. No context. No awareness of what came before or after. No
          understanding of relationships between chunks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="section-card border-red-200 dark:border-red-900/40">
          <div className="flex items-center gap-2 mb-4">
            <XCircle size={16} className="text-red-500" />
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Standard RAG Failures
            </h3>
          </div>
          <ul className="space-y-2.5">
            {[
              "Retrieves chunks that look similar but are contextually wrong",
              "Isolated fragments with no surrounding context",
              "Misses chunks that discuss the same idea in different words",
              "No awareness of document structure or sequence",
              "Hallucinations from incomplete or misleading context",
              "Pipeline crashes lose all progress — full restart required",
            ].map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <XCircle size={13} className="text-red-400 shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="section-card border-primary-200 dark:border-primary-900/40">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle size={16} className="text-primary-400" />
            <h3 className="font-semibold text-gray-900 dark:text-white">
              How Graxon Solves It
            </h3>
          </div>
          <ul className="space-y-2.5">
            {[
              "Knowledge Graph wires chunks with typed, weighted semantic edges",
              "PREV/NEXT edges preserve document structure and sequence",
              "VECTOR_SIMILAR edges surface conceptually related chunks",
              "Lexical Engine links entities, keywords, phrases across chunks",
              "Multi-signal expert scoring ranks by true relevance",
              "Zero-loss checkpointing — resume from exact chunk on crash",
            ].map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <CheckCircle
                  size={13}
                  className="text-primary-400 shrink-0 mt-0.5"
                />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section-card bg-primary-500/5 border-primary-500/20">
        <div className="flex items-start gap-3">
          <AlertTriangle
            size={18}
            className="text-primary-400 shrink-0 mt-0.5"
          />
          <div>
            <p className="font-semibold text-gray-900 dark:text-white mb-1">
              The Core Insight
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Vector search asks <em>"what looks similar to my query?"</em>
              <br />
              Graxon asks{" "}
              <em>
                "what is actually related — by structure, meaning, lexical
                overlap, and vector proximity?"
              </em>
              <br />
              <br />
              That difference is what separates a demo from a production-grade
              retrieval system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
