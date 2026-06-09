import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import styles from "./TimelineSection.module.css";
import CustomHeadingWithSubheading from "../UI/CustomHeadingWithSubheading";

export interface TimelineItem {
	id: string;
	title: string;
	organization: string;
	location?: string;
	startDate: string;
	endDate: string;
	description?: string[];
	skills?: string[];
	url?: string;
	tag?: string;
}

interface TimelineSectionProps {
	title: string;
	subtitle?: string;
	items: TimelineItem[];
	mode?: "experience" | "education";
}

export default function TimelineSection({ mode, title, subtitle, items }: TimelineSectionProps) {
	if (mode === "education") {
		return (
			<section className={styles.section}>
				<CustomHeadingWithSubheading headingText={title} subHeadingText={subtitle} />

				<div className={styles.timeline + " " + styles.middleTimeline}>
					{items.map((item, index) => (
						<div key={item.id} className={styles.timelineItem + " " + styles.middleTimelineItem}>
							<div className={styles.dot + " " + styles.middleDot} />

							{index !== items.length - 1 ? (
								<div className={styles.line + " " + styles.middleLine} />
							) : (
								<div className={styles.line + " " + styles.lineFaded + " " + styles.middleLine} />
							)}

							<div className={styles.card + " " + styles.middleCard}>
								<div className={styles.cardHeader + " " + styles.middleCardHeader}>
									<h3 className={styles.cardTitle + " " + styles.middleCardTitle}>{item.title}</h3>

									<div className={styles.companyRow}>
										{item.url ? (
											<a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.company}>
												{item.organization}
												<OpenInNewIcon
													sx={{
														fontSize: "14px",
														marginLeft: "4px",
													}}
												/>
											</a>
										) : (
											<span className={styles.company}>{item.organization}</span>
										)}
									</div>
									{item.location && <span className={styles.location}>{item.location}</span>}

									<div className={styles.date}>
										{item.startDate} - {item.endDate}
									</div>
								</div>

								<ul className={styles.description}>
									{item.description?.map((point, idx) => (
										<li key={idx}>{point}</li>
									))}
								</ul>

								{!!item.skills?.length && (
									<div className={styles.skills}>
										{item.skills.map((skill) => (
											<span key={skill} className={styles.skill}>
												{skill}
											</span>
										))}
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</section>
		);
	}
	return (
		<section className={styles.section}>
			<CustomHeadingWithSubheading headingText={title} subHeadingText={subtitle} />

			<div className={styles.timeline}>
				{items.map((item, index) => (
					<div key={item.id} className={styles.timelineItem}>
						<div className={styles.dot} />

						{index !== items.length - 1 ? <div className={styles.line} /> : <div className={styles.line + " " + styles.lineFaded} />}

						<div className={styles.card + " " + styles.middleCard}>
							<div className={styles.cardHeader}>
								<div>
									<h3 className={styles.cardTitle}>{item.title}</h3>

									<div className={styles.companyRow}>
										{item.url ? (
											<a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.company}>
												{item.organization}
												<OpenInNewIcon
													sx={{
														fontSize: "14px",
														marginLeft: "4px",
													}}
												/>
											</a>
										) : (
											<span className={styles.company}>{item.organization}</span>
										)}

										{item.location && <span className={styles.location}>• {item.location}</span>}
									</div>
								</div>

								<div className={styles.date}>
									{item.startDate} - {item.endDate}
								</div>
							</div>

							<ul className={styles.description}>
								{item.description?.map((point, idx) => (
									<li key={idx}>{point}</li>
								))}
							</ul>

							{!!item.skills?.length && (
								<div className={styles.skills}>
									{item.skills.map((skill) => (
										<span key={skill} className={styles.skill}>
											{skill}
										</span>
									))}
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
