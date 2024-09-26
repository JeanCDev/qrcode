import { FormEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface WifiFormProps {
  setValue: (value: string) => void;
}

interface FormValue {
  password: string;
  hiddenSsid: string;
  encryption: string;
  networkName: string;
}

const formatWifiText = ({
  password,
  hiddenSsid,
  encryption,
  networkName
}: FormValue) => `WIFI:T:${encryption};S:${networkName.trim()};P:${password.trim()};H:${(hiddenSsid ? 'TRUE' : '')};;`;

const WifiForm = ({
  setValue
}: WifiFormProps) => {
  const { t } = useTranslation();
  const [formValue, setFormValue] = useState({
    password: '',
    hiddenSsid: '',
    networkName: '',
    encryption: 'WPA'
  } as FormValue);

  const onChange = (e: FormEvent<HTMLFormElement>) => {
    const element: any = e.target

    setFormValue(value => ({
      ...value,
      [element.name]: element.name == 'hiddenSsid' ? element.checked : element.value
    }))
  };

  useEffect(() => {
    setValue(formatWifiText(formValue));
  }, [setValue, formValue]);

  return (
    <form className="text-zinc-600 flex flex-col w-full gap-3" onChange={onChange} onSubmit={e => e.preventDefault()}>
      <input type="text" placeholder={t("networkName")} name="networkName" className="p-0.5 rounded-md"/>
      <input type="text" placeholder={t("password")} name="password" className="p-0.5 rounded-md"/>
      <select name="encryption" className="p-0.5 rounded-md">
        <option value="WPA">WPA</option>
        <option value="WEP">WEP</option>
        <option value="">{t("notEncripted")}</option>
      </select>
      <label htmlFor="checkbox">
        <input  className="p-0.5 rounded-md mr-2" id="checkbox" type="checkbox" placeholder="Rede secreta" name="hiddenSsid"/>
        {t("secretNetwork")}
      </label>
    </form>
  );
};

export default WifiForm;