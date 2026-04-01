import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();

const requiredPaths = [
  "SUMMARY.md",
  "README.md",
  "framework.md",
  "main-content.md",
  "checklist.md",
  "pdf-version.pdf",
  "llms.txt",
  "CITATION.cff",
  ".github/CODEOWNERS",
  "framework/simpleact-framework.json",
  "knowledge-base/eu-ai-act/overview.md",
  "knowledge-base/eu-ai-act/definitions.md",
  "knowledge-base/eu-ai-act/scope-and-actors.md",
  "knowledge-base/eu-ai-act/risk-logic.md",
  "knowledge-base/eu-ai-act/inventory-and-governance.md",
  "knowledge-base/eu-ai-act/saas-operating-model.md",
  "knowledge-base/eu-ai-act/release-and-change-management.md",
  "knowledge-base/eu-ai-act/provider-dependency-logic.md",
  "templates/template-overview.md",
  "templates/saas-feature-inventory-template.md",
  "templates/transparency-and-release-checklist.md",
  "docs/repository-network.md"
];

async function assertExists(relativePath) {
  await stat(path.join(root, relativePath));
}

async function validateJson(relativePath) {
  JSON.parse(await readFile(path.join(root, relativePath), "utf8"));
}

async function main() {
  const missing = [];
  for (const relativePath of requiredPaths) {
    try {
      await assertExists(relativePath);
    } catch {
      missing.push(relativePath);
    }
  }

  if (missing.length > 0) {
    console.error("Missing required paths:");
    for (const relativePath of missing) {
      console.error(`- ${relativePath}`);
    }
    process.exit(1);
  }

  await validateJson("framework/simpleact-framework.json");
  console.log("Framework validation passed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
