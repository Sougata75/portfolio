"use client"

import { useNavigation } from "@/hook/useCommon"
import { setUserLocale } from "@/services/json/locale";
import { routes } from "@/services/json/navitems"
import { Languages } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";


function Header() {

  const {setNavItem,languageChanger,navItems,language} = useNavigation();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLang:string) => {
    languageChanger(newLang);
    startTransition(() => {
      setUserLocale(newLang);
    })
  } 
 
  return (
    <div className="sticky top-0 z-55 w-full p-3 md:p-5 bg-gray-950 flex justify-center items-center">
        <nav className="w-[90%] md:w-[80%] flex justify-between items-center">
            <div className="w-[40%]">
              <img className="w-15 md:w-35 " src="/Logo.png"/>
            </div>
            <div className="w-[30%] hidden md:flex justify-between">
              {routes?.map((item) => (
                <Link href={item.path} onClick={() => setNavItem(item.item)} key={item.item} className={`${navItems === item.item? "text-purple-500":"text-white"}  capitalize text-xl font-bold hover:text-purple-500 transition-all duration-700`}>{item.item}</Link>
              ))}
            </div>
            <div className="w-[10%] hidden md:flex items-center justify-start gap-2">
              <button onClick={() => handleLanguageChange("jp")} className={`${language === "en"? "block":"hidden"} text-yellow-500 border border-purple-500 p-2 rounded-full`}><Languages size={20}/></button>
              <p onClick={() => handleLanguageChange("jp")} className={`${language === "en"? "block":"hidden"} text-yellow-500 text-[12px] md:text-xl capitalize cursor-pointer`}>english</p>

              <button onClick={() => handleLanguageChange("en")} className={`${language === "jp"? "block":"hidden"} text-purple-500 border border-yellow-500 p-2 rounded-full`}><Languages size={20}/></button>
              <p onClick={() => handleLanguageChange("en")} className={`${language === "jp"? "block":"hidden"} text-purple-500 text-[12px] md:text-xl capitalize cursor-pointer`}>japanese</p>
            </div>
            <div className="w-[24%] flex md:hidden items-center justify-start gap-2">
              <button onClick={() => handleLanguageChange("jp")} className={`${language === "en"? "block":"hidden"} text-yellow-500 border border-purple-500 p-2 rounded-full`}><Languages size={10}/></button>
              <p onClick={() => handleLanguageChange("jp")} className={`${language === "en"? "block":"hidden"} text-yellow-500 text-[12px] md:text-xl capitalize cursor-pointer`}>english</p>

              <button onClick={() => handleLanguageChange("en")} className={`${language === "jp"? "block":"hidden"} text-purple-500 border border-yellow-500 p-2 rounded-full`}><Languages size={10}/></button>
              <p onClick={() => handleLanguageChange("en")} className={`${language === "jp"? "block":"hidden"} text-purple-500 text-[12px] md:text-xl capitalize cursor-pointer`}>japanese</p>
            </div>
        </nav>
    </div>
  )
}

export default Header