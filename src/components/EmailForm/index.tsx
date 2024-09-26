import { FormEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface EmailFormProps {
  setValue: (value: string) => void;
}

interface FormValue {
  email: string;
  subject: string;
  message: string;
}

const formatVCardText = ({
  email,
  subject,
  message
}: FormValue) => `MATMSG:TO:${email};SUB:${subject};BODY:${message};;`;

const EmailForm = ({
  setValue
}: EmailFormProps) => {
  const { t } = useTranslation();
  const [formValue, setFormValue] = useState({
    email: "",
    subject: "",
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
    setValue(formatVCardText(formValue));
  }, [setValue, formValue]);

  return (
    <form className="text-zinc-600 flex flex-col w-full gap-3" onChange={onChange}>
      <input type="email" placeholder={t("receiverEmail")} name="email" className="p-0.5 rounded-md"/>
      <input type="text" placeholder={t("subject")} name="subject" className="p-0.5 rounded-md"/>
      <textarea placeholder={t("message")}  name="message" id="" className="p-0.5 rounded-md"></textarea>
    </form>
  );
};

export default EmailForm;