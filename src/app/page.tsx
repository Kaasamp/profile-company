import Image from "next/image";
import { MenuLandingPage } from "./components/navigation-menu/page";

export default function Home() {
return (
<main className="flex flex-1 w-full min-h-screen bg-white dark:bg-black">
        <div className="w-full h-[80px] bg-pink-800 dark:bg-pink-800 rounded-[70px] flex items-center justify-start mt-4 mx-8 p-4">
          <div className="relative w-[230px] h-[50px] rounded-[70px]">
            <Image src="/img/smk_mvp_ars_logo_white.png" alt="logo" fill />
          </div>          
          <div className="flex flex-1 items-center justify-center">
            <MenuLandingPage />
          </div>
        </div>
      </main>
  );
}
