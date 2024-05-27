import React from "react";
import styles from "./CustomButton.module.css";

interface CustomButtonProps {
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
}
function CustomButton({
  type = "button",
  onClick = undefined,
  children = "custom Button",
  ...props
}: CustomButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.customBtn}
      {...props}
    >
      {children}
    </button>
  );
}

export default CustomButton;
