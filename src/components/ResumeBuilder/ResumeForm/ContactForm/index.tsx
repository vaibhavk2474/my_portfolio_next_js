import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import styles from "./ContactForm.module.css";
import { useAppDispatch } from "@/redux/redux-hooks";
import { postContactState } from "@/redux/features/contactSlice";

function ContactForm() {
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const disptch = useAppDispatch();

  // Function to handle key press and allow only numbers
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    if (!/[0-9]/.test(key)) {
      e.preventDefault();
    }
  };
  // Function to handle input change and prevent non-numeric characters
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      setMobileNo(value);
    }
  };

  const handleSave = () => {
    disptch(
      postContactState({
        mobileNo,
        email,
        address,
      })
    );
  };

  return (
    <div className={styles.formContainer}>
      <label className={styles.label}>Mobile No.</label>
      <input
        type="tel"
        value={mobileNo}
        onChange={handleInputChange}
        // onKeyDown={handleKeyPress}
        className={styles.input}
        inputMode="numeric"
        pattern="[0-9]{10}" // Optional: pattern to enforce a 10-digit number
        placeholder="Enter your mobile number"
      />

      <label className={styles.label}>Address</label>
      <input
        type="text"
        className={styles.input}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <label className={styles.label}>Email</label>
      <input
        type="email"
        className={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
