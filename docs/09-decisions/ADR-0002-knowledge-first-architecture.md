# ADR-0002: Knowledge-First Architecture

## Status

Accepted

## Context

Many AI toolchains are built around tools first: editors, CLIs, models, APIs, and plugins.

That approach is fragile because tools change quickly. A platform that is too closely tied to a specific tool can become obsolete when the tool changes, disappears, or is replaced by something better.

PadMe should preserve the most valuable asset: knowledge.

This includes project context, architectural decisions, operating procedures, research, playbooks, prompts, troubleshooting history, and lessons learned.

## Decision

PadMe will use a knowledge-first architecture.

The repository will prioritize durable knowledge structures before tool-specific configuration.

Tools will be treated as implementations that use, generate, or update knowledge, but they are not the foundation of the platform.

## Consequences

### Positive

- The platform remains useful even if tools change.
- Decisions and reasoning are preserved.
- Repeated explanations are reduced over time.
- The project can support multiple agents, models, and implementations.

### Negative

- The project requires disciplined documentation.
- Knowledge structure must be maintained intentionally.
- It may feel slower at the beginning than simply installing tools.

## Notes

Knowledge is the platform's long-term memory.

Tools are replaceable. Knowledge must survive.
