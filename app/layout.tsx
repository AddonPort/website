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
  description: "Add, launch, and manage compatible Chrome extensions inside the FACEIT client.",
  openGraph: {
    type: "website",
    siteName: "AddonPort",
    title: "AddonPort for FACEIT",
    description: "Add, launch, and manage compatible Chrome extensions inside the FACEIT client.",
    images: [{ url: "/images/addonport-hero.png", width: 384, height: 384 }],
  },
  twitter: {
    card: "summary",
    title: "AddonPort for FACEIT",
    description: "Add, launch, and manage compatible Chrome extensions inside the FACEIT client.",
    images: ["/images/addonport-hero.png"],
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
