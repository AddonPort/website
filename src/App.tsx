"use client";

import {
  ArrowRight,
  Cable,
  Check,
  CircleAlert,
  Copy,
  Download,
  ExternalLink,
  FileCheck2,
  PackageCheck,
  Power,
  Puzzle,
  RefreshCcw,
  RotateCcw,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";

const RELEASE_URL = "https://github.com/AddonPort/faceit/releases/tag/dev-latest";
const DOWNLOAD_URL =
  "https://github.com/AddonPort/faceit/releases/download/dev-latest/AddonPort-for-FACEIT-Setup-x64.exe";
const ISSUE_URL = "https://github.com/AddonPort/faceit/issues/new?template=extension.yml";
const INTEGRATION_URL = "https://github.com/AddonPort/faceit/blob/dev/docs/INTEGRATION.md";
const SDK_URL = "https://github.com/AddonPort/sdk";

export function InstallPage() {
  return (
    <main>
      <section className="install-hero page">
        <div className="install-copy">
          <p className="eyebrow">Windows public beta</p>
          <h1>AddonPort for FACEIT</h1>
          <p className="lede">
            Install and manage compatible Chrome extensions inside the FACEIT desktop client.
          </p>
          <div className="hero-actions">
            <a className="button primary-button" href={DOWNLOAD_URL}>
              <Download aria-hidden="true" />
              Download beta
            </a>
            <a className="button secondary-button" href="addonport://open">
              <Power aria-hidden="true" />
              Open in FACEIT
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
          <div className="product-preview-media">
            <Image
              src="/images/addonport-faceit-manager.png"
              alt="AddonPort extension manager open beside the FACEIT right sidebar"
              width={560}
              height={380}
              sizes="(max-width: 980px) calc(100vw - 64px), 560px"
              unoptimized
            />
          </div>
        </figure>
      </section>

      <section className="section-band" id="install">
        <div className="page section-layout">
          <header className="section-heading">
            <p className="eyebrow">Install</p>
            <h2>Three steps, then launch FACEIT normally.</h2>
            <p>Setup patches the existing FACEIT client. It does not install a second copy.</p>
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
                  Download <code>AddonPort-for-FACEIT-Setup-x64.exe</code> and select{" "}
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
                The{" "}
                <a href={RELEASE_URL} target="_blank" rel="noreferrer">
                  release page
                </a>{" "}
                includes the matching <code>.sha256</code> checksum.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="page check-layout">
        <div className="check-copy">
          <p className="eyebrow">Already installed</p>
          <h2>Open AddonPort from FACEIT.</h2>
          <p>
            Start FACEIT and select AddonPort at the bottom of the right sidebar. The protocol
            shortcut below opens the same interface when the adapter is installed.
          </p>
          <div className="direct-open">
            <a className="button primary-button" href="addonport://open">
              <Cable aria-hidden="true" />
              Open AddonPort
            </a>
            <span>Your browser may ask before opening FACEIT.</span>
          </div>
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
            description="Restores the verified backup and removes the protocol registration."
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
  icon: ReactNode;
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

type Framework = "html" | "javascript" | "react" | "vue";

const EXTENSION_ID = "abcdefghijklmnopabcdefghijklmnop";
const INTEGRATION_SNIPPETS: Record<Framework, string> = {
  html: [
    `<a href="addonport://install/${EXTENSION_ID}">`,
    "  Install with AddonPort for FACEIT",
    "</a>",
    `<a href="${RELEASE_URL}">Didn't open? Install AddonPort</a>`,
  ].join("\n"),
  javascript: [
    `const extensionId = "${EXTENSION_ID}";`,
    'const button = document.querySelector("#install-for-faceit");',
    "",
    'button.addEventListener("click", () => {',
    '  window.location.href = "addonport://install/" + extensionId;',
    "});",
  ].join("\n"),
  react: [
    "function InstallForFaceit({ extensionId }) {",
    "  return (",
    "    <button",
    '      type="button"',
    "      onClick={() => {",
    '        window.location.href = "addonport://install/" + extensionId;',
    "      }}",
    "    >",
    "      Install with AddonPort for FACEIT",
    "    </button>",
    "  );",
    "}",
  ].join("\n"),
  vue: [
    "<script setup>",
    `const extensionId = "${EXTENSION_ID}";`,
    "const install = () => {",
    '  window.location.href = "addonport://install/" + extensionId;',
    "};",
    "</script>",
    "",
    "<template>",
    '  <button type="button" @click="install">',
    "    Install with AddonPort for FACEIT",
    "  </button>",
    "</template>",
  ].join("\n"),
};

export function DeveloperPage() {
  const [framework, setFramework] = useState<Framework>("html");
  return (
    <main className="developer-page">
      <section className="page developer-intro">
        <div>
          <p className="eyebrow">For extension authors</p>
          <h1>Add an optional one-click install link.</h1>
          <p className="lede">
            AddonPort for FACEIT accepts valid Chrome Web Store extension IDs. A catalog listing or
            SDK integration is not required.
          </p>
        </div>
        <div className="developer-principles">
          <span>
            <ShieldCheck aria-hidden="true" /> User-confirmed install
          </span>
          <span>
            <PackageCheck aria-hidden="true" /> No catalog approval required
          </span>
          <span>
            <Puzzle aria-hidden="true" /> Chrome Web Store IDs
          </span>
        </div>
      </section>

      <section className="section-band">
        <div className="page sdk-layout">
          <header className="section-heading sdk-heading">
            <p className="eyebrow">Website integration</p>
            <h2>Use the native link directly.</h2>
            <p>
              Launch it only after a user action and keep a normal Setup link nearby. Replace the
              example target with your 32-character Chrome extension ID.
            </p>
          </header>
          <div className="package-notice positive-notice">
            <ShieldCheck aria-hidden="true" />
            <div>
              <strong>No SDK is required for direct FACEIT links.</strong>
              <span>
                The optional{" "}
                <a href={SDK_URL} target="_blank" rel="noreferrer">
                  SDK
                </a>{" "}
                and hosted result channel are available as a GitHub beta.
              </span>
            </div>
          </div>
          <div className="framework-tabs" role="tablist" aria-label="Integration framework">
            {(["html", "javascript", "react", "vue"] as const).map((item) => (
              <button
                type="button"
                role="tab"
                aria-selected={framework === item}
                className={framework === item ? "active" : ""}
                onClick={() => setFramework(item)}
                key={item}
              >
                {item === "html"
                  ? "HTML"
                  : item === "javascript"
                    ? "JavaScript"
                    : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          <CodeBlock label={`${framework} integration`} code={INTEGRATION_SNIPPETS[framework]} />
          <ul className="package-list" aria-label="Supported FACEIT actions">
            <PackageRow name="addonport://open" description="Open the in-client manager" />
            <PackageRow
              name="addonport://install/<id>"
              description="Review and install an extension"
            />
            <PackageRow
              name="addonport://launch/<id>"
              description="Open an installed extension action"
            />
          </ul>
        </div>
      </section>

      <section className="page developer-reference">
        <header className="section-heading">
          <p className="eyebrow">Protocol</p>
          <h2>Keep the fallback visible.</h2>
          <p>
            Browsers cannot reliably prove that a native protocol handler is installed. Do not
            launch links automatically during page load or claim that a timeout detected the app.
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
              icon={<Power aria-hidden="true" />}
              title="open"
              description="Opens the AddonPort manager without selecting an extension."
            />
          </div>
        </div>
        <a className="text-link protocol-doc-link" href={INTEGRATION_URL}>
          Read the complete integration contract <ExternalLink aria-hidden="true" />
        </a>
      </section>

      <section className="section-band">
        <div className="page native-layout">
          <div className="section-heading">
            <p className="eyebrow">Native Windows apps</p>
            <h2>Read the current-user registry key.</h2>
            <p>
              Native apps can check the installed loader version without launching FACEIT. Compare
              ProtocolVersion before relying on newer link actions.
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
              A browser timeout is only a usability hint. It is not installation detection, device
              attestation, authentication, or an anti-abuse signal.
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
  icon: ReactNode;
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
