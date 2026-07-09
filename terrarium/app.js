const cycle = [
  "Seed",
  "Desmalezar",
  "Habitat",
  "Gestation",
  "Cultivation",
  "Metamorphosis",
  "Fossil"
];

const systems = [
  ["Canon System", "Preserve structured truth."],
  ["Decision System", "Preserve ADRs and RFCs."],
  ["Evolution System", "Preserve transformations and fossils."],
  ["Knowledge System", "Cultivate durable knowledge."],
  ["Workstation System", "Provide the local engineering environment."],
  ["Agent System", "Define companions and specialized agents."],
  ["Model System", "Route capabilities to AI models."],
  ["Integration System", "Connect external tools and environments."],
  ["Automation System", "Turn repeated work into workflows."]
];

const cycleContainer = document.querySelector("#cycle");
cycle.forEach((step) => {
  const el = document.createElement("div");
  el.className = "step";
  el.textContent = step;
  cycleContainer.appendChild(el);
});

const systemsContainer = document.querySelector("#systems");
systems.forEach(([name, purpose]) => {
  const el = document.createElement("article");
  el.className = "card";
  el.innerHTML = `<strong>${name}</strong><span>${purpose}</span>`;
  systemsContainer.appendChild(el);
});
