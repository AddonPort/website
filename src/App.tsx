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
const SDK_VERSION = "0.1.0-beta.3";
const EMBED_URL = `https://addonport.dev/sdk/v${SDK_VERSION}/addonport-button.js`;
const EMBED_SRI = "sha384-S44QavU5ux+H2a0FXQRmS7dCTSLCGQf0OnAPrBshmuUV8VHZBkUDEjmGHX5nJIiW";

const HTML_BUTTON_SNIPPET = [
  "<script",
  `  src="${EMBED_URL}"`,
  `  integrity="${EMBED_SRI}"`,
  '  crossorigin="anonymous"',
  "  defer",
  "></script>",
  "",
  "<addonport-install-button",
  `  target="${EXTENSION_ID}"`,
  '  label="Install for FACEIT"',
  "></addonport-install-button>",
].join("\n");

const REACT_BUTTON_SNIPPET = [
  "// npm install @addonport/sdk@beta",
  'import { AddonPortInstallButton } from "@addonport/sdk/react";',
  "",
  "export function FaceitInstall() {",
  "  return (",
  "    <AddonPortInstallButton",
  `      target="${EXTENSION_ID}"`,
  '      label="Install for FACEIT"',
  "      onOpen={({ deepLink }) => console.log(deepLink)}",
  "      onComplete={({ state }) => console.log(state)}",
  "    />",
  "  );",
  "}",
].join("\n");

const VUE_BUTTON_SNIPPET = [
  "<!-- npm install @addonport/sdk@beta -->",
  '<script setup lang="ts">',
  'import { AddonPortInstallButton } from "@addonport/sdk/vue";',
  "",
  "const handleOpen = ({ deepLink }: { deepLink: string }) => console.log(deepLink);",
  "const handleComplete = ({ state }: { state: string }) => console.log(state);",
  "</script>",
  "",
  "<template>",
  "  <AddonPortInstallButton",
  `    target="${EXTENSION_ID}"`,
  '    label="Install for FACEIT"',
  '    @open="handleOpen"',
  '    @complete="handleComplete"',
  "  />",
  "</template>",
].join("\n");

const JAVASCRIPT_BUTTON_SNIPPET = [
  "// After adding the HTML element:",
  'const button = document.querySelector("addonport-install-button");',
  "",
  'button.addEventListener("addonport-open", (event) => {',
  "  const { mode, intent, deepLink } = event.detail;",
  "  console.log({ mode, intent, deepLink });",
  "});",
  "",
  'button.addEventListener("addonport-error", (event) => {',
  "  console.error(event.detail);",
  "});",
  "",
  'button.addEventListener("addonport-complete", (event) => {',
  "  console.log(event.detail.state, event.detail.result);",
  "});",
].join("\n");

const DIRECT_LINK_SNIPPET = [
  `<a href="addonport://install/${EXTENSION_ID}">`,
  "  Install for FACEIT with AddonPort",
  "</a>",
  '<p>Didn\'t open? <a href="https://addonport.dev/">Get AddonPort</a></p>',
].join("\n");

const EVENT_DATA_SNIPPET = [
  "type AddonPortOpenDetail = {",
  '  mode: "direct" | "session";',
  '  intent: { action: "install"; target: string };',
  "  deepLink: string;",
  "};",
  "",
  "type SessionSnapshot = {",
  "  protocolVersion: 2;",
  "  sessionId: string;",
  '  state: "created" | "client_opened" | "awaiting_confirmation" |',
  '    "completed" | "rejected" | "failed" | "expired";',
  '  intent: AddonPortOpenDetail["intent"];',
  "  createdAt: string;",
  "  updatedAt: string;",
  "  expiresAt: string;",
  "  client?: { adapter?: string; version?: string; platform?: string };",
  "  result?: { installedVersion?: string; message?: string };",
  "  error?: { code: string; message: string };",
  "};",
  "",
  "type AddonPortButtonEventMap = {",
  '  "addonport-open": AddonPortOpenDetail;',
  '  "addonport-status": SessionSnapshot;',
  '  "addonport-complete": SessionSnapshot;',
  '  "addonport-error": unknown;',
  "};",
].join("\n");

