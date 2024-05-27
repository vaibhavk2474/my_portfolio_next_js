"use client";

import React, { useEffect, useState } from "react";
import styles from "./gmail.module.css";
import { CircularProgress } from "@mui/material";

const END_POINT = process.env.NEXT_PUBLIC_API_END_POINT;

interface Email {
  id: number;
  toEmail: string;
}

interface ApiState<T> {
  isLoading: boolean;
  error: Error | null;
  data: T | null;
}
function GmailBox() {
  const [apiState, setApiState] = useState<ApiState<any>>({
    isLoading: false,
    error: null,
    data: null,
  });

  const [fromEmail, setFromEmail] = useState("");
  const [toEmail, setToEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [toEmailList, setToEmailList] = useState<Email[]>([]);

  const handleAddEmail = () => {
    if (!toEmail) {
      return;
    }

    const emailObj = {
      id: new Date().getTime(),
      toEmail,
    };

    setToEmailList([emailObj, ...toEmailList]);
  };

  const handleDeleteEmail = (id: any) => {
    setToEmailList(toEmailList.filter((c) => c.id !== id));
  };
  const handleSubmit = async () => {
    setApiState((preState) => ({
      ...preState,
      isLoading: true,
      error: null,
      data: null,
    }));

    try {
      const response = await fetch(`${END_POINT}/api/mail`, {
        method: "POST",
        body: JSON.stringify({
          toEmail,
          fromEmail,
          message,
          subject,
          toEmailList: toEmailList.map((c) => c.toEmail),
        }),
      });

      const res = await response.json();

      console.log(res);

      if (!response.ok) {
        throw new Error(res.msg || "something went wrong.");
      }
      setApiState((preState) => ({
        ...preState,
        isLoading: false,
        data: res,
      }));
    } catch (error) {
      console.log(error);

      setApiState((preState) => ({
        ...preState,
        isLoading: false,
        error: error instanceof Error ? error : new Error(String(error)),
      }));
    }
  };

  useEffect(() => {
    setFromEmail("vaibhavk2474@gmail.com");
    setSubject("Application for React Js Developer position Vaibhav Kumar");
    setMessage(
      "Dear sir/ma'am,\n\n\t\t\tMy name is Vaibhav Kumar. I am React/Next js developer having skills in React, Next, Redux, JavaScript and HTML/ CSS . I have worked at Incipient infotech React developer for 1.3 year. I have total experience of 3 years in same. I am looking for job change in React js. Please consider my profile if your company has job opportunity for me in React js. \n\nThank you"
    );
  }, []);

  console.log("res apiState...", apiState);

  return (
    <div className={styles.container}>
      <div className={styles.gmail_box}>
        <h3 className={styles.heading}>New Message</h3>
        <div className={`${styles.from_box} ${styles.input_box}`}>
          <label htmlFor="from">From</label>
          <input
            type="email"
            id="from"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
          />
        </div>
        <div className={`${styles.to_box}  ${styles.input_outer_box}`}>
          <div className={styles.input_inner_box}>
            <label htmlFor="to">To</label>
            <input
              type="email"
              id="to"
              value={toEmail}
              onChange={(e) => setToEmail(e.target.value)}
            />
            <button className="btn" onClick={handleAddEmail}>
              add
            </button>
          </div>

          {toEmailList.length > 0 && (
            <div className={styles.to_email_list}>
              {toEmailList.map((c, i) => {
                return (
                  <span key={c.id} className={styles.email_name}>
                    {c.toEmail}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="10"
                      height="10"
                      viewBox="0 0 50 50"
                      onClick={() => handleDeleteEmail(c.id)}
                    >
                      <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                    </svg>
                  </span>
                );
              })}
            </div>
          )}
        </div>

        <div className={`${styles.subject_box}  ${styles.input_box}`}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className={`${styles.message_box}  ${styles.input_box}`}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows={10}
            cols={10}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.submit_box}>
          <button
            className="btn"
            onClick={apiState.isLoading ? undefined : handleSubmit}
          >
            Send{" "}
            {apiState.isLoading && (
              <CircularProgress style={{ width: "10px", height: "10px" }} />
            )}
          </button>
          {apiState.error && (
            <p className={styles.error}>Error: {apiState?.error?.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GmailBox;
