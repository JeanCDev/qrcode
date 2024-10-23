import { useTranslation } from "react-i18next";
import Button from "../Button";

interface SelectionProps {
  type: string;
  select: (value: string) => void
}

const buttons = [
  {id: 'text', text: 'textButton'},
  {id: 'vcard', text: 'vcardButton'},
  {id: 'wifi', text: 'wifiButton'},
  {id: 'email', text: 'emailButton'},  
  {id: 'phone', text: 'phoneButton'},
  {id: 'whatsapp', text: 'whatsAppButton'},
];

const Selection = ({
  type,
  select
}: SelectionProps) => {
  const { t } = useTranslation();

  const buttonList = () => {
    return buttons.map(button => (
      <Button
        disableMainBg
        key={button.id}
        text={t(button.text)}
        onClick={select.bind(null, button.id)}
        className={`hover:bg-zinc-600 active:bg-zinc-600 ${button.id === type ? 'bg-zinc-600' : 'bg-zinc-900'}`}
      />
    ));
  }

  return (
    <div className="flex flex-wrap gap-6 mb-8">
      {buttonList()}
    </div>
  );
};

export default Selection;