import {
  LayoutDashboard,
  AlertTriangle,
  Layers,
  GitBranch,
  Search,
  BookOpen,
  Monitor,
  Map,
  Users,
  Sun,
  Moon,
  X,
  Menu,
  ChevronDown,
  ChevronRight,
  GitFork,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeToggle";

export type PageId =
  | "overview"
  | "problem"
  | "stack"
  | "data-model"
  | "pipeline-flow"
  | "checkpointing"
  | "multipart-upload"
  | "query-quick"
  | "query-smart"
  | "query-expert"
  | "lexical-engine"
  | "ui-walkthrough"
  | "roadmap"
  | "contributing";

interface NavItem {
  id: PageId;
  label: string;
  icon?: React.ReactNode;
  children?: { id: PageId; label: string }[];
}

const NAV: NavItem[] = [
  { id: "overview", label: "Overview", icon: <LayoutDashboard size={15} /> },
  { id: "problem", label: "The Problem", icon: <AlertTriangle size={15} /> },
  {
    id: "stack",
    label: "Architecture",
    icon: <Layers size={15} />,
    children: [
      { id: "stack", label: "Stack" },
      { id: "data-model", label: "Data Model" },
    ],
  },
  {
    id: "pipeline-flow",
    label: "Ingestion Pipeline",
    icon: <GitBranch size={15} />,
    children: [
      { id: "pipeline-flow", label: "Pipeline Flow" },
      { id: "checkpointing", label: "Checkpointing" },
      { id: "multipart-upload", label: "Multipart Upload" },
    ],
  },
  {
    id: "query-quick",
    label: "Query Engine",
    icon: <Search size={15} />,
    children: [
      { id: "query-quick", label: "Quick" },
      { id: "query-smart", label: "Smart" },
      { id: "query-expert", label: "Expert" },
    ],
  },
  {
    id: "lexical-engine",
    label: "Lexical Engine",
    icon: <BookOpen size={15} />,
  },
  {
    id: "ui-walkthrough",
    label: "UI Walkthrough",
    icon: <Monitor size={15} />,
  },
  { id: "roadmap", label: "Roadmap", icon: <Map size={15} /> },
  { id: "contributing", label: "Contributing", icon: <Users size={15} /> },
];

interface Props {
  current: PageId;
  onNavigate: (id: PageId) => void;
}

export default function Sidebar({ current, onNavigate }: Props) {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string[]>([
    "stack",
    "pipeline-flow",
    "query-quick",
  ]);

  const toggleExpand = (id: string) => {
    setExpanded((e) =>
      e.includes(id) ? e.filter((x) => x !== id) : [...e, id],
    );
  };

  const nav = (id: PageId) => {
    onNavigate(id);
    setOpen(false);
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-5 border-b border-gray-100 dark:border-dark-600">
        <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
          <GitBranch size={16} className="text-white" />
        </div>
        <span className="font-display text-lg font-700 tracking-tight text-gray-900 dark:text-white">
          Graxon
        </span>
        <span className="ml-auto text-xs badge bg-primary-500/10 text-primary-400 border border-primary-500/20">
          v1.0
        </span>
      </div>

      {/* GitHub links */}
      <div className="px-3 py-3 border-b border-gray-100 dark:border-dark-600 flex gap-2">
        <a
          href="https://github.com/Graxon-rag/graxon"
          target="_blank"
          className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-gray-100 dark:bg-dark-600 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-primary-500/10 hover:text-primary-400 transition-colors"
        >
          <GitFork size={12} /> Backend
        </a>
        <a
          href="https://github.com/Graxon-rag/app"
          target="_blank"
          className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-gray-100 dark:bg-dark-600 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-primary-500/10 hover:text-primary-400 transition-colors"
        >
          <GitFork size={12} /> UI
        </a>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        {NAV.map((item) => (
          <div key={item.id}>
            {item.children ? (
              <>
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="sidebar-link w-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  {item.icon}
                  <span>{item.label}</span>
                  <span className="ml-auto">
                    {expanded.includes(item.id) ? (
                      <ChevronDown size={13} />
                    ) : (
                      <ChevronRight size={13} />
                    )}
                  </span>
                </button>
                {expanded.includes(item.id) && (
                  <div className="ml-4 mt-0.5 space-y-0.5 border-l border-gray-100 dark:border-dark-600 pl-3">
                    {item.children.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => nav(child.id)}
                        className={`sidebar-link w-full text-sm ${current === child.id ? "active" : "text-gray-500 dark:text-gray-400"}`}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <button
                onClick={() => nav(item.id)}
                className={`sidebar-link w-full ${current === item.id ? "active" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`}
              >
                {item.icon}
                {item.label}
              </button>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-3 py-3 border-t border-gray-100 dark:border-dark-600 flex items-center justify-between">
        <span className="text-xs text-gray-400">Apache 2.0</span>
        <button
          onClick={toggle}
          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 text-gray-500 dark:text-gray-400 transition-colors"
        >
          {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-600 shadow-sm"
      >
        <Menu size={18} />
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="absolute left-0 top-0 bottom-0 w-64 bg-white dark:bg-dark-800 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-1 rounded text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-dark-800 border-r border-gray-100 dark:border-dark-600 z-30">
        <SidebarContent />
      </aside>
    </>
  );
}
