import FAQPage from "../components/FAQ";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
};

function FAQ() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-black">
      <div className="flex-grow flex justify-center items-center bg-black">
        <FAQPage />
      </div>
      <Footer />
    </main>
  );
}

export default FAQ;
