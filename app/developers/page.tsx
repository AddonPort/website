import type { Metadata } from "next";
import { DeveloperPage } from "../../src/App";

export const metadata: Metadata = {
  title: "For extension authors",
  description: "Add optional one-click FACEIT install links for Chrome Web Store extensions.",
};

export default function Developers() {
  return <DeveloperPage />;
}
