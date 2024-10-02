import { useTranslation } from "react-i18next";

interface TextAreaProps {
  value: string;
  setValue: (value: string) => void;
}

const TextArea = ({
  value,
  setValue
}: TextAreaProps) => {
  const { t } = useTranslation();

  return (
    <textarea
      value={value}
      placeholder={t("textOrLink")}
      onChange={e => setValue(e.target.value)}
      className="text-zinc-600 min-h-full p-2 rounded-md"
    />
  );
};

export default TextArea;