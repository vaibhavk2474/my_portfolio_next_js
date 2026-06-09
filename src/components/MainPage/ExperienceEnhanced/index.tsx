import TimelineSection, { TimelineItem } from "@/components/TimelineSection";

const experienceData: TimelineItem[] = [
	// 54
	{
		//16
		id: "1",
		title: "Software Developer",
		organization: "Qudasoft Pvt. Ltd.",
		url: "https://qudasoft.com/",
		location: "Pune, Maharashtra",
		startDate: "july 2024",
		endDate: "Present",
		description: [
			`Developed and maintained Salesforce-integrated customer portals and enterprise applications, 
      leveraging AWS services to deliver secure and scalable cloud solutions.`,
			`Built reusable, responsive, and user-centric interfaces using React.js, NextJs, AWS Amplify, 
      JavaScript, and modern front-end development practices.`,
			`Implemented custom Lightning Web Components (LWC), Apex-based solutions, and
      Salesforce configurations to optimize CRM workflows and business operations.`,
		],
		skills: ["React", "Next.js", "Material UI", "AWS Amplify", "JavaScript", "Salesforce", "LWC", "Apex", "Node", "AWS S3"],
	},
	{
		//16
		id: "2",
		title: "ReactJs Developer",
		organization: "Incipient Infotecth",
		url: "https://incipientinfo.tech",
		location: "Ahmedabad, Gujrat",
		startDate: "Jan 2023",
		endDate: "April 2024",
		description: [
			`Built and maintained custom web applications for global clients using React.js, 
    translating business requirements into scalable and user-friendly digital solutions.`,
			`Developed reusable UI components, integrated backend APIs, 
      and optimized application performance to deliver high-quality customer experiences.`,
		],
		skills: ["React", "TypeScript", "Material UI", "Redux", "NextJs"],
	},
	{
		//12
		id: "3",
		title: "ReactJs Developer",
		organization: "SoluLab | Blockchain Development Company",
		url: "https://www.solulab.com/",
		location: "Ahmedabad, Gujrat",
		startDate: "Nov 2021",
		endDate: "Nov 2022",
		description: [
			`Working on frontend using React and Redux`,
			`I use React functional based components using React Hooks.`,
			`Worked and bug fixed on many ICO projects such as GU coin, Enverx.`,
			`Built user-friendly interfaces for blockchain-based applications, integrating wallet connectivity and decentralized workflows using React.js.`,
		],
		skills: ["React", "JavaScript", "Web3.js/Ethers.js", "MetaMask", "Redux", "Tailwind CSS", "Bootstrap", "Rest API"],
	},
	{
		//10
		id: "4",
		title: "Web Developer",
		organization: "Pepcoding",
		location: "Noida, Uttar Pradesh",
		startDate: "Feb 2021",
		endDate: "Nov 2021",
		description: [
			`Worked on projects with web technologies like React, Redux, Nodejs,
      NoSQL(Firebase).`,
		],
	},
];
const educationData: TimelineItem[] = [
	{
		id: "1",
		title: "B-Tech(CSE)",
		organization: "CENTRAL UNIVERSITY OF HARYANA",
		location: "Mahendragarh, Haryana",
		startDate: "july 2017",
		endDate: "june 2021",
		tag: "7.7 CGPA",
	},
	{
		id: "2",
		title: "Higher Secondary Education",
		organization: "GOVT. DARBAR SEN.SEC. SCHOOL",
		location: "Sambhar Lake, Jaipur",
		startDate: "july 2015",
		endDate: "june 2016",
		tag: "82.00%",
	},
	{
		id: "3",
		title: "Secondary Education (RBSE)",
		organization: "GOVT. DARBAR SEN.SEC. SCHOOL",
		location: "Sambhar Lake, Jaipur",
		startDate: "july 2013",
		endDate: "june 2014",
		tag: "85.67%",
	},
];
export default function Experience() {
	return (
		<div id="experience">
			<TimelineSection title="Experience" subtitle="My professional journey" items={experienceData} />;
			<TimelineSection mode="education" title="Education" subtitle="My academic background" items={educationData} />;
		</div>
	);
}
