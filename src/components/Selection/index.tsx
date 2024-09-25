interface SelectionProps {
  select: (value: string) => void
}

const Selection = ({
  select
}: SelectionProps) => {
  return (
    <div className="flex flex-wrap gap-6 mb-8">
      <button onClick={select.bind(null, 'text')}>Texto</button>
      <button onClick={select.bind(null, 'vcard')}>Vcard</button>
      <button onClick={select.bind(null, 'wifi')}>Wi-fi</button>
      <button onClick={select.bind(null, 'email')}>E-mail</button>
      <button onClick={select.bind(null, 'phone')}>Phone</button>
      <button onClick={select.bind(null, 'whatsapp')}>WhatsApp</button>
    </div>
  );
};

export default Selection;