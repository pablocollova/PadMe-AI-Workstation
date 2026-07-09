# Platform Architecture

## Purpose

This document defines the technical architecture baseline for PadMe AI Workstation as the first reference implementation of the PadMe Engineering Platform.

PadMe is designed as a living engineering system: modular, extensible, reproducible, knowledge-first, and independent from any single AI vendor or tool.

## Architectural model

PadMe is organized around two complementary axes:

1. **Platform Systems** — how PadMe works.
2. **Knowledge Domains** — what PadMe knows.

This separation keeps the platform technically coherent while allowing knowledge to grow organically across different areas.

---

## Axis 1: Platform Systems

Platform Systems are the operational parts of PadMe.

They define capabilities, integrations, automation, agents, configuration, and execution.

Initial Platform Systems:

- Workstation System
- Agent System
- Model System
- Memory System
- Integration System
- Automation System
- Decision System
- Security System
- Research System

### Workstation System

Responsible for the local engineering environment.

Initial responsibilities:

- Visual Studio Code setup
- Git setup
- Docker setup
- OpenCode setup
- Gentle-AI setup
- Ollama setup
- PowerShell baseline
- reproducible installation process

### Agent System

Responsible for defining specialized PadMe agents.

Initial agents:

- PadMe Architect
- PadMe Senior Developer
- PadMe Code Reviewer
- PadMe Security
- PadMe Hotel IT
- PadMe Automation
- PadMe Documentation

### Model System

Responsible for routing tasks to models and providers.

Initial responsibilities:

- model profiles
- provider strategy
- local model strategy
- cost/quality tradeoffs
- task-specific model selection

### Memory System

Responsible for persistent knowledge and context.

Initial responsibilities:

- project memory
- architectural memory
- lessons learned
- operational context
- memory backup and recovery

### Integration System

Responsible for external interfaces.

Initial integration targets:

- GitHub
- Docker
- local shell
- Microsoft 365
- databases
- browser automation
- SSH and servers
- local AI runtime

### Automation System

Responsible for turning repeated manual work into repeatable workflows.

Initial outputs:

- scripts
- playbooks
- workflows
- templates
- local helpers

### Decision System

Responsible for preserving important decisions.

Initial mechanisms:

- ADRs
- RFCs
- standards
- policies

### Security System

Responsible for keeping PadMe safe by design.

Initial concerns:

- secret handling
- credential isolation
- local model data boundaries
- repository hygiene
- automation safety

### Research System

Responsible for evaluating technologies before adoption.

Initial responsibilities:

- tool comparison
- model evaluation
- experiment notes
- adoption criteria
- rejected alternatives

---

## Axis 2: Knowledge Domains

Knowledge Domains represent what PadMe knows.

They are not tool-specific. They preserve durable knowledge that can be used by agents, workflows, humans, or future implementations.

Initial Knowledge Domains:

- Engineering
- AI
- Cybersecurity
- Automation
- Hotel IT
- Microsoft 365
- Infrastructure
- Networking
- Programming
- Research

Each domain may contain:

- knowledge notes
- playbooks
- lessons learned
- templates
- troubleshooting guides
- research summaries
- operational procedures

---

## Capability-driven design

PadMe is designed around capabilities rather than tools.

A capability defines what the platform needs to do.

A tool is only one possible implementation of that capability.

Examples:

| Capability | Possible implementations |
| --- | --- |
| Architecture reasoning | GPT, Claude, Gemini, local model |
| Code review | OpenCode, Claude Code, Codex, custom agent |
| Local inference | Ollama, LM Studio, local runtime |
| Automation execution | PowerShell, Python, Playwright, n8n |
| Memory retrieval | Engram, files, vector database, MCP memory |
| Repository operations | Git, GitHub API, GitHub MCP |

This prevents PadMe from becoming dependent on any single provider or tool.

---

## Repository as source of truth

The repository is the canonical source of truth.

If a decision, process, configuration, or architectural rule is not documented in the repository, it is not considered part of PadMe.

This rule protects the platform from becoming dependent on chat history, memory fragments, or undocumented assumptions.

---

## Current technical direction

The initial technical implementation will use:

- Visual Studio Code as the local editor
- Git and GitHub as the version control foundation
- OpenCode as the initial agent execution environment
- Gentle-AI as the initial agent framework layer
- Engram as the initial memory layer
- Ollama as the initial local AI runtime
- PowerShell as the initial Windows automation shell

These are current implementations, not permanent architectural dependencies.
