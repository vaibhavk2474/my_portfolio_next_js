import styles from "./TagGroup.module.css";

interface TagGroupProps {
	items: string[];
	title?: string;
	className?: string;
	chipClassName?: string;
	variant?: "primary" | "secondary";
}

const TagGroup = ({
	items,
	title,
	className = "",
	chipClassName = "",
	variant = "primary",
}: TagGroupProps) => {
	if (!items?.length) return null;

	return (
		<div className={`${styles.wrapper} ${className}`}>
			{title && <h3 className={styles.title}>{title}</h3>}

			<div className={styles.container}>
				{items.map((item) => (
					<div
						key={item}
						className={`${styles.chip} ${styles[variant]} ${chipClassName}`}
					>
						{item}
					</div>
				))}
			</div>
		</div>
	);
};

export default TagGroup;