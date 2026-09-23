"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

function Project1() {
  const t = useTranslations();

  const itemVerient2 = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      variants={itemVerient2}
      className="w-full flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 mt-16"
    >
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
        <motion.h3
          variants={itemVerient2}
          className="text-3xl md:text-4xl capitalize text-white font-bold"
        >
          {t("projects.work1.project")}
        </motion.h3>

        <motion.div
          variants={itemVerient2}
          className="bg-slate-900/80 border border-slate-800 p-5 md:p-7 rounded-2xl shadow-xl z-10"
        >
          <p className="text-gray-300 leading-relaxed text-left text-sm md:text-base">
            {t("projects.work1.description")}
          </p>
        </motion.div>

        <motion.div
          variants={itemVerient2}
          className="flex flex-wrap gap-3 mt-2"
        >
          {(t.raw("projects.work1.techStack") as string[]).map(
            (item, index) => (
              <span
                key={index}
                className="px-4 py-1.5 text-xs md:text-sm font-medium text-purple-400 bg-purple-900/20 border border-purple-700/30 rounded-full"
              >
                {item}
              </span>
            ),
          )}
        </motion.div>

        <motion.div
          variants={itemVerient2}
          className="flex flex-wrap gap-4 mt-4"
        >
          <a
            href={t("projects.work1.projectLink")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium text-sm md:text-base"
          >
            <GitHubLogoIcon width={30} height={30} />
            GitHub
          </a>
          <a
            href={t("projects.work1.liveProject")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors font-medium shadow-lg shadow-purple-500/30 text-sm md:text-base"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        </motion.div>
      </div>

      <div className="w-full lg:w-1/2">
        <motion.a
          variants={itemVerient2}
          href={t("projects.work1.liveProject")}
          target="_blank"
          rel="noreferrer"
          className="block relative group"
        >
          <div className="absolute -inset-1 bg-leaner-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>

          <img
            className="relative w-full h-auto shadow-2xl shadow-purple-950 rounded-2xl border border-slate-800 transition-transform duration-500 group-hover:scale-[1.02]"
            src="/blogApp.png"
            alt={t("projects.work1.project")}
          />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Project1;
