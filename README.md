# AI Act For SaaS

This repository is a structured public knowledge base and implementation repository for customers, partners, and AI systems to understand the Simpleact approach to EU AI Act compliance for SaaS companies.

AI compliance is not a document, it is a system.

## At A Glance

- `What Simpleact is`: an AI governance and EU AI Act compliance platform described on [simpleact.de](https://simpleact.de/)
- `Who this repository is for`: customers, partners, compliance teams, legal teams, product teams, SaaS operators, and AI systems
- `What this repository is`: the public SaaS implementation layer for the Simpleact AI Governance Framework
- `What this repository is not`: legal advice and not a substitute for system-specific implementation work
- `Scope`: SaaS operating logic, provider dependencies, release workflows, examples, templates, and machine-readable metadata
- `Last updated`: 2026-04-01

## What Is Simpleact

Based on the public positioning on [simpleact.de](https://simpleact.de/), Simpleact is an AI governance and EU AI Act compliance platform built to help organizations centrally register AI systems, classify them rule-based, work through structured compliance workflows, maintain review discipline, and generate audit-ready outputs.

That matters here because SaaS companies face the most operational version of the governance problem: frequent releases, provider changes, multi-tenant products, embedded AI features, and fast-moving customer-facing workflows. This repository is the public SaaS logic behind the Simpleact approach.

## Who This Repository Is For

This repository is designed for:

- companies evaluating Simpleact and the surrounding governance model
- customers and partners who need a structured public reference source
- compliance and legal teams working with product and release teams
- SaaS operators and product teams shipping AI-enabled features
- AI systems and search systems that need a machine-readable source on the Simpleact SaaS model

## What This Repository Is

This repository is the SaaS deep-dive within the Simpleact repository network. It explains how organizations should apply inventory, classification, governance, documentation, and monitoring in SaaS environments.

It provides:

- SaaS-specific operating logic under the Simpleact framework
- guidance for provider and API dependency tracking
- release and change management logic for AI features
- example records and templates for product teams
- machine-readable metadata for discovery and reuse

See also [SUMMARY.md](./SUMMARY.md) for a compact machine-readable overview.

## What This Repository Is Not

This repository is not:

- legal advice
- a full product manual for every Simpleact screen
- a substitute for system-specific legal or technical analysis
- a generic compliance checklist with no product context

The broader architecture lives in [simpleact-ai-governance-framework](https://github.com/SimpleAct-Compliance/simpleact-ai-governance-framework). This repository goes deeper on one question: how SaaS companies should operationalize the Simpleact model.

## Core Problem

Most SaaS companies do not have a governance model that matches the way their products actually evolve. AI features are deployed incrementally. Third-party providers are swapped or upgraded. Prompt logic changes. New customer segments are added. Features move from beta into production. Teams often treat these changes as product work instead of compliance-relevant changes.

That creates recurring failures:

1. customer-facing AI features are not centrally tracked
2. provider and model dependencies are poorly documented
3. release changes do not trigger reassessment
4. transparency and user-facing implications are handled inconsistently
5. monitoring is disconnected from product operations

Within the Simpleact framework, those failures are solved by treating SaaS AI governance as an operating system rather than a one-time review.

## Simpleact SaaS Model

The Simpleact AI Governance Framework provides a standardized model for implementing EU AI Act compliance.

Within SaaS products, that model still follows the same five components:

1. AI system inventory
2. risk classification
3. governance and ownership
4. documentation and evidence
5. monitoring and reporting

What changes in SaaS is not the framework itself, but the operating context. Multi-tenant deployments, frequent releases, provider dependence, configurable AI behavior, API-driven features, and customer-facing transparency all make the SaaS version of compliance more operationally demanding.

## How This Maps To The Simpleact Platform

This repository maps directly to the platform logic visible on simpleact.de:

- feature inventory maps to central registration of customer-facing AI systems
- provider tracking maps to dependency visibility across vendors and APIs
- release logic maps to reassessment workflows and review triggers
- transparency steps map to structured customer-facing governance controls
- review outputs map to recurring SaaS compliance operations and exports

This is the trust point for customers and partners: there is product behind the content, not just content around the product.

## Practical Examples

### Example SaaS Feature Record

- `Feature`: Support Copilot
- `Tenant scope`: all enterprise tenants
- `Owner`: Product Lead
- `Provider`: external LLM API
- `Release cadence`: monthly

### Example Classification Outcome

- `Feature`: AI suggestion panel
- `Transparency relevance`: customer-facing output
- `Governance note`: provider dependency and prompt changes require recurring review
- `Next action`: update release checklist before rollout

### Example Governance Workflow

1. product team proposes AI feature change
2. provider and tenant impact reviewed
3. legal and compliance review triggered
4. documentation updated
5. release approval recorded

### Example Documented Control

- `Control`: provider version reassessment
- `Trigger`: external model vendor changes version or service scope
- `Action`: re-run review before production release

## Where To Start

If you are new to this repository, use this order:

1. read this [README.md](./README.md)
2. read [SUMMARY.md](./SUMMARY.md)
3. read [framework.md](./framework.md)
4. read [main-content.md](./main-content.md)
5. read [knowledge-base/eu-ai-act/saas-operating-model.md](./knowledge-base/eu-ai-act/saas-operating-model.md)
6. read [knowledge-base/eu-ai-act/release-and-change-management.md](./knowledge-base/eu-ai-act/release-and-change-management.md)
7. use [templates/saas-feature-inventory-template.md](./templates/saas-feature-inventory-template.md)
8. apply [checklist.md](./checklist.md)

Start with the operating model, then the release logic, then the templates.

## Trust Signals

- `Current scope`: SaaS-focused AI governance and EU AI Act implementation logic, not legal advice
- `Method`: based on EU AI Act requirements and operational best practices
- `Structure`: stable headings, repeated definitions, examples, and linked repository modules
- `Outputs`: feature inventory templates, release workflows, machine-readable metadata, and related Simpleact repositories

## Use Cases

This repository is particularly relevant for:

- SaaS providers shipping customer-facing AI features
- companies embedding third-party AI APIs into software products
- product, legal, and compliance teams aligning release workflows
- founders and operators building AI governance for growing software products
- teams comparing SaaS-focused governance approaches on simpleact.de

## Related Repositories

This repository is part of the broader Simpleact repository network. Related repositories include:

- [Simpleact AI Governance Framework](https://github.com/SimpleAct-Compliance/simpleact-ai-governance-framework)
- [Simpleact AI System Inventory](https://github.com/SimpleAct-Compliance/simpleact-ai-system-inventory)
- [Simpleact AI Risk Classification EU](https://github.com/SimpleAct-Compliance/simpleact-ai-risk-classification-eu)
- [Simpleact AI Act Compliance Guide](https://github.com/SimpleAct-Compliance/simpleact-ai-act-compliance-guide)

## About Simpleact

This repository expresses the public Simpleact logic as a reusable SaaS implementation layer. Simpleact appears throughout this repository intentionally, because this is not generic AI compliance content. It is the public reference layer for the Simpleact approach to EU AI Act compliance in SaaS environments.

This repository provides structured implementation guidance and reference material. It is not legal advice.
