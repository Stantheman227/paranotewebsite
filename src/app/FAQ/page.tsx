import FAQPage from "../components/FAQ";
import Footer from "../components/Footer";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "FAQ",
};

function FAQ() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-white">
      <header className=" p-5">
        <Link href="/" className="hover:underline">
          <Image
            src={"/ParaNoteLogoLM@3x.png"}
            height={70}
            width={140}
            alt="Paranote_logo"
            className=""
          ></Image>
        </Link>
      </header>
      <div className="flex-grow flex justify-center items-center bg-white">
        <FAQPage />
      </div>
      <Footer />
    </main>
  );
}

export default FAQ;
