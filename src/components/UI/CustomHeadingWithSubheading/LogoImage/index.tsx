import Image from "next/image";
import Link from "next/link";
import React from "react";

function LogoImage({
  src = "/images/logo.png",
  width = 100,
  height = 100,
  link = "/",
}) {
  return (
    <Link href={link}>
      <Image src={src} alt="" width={width} height={height} />
    </Link>
  );
}

export default LogoImage;
