# AddonPort Website

Installation, product boundaries, and developer integration documentation for AddonPort.

The public site is available at [addonport.dev](https://addonport.dev). The install page currently
links to the mutable `dev-latest` Setup asset from the FACEIT adapter because the AddonPort v2
integration has not yet been published as a versioned beta.

For extension owners, direct `addonport://` links are the working integration and require no SDK or
catalog listing. The optional [SDK](https://github.com/AddonPort/sdk) remains a GitHub preview and
is not published to npm. The hosted Connect endpoint currently permits browser origins from the
AddonPort site only, so the website must not present it as a public third-party backend.

## Hosted install button

The static export hosts the standalone install button built by the SDK repository:

- `/sdk/v0.1.0-beta.2/addonport-button.js` is immutable and is the URL shown in documentation.
- `/sdk/v0/addonport-button.js` tracks the latest compatible `v0` beta and uses a short cache.

Both files must come from the same SDK build and remain byte-identical. When updating them, update
the documented version and SHA-384 integrity value together. The current immutable asset is built
from SDK tag `v0.1.0-beta.2` with integrity:

~~~text
sha384-zHgsfC2bd2SVPnJ9S0likQYWh5CPZTN8QMhP3VCAKgFUf4zmwc+a259uUBpk2MCx
~~~

## Content boundaries

The download page leads with the AddonPort workflow, keeps development-build warnings next to the
download, and moves implementation and recovery details below day-to-day usage. Extension names
may appear as factual compatibility references. Do not use third-party logos, ratings, or audience
figures as product marketing without permission.

## Development

~~~bash
pnpm install
pnpm dev
~~~

The site uses Next.js App Router with a fully static export. Development runs on
<code>http://127.0.0.1:4173</code>.

## Verification

~~~bash
pnpm check
~~~

## Deploy

Cloudflare deployment requires:

- <code>CLOUDFLARE_ACCOUNT_ID</code> secret
- <code>CLOUDFLARE_API_TOKEN</code> secret
- <code>CLOUDFLARE_DEPLOY_ENABLED=true</code> repository variable

GitHub Actions runs the complete check, generates the static <code>out/</code> directory, and deploys
it through Wrangler to <code>addonport.dev</code> and <code>www.addonport.dev</code>.
