import EmailForm from "../EmailForm";
import PhoneForm from "../PhoneForm";
import TextArea from "../TextArea";
import VCardForm from "../VCardForm";
import WhatsAppForm from "../WhatsAppForm";
import WifiForm from "../WifiForm";

interface FormProps {
  type: string;
  setValue: (value: string) => void;
};

const Form = ({type, ...props}: FormProps) => {
  const ComponentList: any = {
    'text': TextArea,
    'vcard': VCardForm,
    'wifi': WifiForm,
    'email': EmailForm,
    'phone': PhoneForm,
    'whatsapp': WhatsAppForm,
  };

  const Component = ComponentList[type];

  return (
    <Component {...props}/>
  );
};

export default Form;