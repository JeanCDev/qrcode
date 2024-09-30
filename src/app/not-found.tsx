'use client'

import { redirect } from "next/navigation";
import { useEffect } from "react";

interface ErrorProps {
}

const Error = ({
}: ErrorProps) => {
  useEffect(() => {
    redirect('/' + window.navigator.language);
  }, []);

  return null;
};

export default Error;