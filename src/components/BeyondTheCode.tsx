"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { useTranslations } from "next-intl";
import { Headphones, Gamepad2, Languages, Sparkles } from "lucide-react";
import { slugs } from "@/services/json/icons";
import dynamic from "next/dynamic";
import { Floating3DParticles } from "./ui/floating-3d-particles";

const IconCloud = dynamic(
  () => import("./ui/icon-cloud").then((mod) => mod.IconCloud),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center text-gray-500">
        Loading...
      </div>
    ),
  },
);

const Globe = dynamic(() => import("./ui/globe").then((mod) => mod.Globe), {
  ssr: false,
});

const Particles = dynamic(
  () => import("./ui/particles").then((mod) => mod.Particles),
  {
    ssr: false,
  },
);

export default function BeyondCode() {
  const t = useTranslations("beyondCode");

  const containerVarient = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        id="beyondCode"
        variants={containerVarient}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col items-center gap-y-5 md:gap-y-10 px-5 md:px-24 py-10 md:py-10"
      >
        <div className="w-full flex flex-col items-center gap-4 mb-8">
          <m.h2
            variants={itemVariant}
            className="text-sm md:text-base font-bold capitalize text-white bg-purple-600 rounded-full py-2 px-6 flex items-center gap-2 shadow-md shadow-purple-200"
          >
            <Sparkles size={18} /> {t("title")}
          </m.h2>
          <m.p
            variants={itemVariant}
            className="text-gray-600 text-center text-sm md:text-lg max-w-2xl"
          >
            {t("sub")}
          </m.p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          <m.div
            variants={itemVariant}
            className="relative overflow-hidden bg-white border border-gray-200 shadow-xl shadow-gray-100 p-8 rounded-3xl flex flex-col justify-end min-h-87.5 group hover:border-purple-300 transition-colors duration-300"
          >
            <Floating3DParticles color="#8B5CF6" quantity={100}/>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 border border-purple-200 shadow-sm">
                <Headphones size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {t("musicTitle")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t("musicDesc")}
              </p>
            </div>
          </m.div>

          <m.div
            variants={itemVariant}
            className="relative overflow-hidden bg-white border border-gray-200 shadow-xl shadow-gray-100 p-8 rounded-3xl flex flex-col min-h-87.5 group hover:border-blue-300 transition-colors duration-300"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-500 mt-10">
              <IconCloud
                images={slugs.map(
                  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
                )}
              />
            </div>
            <div className="relative z-10 pointer-events-none">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-200 shadow-sm">
                <Gamepad2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {t("gamingTitle")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t("gamingDesc")}
              </p>
            </div>
          </m.div>

          <m.div
            variants={itemVariant}
            className="relative overflow-hidden bg-white border border-gray-200 shadow-xl shadow-gray-100 p-8 rounded-3xl flex flex-col min-h-87.5 group hover:border-emerald-300 transition-colors duration-300"
          >
            <div className="absolute -right-20 top-20 w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500">
              <Globe />
            </div>
            <div className="relative z-10 pointer-events-none">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-200 shadow-sm">
                <Languages size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {t("languageTitle")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t("languageDesc")}
              </p>
            </div>
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
  );
}
