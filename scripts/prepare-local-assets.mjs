import { access, cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const source = resolve(root, "assets");
const target = resolve(root, "client/public/assets");

try {
  await access(source);
} catch {
  throw new Error("Missing ./assets. Restore the repository's tracked assets directory before running local mode.");
}

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });

console.log("Copied repository assets to client/public/assets for local serving.");
