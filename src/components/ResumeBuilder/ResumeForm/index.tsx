"use client";

import React, { useState } from "react";
import HeadingForm from "./HeadingForm";
import ContactForm from "./ContactForm";
import EducationForm from "./EducationForm";

function ResumeForm() {
  const [step, setStep] = useState(1);

  let ShowPage = null;

  switch (step) {
    case 1:
      ShowPage = <HeadingForm />;
      break;

    case 2:
      ShowPage = <ContactForm />;
      break;

    case 3:
      ShowPage = <EducationForm />;
      break;
    default:
      ShowPage = null;
      break;
  }

  return (
    <div>
      {ShowPage}

      <button
        type="button"
        onClick={() => {
          setStep((cValue) => {
            return cValue <= 1 ? 1 : cValue - 1;
          });
        }}
      >
        Prev
      </button>

      <button
        type="button"
        onClick={() => {
          setStep((cValue) => {
            return cValue + 1;
          });
        }}
      >
        Next
      </button>
    </div>
  );
}

export default ResumeForm;
