import type { Metadata } from "next";
import { InstallPage } from "../../src/App";

export const metadata: Metadata = {
  title: "Install for FACEIT",
};

export default function Install() {
  return <InstallPage />;
}
