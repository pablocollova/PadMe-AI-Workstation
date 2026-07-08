# Principles

These principles guide every architectural and implementation decision in PadMe.

## 1. Human First

AI assists, accelerates, reviews, and automates, but humans remain accountable for critical decisions.

PadMe must augment human judgment, not hide it.

## 2. Best Tool for Every Task

No single model, vendor, editor, or framework is assumed to be ideal for everything.

PadMe should route work to the most appropriate capability, whether that capability is GPT, Claude, Gemini, a local model, a script, a database, or a human.

## 3. Everything as Code

Configuration, prompts, agents, scripts, workflows, decisions, and documentation should be versioned whenever possible.

If it defines how the platform behaves, it belongs in the repository.

## 4. Memory over Context

Important knowledge should persist beyond a single conversation or session.

PadMe should reduce repeated explanation by preserving decisions, project context, operational knowledge, and lessons learned.

## 5. Reproducibility

The environment should be rebuildable from documentation and scripts.

If a workstation is lost, replaced, or rebuilt, PadMe should be recoverable without reconstructing knowledge manually.

## 6. Vendor Independence

PadMe must avoid depending on a single AI provider, model family, cloud service, or proprietary workflow.

Providers are implementations. Capabilities are the architecture.

## 7. Automation by Default

If a task is repeated, it should become a candidate for automation.

PadMe should turn recurring workflows into scripts, playbooks, agents, or documented procedures.

## 8. Decision Preservation

Important decisions must be documented through ADRs or RFCs.

The repository should explain not only what was built, but why it was built that way.

## 9. Architecture Before Tooling

PadMe should not chase tools.

The platform defines capabilities first, then selects tools that implement those capabilities.

## 10. Continuous Improvement

Each change should leave the platform more useful, more understandable, or more reliable than before.

Every commit should increase the value of the platform.
