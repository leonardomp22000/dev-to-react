import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/navBar";
import { CreateAccountCard } from "@/components/CreateAccountCard";
import { Categories } from "@/components/Categories";
import { OtherCard } from "@/components/OtherCard";
import { ButtonsTop } from "@/components/ButtonsTop";
import { MainContent } from "@/components/MainContent";
import { DiscussCardAside } from "@/components/DiscussCardAside";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen ">
      <section className="h-14">
        
        <NavBar />
      </section>

      <section className="p-4 min-h-screen w-full flex justify-between gap-4 ">
        <aside className="  w-[19%] ">
          <CreateAccountCard />
          <Categories />
          <OtherCard />
        </aside>
        <main className="w-[55%] ">
          <ButtonsTop />
          <MainContent />
        </main>
        <aside className="w-[26%] ">
          <DiscussCardAside />
        </aside>
      </section>
    </main>
  );
}
