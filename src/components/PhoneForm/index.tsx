import { FormEvent, useEffect, useState } from "react";
import ddiObj from "../../helpers/ddi.json";
import Image from "next/image";

interface PhoneFormProps {
  setValue: (value: string) => void;
}

interface FormValue {
  ddi: string;
  phone: string;
}

const formatText = ({
  ddi,
  phone
}: FormValue) => `TEL:+${ddi}${phone}`;

const PhoneForm = ({
  setValue
}: PhoneFormProps) => {
  const [formValue, setFormValue] = useState({
    ddi: "",
    phone: ""
  } as FormValue);

  const onChange = (e: FormEvent<HTMLFormElement>) => {
    const element: any = e.target

    setFormValue(value => ({
      ...value,
      [element.name]: element.value
    }))
  };

  useEffect(() => {
    setValue(formatText(formValue));
  }, [setValue, formValue]);

  const mapDdi = () => {
    return ddiObj.ddi.map(item => (
      <option value={item.ddi}>
        {item.pais}
      </option>
    ));
  }

  return (
    <form className="text-zinc-600 flex flex-col w-full gap-3" onChange={onChange} onSubmit={e => e.preventDefault()}>
      <input type="number" placeholder="Telefone" name="phone" className="p-0.5 rounded-md"/>
      <select name="ddi" className="p-0.5 rounded-md">
        {mapDdi()}
      </select>
    </form>
  );
};

export default PhoneForm;