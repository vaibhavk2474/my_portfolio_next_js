"use client";

import React from "react";
import style from "./navbar.module.css";
import GithubIcon from "@/icons/GithubIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import LinkdinIcon from "@/icons/LinkdinIcon";
import Link from "next/link";
import Image from "next/image";
import DownloadIcon from "@/icons/DownloadIcon";
import DrawerMenu from "./DrawerMenu";
import { MENU_LINKS } from "@/constants";
// import LogoIcon from "@/icons/LogoIcon";

function Navbar() {
  return (
    <header className={style.nav + " "}>
      <div className={`${style.logo} ${style.left}`}>
        <Link href={"/"}>
          <Image src={"/images/logo.png"} alt="" width={100} height={100} />
        </Link>
        {/* <LogoIcon /> */}
      </div>
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
            <a href="https://github.com/vaibhavk2474" target="_blank">
              <GithubIcon />
            </a>
          </li>
          <li className={style.social_list_item}>
            <a href="https://linkdin.com/vaibhavk2474" target="_blank">
              <LinkdinIcon />
            </a>
          </li>
          <li className={style.social_list_item}>
            <Link
              className={style.download}
              href="/pdfs/Vaibhav Kumar updated Resume.pdf"
              target="_blank"
              download
            >
              Resume <DownloadIcon />
            </Link>
          </li>
        </ul>
      </div>

      {/* Responsive menu */}

      <DrawerMenu />
    </header>
  );
}

export default Navbar;
