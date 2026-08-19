# AddonPort Website

Installation and developer integration documentation for AddonPort.

> [!NOTE]
> The site is not publicly deployed. The current user guide and releases are available in
> [AddonPort for FACEIT](https://github.com/AddonPort/faceit).

## Development

~~~bash
pnpm install
pnpm dev
~~~

The local site expects the connect service at <code>http://localhost:8787</code>. Override it with
<code>VITE_ADDONPORT_API_URL</code>.

## Verification

~~~bash
pnpm check
~~~

## Deploy

Cloudflare deployment requires:

- <code>CLOUDFLARE_ACCOUNT_ID</code> secret
- <code>CLOUDFLARE_API_TOKEN</code> secret
- <code>ADDONPORT_CONNECT_URL</code> variable

The intended production hostname is `addonport.dev` once DNS and deployment are configured.
