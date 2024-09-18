interface TextAreaProps {
  setValue: (value: string) => void;
}

const TextArea = ({
  setValue
}: TextAreaProps) => {
  return (
    <textarea
      className="text-zinc-600"
      onChange={e => setValue(e.target.value)}
    />
  );
};

export default TextArea;