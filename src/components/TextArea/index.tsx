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
      className="text-zinc-600 min-h-12 p-2 rounded-md"
      onChange={e => setValue(e.target.value)}
    />
  );
};

export default TextArea;