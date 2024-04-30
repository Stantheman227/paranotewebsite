import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 text-sm text-gray-600 p-3">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/Impressum" className="hover:underline">
            {" "}
            Impressum{" "}
          </Link>
          <Link href="/Datenschutz" className="hover:underline">
            Datenschutzerklärung
          </Link>
          <Link href="/FAQ" className="hover:underline">
            FAQ
          </Link>
          <Link href="/Updates" className="hover:underline">
            Updates
          </Link>
        </div>
        <div className="text-sm text-gray-600">© 2022-2024 Paranote</div>
      </div>
    </footer>
  );
};

export default Footer;
