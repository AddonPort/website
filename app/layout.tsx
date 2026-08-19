import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer, Header } from "../src/SiteChrome";
import "../src/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://addonport.dev"),
  title: {
    default: "AddonPort for FACEIT",
    template: "%s | AddonPort",
  },
  description: "Install and manage compatible Chrome extensions inside the FACEIT desktop client.",
  openGraph: {
    type: "website",
    siteName: "AddonPort",
    title: "AddonPort for FACEIT",
    description:
      "Install and manage compatible Chrome extensions inside the FACEIT desktop client.",
    images: [{ url: "/images/addonport-banner.png", width: 1983, height: 793 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AddonPort for FACEIT",
    description:
      "Install and manage compatible Chrome extensions inside the FACEIT desktop client.",
    images: ["/images/addonport-banner.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <div className="app-shell">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
