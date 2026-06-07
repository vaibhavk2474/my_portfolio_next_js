import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import styles from "./HeadingForm.module.css";
import Image from "next/image";
import { useAppDispatch } from "@/redux/redux-hooks";
import { postInfoState } from "@/redux/features/infoSlice";

const HeadingForm = () => {
  const [fullName, setFullName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const disptch = useAppDispatch();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(file);
    }
  };

  const handleSave = () => {
    disptch(
      postInfoState({
        fullName,
        description,
        designation,
        image,
      })
    );
  };

  return (
    <div className={styles.formContainer}>
      <label className={styles.label}>Full Name</label>
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className={styles.input}
      />

      <label className={styles.label}>Designation</label>
      <input
        type="text"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
        className={styles.input}
      />

      <label className={styles.label}>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.textarea}
      />

      <label className={styles.label}>Upload Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className={styles.fileInput}
      />

      {image && (
        <div className={styles.imagePreviewContainer}>
          <Image
            src={URL.createObjectURL(image)}
            alt="Uploaded"
            className={styles.imagePreview}
            width={100}
            height={100}
          />
        </div>
      )}

      <div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default HeadingForm;
