import { readFileSync, writeFileSync } from "node:fs";

const value = process.env.PAGES_URL;
if (!value) throw new Error("PAGES_URL must be the URL returned by configure-pages.");
const url = new URL(value);
if (url.protocol !== "https:" || url.username || url.password || url.search || url.hash) {
	throw new Error("PAGES_URL must be an HTTPS site URL without credentials, query, or fragment.");
}
const file = new URL("../src/config/siteConfig.ts", import.meta.url);
let config = readFileSync(file, "utf8");
const settings = {
	site: `${url.origin}/`,
	base: url.pathname.replace(/\/+$/, "") || "/",
};
for (const [key, value] of Object.entries(settings)) {
	const pattern = new RegExp(`^(\\s*${key}: )"[^"\\n]*",`, "m");
	if (!pattern.test(config)) throw new Error(`Missing ${key} in siteConfig.ts`);
	config = config.replace(pattern, (_, prefix) => `${prefix}${JSON.stringify(value)},`);
}
writeFileSync(file, config);
console.log(`Configured GitHub Pages: ${settings.site} (base ${settings.base})`);
