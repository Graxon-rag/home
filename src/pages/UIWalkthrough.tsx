import {
  Building2,
  FolderOpen,
  FileText,
  Search,
  Cpu,
  Key,
  Play,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import YouTubeEmbed from "../components/YouTubeEmbed";

const SCREENSHOTS = [
  {
    icon: <Building2 size={28} />,
    label: "Organizations",
    desc: "Manage multi-tenant orgs",
  },
  {
    icon: <FolderOpen size={28} />,
    label: "Projects",
    desc: "Scoped project workspaces",
  },
  {
    icon: <FileText size={28} />,
    label: "Documents",
    desc: "Upload & manage documents",
  },
  {
    icon: <Search size={28} />,
    label: "Query Interface",
    desc: "Quick / Smart / Expert modes",
  },
  {
    icon: <Cpu size={28} />,
    label: "Models",
    desc: "LLM, Embedding, Sparse, Reranker",
  },
  {
    icon: <Key size={28} />,
    label: "Credentials",
    desc: "API key & provider management",
  },
];

export default function UIWalkthrough() {
  return (
    <div>
      <PageHeader
        badge="UI Walkthrough"
        title="Graxon in Action"
        subtitle="Watch the full UI walkthrough and Knowledge Graph visualization. See how Graxon's interface brings the entire Hybrid RAG pipeline to life."
      />

      {/* Videos */}
      <div className="space-y-6 mb-10">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Play size={15} className="text-red-500" /> Full UI Demo
          </h3>
          <YouTubeEmbed videoId="2rUokfo5tAY" title="Graxon UI Demo" />
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Play size={15} className="text-red-500" /> Knowledge Graph
            Visualization
          </h3>
          <YouTubeEmbed videoId="iJlQGarqEDo" title="Graxon Graph DB Demo" />
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Play size={15} className="text-red-500" /> Checkpoint Upload
          </h3>
          <YouTubeEmbed
            videoId="aII5LUk28cw"
            title="Graxon Checkpoint Upload"
          />
        </div>
      </div>

      {/* Subscribe */}
      <div className="section-card mb-8 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-0.5">
            More videos coming
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Subscribe to the Graxon YouTube channel for updates.
          </p>
        </div>
        <a
          href="https://www.youtube.com/@graxonrag"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition-colors shrink-0"
        >
          <Play size={14} /> Subscribe
        </a>
      </div>

      {/* Screenshot placeholders */}
      <h2 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">
        UI Sections
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SCREENSHOTS.map((s) => (
          <div key={s.label} className="screenshot-placeholder p-6">
            <div className="text-primary-400/60">{s.icon}</div>
            <div className="text-center">
              <div className="font-semibold text-gray-700 dark:text-gray-300 text-sm">
                {s.label}
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                {s.desc}
              </div>
            </div>
            <div className="text-xs text-gray-300 dark:text-gray-600 italic">
              Screenshot coming soon
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
