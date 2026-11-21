// make.fun bounty gta6-meme-x-01 entry.
// The deliverable is the X post itself; this program only copies POST.json
// (the post's address) from the repository root into the output directory.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, "POST.json"), join(outDir, "POST.json"));
console.log("POST.json copied to " + outDir);
// POST.json's url is a placeholder until the meme is posted on X; the real
// post address is edited in before the final submission. Runs offline, Node 22.
