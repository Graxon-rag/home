import { BookOpen } from "lucide-react";
import PageHeader from "../components/PageHeader";

const CAPABILITIES = [
  {
    title: "Entity Extraction (NER)",
    badge: "Named Entities",
    desc: "Detects shared named entities — people, organizations, products, technologies — across chunks. Creates strong semantic links between chunks discussing the same real-world subject, improving graph-based retrieval accuracy.",
  },
  {
    title: "Concept Extraction",
    badge: "Noun Phrases",
    desc: "Extracts meaningful noun phrases and technical concepts shared between chunks. Connects semantically related ideas even when exact keywords differ, improving topic grouping and contextual understanding.",
  },
  {
    title: "TF-IDF Keyword Linking",
    badge: "Statistical",
    desc: "Uses TF-IDF scoring to detect rare but informative keywords appearing across multiple chunks while filtering common noise words. Highlights statistically important terms that strengthen semantic relationships.",
  },
  {
    title: "Phrase Bridge Detection",
    badge: "N-Grams",
    desc: "Detects exact shared n-gram phrases between chunks to capture repeated terminology and strong lexical overlap. Especially useful for technical, scientific, and domain-specific documents.",
  },
  {
    title: "Acronym Resolution",
    badge: "Definitions",
    desc: "Detects acronym definitions and links them to later acronym usage throughout the document. Improves long-document comprehension by connecting abbreviated references back to their original meaning.",
  },
  {
    title: "Edge Construction",
    badge: "Graph",
    desc: "Converts all detected lexical relationships — entities, concepts, keywords, phrases, and acronyms — into typed, weighted graph edges connecting related chunks in Neo4j.",
  },
  {
    title: "Edge Deduplication",
    badge: "Optimization",
    desc: "Removes duplicate or weaker relationships while preserving the strongest semantic connections. Keeps the graph cleaner and more efficient to traverse during retrieval and ranking.",
  },
];

export default function LexicalEngine() {
  return (
    <div>
      <PageHeader
        badge="SpaCy-Powered"
        title="Lexical Engine"
        subtitle="Graxon uses SpaCy as its lexical engine to extract structured linguistic signals from every chunk at ingestion time — converting them into typed, weighted graph edges."
      />

      <div className="section-card mb-8 bg-primary-500/5 border-primary-500/20">
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          The Lexical Engine is what makes Graxon's Knowledge Graph truly
          semantic. Vector embeddings capture general meaning — but they miss
          exact terminology, named entities, recurring phrases, and acronyms.
          The Lexical Engine fills that gap by extracting structured linguistic
          signals that become first-class graph edges.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {CAPABILITIES.map((c, i) => (
          <div key={c.title} className="section-card flex gap-4">
            <div className="w-8 h-8 rounded-lg bg-primary-500/10 text-primary-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-semibold text-gray-900 dark:text-white text-sm">
                  {c.title}
                </span>
                <span className="badge bg-gray-100 dark:bg-dark-600 text-gray-500 dark:text-gray-400 text-xs">
                  {c.badge}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="section-card">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={15} className="text-primary-400" />
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Output Edge Types
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            "HAS_ENTITY",
            "HAS_CONCEPT",
            "HAS_KEYWORD",
            "HAS_PHRASE",
            "HAS_ACRONYM",
          ].map((e) => (
            <span
              key={e}
              className="badge bg-primary-500/10 text-primary-400 border border-primary-500/20 font-mono"
            >
              {e}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">
          All edges carry weights. Duplicates are removed — only the strongest
          connections are kept.
        </p>
      </div>
    </div>
  );
}
