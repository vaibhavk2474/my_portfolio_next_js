import React from "react";
import style from "./navbar.module.css";
import GithubIcon from "@/icons/GithubIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import LinkdinIcon from "@/icons/LinkdinIcon";
import Link from "next/link";
import Image from "next/image";
import DownloadIcon from "@/icons/DownloadIcon";
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
          <li className={style.list_item}>
            <Link href={"#home"}>Home</Link>
          </li>
          <li className={style.list_item}>
            <Link href={"#about"}>About</Link>
          </li>
          <li className={style.list_item}>
            <Link href={"#experience"}>Experience</Link>
          </li>
          <li className={style.list_item}>
            <Link href={"#services"}>Services</Link>
          </li>
          <li className={style.list_item}>
            <Link href={"#projects"}>Projects</Link>
          </li>
          <li className={style.list_item}>
            <Link href={"#contact"}>Contact</Link>
          </li>
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
    </header>
  );
}

export default Navbar;
