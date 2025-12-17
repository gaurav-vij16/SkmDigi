import localFont from "next/font/local";

export const masvis = localFont({
  src: [
    {
      path: "../../public/fonts/masvis/Masvis.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/masvis/Masvis Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-masvis",
  display: "swap",
});
