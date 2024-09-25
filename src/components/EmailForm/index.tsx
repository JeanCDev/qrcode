import { FormEvent, useEffect, useState } from "react";

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
      <input type="email" placeholder="Destinatário" name="email" className="p-0.5 rounded-md"/>
      <input type="text" placeholder="Assunto" name="subject" className="p-0.5 rounded-md"/>
      <textarea placeholder="Mensagem"  name="message" id="" className="p-0.5 rounded-md"></textarea>
    </form>
  );
};

export default EmailForm;