"use client"
import { DiscordLogoIcon, GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Download, User2 } from "lucide-react";
import { useTranslations } from "next-intl";
import {motion} from "framer-motion";
import { useNavigation } from "@/hook/useCommon";


function Banner() {

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
    hidden: { opacity: 0, y: 30},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.6, ease: "easeOut" as const},
    },
  };

  return (
    <section className=" md:h-[90vh] pb-6.25 md:pb-12.5">
      <div className="w-full h-full flex flex-wrap justify-between bg-linear-to-t from-yellow-50 via-transparent to-transparent ">
        <motion.div id="home" onViewportEnter={() => setNavItem("home")} onViewportLeave={() => setNavItem("about me")} variants={containerVarient} initial="hidden" animate="visible" whileInView="visible" viewport={{once:true,amount:0.2}} className={`w-full md:w-[55%] p-5 md:pl-24 flex flex-col justify-center items-center md:items-start gap-y-5 md:gap-y-10`}>
          <motion.h2 variants={itemVerient} className="text-xl md:text-2xl capitalize font-bold text-yellow-500 bg-yellow-100 p-2">{t("Name")}</motion.h2>
          <motion.h1 variants={itemVerient} className="text-4xl text-center md:text-start md:text-5xl text-black capitalize font-black">{t('Banner.title')}</motion.h1>
          <motion.h2 variants={itemVerient} className="text-black text-[12px] md:text-[18px] text-start md:w-[80%]">{t('Banner.sub')}</motion.h2>

          <motion.div variants={itemVerient} className="flex gap-5">
            <button className="capitalize text-white text-xl font-bold bg-purple-600 p-1 px-2 md:p-2 md:px-3 flex items-center gap-2 hover:bg-purple-400 duration-500"><User2/> hire me</button>
            <a href="/Sougata Bhunia_260608_115724.docx" download="Sougata Bhunia" className="flex items-center gap-2 border border-gray-300 p-1 px-2 md:p-2 text-black text-xl font-bold hover:bg-black hover:text-white duration-500"><Download/> Download CV</a>
          </motion.div>

          <motion.div variants={itemVerient} className="w-[65%] hidden md:flex flex-wrap justify-between pt-8">
            <a href="https://www.linkedin.com/in/sougata-bhunia?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="flex gap-2 text-xl font-semibold hover:-translate-y-2 transition-all duration-500 items-center"><LinkedInLogoIcon width={30} height={30} color="darkblue"/> LinkedIn</a>
            <a href="https://github.com/Sougata75" className="flex gap-2 text-xl font-semibold hover:-translate-y-2 transition-all duration-500 items-center"><GitHubLogoIcon width={30} height={30} color="black"/> GitHub</a>
            <a href="https://x.com/Agent_4775" className="flex gap-2 text-xl font-semibold hover:-translate-y-2 transition-all duration-500 items-center"><TwitterLogoIcon width={30} height={30} color="blue"/> Twitter</a>
            <a href="https://discord.com/users/agent_4779" className="flex gap-2 text-xl font-semibold hover:-translate-y-2 transition-all duration-500 items-center"><DiscordLogoIcon width={30} height={30} color="blue"/> Discord</a>
          </motion.div>

          <motion.div variants={itemVerient} className="w-[95%] flex md:hidden flex-wrap justify-between pt-2">
            <a href="https://www.linkedin.com/in/sougata-bhunia?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="flex gap-2 text-[12px] font-semibold hover:-translate-y-2 transition-all duration-500 items-center"><LinkedInLogoIcon width={15} height={15} color="darkblue"/> LinkedIn</a>
            <a href="https://github.com/Sougata75" className="flex gap-2 text-[12px] font-semibold hover:-translate-y-2 transition-all duration-500 items-center"><GitHubLogoIcon width={15} height={15} color="black"/> GitHub</a>
            <a href="https://x.com/Agent_4775" className="flex gap-2 text-[12px] font-semibold hover:-translate-y-2 transition-all duration-500 items-center"><TwitterLogoIcon width={15} height={15} color="blue"/> Twitter</a>
            <a href="https://discord.com/users/agent_4779" className="flex gap-2 text-[12px] font-semibold hover:-translate-y-2 transition-all duration-500 items-center"><DiscordLogoIcon width={15} height={15} color="blue"/> Discord</a>
          </motion.div>

        </motion.div>
        
           <div className="w-full h-140 md:w-[45%] border-8 border-white md:border-0 relative md:h-full bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url('/background.png')`}}>
              <div className="absolute z-10 top-0 left-0 right-0 bottom-0  flex flex-col items-center">
                <h1 className="capitalize tracking-widest text-white/30 backdrop-blur-sm text-7xl md:text-9xl font-bold">sougata</h1>
                <h1 className="capitalize tracking-widest text-white/30 backdrop-blur-sm text-7xl md:text-9xl font-bold">bhunia</h1>
              </div>
              <div className="w-full hidden md:block absolute z-40 h-full bg-contain bg-no-repeat bg-center grayscale" style={{backgroundImage:`url('/self.png')`, backgroundSize:"550px", backgroundPosition:"50% 10%"}}></div>
              <div className="w-full block md:hidden absolute z-50 h-full bg-contain bg-no-repeat bg-center grayscale" style={{backgroundImage:`url('/self.png')`, backgroundSize:"380px", backgroundPosition:"50% 10%"}}></div>
              <div className="hidden md:block absolute z-50 w-full h-full bg-linear-to-t from-yellow-50 via-transparent to-transparent from-10% via-45%"></div>
           </div> 
      </div>
    </section>
  )
}

export default Banner