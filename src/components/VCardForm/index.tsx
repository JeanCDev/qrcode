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
}: FormValue) => {
  let vcard = 'BEGIN:VCARD \nVERSION:3.0\n';
  vcard += 'FN:' + firstName + " " + lastName + "\n";
  vcard += 'N:' + lastName + ';' + firstName + ';;;\n';
  vcard += 'TEL;TYPE=CELL:' + cell + '\n';
  vcard += 'TEL;TYPE=HOME:' + phone + '\n';
  vcard += 'TEL;TYPE=WORK:' + work + '\n';
  vcard += 'ORG:' + company  + ';' + companyCity + '\n';
  vcard += 'TITLE:' + job + '\n';
  vcard += 'ADR;TYPE=WORK:;;' + companyAddress + ';' + companyCity + ';' + companyState + ';' + companyCity +  + ';' + companyZip + ';' + companyCountry +'\n';
  vcard += 'ADR;TYPE=HOME:;;' + homeAddress  + ';' + homeCity + ';' + homeState + ';' + homeCity +  + ';' + homeZip + ';' + homeCountry +'\n';
  vcard += 'EMAIL;TYPE=WORK:' + personalEmail + '\n';
  vcard += 'EMAIL;TYPE=HOME:' + workEmail + '\n';
  vcard += 'URL:' + website + '\n';
  vcard += 'END:VCARD';

  return vcard;
};

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
    <form className="flex flex-col w-full gap-3" onChange={onChange}>
      <input type="text" placeholder="Primeiro nome" name="firstName"/>
      <input type="text" placeholder="Último nome" name="lastName"/>
      <input type="text" placeholder="Empresa" name="company"/>
      <input type="text" placeholder="Trabalho" name="job"/>
      <input type="text" placeholder="Departamento" name="department"/>
      <input type="text" placeholder="Endereço da empresa" name="companyAddress"/>
      <input type="text" placeholder="Cidade da empresa" name="companyCity"/>
      <input type="text" placeholder="Estado da empresa" name="companyState"/>
      <input type="text" placeholder="País da empresa" name="companyCountry"/>
      <input type="text" placeholder="Cep da empresa" name="companyZip"/>
      <input type="text" placeholder="Endereço" name="homeAddress"/>
      <input type="text" placeholder="Cidade" name="homeCity"/>
      <input type="text" placeholder="Estado" name="homeState"/>
      <input type="text" placeholder="País" name="homeCountry"/>
      <input type="text" placeholder="Cep" name="homeZip"/>
      <input type="number" placeholder="Celular" name="cell"/>
      <input type="number" placeholder="Telefone" name="phone"/>
      <input type="number" placeholder="Telefone do trabalho" name="work"/>
      <input type="email" placeholder="E-mail pessoal" name="personalEmail"/>
      <input type="email" placeholder="E-mail de trabalho" name="workEmail"/>
      <input type="text" placeholder="Site" name="website"/>
    </form>
  );
};

export default VCardForm;