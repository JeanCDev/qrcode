import { FormEvent, useEffect, useState } from "react";

interface VCardFormProps {
  setValue: (value: string) => void;
}

interface FormValue {
  job: string;
  work: string;
  cell: string;
  phone: string;
  address: string;
  website: string;
  company: string;
  homeZip: string;
  lastName: string;
  homeCity: string;
  homeStat: string;
  homeState: string;
  firstName: string;
  workEmail: string;
  companyZip: string;
  homeCountry: string;
  companyCity: string;
  homeAddress: string;
  companyState: string;
  personalEmail: string;
  companyAddress: string;
  companyCountry: string;
}

const formatVCardText = ({
  job,
  work,
  cell,
  phone,
  website,
  company,
  homeZip,
  lastName,
  homeCity,
  homeState,
  firstName,
  workEmail,
  companyZip,
  homeCountry,
  companyCity,
  homeAddress,
  companyState,
  personalEmail,
  companyAddress,
  companyCountry
}: FormValue) => `BEGIN:VCARD \nVERSION:3.0
FN:${firstName} ${lastName}
N:${lastName};${firstName};;;
TEL;TYPE=CELL:${cell}
TEL;TYPE=HOME:${phone}
TEL;TYPE=WORK:${work}
ORG:${company};${companyCity}
TITLE:${job}
ADR;TYPE=WORK:;;${companyAddress};${companyCity};${companyState};${companyCity};${companyZip};${companyCountry}
ADR;TYPE=HOME:;;${homeAddress};${homeCity};${homeState};${homeCity};${homeZip};${homeCountry}
EMAIL;TYPE=WORK:${personalEmail}
EMAIL;TYPE=HOME:${workEmail}
URL:${website}
END:VCARD`;

const VCardForm = ({
  setValue
}: VCardFormProps) => {
  const [formValue, setFormValue] = useState({
    job: "",
    work: "",
    cell: "",
    phone: "",
    address: "",
    website: "",
    homeZip: "",
    company: "",
    lastName: "",
    homeCity: "",
    workEmail: "",
    homeState: "",
    firstName: "",
    companyZip: "",
    companyCity: "",
    homeAddress: "",
    homeCountry: "",
    companyState: "",
    personalEmail: "",
    companyAddress: "",
    companyCountry: "",
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
    <form className="flex flex-col flex-1 text-zinc-600 gap-3" onChange={onChange} onSubmit={e => e.preventDefault()}>
      <div className="grid grid-cols-2 gap-3">
        <input type="text" placeholder="Primeiro nome" name="firstName" className="p-0.5 rounded-md"/>
        <input type="text" placeholder="Último nome" name="lastName" className="p-0.5 rounded-md"/>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-3">
        <input type="text" placeholder="Empresa" name="company" className="p-0.5 rounded-md"/>
        <input type="text" placeholder="Trabalho" name="job" className="p-0.5 rounded-md"/>
        <input type="text" placeholder="Departamento" name="department" className="p-0.5 rounded-md"/>
      </div>

      <div className="grid grid-cols-3 mt-3 gap-3">
        <input type="text" placeholder="Endereço da empresa" name="companyAddress" className="p-0.5 rounded-md flex-1"/>
        <input type="text" placeholder="Cidade da empresa" name="companyCity" className="p-0.5 rounded-md"/>
        <input type="text" placeholder="Estado da empresa" name="companyState" className="p-0.5 rounded-md"/>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <input type="text" placeholder="País da empresa" name="companyCountry" className="p-0.5 rounded-md"/>
        <input type="text" placeholder="Cep da empresa" name="companyZip" className="p-0.5 rounded-md"/>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <input type="number" placeholder="Telefone do trabalho" name="work" className="p-0.5 rounded-md"/>
        <input type="email" placeholder="E-mail de trabalho" name="workEmail" className="p-0.5 rounded-md"/>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-3">
        <input type="text" placeholder="Endereço" name="homeAddress" className="p-0.5 rounded-md"/>
        <input type="text" placeholder="Cidade" name="homeCity" className="p-0.5 rounded-md"/>
        <input type="text" placeholder="Estado" name="homeState" className="p-0.5 rounded-md"/>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <input type="text" placeholder="País" name="homeCountry" className="p-0.5 rounded-md"/>
        <input type="text" placeholder="Cep" name="homeZip" className="p-0.5 rounded-md"/>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <input type="number" placeholder="Celular" name="cell" className="p-0.5 rounded-md"/>
        <input type="number" placeholder="Telefone" name="phone" className="p-0.5 rounded-md"/>
        <input type="email" placeholder="E-mail pessoal" name="personalEmail" className="p-0.5 rounded-md"/>
      </div>

      <input type="text" placeholder="Site" name="website" className="p-0.5 rounded-md mt-3"/>
    </form>
  );
};

export default VCardForm;