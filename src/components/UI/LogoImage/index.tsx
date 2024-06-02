import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./LogoImage.module.css";
import { ThemeContext } from "@/context/SwitchMode";

function LogoImage(
  {
    // src = "/images/logo.png",
    // width = 100,
    // height = 100,
    // link = "/",
  }
) {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Link href={"/"} className={styles.logo}>
      {themeContext?.mode === "light" ? (
        <Image src={"/images/logo.png"} alt="" width={80} height={80} />
      ) : (
        <Image
          src={"/images/logo_dark_mode.png"}
          alt=""
          width={80}
          height={80}
        />
      )}
    </Link>
  );
}

export default LogoImage;