const SDK_SNIPPET = [
  'import { AddonPortClient } from "@addonport/sdk";',
  "",
  "const client = new AddonPortClient({",
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
        <a href="#button">Install button</a>
        <a href="#button-api">Button API</a>
        <a href="#events">Events and data</a>
        <a href="#protocol">Protocol</a>
        <a href="#sessions">Session lifecycle</a>
        <a href="#native">Native apps</a>
      </aside>

      <article className="docs-content">
        <header className="docs-hero">
          <p className="section-label">For extension owners</p>
          <h1>Add a FACEIT install button.</h1>
          <p>
            Use one script tag or a framework wrapper. AddonPort opens FACEIT, reports the result,
            and needs no backend, custom package, or catalog listing from the extension owner.
          </p>
        </header>

        <section className="docs-section" id="button">
          <div className="docs-section-heading">
            <span>01</span>
            <div>
              <h2>Choose an integration</h2>
              <p>Replace the example with the extension&apos;s 32-character Chrome Web Store ID.</p>
            </div>
          </div>
          <IntegrationTabs />
          <div className="inline-note positive-note">
            <ShieldCheck aria-hidden="true" />
            <p>
              <strong>Hosted sessions are the default.</strong> The button creates one short-lived
              request, opens FACEIT, and reports confirmation or rejection to the page. The public
              service stores no account or long-lived device identity.
            </p>
          </div>
          <div className="inline-note">
            <CircleAlert aria-hidden="true" />
            <p>
              If Connect is unavailable or no compatible client claims the session, the button emits{" "}
              <code>addonport-error</code> and opens a direct install handoff. Set{" "}
              <code>mode=&quot;direct&quot;</code> to always skip Connect.
            </p>
          </div>
        </section>

        <section className="docs-section" id="button-api">
          <div className="docs-section-heading">
            <span>02</span>
            <div>
              <h2>Button API</h2>
              <p>Attributes configure behavior; CSS properties and parts control appearance.</p>
            </div>
          </div>
          <div className="reference-group">
            <h3>Attributes</h3>
            <dl className="protocol-table">
              <ProtocolRow
                name="target"
                description="Required. Chrome Web Store extension ID or AddonPort catalog slug."
              />
              <ProtocolRow
                name="label"
                description='Optional idle label. Defaults to "Install with AddonPort".'
              />
              <ProtocolRow
                name="disabled"
                description="Optional boolean attribute that disables interaction."
              />
              <ProtocolRow
                name="mode"
                description='Optional. Defaults to "session"; use "direct" to skip Connect.'
              />
              <ProtocolRow
                name="api-base-url"
                description="Advanced. Browser-side override for an adapter deployment pinned to the same origin."
              />
            </dl>
          </div>
          <div className="reference-group">
            <h3>Styling</h3>
            <dl className="protocol-table">
              <ProtocolRow
                name="--addonport-accent"
                description="Accent, focus, and status color."
              />
              <ProtocolRow name="--addonport-bg" description="Button background color." />
              <ProtocolRow name="--addonport-fg" description="Text and icon color." />
              <ProtocolRow
                name="::part(button | icon | label)"
                description="Shadow parts for site-specific styling beyond the color properties."
              />
            </dl>
          </div>
        </section>

        <section className="docs-section" id="events">
          <div className="docs-section-heading">
            <span>03</span>
            <div>
              <h2>Events and data</h2>
              <p>
                Every event bubbles through Shadow DOM and exposes its payload in{" "}
                <code>event.detail</code>.
              </p>
            </div>
          </div>
          <div className="reference-group">
            <h3>Web component events</h3>
            <dl className="protocol-table">
              <ProtocolRow
                name="addonport-open"
                description="Direct and session modes. Returns mode, validated intent, and deepLink."
              />
              <ProtocolRow
                name="addonport-status"
                description="Session mode. Returns the latest SessionSnapshot while polling."
              />
              <ProtocolRow
                name="addonport-complete"
                description="Session mode. Returns the completed SessionSnapshot."
              />
              <ProtocolRow
                name="addonport-error"
                description="Returns a session or handoff error; a direct fallback may follow."
              />
            </dl>
          </div>
          <div className="reference-group">
            <h3>Framework callbacks</h3>
            <dl className="protocol-table">
              <ProtocolRow
                name="React"
                description="onOpen, onStatus, onComplete, and onError receive the payload directly."
              />
              <ProtocolRow
                name="Vue"
                description="@open, @status, @complete, and @error receive the emitted payload directly."
              />
            </dl>
          </div>
          <CodeBlock label="TypeScript payloads" code={EVENT_DATA_SNIPPET} />
          <div className="inline-note warning-note">
            <CircleAlert aria-hidden="true" />
            <p>
              <strong>
                <code>addonport-open</code> is a handoff signal, not installation proof.
              </strong>{" "}
              Only <code>addonport-complete</code> reports completion. Session results are UX
              signals rather than authentication or device attestation.
            </p>
          </div>
        </section>

        <section className="docs-section" id="protocol">
          <div className="docs-section-heading">
            <span>04</span>
            <div>
              <h2>Direct protocol</h2>
              <p>Use links directly when the page does not need installation status.</p>
            </div>
          </div>
          <CodeBlock label="HTML link" code={DIRECT_LINK_SNIPPET} />
          <dl className="protocol-table">
            <ProtocolRow
              name="addonport://install/<id>"
              description="Review and install a catalog slug or Chrome extension ID."
            />
            <ProtocolRow
              name="addonport://launch/<id>"
              description="Open the action for an installed extension."
            />
            <ProtocolRow name="addonport://open" description="Open the in-client manager." />
          </dl>
          <a className="text-link" href={INTEGRATION_URL} target="_blank" rel="noreferrer">
            Complete protocol contract <ExternalLink aria-hidden="true" />
          </a>
        </section>

        <section className="docs-section" id="sessions">
          <div className="docs-section-heading">
            <span>05</span>
            <div>
              <h2>Session lifecycle</h2>
              <p>The hosted service connects the page to one native confirmation flow.</p>
            </div>
          </div>
          <p className="docs-copy">
            The SDK prepares a five-minute request, opens its signed handoff, and polls through
            created, client opened, confirmation, and terminal states. Claim and polling tokens are
            separate and never belong in page URLs or analytics.
          </p>
          <div className="inline-note positive-note">
            <ShieldCheck aria-hidden="true" />
            <p>
              <strong>The public endpoint accepts HTTPS extension sites.</strong> Session creation
              is rate limited and no cookies, account, or persistent socket are required. A custom{" "}
              <code>api-base-url</code> works only when the native adapter is independently pinned
              to that same private origin. The public FACEIT adapter does not accept arbitrary
              service origins from websites.
            </p>
          </div>
          <CodeBlock label="Session client" code={SDK_SNIPPET} />
          <a className="text-link" href={SDK_URL} target="_blank" rel="noreferrer">
            SDK repository <ExternalLink aria-hidden="true" />
          </a>
        </section>

        <section className="docs-section" id="native">
          <div className="docs-section-heading">
            <span>06</span>
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
            cannot read this key and should keep the direct-link fallback.
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

const INTEGRATION_EXAMPLES = [
  { id: "html", label: "HTML", codeLabel: "HTML", code: HTML_BUTTON_SNIPPET },
  { id: "react", label: "React", codeLabel: "React / TSX", code: REACT_BUTTON_SNIPPET },
  { id: "vue", label: "Vue", codeLabel: "Vue 3", code: VUE_BUTTON_SNIPPET },
  {
    id: "javascript",
    label: "JavaScript",
    codeLabel: "JavaScript",
    code: JAVASCRIPT_BUTTON_SNIPPET,
  },
] as const;

type IntegrationExampleId = (typeof INTEGRATION_EXAMPLES)[number]["id"];

function IntegrationTabs() {
  const [activeId, setActiveId] = useState<IntegrationExampleId>("html");
  const active =
    INTEGRATION_EXAMPLES.find((example) => example.id === activeId) ?? INTEGRATION_EXAMPLES[0];

  const focusTab = (id: IntegrationExampleId) => {
    setActiveId(id);
    window.requestAnimationFrame(() => document.getElementById(`integration-tab-${id}`)?.focus());
  };

  const move = (current: IntegrationExampleId, offset: number) => {
    const currentIndex = INTEGRATION_EXAMPLES.findIndex((example) => example.id === current);
    const next = INTEGRATION_EXAMPLES.at(
      (currentIndex + offset + INTEGRATION_EXAMPLES.length) % INTEGRATION_EXAMPLES.length,
    );
    if (!next) return;
    focusTab(next.id);
  };

  return (
    <div className="integration-example">
      <div className="integration-tabs" role="tablist" aria-label="Integration example">
        {INTEGRATION_EXAMPLES.map((example) => (
          <button
            id={`integration-tab-${example.id}`}
            key={example.id}
            type="button"
            role="tab"
            aria-controls="integration-example-panel"
            aria-selected={activeId === example.id}
            tabIndex={activeId === example.id ? 0 : -1}
            onClick={() => setActiveId(example.id)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                move(example.id, 1);
              }
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                move(example.id, -1);
              }
              if (event.key === "Home") {
                event.preventDefault();
                focusTab(INTEGRATION_EXAMPLES[0].id);
              }
              if (event.key === "End") {
                event.preventDefault();
                const last = INTEGRATION_EXAMPLES.at(-1);
                if (last) focusTab(last.id);
              }
            }}
          >
            {example.label}
          </button>
        ))}
      </div>
      <div
        id="integration-example-panel"
        role="tabpanel"
        aria-labelledby={`integration-tab-${active.id}`}
      >
        <CodeBlock label={active.codeLabel} code={active.code} />
      </div>
    </div>
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
