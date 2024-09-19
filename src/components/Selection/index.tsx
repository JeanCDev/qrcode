interface SelectionProps {
  select: (value: string) => void
}

const Selection = ({
  select
}: SelectionProps) => {
  return (
    <div className="flex gap-6">
      <button onClick={select.bind(null, 'text')}>Texto</button>
      <button onClick={select.bind(null, 'vcard')}>Vcard</button>
      <button onClick={select.bind(null, 'wifi')}>Wi-fi</button>
    </div>
  );
};

export default Selection;