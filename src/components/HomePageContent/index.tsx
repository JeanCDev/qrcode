'use client';

import { useState } from "react";
import Selection from "../Selection";
import Form from "../Form";
import { QRCode } from "react-qrcode-logo";
import Image from "next/image";

const HomePageContent = () => {
  const [type, setType] = useState('text')
  const [value, setValue] = useState(' ');

  return (
    <div id="mainPage" className="flex flex-col justify-items-center p-8 pb-20 px-[20%] font-[family-name:var(--font-geist-sans)]">
      <Selection select={setType}/>
      <main id="mainContent" className="grid gap-8">
        <aside id="formContainer" className="sm:mr-5 flex-wrap flex-col w-full flex gap-5">
          <Form type={type} setValue={setValue}/>
        </aside>
        <section id="qrcode-container">
          <QRCode /* bgColor="transparent" */ value={value} quietZone={30} size={1024}/>
        </section>
      </main>

      <footer className="mt-16 flex-row flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8138887066345693" crossOrigin="anonymous"></script>
    </div>
  );
};

export default HomePageContent;