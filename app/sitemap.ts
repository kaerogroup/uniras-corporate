import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
 const base = "https://www.uniras.my";
 return ["", "/bm", "/vendor", "/services/website-development", "/bm/services/website-development"].map(path => ({url: base + (path || "/")}));
}
