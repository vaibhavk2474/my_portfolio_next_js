import React from "react";
import style from "./footer.module.css";
import Link from "next/link";
import GithubIcon from "@/icons/GithubIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import LinkdinIcon from "@/icons/LinkdinIcon";
import Image from "next/image";
import LogoImage from "../UI/LogoImage";
import { GITHUB_LINK, LINKDIN_LINK } from "@/constants";

function FooterUI() {
  return (
    <footer className={style.container}>
      <div className={style.box_1}>
        <div className={style.logo}>
          <LogoImage />
        </div>
        <div className={style.menu}>
          <ul className={style.list}>
            <li className={style.list_item}>
              <a href={"tel:+91 8094270183"}>+91 8094270183</a>
            </li>
            <li className={style.list_item}>
              <a href={"mailto:vaibhavk2474@gmail.com"}>
                vaibhavk2474@gmail.com
              </a>
            </li>
          </ul>
          <ul className={style.social_list}>
            <li className={style.social_list_item}>
              <a href={GITHUB_LINK} target="_blank">
                <GithubIcon />
              </a>
            </li>

            <li className={style.social_list_item}>
              <a href={LINKDIN_LINK} target="_blank">
                <LinkdinIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.box_2}>
        <p>
          Designed and built by <span className="colored">Vaibhav K</span> with{" "}
          <span className="color-1">Love</span> &{" "}
          <span className="color-2">Coffee</span>
        </p>
      </div>
    </footer>
  );
}

export default FooterUI;
