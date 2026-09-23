"use client"
import { useNavigation } from "@/hook/useCommon";
import { usePersonalDetails } from "@/services/json/details";
import {motion} from "framer-motion";
import { StarsIcon } from "lucide-react"
import { useTranslations } from "next-intl"


function About() {

    const t = useTranslations();
    const details = usePersonalDetails();
    const {setNavItem} = useNavigation();

    const containerVarient = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      },
    },
  };

  const itemVerient = {
    hidden: { opacity: 0, x: 90},
    visible: {
      opacity: 1,
      x: 0,
      transition: {duration: 0.6, ease: "easeOut" as const},
    },
  };

  return (
    <motion.section id="about" onViewportEnter={() => setNavItem("about me")} variants={containerVarient} initial="hidden"  whileInView="visible" viewport={{once:true,amount:0.2}} className="w-full flex flex-wrap gap-y-5 md:gap-y-10 px-5 md:px-24 py-6.25 md:py-12.5">
        <motion.h2 variants={itemVerient}  className="md:text-2xl font-bold capitalize text-white bg-purple-600 rounded-full p-2 px-5 flex items-center gap-3"><StarsIcon/> about me</motion.h2>
        <motion.div variants={itemVerient}  className="w-full flex flex-col gap-5">
            <h3 className="text-3xl capitalize text-center md:text-start font-bold">{t('Name')}</h3>
            <p className="text-[12px] md:text-[16px] text-gray-500 capitalize font-semibold">{t('about')}</p>
        </motion.div>
        <motion.div variants={itemVerient}  className="w-full flex flex-col md:flex-row md:flex-wrap justify-between">
            {details?.map((item) => (
                <div key={item.item} className="flex flex-col justify-center md:gap-3">
                    <h3 className="font-semibold text-gray-400 md:text-xl">{item.item}</h3>
                    <p className="text-black capitalize md:text-[18px] font-bold">{item.itemValue}</p>
                </div>
            ))}
        </motion.div>
    </motion.section>
  )
}

export default About