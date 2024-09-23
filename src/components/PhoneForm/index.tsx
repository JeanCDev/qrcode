import { FormEvent, useEffect, useState } from "react";
import ddiObj from "../../helpers/ddi.json";

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
        <img src={item.img} alt={item.pais}/>
        {item.pais}
      </option>
    ));
  }

  return (
    <form className="flex flex-col w-full gap-3" onChange={onChange}>
      <input type="number" placeholder="Assunto" name="phone"/>
      <select name="ddi">
        {mapDdi()}
      </select>
    </form>
  );
};

export default PhoneForm;