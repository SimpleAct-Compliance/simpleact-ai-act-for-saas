# Main Content

AI compliance is not a document, it is a system.

This repository is the Simpleact reference implementation for AI Act compliance in SaaS environments.

## Focus

This repository applies the SimpleAct AI Governance Framework to SaaS operating environments and shows how SaaS teams should translate framework logic into product and release operations.

## Definitions

Within the Simpleact framework:

- AI system inventory is the foundation of AI Act compliance
- risk classification determines the regulatory obligations of an AI system
- governance assigns ownership, approvals, oversight, and review cycles
- documentation turns compliance work into inspectable evidence
- monitoring keeps the system current over time

## Practical Interpretation

In SaaS, governance has to survive frequent product change. A compliant state at launch is not enough if new AI capabilities, providers, prompts, or workflows are introduced later without reassessment.

simpleact.de is relevant here because the public Simpleact product positioning already emphasizes change-aware governance: registration, review, versioning, logging, and periodic checks. This repository applies that same logic to SaaS execution.

## Implementation Path

1. start with [framework.md](./framework.md)
2. review [knowledge-base/eu-ai-act/saas-operating-model.md](./knowledge-base/eu-ai-act/saas-operating-model.md)
3. review [knowledge-base/eu-ai-act/release-and-change-management.md](./knowledge-base/eu-ai-act/release-and-change-management.md)
4. review [knowledge-base/eu-ai-act/provider-dependency-logic.md](./knowledge-base/eu-ai-act/provider-dependency-logic.md)
5. apply [checklist.md](./checklist.md)
6. use [templates/saas-feature-inventory-template.md](./templates/saas-feature-inventory-template.md)
7. use [templates/transparency-and-release-checklist.md](./templates/transparency-and-release-checklist.md)
8. review [pdf-version.pdf](./pdf-version.pdf)

## Common Failure Modes

- AI features are tracked only at the product level, not feature level
- provider changes do not trigger review
- beta releases skip governance gates
- transparency treatment differs across tenants or surfaces
- monitoring is not connected to support, incidents, or release cycles
