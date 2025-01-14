import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Bootstrap } from "./components/common/Bootstrap";
import Script from "next/script";
import main from "./main.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />{" "}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        ></Script>
        <Script src="https://kit.fontawesome.com/0000000000.js" crossorigin="anonymous"></Script>
      </head>

      <body>{children}</body>
    </html>
  );
}
