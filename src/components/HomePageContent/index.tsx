'use client';

import { useEffect, useState } from "react";
import Selection from "../Selection";
import Form from "../Form";
import PreviewContainer from "../PreviewContainer";

const HomePageContent = () => {
  const [type, setType] = useState('text')
  const [value, setValue] = useState(' ');

  useEffect(() => {
    document.title = 'SmartScan';
  }, [type]);

  return (
    <div id="mainPage" className="flex flex-col justify-items-center p-8 pb-20 sm:px-[10%] md:px-[20%] font-[family-name:var(--font-geist-sans)]">
      <Selection select={setType} type={type}/>
      <main id="mainContent" className="grid gap-8">
        <aside id="formContainer" className="rounded-md p-5 sm:mr-5 flex-wrap flex-col w-full flex gap-5 bg-zinc-900">
          <Form type={type} setValue={setValue}/>
        </aside>
        <PreviewContainer value={value} />
      </main>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8138887066345693" crossOrigin="anonymous"></script>
    </div>
  );
};

export default HomePageContent;