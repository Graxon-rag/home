import { Upload, RefreshCw, Shield, CheckCircle } from "lucide-react";
import PageHeader from "../components/PageHeader";
import YouTubeEmbed from "../components/YouTubeEmbed";

export default function MultipartUpload() {
  return (
    <div>
      <PageHeader
        badge="Resilient Upload"
        title="Multipart Upload & Resume"
        subtitle="Zero-loss checkpointing extends to the browser. Large document uploads are part-level resumable — a crash at 94% resumes at 94%, not 0%."
      />

      <div className="mb-8">
        <YouTubeEmbed
          videoId="aII5LUk28cw"
          title="Graxon Checkpoint Upload Demo"
        />
        <p className="text-xs text-gray-400 mt-2 text-center">
          Checkpoint upload in action
        </p>
      </div>

      {/* Storage layout */}
      <div className="section-card mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <Shield size={14} className="text-primary-400" /> Storage Layout
          (MinIO)
        </h3>
        <div className="font-mono text-sm bg-gray-50 dark:bg-dark-700 rounded-lg p-4">
          <div className="text-gray-500 dark:text-gray-400">
            bucket: <span className="text-primary-400">{"{"}</span>
            <span className="text-yellow-400">org_id</span>
            <span className="text-primary-400">{"}"}</span>
          </div>
          <div className="text-gray-500 dark:text-gray-400 mt-1">
            key: &nbsp;
            <span className="text-yellow-400">{"{"}</span>
            <span className="text-cyan-400">project_id</span>
            <span className="text-yellow-400">{"}"}</span>
            <span className="text-yellow-400">{"{"}</span>
            <span className="text-cyan-400">document_id</span>
            <span className="text-yellow-400">{"}"}</span>
            <span className="text-primary-400">/</span>
            <span className="text-yellow-400">{"{"}</span>
            <span className="text-cyan-400">filename</span>
            <span className="text-yellow-400">{"}"}</span>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Each org gets its own bucket. Full multi-tenant isolation at the
          storage layer.
        </p>
      </div>

      {/* Upload flow */}
      <div className="section-card mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Upload size={14} className="text-primary-400" /> Upload Flow
        </h3>
        <div className="space-y-3">
          {[
            {
              step: "1",
              title: "Session Check",
              desc: "Frontend checks for an existing upload session (documentId, uploadId, key, completedParts). If found — the upload was interrupted and will resume.",
            },
            {
              step: "2",
              title: "Multipart Init",
              desc: "If no session, calls /multipart/init. Backend auto-creates the org bucket if missing, registers a multipart upload with MinIO, returns uploadId + key. Session persisted immediately.",
            },
            {
              step: "3",
              title: "Part-Level Upload",
              desc: "File is split into fixed-size chunks. For each part, frontend skips already-uploaded parts and fetches a fresh presigned URL per part. Data goes directly to MinIO — no bytes through the app server.",
            },
            {
              step: "4",
              title: "Complete",
              desc: "Calls /multipart/complete. Backend sorts parts by PartNumber (S3 requirement), finalizes the multipart upload, registers the document, and triggers the ingestion pipeline.",
            },
            {
              step: "5",
              title: "Cleanup",
              desc: "Session deleted on success. Preserved on failure — next retry resumes from the last completed part.",
            },
          ].map((f) => (
            <div
              key={f.step}
              className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-dark-700"
            >
              <span className="w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                {f.step}
              </span>
              <div>
                <div className="font-medium text-gray-900 dark:text-white text-sm mb-0.5">
                  {f.title}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {f.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Failure table */}
      <div className="section-card mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <RefreshCw size={14} className="text-primary-400" /> Failure & Retry
        </h3>
        <div className="space-y-2">
          {[
            {
              scenario: "Connection drops mid-upload",
              behavior:
                "Session preserved, retry resumes from last completed part",
            },
            {
              scenario: "Browser tab closed",
              behavior: "Session persisted, upload resumes on next open",
            },
            {
              scenario: "Part upload fails",
              behavior:
                "Error surfaced, session intact, retry skips completed parts",
            },
            {
              scenario: "Upload completes",
              behavior:
                "Session deleted, document handed to ingestion pipeline",
            },
          ].map((r) => (
            <div
              key={r.scenario}
              className="flex items-start gap-3 py-2 border-b border-gray-50 dark:border-dark-600 last:border-0"
            >
              <CheckCircle
                size={13}
                className="text-primary-400 shrink-0 mt-0.5"
              />
              <div>
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {r.scenario}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {r.behavior}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supported formats */}
      {/* <div className="section-card">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
          Supported File Types
        </h3>
        <div className="flex gap-3 flex-wrap">
          {[".txt", ".pdf", ".md"].map((ext) => (
            <span
              key={ext}
              className="badge bg-primary-500/10 text-primary-400 border border-primary-500/20 font-mono"
            >
              {ext}
            </span>
          ))}
        </div>
      </div> */}
    </div>
  );
}
