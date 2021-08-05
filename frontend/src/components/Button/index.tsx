import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export default function Button(props: ButtonProps) {
  return <ButtonContainer {...props} />;
}
