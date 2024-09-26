import { useTranslation } from "react-i18next";

interface SelectionProps {
  select: (value: string) => void
}

const Selection = ({
  select
}: SelectionProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-6 mb-8">
      <button onClick={select.bind(null, 'text')}>{t('textButton')}</button>
      <button onClick={select.bind(null, 'vcard')}>{t('vcardButton')}</button>
      <button onClick={select.bind(null, 'wifi')}>{t('wifiButton')}</button>
      <button onClick={select.bind(null, 'email')}>{t('emailButton')}</button>
      <button onClick={select.bind(null, 'phone')}>{t('phoneButton')}</button>
      <button onClick={select.bind(null, 'whatsapp')}>{t('whatsAppButton')}</button>
    </div>
  );
};

export default Selection;