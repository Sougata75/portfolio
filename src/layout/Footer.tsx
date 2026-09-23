"use client";

import { useTranslations } from "next-intl";
import { Mail, ArrowUp } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  const t = useTranslations("footer");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-950 text-gray-400 py-10 px-5 md:px-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Tech Stack & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2 text-sm text-center md:text-left">
          <p className="font-medium text-gray-300">{t("builtWith")}</p>
          <p>{t("rights")}</p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/Sougata75" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-purple-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <GitHubLogoIcon width={22} height={22} />
          </a>
          <a 
            href="https://www.linkedin.com/in/sougata-bhunia?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <LinkedInLogoIcon width={22} height={22} />
          </a>
          <a 
            href="mailto:Bhuniasougata237@Gmail.com" 
            className="hover:text-emerald-400 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* Right Side: Back to Top */}
        <div className="flex justify-center md:justify-end">
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm hover:text-white transition-colors duration-300"
          >
            {t("backToTop")}
            <span className="p-2 bg-slate-900 rounded-full group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
              <ArrowUp size={16} />
            </span>
          </button>
        </div>
        
      </div>
    </footer>
  );
}