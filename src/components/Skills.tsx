"use client"
import { useNavigation } from "@/hook/useCommon";
import {motion} from "framer-motion";
import { StarsIcon } from "lucide-react";
import { useTranslations } from "next-intl";

function Skills() {

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

  return (
    <motion.section id="skills" onViewportEnter={() => setNavItem("skills")} variants={containerVarient} initial="hidden"  whileInView="visible" viewport={{once:true,amount:0.2}} className="w-full flex flex-wrap gap-y-5 md:gap-y-10  py-6.25 md:py-12.5">
        <motion.div  className="bg-gray-950 w-full min-h-50 px-5 md:px-24 flex flex-wrap gap-10 md:gap-20 py-10 md:py-20">
            <div className="w-full flex flex-col items-center gap-5 md:gap-10">
                <motion.h2 variants={itemVerient}  className="md:text-2xl font-bold capitalize text-white bg-purple-600 rounded-full p-2 px-5 flex items-center gap-3"><StarsIcon/>skills & expertise</motion.h2>
                <motion.h3 variants={itemVerient} className="text-white text-2xl md:text-5xl font-semibold capitalize tracking-widest">{t('skills.title')}</motion.h3>
                <motion.p variants={itemVerient} className="text-gray-500 text-sm md:text-xl md:w-[50%] text-center">{t('skills.sub')}</motion.p>
            </div>
            <div>
                <div className="w-full  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                   <motion.div variants={itemVerient} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300">
                     <h3 className="text-purple-400 font-bold mb-4">Core</h3>
                     <ul className="text-gray-400 space-y-2">
                       <li>• TypeScript</li>
                       <li>• JavaScript (ES6+)</li>
                       <li>• HTML5 / CSS3</li>
                     </ul>
                   </motion.div>

                   <motion.div variants={itemVerient} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300">
                     <h3 className="text-purple-400 font-bold mb-4">Libraries & Frameworks</h3>
                     <ul className="text-gray-400 space-y-2">
                       <li>• React.js</li>
                       <li>• Next.js</li>
                     </ul>
                   </motion.div>

                   <motion.div variants={itemVerient} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300">
                     <h3 className="text-purple-400 font-bold mb-4">UI/UX</h3>
                     <ul className="text-gray-400 space-y-2">
                       <li>• Tailwind CSS</li>
                       <li>• Material UI</li>
                       <li>• shadcn ui</li>
                       <li>• Magic UI</li>
                       <li>• Framer Motion</li>
                     </ul>
                   </motion.div>

                   <motion.div variants={itemVerient} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300">
                     <h3 className="text-purple-400 font-bold mb-4">Core Backend</h3>
                     <ul className="text-gray-400 space-y-2">
                       <li>• Node.js</li>
                       <li>• Express.js</li>
                       <li>• REST APIs</li>
                     </ul>
                   </motion.div>

                   <motion.div variants={itemVerient} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300">
                     <h3 className="text-purple-400 font-bold mb-4">Databases</h3>
                     <ul className="text-gray-400 space-y-2">
                       <li>• MongoDB</li>
                       <li>• SQL & Sequelize</li>
                       <li>• Redis (Caching)</li>
                     </ul>
                   </motion.div>

                   <motion.div variants={itemVerient} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300">
                     <h3 className="text-purple-400 font-bold mb-4">Auth & Security</h3>
                     <ul className="text-gray-400 space-y-2">
                       <li>• JWT Authentication</li>
                       <li>• Role-Based Access (RBAC)</li>
                       <li>• Bcrypt & Helmet</li>
                     </ul>
                   </motion.div>

                   <motion.div variants={itemVerient} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300">
                     <h3 className="text-purple-400 font-bold mb-4">DevOps & Cloud</h3>
                     <ul className="text-gray-400 space-y-2">
                       <li>• Docker</li>
                       <li>• WebSockets (Socket.io)</li>
                       <li>• AWS S3 Integration</li>
                       <li>• CI/CD Basics</li>
                     </ul>
                   </motion.div>

                </div>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Skills