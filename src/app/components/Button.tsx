"use client";

interface Props {
  disabled?: boolean;
  title: string;
  onClick?: () => void;
  styles?: string;
  type?: "button" | "submit";
}

const Button = ({ disabled, title, onClick, styles, type }: Props) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`py-3 px-6 ${styles}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
