import { FormEvent, useEffect, useState } from "react";

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
}: FormValue) => 'WIFI:T:' + encryption + ';S:' + networkName.trim() + ';P:' + password.trim() + ';H:' + (hiddenSsid ? 'TRUE' : '') + ';;';

const WifiForm = ({
  setValue
}: WifiFormProps) => {
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
    console.log(formatWifiText(formValue));
    setValue(formatWifiText(formValue));
  }, [setValue, formValue]);

  return (
    <form className="flex flex-col w-full gap-3" onChange={onChange}>
      <input type="text" placeholder="Nome da rede" name="networkName"/>
      <input type="text" placeholder="Senha" name="password"/>
      <select name="encryption">
        <option value="WPA">WPA</option>
        <option value="WEP">WEP</option>
        <option value="">Sem criptografia</option>
      </select>
      <label htmlFor="">
        <input type="checkbox" placeholder="Rede secreta" name="hiddenSsid"/>
        <span className="ml-2">Rede secreta?</span>
      </label>
    </form>
  );
};

export default WifiForm;