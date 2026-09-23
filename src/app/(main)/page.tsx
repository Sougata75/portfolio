import About from "@/components/About";
import Banner from "@/components/Banner";
import BeyondCode from "@/components/BeyondTheCode";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useTranslations } from "next-intl";


export default function Home() {

  const t = useTranslations('Banner');

  return (
    <div className="min-h-[92vh]">
      <Banner/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <BeyondCode/>
    </div>
  );
}
