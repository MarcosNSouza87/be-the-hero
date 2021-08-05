import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export default function Input(props: InputProps) {
  return <InputContainer {...props} />;
}
