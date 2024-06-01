import { SwitchModeContext } from "@/context/SwitchMode";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function LogoImage(
  {
    // src = "/images/logo.png",
    // width = 100,
    // height = 100,
    // link = "/",
  }
) {
  const themeContext = React.useContext(SwitchModeContext);

  return (
    <Link href={"/"}>
      {themeContext?.mode === "light" ? (
        <Image src={"/images/logo.png"} alt="" width={100} height={100} />
      ) : (
        <Image
          src={"/images/logo_dark_mode.png"}
          alt=""
          width={100}
          height={100}
        />
      )}
    </Link>
  );
}

export default LogoImage;
