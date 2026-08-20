# AddonPort Website

Installation, product boundaries, and developer integration documentation for AddonPort.

The public site is available at [addonport.dev](https://addonport.dev). The install page currently
links to the mutable `dev-latest` Setup asset from the FACEIT adapter because the AddonPort v2
integration has not yet been published as a versioned beta.

For extension owners, direct `addonport://` links are the working integration and require no SDK or
catalog listing. The optional [SDK](https://github.com/AddonPort/sdk) remains a GitHub preview and
is not published to npm. The hosted Connect endpoint currently permits browser origins from the
AddonPort site only, so the website must not present it as a public third-party backend.

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
