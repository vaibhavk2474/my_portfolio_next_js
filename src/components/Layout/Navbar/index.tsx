"use client";

import React from "react";
import style from "./navbar.module.css";
import GithubIcon from "@/icons/GithubIcon";
import LinkdinIcon from "@/icons/LinkdinIcon";
import Link from "next/link";
import DrawerMenu from "./DrawerMenu";
import { GITHUB_LINK, LINKDIN_LINK, MENU_LINKS } from "@/constants";
import ThemeSwitch from "./ThemeSwitch";
import LogoImage from "../../UI/LogoImage";
import ResumeDownloadLinkBtn from "../../UI/ResumeDownloadLink";
import { usePathname } from "next/navigation";

function Navbar() {
	const pathname = usePathname();
	const isResumeBuilder = pathname.startsWith("/resume-builder");
	return (
		<header className={style.nav + " "}>
			<div className={`${style.logo} ${style.left}`}>
				{/* <LogoIcon /> */}
				<LogoImage />
			</div>
			{!isResumeBuilder && (
				<div className={style.menu}>
					<ul className={style.list}>
						{MENU_LINKS.map((cMenu, index) => (
							<li key={index} className={style.list_item}>
								<Link href={cMenu.link}>{cMenu.name}</Link>
							</li>
						))}
					</ul>
					<ul className={style.social_list}>
						<li className={style.social_list_item}>
							<ThemeSwitch />
						</li>

						<li className={`${style.social_list_item} ${style.social_links}`}>
							<a title="Github" href={GITHUB_LINK} target="_blank">
								<GithubIcon />
							</a>
						</li>
						<li className={`${style.social_list_item} ${style.social_links}`}>
							<a title="LinkedIn" href={LINKDIN_LINK} target="_blank">
								<LinkdinIcon />
							</a>
						</li>
						<li className={`${style.social_list_item}`}>
							<ResumeDownloadLinkBtn title="Resume" link={"/pdfs/VAIBHAV_KUMAR_FlowCV_Resume_2026-07-09.pdf"} target="_blank" />
						</li>
						{/* <li className={`${style.social_list_item}`}>
							<ResumeDownloadLinkBtn title="Resume Builder" link={"/resume-builder"} />
						</li> */}
					</ul>
				</div>
			)}

			{/* Responsive menu */}

			<DrawerMenu />
		</header>
	);
}

export default Navbar;
