"use client";

import {
  ArrowRight,
  Check,
  CircleAlert,
  Copy,
  Download,
  ExternalLink,
  PackageCheck,
  Puzzle,
  ShieldCheck,
  Terminal,
} from "lucide-react";
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
          <p className="eyebrow">Windows development preview</p>
          <h1>AddonPort for FACEIT</h1>
          <p className="lede">
            Add compatible Chrome extensions to the FACEIT desktop client, then launch and manage
            them from its right sidebar.
          </p>
          <div className="hero-actions">
            <a className="button primary-button" href={DOWNLOAD_URL}>
              <Download aria-hidden="true" />
              Download Setup
            </a>
            <a className="release-link" href={RELEASE_URL} target="_blank" rel="noreferrer">
              Release notes and checksum <ExternalLink aria-hidden="true" />
            </a>
          </div>
          <p className="download-meta">
            Windows 10/11 x64 | Official FACEIT desktop client required | No administrator rights
            required
          </p>
          <div className="build-note">
            <CircleAlert aria-hidden="true" />
            <p>
              <strong>Current download: mutable development build.</strong>
              <span>
                It is unsigned, so Windows may show an unknown-publisher warning. Verify the SHA-256
                checksum before running it.
              </span>
            </p>
          </div>
        </div>

        <div className="hero-summary">
          <p className="eyebrow">Inside FACEIT</p>
          <dl className="hero-facts">
            <FactRow
              term="Browse"
              description="Start with catalog entries that include compatibility metadata."
            />
            <FactRow
              term="Add"
              description="Paste any valid Chrome Web Store URL or 32-character extension ID."
            />
            <FactRow
              term="Control"
              description="Launch actions, enable, reload, configure, create shortcuts, or remove."
            />
          </dl>
        </div>
      </section>

      <section className="section-band" id="inside-faceit">
        <div className="page section-layout">
          <header className="section-heading">
            <p className="eyebrow">Use</p>
            <h2>The extension lifecycle stays in one manager.</h2>
            <p>
              Open AddonPort at the bottom of FACEIT's right sidebar. It shows the adapter version
              and the state of every installed extension.
            </p>
          </header>
          <div>
            <dl className="workflow-list">
              <FactRow
                term="Extensions"
                description="Open actions and options, enable or disable, reload, create a desktop shortcut, or remove."
              />
              <FactRow
                term="Add"
                description="Browse the bundled catalog or install manually from the Chrome Web Store."
              />
              <FactRow
                term="Settings"
                description="Copy diagnostics, open the data folder, manage shortcuts, or load an unpacked folder for development."
              />
            </dl>
            <p className="section-note">
              Action popups stay inside the FACEIT window. Full options pages open separately, and
              some content-script changes require a FACEIT page reload.
            </p>
          </div>
        </div>
      </section>

      <section className="page install-layout" id="install">
        <header className="section-heading">
          <p className="eyebrow">Install</p>
          <h2>Patch the FACEIT client you already use.</h2>
          <p>
            Setup does not install a second client, and AddonPort has no separate account or login.
            Once it finishes, launch FACEIT normally.
          </p>
        </header>
        <div>
          <ol className="step-list">
            <li>
              <span className="step-number">1</span>
              <div>
                <h3>Prepare FACEIT</h3>
                <p>Install the official desktop client for this Windows account, then close it.</p>
              </div>
            </li>
            <li>
              <span className="step-number">2</span>
              <div>
                <h3>Run Setup</h3>
                <p>
                  Open <code>AddonPort-for-FACEIT-Setup-x64.exe</code> and select{" "}
                  <strong>Install</strong>.
                </p>
              </div>
            </li>
            <li>
              <span className="step-number">3</span>
              <div>
                <h3>Open AddonPort</h3>
                <p>Start FACEIT and select AddonPort at the bottom of its right sidebar.</p>
              </div>
            </li>
          </ol>
          <p className="section-note">
            A newer Setup offers <strong>Update</strong>; the same version offers{" "}
            <strong>Repair</strong>. Both preserve installed extensions and settings.
          </p>
        </div>
      </section>

      <section className="section-band support-band">
        <div className="page support-grid">
          <div>
            <p className="eyebrow">Compatibility</p>
            <h2>Installable does not mean fully compatible.</h2>
            <p>
              AddonPort is verified with FACEIT 2.9.0 and Electron 43.4.0. Manifest V2 and V3
              behavior still depends on the Chrome APIs each extension uses.
            </p>
          </div>
          <dl className="support-facts">
            <FactRow
              term="Catalog"
              description="Repeek and FACEIT Forecast are marked tested; PeekStats is experimental."
            />
            <FactRow
              term="Manual"
              description="Any valid Web Store ID can be installed, but entries outside the catalog are not reviewed."
            />
            <FactRow
              term="Supported"
              description="Content scripts, action popups, extension pages, runtime, local storage, and local-backed sync."
            />
            <FactRow
              term="Unavailable"
              description="Chrome-account services, native messaging, and APIs that require a full browser profile."
            />
          </dl>
          <a className="text-link" href={ISSUE_URL} target="_blank" rel="noreferrer">
            Report an extension issue <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="page trust-layout">
        <header className="section-heading">
          <p className="eyebrow">Scope and recovery</p>
          <h2>Know what changes and how to undo it.</h2>
          <p>
            AddonPort modifies FACEIT's Electron web-client package only. It does not touch
            Anti-Cheat, drivers, gameplay processes, the native overlay, or enforcement systems.
          </p>
        </header>
        <dl className="trust-facts">
          <FactRow
            term="Packages"
            description="Managed extension packages download only from the Chrome Web Store; local folders are development-only."
          />
          <FactRow
            term="Access"
            description="Loaded extensions receive host access only for supported FACEIT origins."
          />
          <FactRow
            term="Backup"
            description="Setup records a SHA-256 hash and keeps the original app.asar before its first write."
          />
          <FactRow
            term="Updates"
            description="Updates downloaded while FACEIT runs are patched before restart; otherwise run Repair."
          />
          <FactRow
            term="Restore"
            description="Restore FACEIT verifies the backup, removes AddonPort integration, and keeps extension data."
          />
          <FactRow
            term="Background"
            description="No resident service, watcher, or launcher runs while FACEIT is closed."
          />
        </dl>
      </section>
    </main>
  );
}

