import Footer from "@/layout/Footer";
import Header from "@/layout/Header";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  );
}