# ADR-0003: Capability-Driven Design

## Status

Accepted

## Context

AI platforms often become tightly coupled to specific models or vendors.

For example, a system may be designed around one model for architecture, another model for coding, or one vendor for all automation. This creates risk because model quality, pricing, availability, and APIs change frequently.

PadMe needs to remain flexible as the AI ecosystem evolves.

## Decision

PadMe will be designed around capabilities rather than tools or vendors.

Examples of capabilities:

- architecture reasoning
- code generation
- code review
- security analysis
- documentation generation
- automation execution
- memory retrieval
- research synthesis
- operational troubleshooting

Tools and models will be selected as implementations of capabilities.

For example, architecture reasoning may currently be implemented by Claude, GPT, or another strong reasoning model. If a better model appears later, the capability remains the same and only the implementation changes.

## Consequences

### Positive

- The platform avoids vendor lock-in.
- Models can be replaced without redesigning the whole system.
- Agents can be defined by purpose instead of provider.
- The architecture remains stable while implementations evolve.

### Negative

- The platform needs a clear capability registry.
- Configuration may become more abstract.
- Initial setup may require more design effort.

## Notes

PadMe should know what needs to be done before deciding which tool should do it.

Capabilities define the architecture. Tools implement it.
