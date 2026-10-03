"use client";

import { useNavigation } from "@/hook/useCommon";
import { languageOptions } from "@/services/json/language.options";
import { setUserLocale } from "@/services/json/locale";
import { routes } from "@/services/json/navitems";
import { Languages } from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";

function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);

  const { setNavItem, languageChanger, navItems, language } = useNavigation();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLang: string) => {
    languageChanger(newLang);
    startTransition(() => {
      setUserLocale(newLang);
    });
  };

  return (
    <div className="sticky top-0 z-55 w-full p-3 md:p-5 bg-gray-950 flex justify-center items-center">
      <nav className="w-[90%] md:w-[80%] flex justify-between items-center">
        <div className="w-[40%]">
          <img className="w-15 md:w-35 " src="/Logo.png" />
        </div>
        <div className="w-[30%] hidden md:flex justify-between">
          {routes?.map((item) => (
            <Link
              href={item.path}
              onClick={() => setNavItem(item.item)}
              key={item.item}
              className={`${navItems === item.item ? "text-purple-500" : "text-white"}  capitalize text-xl font-bold hover:text-purple-500 transition-all duration-700`}
            >
              {item.item}
            </Link>
          ))}
        </div>

        <div className="relative flex items-center md:w-[10%] w-[24%] justify-start">
          <div
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <button className="text-yellow-500 border border-purple-500 p-1.5 md:p-2 rounded-full transition-colors group-hover:bg-purple-500/20">
              <Languages className="w-3 h-3 md:w-5 md:h-5" />
            </button>
            <p className="text-yellow-500 text-[12px] md:text-base capitalize flex items-center gap-1">
              {languageOptions.find((lang) => lang.code === language)?.label ||
                "English"}
              <span className="text-[8px] md:text-[10px] ml-1 opacity-70">
                ▼
              </span>
            </p>
          </div>

          {isLangOpen && (
            <div className="absolute top-full left-0 mt-2 w-32 bg-[#0B1120] border border-purple-500/50 rounded-xl shadow-2xl overflow-hidden z-50">
              {languageOptions.map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => {
                    handleLanguageChange(lang.code);
                    setIsLangOpen(false);
                  }}
                  className={`px-4 py-2 text-sm md:text-base cursor-pointer transition-colors hover:bg-purple-500/20 ${
                    language === lang.code
                      ? "text-yellow-500 font-semibold bg-purple-500/10"
                      : "text-gray-300"
                  }`}
                >
                  {lang.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
