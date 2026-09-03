import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { TemplateType } from "./types";

const templates: TemplateType[] = [
	{
		id: "1",
		name: "Template 1",
		subject: "Application for React Js Developer position Vaibhav Kumar",
		body: `Dear sir/ma'am,

My name is Vaibhav Kumar. I am React/Next js developer having skills in React, Next, Redux, JavaScript and HTML/ CSS . I have worked at Incipient infotech React developer for 1.3 year. I have total experience of 3 years in same. I am looking for job change in React js. Please consider my profile if your company has job opportunity for me in React js.    

Thank you`,
	},
	{
		id: "2",
		name: "Template 2",
		subject: "Application for Frontend Developer position Vaibhav Kumar",
		body: `<p>Dear HR,</p>
        <p></p>
        <p>I hope you are doing well.</p>
        <p></p>
        <p>I am writing to express my interest in<strong> React.js</strong> or <strong>Frontend developer</strong> opportunities within your organization.</p>
        <p></p>
        <p>I have around 4.5 years of professional experience in frontend development, with strong expertise in <strong>React.js, Next.js, JavaScript, Redux Toolkit, HTML, CSS, REST APIs, AWS, Node.js, Express.js, MongoDB and Salesforce LWC</strong>.&nbsp;</p>
        <p></p>
        <p>Throughout my career, I have developed responsive, scalable, and high-performance web applications while collaborating with cross-functional teams to deliver quality solutions.</p>
        <p></p>
        <p>I have attached my resume for your review and would appreciate the opportunity to discuss how I can add value to your organization.</p>
        <p></p>
        <p>Github profile: <a rel="noopener noreferrer nofollow" href="https://github.com/vaibhavk2474" style="color:rgb(26,115,232);text-decoration:underline" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://github.com/vaibhavk2474&amp;source=gmail&amp;ust=1788459007175000&amp;usg=AOvVaw0lGoblXHrNirfdPyN-wCJp"><u>https://github.com/<wbr>vaibhavk2474</u></a></p>
        <p>Portfolio:<a rel="noopener noreferrer nofollow" href="https://my-portfolio-next-js-d78k.vercel.app/" style="color:rgb(26,115,232);text-decoration:underline" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://my-portfolio-next-js-d78k.vercel.app/&amp;source=gmail&amp;ust=1788459007175000&amp;usg=AOvVaw25zcLDRDe6XH7r05uAPxkP"><u>https://my-<wbr>portfolio-next-js-d78k.vercel.<wbr>app/</u></a></p>
        <p>LinkedIn:<br><a rel="noopener noreferrer nofollow" href="https://www.linkedin.com/in/vaibhav-k-6a90851a7" style="color:rgb(26,115,232);text-decoration:underline" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/in/vaibhav-k-6a90851a7&amp;source=gmail&amp;ust=1788459007175000&amp;usg=AOvVaw1ZTiC5FO85weH-s_T_Y3w2"><u>https://www.linkedin.com/in/<wbr>vaibhav-k-6a90851a7</u></a></p>
        <p></p>
        <p>Thank you for your time and consideration. I look forward to hearing from you.</p>
        <p>Best regards,</p>
        <p></p>
        <p>Vaibhav Kumar</p>
        <p><a rel="noopener noreferrer nofollow" href="tel:(809)%20427-0183" style="color:rgb(26,115,232);text-decoration:underline" target="_blank"><u>8094270183</u></a></p>
        `,
		filePaths: ["VAIBHAV_KUMAR_FlowCV_Resume_2026-06-09.pdf"],
	},
];
function Templates({ onTemplateClick }: { onTemplateClick: (template: TemplateType) => void }) {
	const templateButtonRef = React.useRef<HTMLButtonElement>(null);
	const templateDialogRef = React.useRef<HTMLDialogElement>(null);
	const countRef = React.useRef<number>(0);
	// const [coords, setCoords] = React.useState({ top: 0, left: 0 });

	const calculateCoords = () => {
		if (!templateButtonRef.current || !templateDialogRef.current) return;

		const buttonRect = templateButtonRef.current.getBoundingClientRect();
		const dialog = templateDialogRef.current;

		// Render or measure the dialog's dimensions
		// offsetWidth / offsetHeight or bounding rect
		const dialogWidth = dialog.offsetWidth || 240; // Fallback to CSS default width
		const dialogHeight = dialog.offsetHeight || 300; // Fallback to estimated height

		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		const gap = 6;
		const edgePadding = 12; // Minimum space from the screen edge

		// 1. HORIZONTAL POSITIONING (Left vs Right)
		let left = buttonRect.left;

		// If opening to the right would overflow the screen:
		if (left + dialogWidth > viewportWidth - edgePadding) {
			// Flip alignment to match the right edge of the button
			left = buttonRect.right - dialogWidth;
		}

		// Prevent overflowing off the left edge on very narrow mobile screens
		if (left < edgePadding) {
			left = edgePadding;
		}

		// 2. VERTICAL POSITIONING (Bottom vs Top)
		let top = buttonRect.bottom + gap;

		// If opening below would overflow the screen bottom:
		if (top + dialogHeight > viewportHeight - edgePadding) {
			// Flip and position above the button
			top = buttonRect.top - dialogHeight - gap;
		}

		// Prevent overflowing off the top edge
		if (top < edgePadding) {
			top = edgePadding;
		}

		// setCoords({ top, left });
		templateDialogRef.current.style.top = `${top}px`;
		templateDialogRef.current.style.left = `${left}px`;
	};
	const handleOpen = () => {
		templateDialogRef.current?.showModal();

		calculateCoords();
	};
	const handleClose = () => {
		templateDialogRef.current?.close();
	};

	const handleTemplateClick = (template: TemplateType) => {
		onTemplateClick(template);
		handleClose();
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, template: TemplateType) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			handleTemplateClick(template);
		}
	};

	const handleClickOutside = (e: React.MouseEvent<HTMLDialogElement>) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.target === templateDialogRef.current) {
			handleClose();
		}
	};

	useEffect(() => {
		const dialog = templateDialogRef.current;
		if (!dialog) return;

		const handleReposition = () => {
			if (templateDialogRef.current?.open) {
				// Option A: Recalculate
				calculateCoords();

				// Option B: Simply close on scroll (common dropdown behavior)
				// handleClose();
			}
		};

		const addListeners = () => {
			console.log("Adding window resize and scroll listeners for template dialog");
			window.addEventListener("resize", handleReposition);
			window.addEventListener("scroll", handleReposition, true); // capture phase to catch container scrolls
		};

		const removeListeners = () => {
			console.log("Removing window resize and scroll listeners for template dialog");
			window.removeEventListener("resize", handleReposition);
			window.removeEventListener("scroll", handleReposition, true);
		};

		addListeners();

		return () => {
			removeListeners();
		};
	}, []);

	return (
		<div className={styles["cu-relative"]}>
			<button ref={templateButtonRef} className={styles["template-btn"]} onClick={handleOpen} aria-haspopup="dialog">
				Templates
			</button>

			<dialog ref={templateDialogRef} className={styles["template-container"]} aria-label="Templates" onClick={handleClickOutside}>
				{/* <div className="template-actions">
					<span>Templates</span>
					<button type="button" onClick={handleClose} aria-label="Close templates">
						X
					</button>
				</div> */}
				<ul id="template-list" className={styles["template-list"]} role="menu" aria-label="Templates">
					{templates.map((template, index) => (
						<li key={index} tabIndex={0} role="menuitem" className={styles["template-item"]} onClick={() => handleTemplateClick(template)} onKeyDown={(e) => handleKeyDown(e, template)}>
							<span>{template.name}</span>
						</li>
					))}
				</ul>
			</dialog>
		</div>
	);
}

export default Templates;
