import { AddonPortClient } from "@addonport/sdk";
import {
  ArrowRight,
  Cable,
  Check,
  CircleAlert,
  Copy,
  Download,
  ExternalLink,
  FileCheck2,
  LoaderCircle,
  MonitorDown,
  PackageCheck,
  Power,
  Puzzle,
  RefreshCcw,
  RotateCcw,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";

const API_BASE_URL =
  import.meta.env.VITE_ADDONPORT_API_URL ||
  (import.meta.env.DEV ? "http://localhost:8787" : "https://connect.addonport.dev");
const RELEASE_URL = "https://github.com/AddonPort/faceit/releases/tag/dev-latest";
const REPOSITORY_URL = "https://github.com/AddonPort";
const ISSUE_URL = "https://github.com/AddonPort/faceit/issues/new?template=extension.yml";

export function App() {
  return (
    <div className="app-shell">
      <Header />
      <Routes>
        <Route path="/" element={<InstallPage />} />
        <Route path="/install" element={<InstallPage />} />
        <Route path="/developers" element={<DeveloperPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="topbar">
      <Link className="brand" to="/" aria-label="AddonPort home">
        <span className="brand-mark">
          <Cable aria-hidden="true" />
        </span>
        <span>AddonPort</span>
        <span className="brand-context">for FACEIT</span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end>
          Install
        </NavLink>
        <NavLink to="/developers">Developers</NavLink>
      </nav>
      <a
        className="icon-button"
        href={REPOSITORY_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Open source on GitHub"
        title="GitHub"
      >
        <GitHubMark />
      </a>
    </header>
  );
}

function GitHubMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .7a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C16.9 4.8 18 5 18 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.8 5.4-5.5 5.7.4.4.8 1.1.8 2.1v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function InstallPage() {
  return (
    <main>
      <section className="install-hero page">
        <div className="install-copy">
          <p className="eyebrow">Windows adapter</p>
          <h1>AddonPort for FACEIT</h1>
          <p className="lede">
            Install and manage compatible Chrome extensions inside the FACEIT desktop client.
          </p>
          <div className="hero-actions">
            <a
              className="button primary-button"
              href={RELEASE_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Download aria-hidden="true" />
              Download beta
            </a>
            <a className="button secondary-button" href="addonport://open">
              <Power aria-hidden="true" />
              Open AddonPort
            </a>
          </div>
          <ul className="requirements" aria-label="System requirements">
            <li>Windows 10/11 x64</li>
            <li>Current-user install</li>
            <li>No administrator access</li>
          </ul>
          <p className="beta-note">
            <CircleAlert aria-hidden="true" />
            Unsigned public beta. Windows may show an unknown-publisher warning.
          </p>
        </div>

        <figure className="product-preview">
          <img
            src="/images/addonport-manager.png"
            alt="AddonPort extension manager open in the FACEIT desktop client"
            width="1280"
            height="800"
          />
          <figcaption>Manage extensions without leaving FACEIT.</figcaption>
        </figure>
      </section>

      <section className="section-band" id="install">
        <div className="page section-layout">
          <header className="section-heading">
            <p className="eyebrow">Install</p>
            <h2>Three steps, then launch FACEIT normally.</h2>
            <p>
              The installer patches your existing FACEIT client. It does not install a second copy.
            </p>
          </header>
          <ol className="step-list">
            <li>
              <span className="step-number">1</span>
              <div>
                <h3>Close FACEIT</h3>
                <p>Exit the desktop client before Setup changes its Electron package.</p>
              </div>
            </li>
            <li>
              <span className="step-number">2</span>
              <div>
                <h3>Run Setup</h3>
                <p>
                  Download <code>AddonPort-for-FACEIT-Setup-*-x64.exe</code> and select{" "}
                  <strong>Install</strong>.
                </p>
              </div>
            </li>
            <li>
              <span className="step-number">3</span>
              <div>
                <h3>Open AddonPort</h3>
                <p>Start FACEIT and use AddonPort at the bottom of its right sidebar.</p>
              </div>
            </li>
          </ol>
          <div className="verification-note">
            <FileCheck2 aria-hidden="true" />
            <div>
              <strong>Verify the beta before running it.</strong>
              <span>
                Each release includes a matching <code>.sha256</code> checksum file.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="page check-layout">
        <div className="check-copy">
          <p className="eyebrow">Connection check</p>
          <h2>Already installed?</h2>
          <p>
            Check the complete handoff from this page. FACEIT opens, AddonPort claims the session,
            and the result returns here.
          </p>
          <ClientCheck />
        </div>
        <ul className="operation-list" aria-label="Setup maintenance options">
          <OperationRow
            icon={<RefreshCcw aria-hidden="true" />}
            title="Update"
            description="A newer Setup updates the adapter and preserves extensions and settings."
          />
          <OperationRow
            icon={<Wrench aria-hidden="true" />}
            title="Repair"
            description="The same Setup reapplies the patch when FACEIT replaced its app package."
          />
          <OperationRow
            icon={<RotateCcw aria-hidden="true" />}
            title="Restore FACEIT"
            description="Restores the verified backup and removes AddonPort protocol registration."
          />
        </ul>
      </section>

      <section className="section-band support-band">
        <div className="page support-grid">
          <div>
            <p className="eyebrow">Compatibility</p>
            <h2>Know the beta boundary.</h2>
            <p>
              Verified with FACEIT 2.9.0 and Electron 43.4.0. Manifest V2 and V3 support depends on
              the Chrome APIs each extension uses.
            </p>
          </div>
          <dl className="support-facts">
            <div>
              <dt>Supported now</dt>
              <dd>
                Content scripts, action popups, extension pages, runtime, local storage and
                local-backed sync.
              </dd>
            </div>
            <div>
              <dt>May not work</dt>
              <dd>
                Chrome-account services, native messaging, or APIs that require a full browser
                profile.
              </dd>
            </div>
            <div>
              <dt>Updates</dt>
              <dd>
                No resident service. FACEIT updates are handled while the client runs; otherwise use
                Repair.
              </dd>
            </div>
          </dl>
          <a className="text-link" href={ISSUE_URL} target="_blank" rel="noreferrer">
            Report an extension issue <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}

function OperationRow({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <li className="operation-row">
      <span className="operation-icon">{icon}</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}

function ClientCheck() {
  const [status, setStatus] = useState<"idle" | "waiting" | "found" | "unavailable">("idle");
  const client = useMemo(
    () =>
      new AddonPortClient({
        apiBaseUrl: API_BASE_URL,
        client: { name: "addonport-site", version: "0.1.0" },
      }),
    [],
  );

  const check = async () => {
    setStatus("waiting");
    try {
      const session = await client.prepare({ action: "open" });
      session.open();
      const result = await session.wait({ timeoutMs: 12_000 });
      setStatus(result.state === "completed" ? "found" : "unavailable");
    } catch {
      setStatus("unavailable");
    }
  };

  return (
    <div className={`client-check ${status}`}>
      <button type="button" onClick={() => void check()} disabled={status === "waiting"}>
        {status === "waiting" ? <LoaderCircle className="spin" aria-hidden="true" /> : null}
        {status === "found" ? <ShieldCheck aria-hidden="true" /> : null}
        {status === "unavailable" ? <CircleAlert aria-hidden="true" /> : null}
        {status === "idle" ? <Cable aria-hidden="true" /> : null}
        {status === "waiting"
          ? "Waiting for FACEIT"
          : status === "found"
            ? "AddonPort opened"
            : status === "unavailable"
              ? "Check again"
              : "Check installation"}
      </button>
      <p aria-live="polite">
        {status === "idle" ? "This check opens FACEIT." : null}
        {status === "waiting" ? "Approve the browser prompt if it appears." : null}
        {status === "found" ? "The native adapter responded successfully." : null}
        {status === "unavailable" ? "No adapter response was received within 12 seconds." : null}
      </p>
      {status === "unavailable" ? (
        <a href={RELEASE_URL} target="_blank" rel="noreferrer">
          Download Setup <ExternalLink aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

type Framework = "elements" | "javascript" | "react" | "vue";

const INTEGRATION_SNIPPETS: Record<Framework, string> = {
  elements: [
    "# Public npm release pending",
    "npm install @addonport/sdk",
    "",
    'import "@addonport/sdk/elements";',
    "",
    "<addonport-install-button",
    '  target="abcdefghijklmnopabcdefghijklmnop"',
    '  api-base-url="https://connect.addonport.dev"',
    "></addonport-install-button>",
  ].join("\n"),
  javascript: [
    "# Public npm release pending",
    "npm install @addonport/sdk",
    "",
    'import { AddonPortClient } from "@addonport/sdk";',
    "",
    "const client = new AddonPortClient({",
    '  apiBaseUrl: "https://connect.addonport.dev",',
    '  client: { name: "extension-site", version: "1.0.0" },',
    "});",
    "",
    "const result = await client.run({",
    '  action: "install",',
    '  target: "abcdefghijklmnopabcdefghijklmnop",',
    "});",
  ].join("\n"),
  react: [
    "# Public npm release pending",
    "npm install @addonport/sdk",
    "",
    'import { AddonPortInstallButton } from "@addonport/sdk/react";',
    "",
    "<AddonPortInstallButton",
    '  target="abcdefghijklmnopabcdefghijklmnop"',
    "  onStatus={(session) => setStatus(session.state)}",
    "  onComplete={() => setInstalled(true)}",
    "/>",
  ].join("\n"),
  vue: [
    "# Public npm release pending",
    "npm install @addonport/sdk",
    "",
    "<script setup>",
    'import { AddonPortInstallButton } from "@addonport/sdk/vue";',
    "</script>",
    "",
    "<template>",
    "  <AddonPortInstallButton",
    '    target="abcdefghijklmnopabcdefghijklmnop"',
    '    @status="session => status = session.state"',
    '    @complete="installed = true"',
    "  />",
    "</template>",
  ].join("\n"),
};

function DeveloperPage() {
  const [framework, setFramework] = useState<Framework>("elements");
  return (
    <main className="developer-page">
      <section className="page developer-intro">
        <div>
          <p className="eyebrow">For extension developers</p>
          <h1>Add one native install action.</h1>
          <p className="lede">
            AddonPort connects an extension website to the FACEIT adapter with explicit user
            confirmation and a result channel back to the page.
          </p>
        </div>
        <div className="developer-principles">
          <span>
            <ShieldCheck aria-hidden="true" /> User-confirmed install
          </span>
          <span>
            <Power aria-hidden="true" /> No resident local service
          </span>
          <span>
            <PackageCheck aria-hidden="true" /> Chrome Web Store IDs
          </span>
        </div>
      </section>

      <section className="section-band">
        <div className="page sdk-layout">
          <header className="section-heading sdk-heading">
            <p className="eyebrow">Website SDK</p>
            <h2>Choose the smallest integration that fits.</h2>
            <p>
              Use the drop-in button or bind session states to your own interface. Replace the
              example target with the 32-character Chrome extension ID.
            </p>
          </header>
          <div className="package-notice">
            <CircleAlert aria-hidden="true" />
            <div>
              <strong>Public npm release pending.</strong>
              <span>The examples document the prepared 0.1 API; the package is not live yet.</span>
            </div>
          </div>
          <div className="framework-tabs" role="tablist" aria-label="Integration framework">
            {(["elements", "javascript", "react", "vue"] as const).map((item) => (
              <button
                type="button"
                role="tab"
                aria-selected={framework === item}
                className={framework === item ? "active" : ""}
                onClick={() => setFramework(item)}
                key={item}
              >
                {item === "elements"
                  ? "Web Component"
                  : item === "javascript"
                    ? "JavaScript"
                    : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          <CodeBlock label={`${framework} integration`} code={INTEGRATION_SNIPPETS[framework]} />
          <ul className="package-list" aria-label="AddonPort packages">
            <PackageRow name="@addonport/sdk" description="Framework-neutral session client" />
            <PackageRow name="@addonport/sdk/elements" description="Drop-in install button" />
            <PackageRow name="@addonport/sdk/react" description="Typed React wrapper" />
            <PackageRow name="@addonport/sdk/vue" description="Vue 3 component" />
          </ul>
        </div>
      </section>

      <section className="page developer-reference">
        <header className="section-heading">
          <p className="eyebrow">Protocol</p>
          <h2>Static links for simple handoffs.</h2>
          <p>
            Use static links only when the caller does not need a result. Launch them from a user
            action and keep a normal Setup link nearby.
          </p>
        </header>
        <div className="protocol-grid">
          <CodeBlock
            label="Deep links"
            code={[
              "addonport://open",
              "addonport://install/<chrome-extension-id>",
              "addonport://launch/<chrome-extension-id>",
            ].join("\n")}
          />
          <div className="protocol-rules">
            <ReferenceRow
              icon={<Download aria-hidden="true" />}
              title="install"
              description="Always opens an in-client confirmation before download."
            />
            <ReferenceRow
              icon={<Puzzle aria-hidden="true" />}
              title="launch"
              description="Opens the installed extension action in the FACEIT client."
            />
            <ReferenceRow
              icon={<Cable aria-hidden="true" />}
              title="connect"
              description="Reserved for short-lived SDK sessions; do not construct it manually."
            />
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="page native-layout">
          <div className="section-heading">
            <p className="eyebrow">Native Windows apps</p>
            <h2>Read the current-user registry key.</h2>
            <p>
              Native apps can detect the adapter without launching FACEIT. Check ProtocolVersion
              before relying on connect sessions.
            </p>
          </div>
          <CodeBlock
            label="Windows Registry"
            code={[
              "HKCU\\Software\\AddonPort\\FACEIT",
              "  DisplayVersion    REG_SZ  <adapter version>",
              "  InstallLocation   REG_SZ  <payload directory>",
              "  Protocol          REG_SZ  addonport",
              "  ProtocolVersion   REG_SZ  2",
            ].join("\n")}
          />
          <div className="trust-note">
            <CircleAlert aria-hidden="true" />
            <p>
              A completed session is a user-experience signal, not device attestation. Do not use it
              for authentication, authorization, or anti-abuse decisions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function PackageRow({ name, description }: { name: string; description: string }) {
  return (
    <li className="package-row">
      <code>{name}</code>
      <span>{description}</span>
    </li>
  );
}

function ReferenceRow({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="reference-row">
      <span>{icon}</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function CodeBlock({ label, code }: { label: string; code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1_600);
  };

  return (
    <div className="code-panel">
      <div className="code-panel-title">
        <span>
          <Terminal aria-hidden="true" /> {label}
        </span>
        <button type="button" onClick={() => void copy()} aria-label={`Copy ${label}`} title="Copy">
          {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function NotFound() {
  return (
    <main className="page not-found">
      <MonitorDown aria-hidden="true" />
      <h1>Page not found</h1>
      <Link to="/">
        Open installation guide <ArrowRight aria-hidden="true" />
      </Link>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <span className="footer-brand">
          <Cable aria-hidden="true" /> AddonPort
        </span>
        <span>Protocol and SDK: MIT. FACEIT adapter: GPL-3.0.</span>
      </div>
      <span>Unofficial and not affiliated with or endorsed by FACEIT.</span>
      <a href={REPOSITORY_URL} target="_blank" rel="noreferrer">
        Source <ExternalLink aria-hidden="true" />
      </a>
    </footer>
  );
}
