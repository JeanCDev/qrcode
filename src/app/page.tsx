'use client'

import { redirect } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    redirect('/' + window.navigator.language);
  }, []);

  return null;
};

export default Page;