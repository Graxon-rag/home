import { useState } from "react";
import { ThemeProvider } from "./context/ThemeToggle";
import Sidebar, { type PageId } from "./components/Sidebar";
import Overview from "./pages/Overview";
import Problem from "./pages/Problem";
import Stack from "./pages/Stack";
import PipelineFlow from "./pages/PipelineFlow";
import Checkpointing from "./pages/Checkpointing";
import MultipartUpload from "./pages/MultipartUpload";
import { QueryQuick, QuerySmart, QueryExpert } from "./pages/QueryPages";
import LexicalEngine from "./pages/LexicalEngine";
import UIWalkthrough from "./pages/UIWalkthrough";
import Roadmap from "./pages/Roadmap";
import Contributing from "./pages/Contributing";
import Contact from "./pages/Contact";
import GraxonVsGraphRAG from "./pages/GraxonVsGraphRAG";

function getPage(id: PageId) {
  switch (id) {
    case "overview":
      return <Overview />;
    case "problem":
      return <Problem />;
    case "stack":
      return <Stack />;
    case "data-model":
      return <Stack />;
    case "pipeline-flow":
      return <PipelineFlow />;
    case "checkpointing":
      return <Checkpointing />;
    case "multipart-upload":
      return <MultipartUpload />;
    case "query-quick":
      return <QueryQuick />;
    case "query-smart":
      return <QuerySmart />;
    case "query-expert":
      return <QueryExpert />;
    case "lexical-engine":
      return <LexicalEngine />;
    case "ui-walkthrough":
      return <UIWalkthrough />;
    case "roadmap":
      return <Roadmap />;
    case "contributing":
      return <Contributing />;
    case "graxon-vs-graphRAG":
      return <GraxonVsGraphRAG />;
    case "contact":
      return <Contact />;
    default:
      return <Overview />;
  }
}

export default function App() {
  const [page, setPage] = useState<PageId>("overview");

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
        <Sidebar current={page} onNavigate={setPage} />
        <main className="lg:pl-64">
          <div className="max-w-4xl mx-auto px-6 py-10">{getPage(page)}</div>
        </main>
      </div>
    </ThemeProvider>
  );
}
