"use client";
import { BackpackIcon } from "@radix-ui/react-icons";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Backpack, GraduationCap, StarsIcon } from "lucide-react";
import { useTranslations } from "next-intl";

function Education() {
  const t = useTranslations();

  const containerVarient = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVerient = {
    hidden: { opacity: 0, x: 90 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const itemVerient2 = {
    hidden: { opacity: 0, x: -90 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const itemVerient3 = {
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
        variants={containerVarient}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className=" w-full flex flex-wrap justify-center gap-y-5 md:gap-y-10 px-5 md:px-24 py-6.25 md:py-12.5"
      >
        <m.h2
          variants={itemVerient3}
          className="md:text-2xl font-bold capitalize text-white bg-purple-600 rounded-full p-2 px-5 flex items-center gap-3"
        >
          <StarsIcon />
          life time
        </m.h2>
        <div className="w-full flex flex-col items-center gap-5 md:gap-10">
          <m.h3
            variants={itemVerient3}
            className="text-black text-2xl md:text-5xl font-semibold capitalize tracking-wider"
          >
            {t("education.title")}
          </m.h3>
          <m.p
            variants={itemVerient3}
            className="text-gray-500 text-sm md:text-xl md:w-[50%] text-center"
          >
            {t("education.sub")}
          </m.p>
        </div>
        <div className="relative w-full min-h-50 flex flex-col gap-10 pt-10">
          <div className="absolute -z-10 border-r-2 border-dashed border-orange-300 h-full left-1 md:left-[50%] md:right-[50%]"></div>
          <div className="w-full flex">
            <div className="w-[5.55%] flex md:hidden md:justify-end items-center">
              <div className="w-2.5 h-2.5 md:w-4  md:h-4 bg-orange-600 rounded-full"></div>
            </div>
            <div className="w-[93%] md:w-[45%] flex flex-col items-start md:items-end gap-2 pl-5 md:pr-10">
              <m.h3 variants={itemVerient2} className="">
                <BackpackIcon width={25} height={25} />
              </m.h3>
              <m.h3
                variants={itemVerient2}
                className="capitalize text-lg md:text-2xl text-black font-bold flex flex-col md:flex-row md:gap-5"
              >
                <span className="text-yellow-500">2014 - 2019</span>
                {t("education.school.high")}
              </m.h3>
              <m.p
                variants={itemVerient2}
                className="w-full text-start md:text-right text-[12px] md:text-sm text-gray-500"
              >
                {t("education.school.highDesc")}
              </m.p>
              <m.h4
                variants={itemVerient2}
                className="text-sm md:text-xl text-black font-bold capitalize"
              >
                {t("education.school.schoolName")}
              </m.h4>
            </div>
            <div className="w-[5.55%] hidden md:flex justify-end items-center">
              <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
            </div>
          </div>

          <div className="w-full flex md:justify-end ">
            <div className="w-[5.55%] md:w-[5.4%] flex md:justify-start items-center">
              <div className="w-2.5 h-2.5 md:w-4 md:h-4 bg-orange-600 rounded-full"></div>
            </div>
            <div className="w-[93%] md:w-[45%] flex flex-col items-start gap-2 pl-5 md:pl-10">
              <m.h3 variants={itemVerient} className="">
                <Backpack size={25} />
              </m.h3>
              <m.h3
                variants={itemVerient}
                className="capitalize text-lg md:text-2xl text-black font-bold flex flex-col md:flex-row md:gap-5"
              >
                {t("education.school.higherSecondery")}{" "}
                <span className="text-yellow-500">2019 - 2021</span>
              </m.h3>
              <m.p
                variants={itemVerient}
                className="w-full text-left text-[12px] md:text-sm text-gray-500"
              >
                {t("education.school.hsDesc")}
              </m.p>
              <m.h4
                variants={itemVerient}
                className="text-sm md:text-xl text-black font-bold capitalize"
              >
                {t("education.school.hsSchoolName")}
              </m.h4>
            </div>
          </div>

          <div className="w-full flex">
            <div className="w-[5.55%] flex md:hidden md:justify-end items-center">
              <div className="w-2.5 h-2.5 md:w-4  md:h-4 bg-orange-600 rounded-full"></div>
            </div>
            <div className="w-[93%] md:w-[45%] flex flex-col items-start md:items-end gap-2 pl-5 md:pr-10">
              <m.h3 variants={itemVerient2} className="">
                <GraduationCap size={25} />
              </m.h3>
              <m.h3
                variants={itemVerient2}
                className="capitalize text-lg md:text-2xl text-black font-bold flex flex-col md:flex-row md:gap-5"
              >
                <span className="text-yellow-500">2021 - 2024</span>
                {t("education.collages.ug")}
              </m.h3>
              <m.p
                variants={itemVerient2}
                className="text-gray-400 font-semibold text-sm md:text-lg capitalize"
              >
                {t("education.collages.major")}:{" "}
                {t("education.collages.ugField")}
              </m.p>
              <m.p
                variants={itemVerient2}
                className="w-full text-start md:text-right text-[12px] md:text-sm text-gray-500"
              >
                {t("education.collages.ugDesc")}
              </m.p>
              <m.h4
                variants={itemVerient2}
                className="text-sm md:text-xl text-black font-bold capitalize"
              >
                {t("education.collages.ugUniversity")}
              </m.h4>
            </div>
            <div className="w-[5.55%] hidden md:flex justify-end items-center">
              <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
            </div>
          </div>

          <div className="w-full flex md:justify-end ">
            <div className="w-[5.55%] md:w-[5.4%] flex md:justify-start items-center">
              <div className="w-2.5 h-2.5 md:w-4 md:h-4 bg-orange-600 rounded-full"></div>
            </div>
            <div className="w-[93%] md:w-[45%] flex flex-col items-start gap-2 pl-5 md:pl-10">
              <m.h3 variants={itemVerient} className="">
                <GraduationCap size={25} />
              </m.h3>
              <m.h3
                variants={itemVerient}
                className="capitalize text-lg md:text-2xl text-black font-bold flex flex-col md:flex-row md:gap-5"
              >
                {t("education.collages.pg")}{" "}
                <span className="text-yellow-500">2024 - 2026</span>
              </m.h3>
              <m.p
                variants={itemVerient}
                className="text-gray-400 font-semibold text-sm md:text-lg capitalize"
              >
                {t("education.collages.major")}:{" "}
                {t("education.collages.pgField")}
              </m.p>
              <m.p
                variants={itemVerient}
                className="w-full text-left text-[12px] md:text-sm text-gray-500"
              >
                {t("education.collages.pgDesc")}
              </m.p>
              <m.h4
                variants={itemVerient}
                className="text-sm md:text-xl text-black font-bold capitalize"
              >
                {t("education.collages.pgUniversity")}
              </m.h4>
            </div>
          </div>
        </div>
      </m.section>
    </LazyMotion>
  );
}

export default Education;
