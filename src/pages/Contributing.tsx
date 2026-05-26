import { GitFork, Bug, ExternalLink, Heart, Star } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Contributing() {
  return (
    <div>
      <PageHeader
        badge="Open Source · Apache 2.0"
        title="Contributing"
        subtitle="Graxon is a solo project built in the open. Every star, fork, issue, and PR moves it forward."
      />

      <div className="section-card mb-6 bg-primary-500/5 border-primary-500/20">
        <div className="flex items-start gap-3">
          <Heart size={16} className="text-primary-400 shrink-0 mt-0.5" />
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Graxon is currently a solo project — 150+ commits and 28,000+ lines
            of code. If you work on RAG, LLMs, graph databases, or just want to
            contribute to something real, come take a look. All contributions
            are welcome.
          </p>
        </div>
      </div>

      {/* Repos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="section-card">
          <div className="flex items-center gap-2 mb-3">
            <GitFork size={16} className="text-gray-700 dark:text-gray-300" />
            <span className="font-semibold text-gray-900 dark:text-white">
              Backend
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            FastAPI · LangGraph · Neo4j · Qdrant · MinIO · Redis · RabbitMQ
          </p>
          <div className="flex gap-2">
            <a
              href="https://github.com/Graxon-rag/graxon"
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium transition-colors"
            >
              <GitFork size={12} /> View Repo <ExternalLink size={10} />
            </a>
            <a
              href="https://github.com/Graxon-rag/graxon"
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-dark-500 hover:bg-gray-50 dark:hover:bg-dark-700 text-xs font-medium transition-colors"
            >
              <Star size={12} /> Star
            </a>
            <a
              href="https://github.com/Graxon-rag/graxon/fork"
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-dark-500 hover:bg-gray-50 dark:hover:bg-dark-700 text-xs font-medium transition-colors"
            >
              <GitFork size={12} /> Fork
            </a>
          </div>
        </div>

        <div className="section-card">
          <div className="flex items-center gap-2 mb-3">
            <GitFork size={16} className="text-gray-700 dark:text-gray-300" />
            <span className="font-semibold text-gray-900 dark:text-white">
              UI
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            React · TypeScript · Tailwind CSS · Vite
          </p>
          <div className="flex gap-2">
            <a
              href="https://github.com/Graxon-rag/app"
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium transition-colors"
            >
              <GitFork size={12} /> View Repo <ExternalLink size={10} />
            </a>
            <a
              href="https://github.com/Graxon-rag/app"
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-dark-500 hover:bg-gray-50 dark:hover:bg-dark-700 text-xs font-medium transition-colors"
            >
              <Star size={12} /> Star
            </a>
            <a
              href="https://github.com/Graxon-rag/app/fork"
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-dark-500 hover:bg-gray-50 dark:hover:bg-dark-700 text-xs font-medium transition-colors"
            >
              <GitFork size={12} /> Fork
            </a>
          </div>
        </div>
      </div>

      {/* Ways to contribute */}
      <div className="section-card mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
          Ways to Contribute
        </h3>
        <div className="space-y-3">
          {[
            {
              icon: <Star size={14} />,
              title: "Star the repos",
              desc: "The simplest way to show support and help others discover Graxon.",
            },
            {
              icon: <Bug size={14} />,
              title: "Open an issue",
              desc: "Found a bug or have a feature idea? Open an issue on GitHub — all feedback is welcome.",
            },
            {
              icon: <GitFork size={14} />,
              title: "Fork & contribute",
              desc: "Fork the repo, make your changes, and open a pull request. All areas — backend, UI, docs — are open.",
            },
            {
              icon: <GitFork size={14} />,
              title: "Spread the word",
              desc: "Share Graxon on LinkedIn, Twitter, or with your team. Open source grows through community.",
            },
          ].map((w) => (
            <div
              key={w.title}
              className="flex items-start gap-3 py-2 border-b border-gray-50 dark:border-dark-600 last:border-0"
            >
              <div className="w-6 h-6 rounded bg-primary-500/10 text-primary-400 flex items-center justify-center shrink-0 mt-0.5">
                {w.icon}
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white text-sm">
                  {w.title}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {w.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* License */}
      <div className="section-card">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
          License
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Graxon is released under the{" "}
          <strong className="text-primary-400">Apache 2.0 License</strong> —
          free to use, modify, and distribute, including for commercial use.
        </p>
      </div>
    </div>
  );
}
