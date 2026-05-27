import { GitBranch, Brain, Layers, Hash, BookOpen, Link } from "lucide-react";
import PageHeader from "../components/PageHeader";

const AGENTS = [
  {
    icon: <Brain size={16} />,
    name: "LLM Agent",
    desc: "Sends each chunk to an LLM to extract semantic tags and inter-chunk relationships. Results become typed edges in the Knowledge Graph.",
    badge: "OpenAI . Gemini . Deepseek . Claude",
  },
  {
    icon: <Layers size={16} />,
    name: "Embedding Agent",
    desc: "Generates dense vector embeddings via pluggable providers. Stored in Qdrant for ANN search.",
    badge: "OpenAI · Gemini · Voyage",
  },
  {
    icon: <Hash size={16} />,
    name: "Sparse Embedding Agent",
    desc: "Generates sparse vectors via FastEmbed for BM25-style retrieval and Qdrant sparse vector support. Enables lexical precision alongside semantic recall.",
    badge: "FastEmbed . BM25",
  },
  {
    icon: <BookOpen size={16} />,
    name: "Lexical Engine",
    desc: "SpaCy-powered linguistic analysis — NER, noun phrases, TF-IDF keywords, n-gram phrases, acronym resolution. Outputs structured signals for graph edges.",
    badge: "SpaCy",
  },
];

export default function PipelineFlow() {
  return (
    <div>
      <PageHeader
        badge="Ingestion Pipeline"
        title="Pipeline Flow"
        subtitle="Graxon uses LangGraph to orchestrate a parallel multi-agent pipeline at ingestion time — processing every chunk across four engines simultaneously."
      />

      {/* Flow */}
      <div className="section-card mb-8">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <GitBranch size={15} className="text-primary-400" /> Pipeline Overview
        </h3>
        <div className="font-mono text-xs text-gray-600 dark:text-gray-400 leading-relaxed space-y-1 overflow-x-auto">
          <div className="text-gray-400">Document</div>
          <div className="ml-3 text-gray-400">│</div>
          <div className="ml-3 text-gray-400">▼</div>
          <div className="ml-3 text-primary-400 font-semibold">Chunking</div>
          <div className="ml-3 text-gray-400">│</div>
          <div className="ml-3 text-gray-400">▼</div>
          <div className="ml-3 text-primary-400 font-semibold">
            LangGraph Pipeline
          </div>
          <div className="ml-6 text-gray-500">
            ├── LLM Agent → tags, inter-chunk relations
          </div>
          <div className="ml-6 text-gray-500">
            ├── Embedding Agent → dense vectors (OpenAI / Gemini / Voyage)
          </div>
          <div className="ml-6 text-gray-500">
            ├── Sparse Agent → sparse vectors (FastEmbed / BM25)
          </div>
          <div className="ml-6 text-gray-500">
            └── Lexical Engine → entities, concepts, keywords, phrases, acronyms
          </div>
          <div className="ml-3 text-gray-400">│</div>
          <div className="ml-3 text-gray-400">
            ├── <span className="text-primary-400">Vector Store Agent</span>
          </div>
          <div className="ml-9 text-gray-500">
            └── Qdrant ← dense + sparse embeddings
          </div>
          <div className="ml-3 text-gray-400">│</div>
          <div className="ml-3 text-gray-400">
            ├── <span className="text-primary-400">Graph DB Agent</span>
          </div>
          <div className="ml-9 text-gray-500">
            └── Neo4j ← chunk nodes + PREV/NEXT + HAS_TAG, HAS_KEYWORD...
          </div>
          <div className="ml-3 text-gray-400">│</div>
          <div className="ml-3 text-gray-400">
            └── <span className="text-primary-400">Vector Similarity Sync</span>
          </div>
          <div className="ml-9 text-gray-500">
            └── Top-K similar chunks from Qdrant → VECTOR_SIMILAR edges in Neo4j
          </div>
        </div>
      </div>

      {/* Agents */}
      <h2 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">
        Parallel Agents
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {AGENTS.map((a) => (
          <div key={a.name} className="section-card">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-primary-500/10 text-primary-400 flex items-center justify-center">
                {a.icon}
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">
                {a.name}
              </span>
              <span className="ml-auto badge bg-gray-100 dark:bg-dark-600 text-gray-500 dark:text-gray-400 text-xs">
                {a.badge}
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {a.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Vector similarity sync */}
      <div className="section-card bg-primary-500/5 border-primary-500/20">
        <div className="flex items-start gap-3">
          <Link size={16} className="text-primary-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-gray-900 dark:text-white mb-1">
              Vector Similarity Sync
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              After all chunks are stored in Qdrant, Graxon runs a
              post-ingestion pass: for each chunk, it fetches the top-K most
              similar chunks by embedding cosine similarity and writes{" "}
              <code className="badge bg-primary-500/10 text-primary-400 text-xs">
                VECTOR_SIMILAR
              </code>{" "}
              edges into Neo4j with the similarity score as the edge weight.
              This bridges the vector and graph layers — making semantically
              related chunks discoverable through graph traversal at query time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
