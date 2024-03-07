import FAQPage from "../components/FAQ";
import Footer from "../components/Footer";

function FAQ() {
  return (
    <main className="h-full bg-black">
      <div className="h-screen w-full flex justify-center items-center bg-black">
        <FAQPage />
      </div>
      <Footer />
    </main>
  );
}

export default FAQ;
