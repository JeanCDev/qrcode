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
      placeholder="Texto ou link"
      onChange={e => setValue(e.target.value)}
      className="text-zinc-600 min-h-12 p-2 rounded-md"
    />
  );
};

export default TextArea;