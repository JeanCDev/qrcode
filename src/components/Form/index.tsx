import TextArea from "../TextArea";
import VCardForm from "../VCardForm";

interface FormProps {
  type: string;
  setValue: (value: string) => void;
};

const Form = ({type, ...props}: FormProps) => {
  const ComponentList: any = {
    'text': TextArea,
    'vcard': VCardForm,
  };

  const Component = ComponentList[type];

  return (
    <Component {...props}/>
  );
};

export default Form;