import fs from "node:fs";
import path from "node:path";

const profiles = [
  { source: "profile-assets/en", target: "public/company-profile-en.pdf" },
  { source: "profile-assets/bm", target: "public/company-profile-bm.pdf" },
];

for (const profile of profiles) {
  const parts = fs.readdirSync(profile.source)
    .filter((name) => name.endsWith(".b64"))
    .sort();

  if (parts.length === 0) {
    throw new Error(`No profile source parts found in ${profile.source}`);
  }

  const encoded = parts
    .map((name) => fs.readFileSync(path.join(profile.source, name), "utf8").trim())
    .join("");

  const pdf = Buffer.from(encoded, "base64");
  if (pdf.subarray(0, 5).toString("ascii") !== "%PDF-") {
    throw new Error(`Invalid PDF materialized for ${profile.target}`);
  }

  fs.mkdirSync(path.dirname(profile.target), { recursive: true });
  fs.writeFileSync(profile.target, pdf);
  console.log(`Materialized ${profile.target} (${pdf.length} bytes)`);
}
