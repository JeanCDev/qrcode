import { useTranslation } from "react-i18next";
import Button from "../Button";

interface SelectionProps {
  select: (value: string) => void
}

const Selection = ({
  select
}: SelectionProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-6 mb-8">
      <Button onClick={select.bind(null, 'text')} text={t('textButton')} />
      <Button onClick={select.bind(null, 'vcard')} text={t('vcardButton')} />
      <Button onClick={select.bind(null, 'wifi')} text={t('wifiButton')} />
      <Button onClick={select.bind(null, 'email')} text={t('emailButton')} />
      <Button onClick={select.bind(null, 'phone')} text={t('phoneButton')} />
      <Button onClick={select.bind(null, 'whatsapp')} text={t('whatsAppButton')}/>
    </div>
  );
};

export default Selection;