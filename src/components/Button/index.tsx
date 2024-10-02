interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  text: string;
  disableMainBg?: boolean;
}

const Button = ({
  text,
  className,
  disableMainBg,
  ...props
}: ButtonProps) => {
  const bgColor = !disableMainBg ? 'hover:bg-zinc-600 active:bg-zinc-600 bg-zinc-900' : ''

  return (
    <button
      {...props}
      className={`rounded-md py-1 px-5 ${bgColor} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;