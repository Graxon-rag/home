import { CheckCircle, Clock, Rocket } from "lucide-react";
import PageHeader from "../components/PageHeader";

const BUILT = [
  {
    title: "Multi-Tenant Architecture",
    desc: "Org → Project → Document → Chunk hierarchy with full isolation",
  },
  {
    title: "Hybrid Vector Retrieval",
    desc: "Dense + sparse (BM25) embeddings via Qdrant",
  },
  {
    title: "Persistent Knowledge Graph",
    desc: "Neo4j chunk nodes with typed, weighted semantic edges",
  },
  {
    title: "LangGraph Ingestion Pipeline",
    desc: "Parallel multi-agent orchestration — LLM, embedding, sparse, lexical",
  },
  {
    title: "SpaCy Lexical Engine",
    desc: "NER, noun phrases, TF-IDF, phrase bridges, acronym resolution",
  },
  {
    title: "Vector Similarity Sync",
    desc: "Post-ingestion VECTOR_SIMILAR edge wiring between semantically related chunks",
  },
  {
    title: "Quick Query Mode",
    desc: "Hybrid retrieval + PREV/NEXT document context",
  },
  {
    title: "Smart Query Mode (Standard & Advanced)",
    desc: "Graph traversal via VECTOR_SIMILAR edges with optional neighbor expansion",
  },
  {
    title: "Expert Query Mode (Standard & Advanced)",
    desc: "Multi-signal scoring across vector, graph, and lexical retrieval layers",
  },
  {
    title: "Zero-Loss Checkpointing",
    desc: "Micro (Redis) + macro (MinIO) checkpoints with hot-resume on crash",
  },
  {
    title: "Multipart Upload with Resume",
    desc: "Part-level resumable upload — crash at 94%, resume at 94%",
  },
  {
    title: "Idempotent Ingestion",
    desc: "uuid5 hashing in Qdrant + UNWIND/ON CREATE in Neo4j — zero duplicates on retry",
  },
  {
    title: "Full Production UI",
    desc: "React frontend with org, project, document, query, model, and credential management",
  },
  {
    title: "Multi-Provider Embeddings",
    desc: "OpenAI, Google Gemini, Voyage AI — pluggable at project level",
  },
  {
    title: "Reranking Layer",
    desc: "Post-retrieval reranker agent for all query modes",
  },
  {
    title: "Answer with Sources",
    desc: "Every response includes metadata and source chunk references",
  },
];

const COMING_SOON = [
  {
    title: "More coming soon",
    desc: "Roadmap items will be added as development continues. Follow the GitHub repo and YouTube channel for updates.",
  },
];

export default function Roadmap() {
  return (
    <div>
      <PageHeader
        badge="Roadmap"
        title="What's Been Built"
        subtitle="Graxon is an active solo project — 150+ commits, 28k+ lines of code. Here's everything that's working in production today."
      />

      <div className="section-card mb-8">
        <div className="flex items-center gap-2 mb-5">
          <CheckCircle size={16} className="text-primary-400" />
          <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white">
            Achieved
          </h2>
        </div>
        <div className="space-y-3">
          {BUILT.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 py-2 border-b border-gray-50 dark:border-dark-600 last:border-0"
            >
              <CheckCircle
                size={14}
                className="text-primary-400 shrink-0 mt-0.5"
              />
              <div>
                <div className="font-medium text-gray-900 dark:text-white text-sm">
                  {item.title}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-card border-dashed border-gray-300 dark:border-dark-500">
        <div className="flex items-center gap-2 mb-5">
          <Rocket size={16} className="text-gray-400" />
          <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white">
            Coming Soon
          </h2>
        </div>
        <div className="space-y-3">
          {COMING_SOON.map((item, i) => (
            <div key={i} className="flex items-start gap-3 py-2">
              <Clock
                size={14}
                className="text-gray-300 dark:text-gray-600 shrink-0 mt-0.5"
              />
              <div>
                <div className="font-medium text-gray-500 dark:text-gray-400 text-sm">
                  {item.title}
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
