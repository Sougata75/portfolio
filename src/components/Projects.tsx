"use client"
import { useNavigation } from "@/hook/useCommon";
import {motion} from "framer-motion";
import { StarsIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Project1 from "./subCopmonents/Project1";
import Project2 from "./subCopmonents/Project2";
import Project3 from "./subCopmonents/Project3";


function Projects() {

      const t = useTranslations();
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
    
          const itemVerient2 = {
            hidden: { opacity: 0, x: -90},
            visible: {
              opacity: 1,
              x: 0,
              transition: {duration: 0.6, ease: "easeOut" as const},
            },
          };
    
        const itemVerient3 = {
        hidden: { opacity: 0, y: 30},
        visible: {
          opacity: 1,
          y: 0,
          transition: {duration: 0.6, ease: "easeOut" as const},
        },
      };

  return (
    <motion.section id="projects" onViewportEnter={() => setNavItem("projects")} variants={containerVarient} initial="hidden"  whileInView="visible" viewport={{once:true,amount:0.2}} className="w-full flex flex-wrap gap-y-5 md:gap-y-10  py-6.25 md:py-12.5">
        <motion.div  className="bg-gray-950 w-full min-h-50 px-5 md:px-24 flex flex-wrap gap-10 md:gap-20 py-10 md:py-20">
            <div className="w-full flex flex-col items-center gap-5 md:gap-10">
                <motion.h2 variants={itemVerient3}  className="md:text-2xl font-bold capitalize text-white bg-purple-600 rounded-full p-2 px-5 flex items-center gap-3"><StarsIcon/>Projects</motion.h2>
                <motion.h3 variants={itemVerient3} className="text-white text-2xl md:text-5xl font-semibold capitalize tracking-widest">{t('projects.title')}</motion.h3>
                <motion.p variants={itemVerient3} className="text-gray-500 text-sm md:text-xl md:w-[50%] text-center">{t('projects.sub')}</motion.p>
            </div>
            <div className="flex flex-col gap-5 md:gap-10">
              <motion.div variants={itemVerient3}><Project1/></motion.div>
            <motion.div variants={itemVerient}><Project2/></motion.div>
            <motion.div variants={itemVerient}><Project3/></motion.div>
            </div>
        </motion.div>    
    </motion.section>
  )
}

export default Projects