import { ArrowRight, MonitorDown } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page not-found">
      <MonitorDown aria-hidden="true" />
      <h1>Page not found</h1>
      <Link href="/">
        Open installation guide <ArrowRight aria-hidden="true" />
      </Link>
    </main>
  );
}
