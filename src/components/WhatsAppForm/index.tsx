import { FormEvent, useEffect, useState } from "react";
import ddiObj from "../../helpers/ddi.json";

interface WhatsAppFormProps {
  setValue: (value: string) => void;
}

interface FormValue {
  ddi: string;
  phone: string;
  message: string;
}

const formatText = ({
  ddi,
  phone,
  message
}: FormValue) => `https://wa.me/${ddi}${phone}?text=${encodeURI(message)}`;

const WhatsAppForm = ({
  setValue
}: WhatsAppFormProps) => {
  const [formValue, setFormValue] = useState({
    ddi: "",
    phone: "",
    message: "",
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
      <textarea name="message" id=""></textarea>
      <select name="ddi">
        {mapDdi()}
      </select>
    </form>
  );
};

export default WhatsAppForm;