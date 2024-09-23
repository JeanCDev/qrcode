interface TextAreaProps {
  value: string;
  setValue: (value: string) => void;
}

const TextArea = ({
  value,
  setValue
}: TextAreaProps) => {
  return (
    <textarea
      value={value}
      className="text-zinc-600"
      onChange={e => setValue(e.target.value)}
    />
  );
};

export default TextArea;