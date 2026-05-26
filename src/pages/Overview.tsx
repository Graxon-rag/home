import {
  GitBranch,
  Database,
  Network,
  Zap,
  Shield,
  Users,
  GitFork,
  Star,
  ExternalLink,
} from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Overview() {
  return (
    <div>
      <PageHeader
        badge="Open Source · Apache 2.0"
        title="Graxon"
        subtitle="The first open-source Hybrid RAG engine to eliminate hallucinations through a persistent Knowledge Graph layer — combining dense vectors, sparse retrieval, and graph traversal at enterprise scale."
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Commits", value: "150+" },
          { label: "Lines of Code", value: "28k+" },
          { label: "License", value: "Apache 2.0" },
          { label: "Status", value: "Active" },
        ].map((s) => (
          <div key={s.label} className="section-card text-center">
            <div className="font-display text-2xl font-bold text-primary-400 mb-1">
              {s.value}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* GitHub links */}
      <div className="flex flex-wrap gap-3 mb-8">
        <a
          href="https://github.com/Graxon-rag/graxon"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium transition-colors"
        >
          <GitFork size={15} /> Backend Repository <ExternalLink size={12} />
        </a>
        <a
          href="https://github.com/Graxon-rag/app"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-dark-500 hover:bg-gray-50 dark:hover:bg-dark-700 text-sm font-medium transition-colors"
        >
          <GitFork size={15} /> UI Repository <ExternalLink size={12} />
        </a>
        <a
          href="https://www.youtube.com/@graxonrag"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-dark-500 hover:bg-gray-50 dark:hover:bg-dark-700 text-sm font-medium transition-colors"
        >
          <Star size={15} /> YouTube Channel <ExternalLink size={12} />
        </a>
      </div>

      {/* What is Graxon */}
      <div className="section-card mb-6">
        <h2 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">
          What is Graxon?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Traditional RAG systems rely purely on vector similarity — finding
          chunks that <em>look</em> related to your query. This works well in
          demos but breaks in production: plausible-sounding answers built on
          the wrong context.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Graxon solves this by layering a{" "}
          <strong className="text-primary-400">
            persistent Knowledge Graph
          </strong>{" "}
          on top of hybrid vector retrieval. Every chunk is stored as a node in
          Neo4j, wired with typed, weighted edges that capture real semantic
          relationships — sequential, conceptual, lexical, and vector-based.
        </p>
      </div>

      {/* Key features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {[
          {
            icon: <Users size={18} />,
            title: "Multi-Tenant",
            desc: "Isolated workspaces per organization, scoped to projects and documents.",
          },
          {
            icon: <Network size={18} />,
            title: "Knowledge Graph",
            desc: "Typed, weighted edges in Neo4j connecting chunks across semantic dimensions.",
          },
          {
            icon: <Zap size={18} />,
            title: "Hybrid Retrieval",
            desc: "Dense vectors + sparse BM25 + graph traversal in a unified scoring layer.",
          },
          {
            icon: <Shield size={18} />,
            title: "Fault Tolerant",
            desc: "Zero-loss checkpointing — ingestion resumes from exact chunk on crash.",
          },
          {
            icon: <Database size={18} />,
            title: "Multi-Engine",
            desc: "Qdrant, Neo4j, PostgreSQL, MinIO, Redis, RabbitMQ — production-grade stack.",
          },
          {
            icon: <GitBranch size={18} />,
            title: "LangGraph Orchestrated",
            desc: "Parallel multi-agent pipelines for both ingestion and query.",
          },
        ].map((f) => (
          <div key={f.title} className="section-card">
            <div className="w-8 h-8 rounded-lg bg-primary-500/10 text-primary-400 flex items-center justify-center mb-3">
              {f.icon}
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1.5">
              {f.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Hierarchy */}
      <div className="section-card">
        <h2 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">
          Data Hierarchy
        </h2>
        <div className="flex items-center gap-3 flex-wrap">
          {["Organization", "→", "Project", "→", "Document", "→", "Chunk"].map(
            (item, i) =>
              item === "→" ? (
                <span
                  key={i}
                  className="text-gray-300 dark:text-gray-600 font-mono"
                >
                  {item}
                </span>
              ) : (
                <span
                  key={i}
                  className="badge bg-primary-500/10 text-primary-400 border border-primary-500/20 text-sm px-3 py-1.5"
                >
                  {item}
                </span>
              ),
          )}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
          Full multi-tenancy with isolation at every level. Each org, project,
          and document is scoped independently.
        </p>
      </div>
    </div>
  );
}
