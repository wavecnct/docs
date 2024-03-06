import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <Image
      src="/logo.png"
      width={100}
      height={22}
      className="h-full max-h-[36px] w-auto max-w-[105px]"
      sizes="100vw"
      alt={"Wave Connect"}
    />
  ),
  docsRepositoryBase: "https://github.com/wavecnct/docs",
  darkMode: true,
  feedback: { content: null },
  logoLink: "https://wavecnct.com",
  footer: {
    component: null,
  },
};

export default config;
