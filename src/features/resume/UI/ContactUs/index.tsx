import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./contactUs.module.css";

type FormData = {
	name: string;
	email: string;
	message: string;
	subject: string;
	mobile?: string;
	company?: string;
};

type FormDataErrors = {
	name: string;
	email: string;
	message: string;
	subject: string;
	mobile?: string;
	company?: string;
};

type FormDataTouched = {
	name: boolean;
	email: boolean;
	message: boolean;
	subject: boolean;
	mobile?: boolean;
	company?: boolean;
};

const formDataRecord: Record<keyof FormData, { required: boolean }> = {
	name: { required: true },
	email: { required: true },
	message: { required: true },
	subject: { required: true },
	mobile: { required: false },
	company: { required: false },
};

const InitialValues = {
	name: "",
	email: "",
	subject: "",
	message: "",
};

function ContactUS() {
	const [formData, setFormData] = useState<FormData>({ ...InitialValues });
	const [formDataErrors, setFormDataErrors] = useState<FormDataErrors>({ ...InitialValues });
	const [formDataTouched, setFormDataTouched] = useState<FormDataTouched>();
	const [status, setStatus] = useState(""); // tracks: "LOADING", "SUCCESS", "ERROR"

	console.log("styles.errorText", styles.errorText);
	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value } as FormData);
	};

	const validate = (formDataValues: FormData) => {
		return Object.keys(formDataRecord)
			.filter((key) => {
				return !!formDataRecord[key as keyof FormData]?.required;
			})
			.reduce(
				(prevValue: FormData, key) => {
					const p = key as keyof FormData;
					if (formDataValues[p]) {
						prevValue[p] = "";
					} else {
						prevValue[p] = "This field is required.";
					}
					return prevValue;
				},
				{ ...InitialValues },
			);
	};

	const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormDataTouched(
			(prevState) =>
				({
					...prevState,
					[e.target.name]: true,
				}) as FormDataTouched,
		);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		const errors = validate(formData);
		if (Object.keys(errors).length) {
			console.log("errors", errors);

			setFormDataTouched(
				Object.keys(formDataRecord).reduce((prevValue, key) => {
					prevValue[key as keyof FormDataTouched] = true;
					return prevValue;
				}, {} as FormDataTouched),
			);
			setFormDataErrors({
				...formDataErrors,
				...errors,
			});
			return;
		}

		setStatus("LOADING");
		try {
			// Replace with your real Formspree endpoint URL
			const response = await fetch("https://formspree.io", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setStatus("SUCCESS");
				setFormData({ name: "", email: "", message: "", subject: "" }); // Reset inputs
			} else {
				setStatus("ERROR");
			}
		} catch (error) {
			setStatus("ERROR");
		}
	};

	const getAsteriskIfRequired = (property: keyof FormData) => {
		if (formDataRecord[property]?.required) {
			return <span>*</span>;
		}
		return null;
	};

	const getErrorText = (property: keyof FormData) => {
		return formDataTouched?.[property] && formDataErrors[property] && <p className={styles.errorText}>{formDataErrors[property]}</p>;
	};

	return (
		<section id="contact" className={styles.contactSection}>
			<h2>Get In Touch</h2>
			<p>Have an exciting opportunity or project? Drop me a message!</p>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(e);
				}}
				className={styles.contactForm}
			>
				<div className={styles.groupContainer}>
					<div className={styles.inputGroup}>
						<label htmlFor="name">Full Name {getAsteriskIfRequired("name")}</label>
						<input type="text" id="name" name="name" required={false} value={formData.name} onChange={handleChange} onBlur={handleBlur} placeholder="Vaibhav Kumar" />
						{getErrorText("name")}
					</div>

					<div className={styles.inputGroup}>
						<label htmlFor="email">Email {getAsteriskIfRequired("email")}</label>
						<input type="email" id="email" name="email" required={false} value={formData.email} onChange={handleChange} onBlur={handleBlur} placeholder="vaibhavk2474@gmail.com" />
						{getErrorText("email")}
					</div>
				</div>

				<div className={styles.inputGroup}>
					<label htmlFor="subject">Subject {getAsteriskIfRequired("subject")}</label>
					<input type="text" id="subject" name="subject" required={false} value={formData.subject} onChange={handleChange} onBlur={handleBlur} placeholder="Full-Stack Developer Role" />
					{getErrorText("subject")}
				</div>

				<div className={styles.inputGroup}>
					<label htmlFor="company">Company {getAsteriskIfRequired("company")}</label>
					<input type="text" id="company" name="company" required={false} value={formData.company} onChange={handleChange} onBlur={handleBlur} placeholder="Qudasost Pvt Lmt" />
					{getErrorText("company")}
				</div>

				<div className={styles.inputGroup}>
					<label htmlFor="mobile">Mobile {getAsteriskIfRequired("mobile")}</label>
					<input type="text" id="mobile" name="mobile" required={false} value={formData.mobile} maxLength={14} onChange={handleChange} onBlur={handleBlur} placeholder="+91 8094270183" />
					{getErrorText("mobile")}
				</div>

				<div className={styles.inputGroup}>
					<label htmlFor="message">Message {getAsteriskIfRequired("message")}</label>
					<textarea
						id="message"
						name="message"
						rows={5}
						required={false}
						value={formData.message}
						onChange={handleChange}
						onBlur={handleBlur}
						placeholder="Hi! I stumbled upon your portfolio and..."
					/>
					{getErrorText("message")}
				</div>

				<button type="submit" disabled={status === "LOADING"}>
					{status === "LOADING" ? "Sending..." : "Send Message"}
				</button>

				{status === "SUCCESS" && <p className={styles.successMsg}>🎉 Message sent successfully! I will reply soon.</p>}
				{status === "ERROR" && <p className={styles.errorMsg}>❌ Something went wrong. Please try again later.</p>}
			</form>
		</section>
	);
}

export default ContactUS;
