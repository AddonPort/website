# AddonPort Website

Installation and developer integration documentation for AddonPort.

The public site is available at [addonport.dev](https://addonport.dev). Direct `addonport://` links
are the simplest FACEIT integration. The optional SDK and hosted result channel are available as a
GitHub beta.

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
