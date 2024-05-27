import React from "react";
import styles from "./CustomButton.module.css";

function CustomButton({
  type = "button",
  onClick = null,
  children = "custom Button",
  ...props
}) {
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
