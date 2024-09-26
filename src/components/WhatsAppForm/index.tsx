import { FormEvent, useEffect, useState } from "react";
import ddiObj from "../../helpers/ddi.json";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
    <form className="text-zinc-600 flex flex-col w-full gap-3" onChange={onChange} onSubmit={e => e.preventDefault()}>
      <input type="number" placeholder={t("phoneNumber")} name="phone"  className="p-0.5 rounded-md"/>
      <textarea placeholder={t("message")} name="message" className="p-0.5 rounded-md"></textarea>
      <select name="ddi"  className="p-0.5 rounded-md">
        {mapDdi()}
      </select>
    </form>
  );
};

export default WhatsAppForm;