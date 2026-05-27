import { Mail, Github, Linkedin, MapPin, Send, User } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <div>
      <PageHeader
        badge="Get in Touch"
        title="Contact"
        subtitle="Have questions about Graxon, want to collaborate on hybrid RAG architectures, or just want to chat distributed systems? Let's connect."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Contact Info Sidebar */}
        <div className="md:col-span-1 space-y-4">
          <div className="section-card">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <User size={16} className="text-primary-400" />
              Creator
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  Name
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white mt-0.5">
                  Vipin Kumawat
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-gray-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Location
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
                    Sikar, Rajasthan, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-card">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Channels
            </h3>
            <div className="space-y-2.5">
              <a
                href="https://github.com/AVVKavvk"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors"
              >
                <Github size={16} className="shrink-0" />
                <span className="truncate">@AVVKavvk</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vipin-kumawat-751b9124b/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors"
              >
                <Linkedin size={16} className="shrink-0" />
                <span className="truncate">Vipin Kumawat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Email Direct Access / Form Layout */}
        <div className="md:col-span-2 space-y-4">
          <div className="section-card h-full flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Drop an Email
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                Whether it's feedback on Graxon's zero-loss checkpointing,
                integration inquiries, or general development alignment, feel
                free to reach out directly to either inbox:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                <div className="p-4 rounded-xl border border-gray-100 dark:border-dark-600 bg-gray-50/50 dark:bg-dark-700/30">
                  <div className="flex items-center gap-2 mb-2 text-primary-400">
                    <Mail size={14} />
                    <span className="text-xs font-mono font-semibold tracking-wide uppercase">
                      Primary
                    </span>
                  </div>
                  <a
                    href="mailto:kumawatvipin066@gmail.com"
                    className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary-400 dark:hover:text-primary-400 block truncate transition-colors"
                  >
                    kumawatvipin066@gmail.com
                  </a>
                </div>

                <div className="p-4 rounded-xl border border-gray-100 dark:border-dark-600 bg-gray-50/50 dark:bg-dark-700/30">
                  <div className="flex items-center gap-2 mb-2 text-gray-400 dark:text-gray-500">
                    <Mail size={14} />
                    <span className="text-xs font-mono font-semibold tracking-wide uppercase">
                      Alternative
                    </span>
                  </div>
                  <a
                    href="mailto:elevatevipin@gmail.com"
                    className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary-400 dark:hover:text-primary-400 block truncate transition-colors"
                  >
                    elevatevipin@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-dark-600 flex justify-end">
              <a
                href="mailto:kumawatvipin066@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium transition-colors w-full sm:w-auto justify-center"
              >
                <Send size={12} /> Launch Mail Client
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Context Card */}
      <div className="section-card bg-primary-500/5 border-primary-500/20">
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed text-center">
          Building in the open means open lines of communication. Expect a
          response back within 24–48 hours depending on commit volume!
        </p>
      </div>
    </div>
  );
}
