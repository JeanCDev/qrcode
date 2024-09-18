import { FormEvent, useEffect, useState } from "react";

interface VCardFormProps {
  setValue: (value: string) => void;
}

interface FormValue {
  email: string;
  phone: string;
  address: string;
  website: string;
  company: string;
  lastName: string;
  firstName: string;
}

const formatVCardText = ({
  email,
  phone,
  address,
  website,
  company,
  lastName,
  firstName
}: FormValue) => {
  let vcard = 'BEGIN:VCARD \nVERSION:3.0\nFN:'+ firstName + " " +lastName + "\n";
  vcard += 'ORG:' + company + '\n';
  vcard += 'TEL:' + phone + '\n';
  vcard += 'ADR:' + address + '\n';
  vcard += 'EMAIL:' + email + '\n';
  vcard += 'URL:' + website + '\n';
  vcard += 'ADR:' + address + '\n';
  vcard += 'END:VCARD';

  return vcard;
};


const VCardForm = ({
  setValue
}: VCardFormProps) => {
  const [formValue, setFormValue] = useState({
    email: "",
    phone: "",
    address: "",
    website: "",
    company: "",
    lastName: "",
    firstName: ""
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
    <form className="flex flex-col w-full gap-3" onChange={onChange}>
      <input type="text" placeholder="Primeiro nome" name="firstName"/>
      <input type="text" placeholder="Último nome" name="lastName"/>
      <input type="text" placeholder="Empresa" name="company"/>
      <input type="number" placeholder="Telefone" name="phone"/>
      <input type="email" placeholder="E-mail" name="email"/>
    </form>
  );
};

export default VCardForm;