function FactRow({ term, description }: { term: string; description: string }) {
  return (
    <div>
      <dt>{term}</dt>
      <dd>{description}</dd>
    </div>
  );
}

const EXTENSION_ID = "abcdefghijklmnopabcdefghijklmnop";
const DIRECT_LINK_SNIPPET = [
  `<a href="addonport://install/${EXTENSION_ID}">`,
  "  Install for FACEIT with AddonPort",
  "</a>",
  '<p>Didn\'t open? <a href="https://addonport.dev/">Install AddonPort</a></p>',
].join("\n");

const SDK_SNIPPET = [
  'import { AddonPortClient } from "@addonport/sdk";',
  "",
  "const client = new AddonPortClient({",
  '  apiBaseUrl: "https://your-connect-endpoint.example",',
  '  client: { name: "extension-site", version: "1.0.0" },',
  "});",
  "",
  "const result = await client.run({",
  '  action: "install",',
  `  target: "${EXTENSION_ID}",`,
  "});",
].join("\n");

export function DeveloperPage() {
  return (
    <main className="developer-page">
      <section className="page developer-intro">
        <div>
          <p className="eyebrow">For extension owners</p>
          <h1>Give users a direct FACEIT install.</h1>
          <p className="lede">
            AddonPort accepts any valid Chrome Web Store extension ID. A catalog listing, custom
            package, backend, or SDK is not required for a basic install link. No public
            self-service catalog submission is available yet.
          </p>
        </div>
        <div className="developer-principles">
          <span>
            <ShieldCheck aria-hidden="true" /> Confirmation before every install
          </span>
          <span>
            <PackageCheck aria-hidden="true" /> Chrome Web Store packages only
          </span>
          <span>
            <Puzzle aria-hidden="true" /> Catalog metadata is optional
          </span>
        </div>
      </section>

      <section className="section-band">
        <div className="page sdk-layout">
          <header className="section-heading sdk-heading">
            <p className="eyebrow">Available now</p>
            <h2>Use one direct link and keep the fallback visible.</h2>
            <p>
              Replace the example target with your 32-character extension ID. Open the link only
              after a user action; browsers may show their own protocol confirmation.
            </p>
          </header>
          <div className="package-notice positive-notice">
            <ShieldCheck aria-hidden="true" />
            <div>
              <strong>The user reviews the request inside FACEIT before download.</strong>
              <span>
                Direct Web Store IDs are marked as not catalog-reviewed, and the link cannot change
                the package source, permissions, or files.
              </span>
            </div>
          </div>
          <CodeBlock label="HTML" code={DIRECT_LINK_SNIPPET} />
          <ul className="package-list" aria-label="Supported FACEIT actions">
            <PackageRow
              name="addonport://install/<id>"
              description="Review and install a catalog ID or Chrome extension ID"
            />
            <PackageRow
              name="addonport://launch/<id>"
              description="Open an installed extension action"
            />
            <PackageRow name="addonport://open" description="Open the in-client manager" />
          </ul>
          <p className="section-note">
            Browser focus and timeout heuristics cannot prove that AddonPort is installed. A
            fallback may say "Didn't open?", but must not claim detection.
          </p>
          <a className="text-link protocol-doc-link" href={INTEGRATION_URL}>
            Read the complete integration contract <ExternalLink aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="page sdk-preview-layout">
        <header className="section-heading sdk-heading">
          <p className="eyebrow">SDK preview</p>
          <h2>Use a session only when the page needs an outcome.</h2>
          <p>
            The SDK can report client opened, confirmation pending, completed, rejected, failed, or
            expired. These states improve UX; they are not authentication or device attestation.
          </p>
        </header>
        <div>
          <div className="package-notice">
            <CircleAlert aria-hidden="true" />
            <div>
              <strong>This path is not a public third-party service yet.</strong>
              <span>
                The SDK is a GitHub beta, is not published to npm, and the hosted Connect endpoint
                currently accepts browser origins from AddonPort's own site only. Use direct links
                or deploy Connect with an explicit origin allowlist.
              </span>
            </div>
          </div>
          <CodeBlock label="Self-hosted session preview" code={SDK_SNIPPET} />
          <ul className="package-list" aria-label="SDK entry points">
            <PackageRow name="@addonport/sdk" description="Framework-neutral session client" />
            <PackageRow
              name="@addonport/sdk/protocol"
              description="Versioned intents, states, validation, and deep links"
            />
            <PackageRow name="@addonport/sdk/elements" description="Drop-in custom element" />
            <PackageRow name="@addonport/sdk/react" description="React wrapper" />
            <PackageRow name="@addonport/sdk/vue" description="Vue 3 wrapper" />
          </ul>
          <a
            className="text-link protocol-doc-link"
            href={SDK_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open the SDK repository <ExternalLink aria-hidden="true" />
          </a>
        </div>
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
              This registry contract is for native Windows applications. Browser pages cannot read
              it and should use a direct link until the hosted SDK path is opened to third parties.
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
