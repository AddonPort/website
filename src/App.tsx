"use client";

import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleAlert,
  Copy,
  Download,
  ExternalLink,
  Settings2,
  ShieldCheck,
  Store,
  Terminal,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { type ReactNode, useState } from "react";

const RELEASE_URL = "https://github.com/AddonPort/faceit/releases/tag/dev-latest";
const DOWNLOAD_URL =
  "https://github.com/AddonPort/faceit/releases/download/dev-latest/AddonPort-for-FACEIT-Setup-x64.exe";
const ISSUE_URL = "https://github.com/AddonPort/faceit/issues/new?template=extension.yml";
const INTEGRATION_URL = "https://github.com/AddonPort/faceit/blob/dev/docs/INTEGRATION.md";
const SDK_URL = "https://github.com/AddonPort/sdk";

export function InstallPage() {
  return (
    <main>
      <section className="product-hero">
        <Image
          className="hero-mark"
          src="/images/addonport-hero.png"
          alt=""
          width="384"
          height="384"
          priority
        />
        <div className="page hero-grid">
          <div className="hero-copy">
            <div className="release-state">
              <span aria-hidden="true" /> Windows development preview
            </div>
            <h1>Chrome extensions for FACEIT.</h1>
            <p className="hero-lede">
              AddonPort adds a compact extension manager to the FACEIT desktop client. Install,
              open, configure, and remove extensions without switching apps.
            </p>
            <div className="hero-actions">
              <a className="button primary-button" href={DOWNLOAD_URL}>
                <Download aria-hidden="true" />
                Download Setup
              </a>
              <a className="release-link" href={RELEASE_URL} target="_blank" rel="noreferrer">
                Release details <ExternalLink aria-hidden="true" />
              </a>
            </div>
            <ul className="requirements" aria-label="System requirements">
              <li>Windows 10/11 x64</li>
              <li>Official FACEIT client</li>
              <li>No admin rights required</li>
            </ul>
            <p className="preview-note">
              <CircleAlert aria-hidden="true" />
              The current build is unsigned. Windows may show an unknown-publisher warning; the
              release page includes its SHA-256 checksum.
            </p>
          </div>
        </div>
      </section>

      <section className="use-band" id="use">
        <div className="page">
          <header className="use-heading">
            <p>Inside FACEIT</p>
            <h2>One place to run and manage extensions.</h2>
            <span>
              AddonPort sits at the bottom of FACEIT&apos;s right sidebar, next to extension
              actions.
            </span>
          </header>
          <div className="capability-grid">
            <Capability
              icon={<Store aria-hidden="true" />}
              title="Add"
              description="Browse catalog metadata or paste a Chrome Web Store link or ID."
            />
            <Capability
              icon={<Zap aria-hidden="true" />}
              title="Use"
              description="Open extension actions and popups without leaving the FACEIT window."
            />
            <Capability
              icon={<Settings2 aria-hidden="true" />}
              title="Control"
              description="Configure, enable, reload, create shortcuts, or remove an extension."
            />
          </div>
          <p className="use-footnote">
            Full options pages open separately. Content-script changes may require a FACEIT page
            reload.
          </p>
          <div className="compatibility-strip">
            <span>Catalog compatibility</span>
            <div>
              <p>
                Repeek <strong className="tested">Tested</strong>
              </p>
              <p>
                FACEIT Forecast <strong className="tested">Tested</strong>
              </p>
              <p>
                PeekStats <strong className="experimental">Experimental</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page install-section" id="install">
        <header className="split-heading">
          <div>
            <p className="section-label">Setup</p>
            <h2>Install once. Keep using FACEIT normally.</h2>
          </div>
          <p>
            Setup patches the client already installed for your Windows account. It does not add a
            second FACEIT client or a separate AddonPort login.
          </p>
        </header>
        <ol className="install-steps">
          <InstallStep
            number="01"
            title="Close FACEIT"
            description="Make sure the official desktop client is installed, then close it."
          />
          <InstallStep
            number="02"
            title="Run Setup"
            description="Open the downloaded file and select Install."
          />
          <InstallStep
            number="03"
            title="Open AddonPort"
            description="Launch FACEIT and use AddonPort from the bottom of its right sidebar."
          />
        </ol>
        <p className="install-aftercare">
          Running a newer Setup updates the integration. Running the same version repairs it. Both
          keep installed extensions and settings.
        </p>
      </section>

      <section className="answers-band">
        <div className="page answers-layout">
          <header>
            <p className="section-label">Before installing</p>
            <h2>The details that matter.</h2>
            <p>Compatibility, client updates, recovery, and removal.</p>
            <a className="text-link" href={ISSUE_URL} target="_blank" rel="noreferrer">
              Report an extension issue <ArrowRight aria-hidden="true" />
            </a>
          </header>
          <div className="answer-list">
            <Answer
              question="Which extensions work?"
              answer="AddonPort supports Manifest V2 and V3 content scripts, action popups, extension pages, runtime messaging, local storage, and local-backed sync. Chrome-account services, native messaging, and APIs that require a full browser profile are unavailable. Catalog statuses reflect AddonPort's own testing of independent extensions; they do not imply endorsement or partnership. Manual Web Store entries are not catalog-reviewed."
            />
            <Answer
              question="What does Setup change?"
              answer="Only FACEIT's Electron web-client package. Setup records its SHA-256 hash and keeps the original app.asar before the first write. It does not touch Anti-Cheat, drivers, gameplay processes, the native overlay, or enforcement systems."
            />
            <Answer
              question="What happens after a FACEIT update?"
              answer="An update downloaded while FACEIT is running is patched before restart. If FACEIT updates while AddonPort is not active, run Repair from Setup."
            />
            <Answer
              question="Can I remove AddonPort?"
              answer="Yes. Restore FACEIT verifies the backup and removes the integration while keeping extension data. No AddonPort service, watcher, or launcher remains active while FACEIT is closed."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function Capability({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="capability">
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function InstallStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <li>
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function Answer({ question, answer }: { question: string; answer: string }) {
  return (
    <details>
      <summary>
        {question} <ChevronRight aria-hidden="true" />
      </summary>
      <p>{answer}</p>
    </details>
  );
}

const EXTENSION_ID = "abcdefghijklmnopabcdefghijklmnop";
const DIRECT_LINK_SNIPPET = [
  `<a href="addonport://install/${EXTENSION_ID}">`,
  "  Install for FACEIT with AddonPort",
  "</a>",
  '<p>Didn\'t open? <a href="https://addonport.dev/">Get AddonPort</a></p>',
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
    <main className="page docs-layout">
      <aside className="docs-nav" aria-label="Developer page sections">
        <span>Integration</span>
        <a href="#install-link">Install link</a>
        <a href="#actions">Actions</a>
        <a href="#sdk">SDK preview</a>
        <a href="#native">Native apps</a>
      </aside>

      <article className="docs-content">
        <header className="docs-hero">
          <p className="section-label">For extension owners</p>
          <h1>Add a FACEIT install link.</h1>
          <p>
            Point AddonPort at any valid Chrome Web Store extension ID. A basic install needs no
            backend, SDK, custom package, or catalog listing, and the user confirms it inside
            FACEIT.
          </p>
        </header>

        <section className="docs-section" id="install-link">
          <div className="docs-section-heading">
            <span>01</span>
            <div>
              <h2>Install link</h2>
              <p>Replace the example ID and open the link only after a user action.</p>
            </div>
          </div>
          <CodeBlock label="HTML" code={DIRECT_LINK_SNIPPET} />
          <div className="inline-note positive-note">
            <ShieldCheck aria-hidden="true" />
            <p>
              <strong>The user reviews the request before download.</strong> Direct Web Store IDs
              are marked as not catalog-reviewed. The link cannot change package source,
              permissions, or files.
            </p>
          </div>
          <div className="inline-note">
            <CircleAlert aria-hidden="true" />
            <p>
              Browser focus and timeout heuristics cannot prove AddonPort is installed. Keep a
              neutral <q>Didn&apos;t open?</q> fallback instead of claiming detection.
            </p>
          </div>
        </section>

        <section className="docs-section" id="actions">
          <div className="docs-section-heading">
            <span>02</span>
            <div>
              <h2>Supported actions</h2>
              <p>The protocol is versioned; installation always requires confirmation.</p>
            </div>
          </div>
          <dl className="protocol-table">
            <ProtocolRow
              name="addonport://install/<id>"
              description="Review and install a catalog ID or Chrome extension ID"
            />
            <ProtocolRow
              name="addonport://launch/<id>"
              description="Open an installed extension action"
            />
            <ProtocolRow name="addonport://open" description="Open the in-client manager" />
          </dl>
          <a className="text-link" href={INTEGRATION_URL} target="_blank" rel="noreferrer">
            Complete integration contract <ExternalLink aria-hidden="true" />
          </a>
        </section>

        <section className="docs-section" id="sdk">
          <div className="docs-section-heading">
            <span>03</span>
            <div>
              <div className="heading-with-badge">
                <h2>SDK</h2>
                <span>Preview</span>
              </div>
              <p>Use a session only when the page needs an outcome after opening the client.</p>
            </div>
          </div>
          <p className="docs-copy">
            The SDK models opened, pending, completed, rejected, failed, and expired states. These
            improve UX; they are not authentication or device attestation.
          </p>
          <div className="inline-note warning-note">
            <CircleAlert aria-hidden="true" />
            <p>
              <strong>Not a public hosted service yet.</strong> The package is a GitHub beta, is not
              on npm, and AddonPort&apos;s hosted Connect endpoint currently accepts only AddonPort
              origins. Use a direct link or self-host Connect with an explicit origin allowlist.
            </p>
          </div>
          <CodeBlock label="Self-hosted session" code={SDK_SNIPPET} />
          <dl className="package-table">
            <ProtocolRow name="@addonport/sdk" description="Framework-neutral session client" />
            <ProtocolRow name="@addonport/sdk/protocol" description="Intents and deep links" />
            <ProtocolRow name="@addonport/sdk/elements" description="Custom element" />
            <ProtocolRow name="@addonport/sdk/react" description="React wrapper" />
            <ProtocolRow name="@addonport/sdk/vue" description="Vue 3 wrapper" />
          </dl>
          <a className="text-link" href={SDK_URL} target="_blank" rel="noreferrer">
            SDK repository <ExternalLink aria-hidden="true" />
          </a>
        </section>

        <section className="docs-section" id="native">
          <div className="docs-section-heading">
            <span>04</span>
            <div>
              <h2>Native Windows apps</h2>
              <p>Read the current-user registry key without launching FACEIT.</p>
            </div>
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
          <p className="docs-copy">
            Compare <code>ProtocolVersion</code> before relying on newer link actions. Browser pages
            cannot read this key and should use the direct-link fallback.
          </p>
        </section>

        <p className="catalog-policy">
          There is no public self-service catalog submission yet. Catalog metadata is optional for
          direct installation.
        </p>
      </article>
    </main>
  );
}

function ProtocolRow({ name, description }: { name: string; description: string }) {
  return (
    <div>
      <dt>
        <code>{name}</code>
      </dt>
      <dd>{description}</dd>
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
