import React, { ChangeEvent } from "react";
import styles from "./styles.module.css";

interface PropsInput {
  nameInput?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
  [key: string]: any;
}

const CustomInput: React.FC<PropsInput> = ({
  type,
  value,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.custom_input}
      {...props}
    />
  );
};

export default CustomInput;
