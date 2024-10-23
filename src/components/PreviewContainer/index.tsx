'use client';

import { ChangeEvent, useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { QRCode } from "react-qrcode-logo";
import Button from "../Button";

interface PreviewContainerProps {
  value: string;
}

const PreviewContainer = ({
  value
}: PreviewContainerProps) => {
  const qrRef = useRef<any>({});
  const { t } = useTranslation();

  const [bgColor, setBgColor] = useState('white');
  const [size, setSize] = useState(null);

  const download = useCallback(() => {
    qrRef.current.download('png', 'qrcode');
  }, []);

  const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const element: any = e.target
    setBgColor(element.checked ? 'transparent' : 'white');
  };

  return (
    <section id="qrcode-container" className="flex flex-col gap-5 items-center justify-center rounded-md p-5 bg-zinc-900">
      <QRCode value={value} quietZone={30} size={1024}/>
      <label htmlFor="checkbox" className="text-slate-100">
        <input className="p-0.5 rounded-md mr-2" id="checkbox" type="checkbox" placeholder="Rede secreta" name="hiddenSsid" onChange={onChangeCheckbox}/>
        {t("noBackground")}
      </label>
      <label htmlFor="checkbox" className="text-slate-100 flex flex-col">
        <div>
          {t("size")}
        </div>
        <input
          name="size"
          value={size}
          type="number"
          placeholder={t("1024px")}
          onChange={e => setSize(e.target.value)}
          className="p-0.5 rounded-md min-w-60 text-zinc-600"
        />
      </label>
      <Button disableMainBg onClick={download} text="Baixar" className="min-w-60 active:bg-zinc-500 hover:bg-zinc-500 bg-zinc-600"/>
      <div className="hidden" id="hidden-qrcode-container">
        <QRCode ref={qrRef} bgColor={bgColor} value={value} size={size - 20 || 1004}/>
      </div>
    </section>
  );
};

export default PreviewContainer;