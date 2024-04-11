import React from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function Impressum() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-gray-100">
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
      <div className="flex-grow justify-center items-center flex-col flex p-5 ">
        <div className="bg-gray-200 p-8 rounded-lg shadow-md  ">
          {/* Dein Impressum Inhalt hier */}
          <h1 className="text-3xl font-extrabold tracking-tight mb-4">
            Impressum
          </h1>
          <hr className="border-t border-gray-300 mb-4" />
          <div className="mb-4">
            <h2 className="text-2xl font-bold tracking-tight mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <hr className="border-t border-gray-300 mb-4" />
            <p>Paranote GbR</p>
            <p>Marmstorfer Weg 128</p>
            <p>21077 Hamburg</p>
            <p>Deutschland</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">
              Kontaktmöglichkeiten
            </h2>
            <hr className="border-t border-gray-300 mb-4" />
            <p className="mb-2">E-Mail: mail@paranote.de</p>
            <p>Verantwortlicher: Gabriel Acan</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
