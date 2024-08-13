import type { Metadata } from "next";
import { Inter,Taviraj } from "next/font/google";
import "./globals.css";
import DesktopMenu from "@/components/menu/DesktopMenu";
import MobileMenu from "@/components/menu/MobileMenu";
import Footer from "@/components/menu/Footer";

const inter = Inter({ subsets: ["latin"] });
const taviraj = Taviraj({ 
  weight: ["100" , "200" , "300", "400" ],
  style:["italic","normal"] ,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naturofemme",
  description: "L'équilibre féminin en tout et pour tout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={taviraj.className}>
      <div className="flex flex-col justify-start min-h-screen bg-mainColor text-textColor-main ">
            <div className="hidden lg:block">
              <DesktopMenu/>
            </div>
            <div className="block lg:hidden">
              <MobileMenu/>
            </div>
            <main className="mx-10 lg:mx-24 mt-32 mb-10 flex-grow ">
              {children}
            </main>
            <Footer/>
          </div>
      </body>
    </html>
  );
}
