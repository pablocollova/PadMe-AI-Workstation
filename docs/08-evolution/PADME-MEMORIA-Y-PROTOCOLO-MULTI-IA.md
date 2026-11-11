# PadMe — Memoria evolutiva y protocolo de colaboración multi-IA

> Documento de continuidad histórica. Fecha de consolidación: 2026-11-11.
> Origen: conversaciones de diseño de PadMe, contrastadas parcialmente con archivos del repositorio.
> Autor de la consolidación: ChatGPT. **No equivale a una aprobación nueva del usuario.**
> Fuente de verdad operativa: este repositorio. Las decisiones aceptadas en ADR y el código verificado prevalecen sobre hipótesis o recuerdos de conversación.

## 0. Cómo leer este documento

Este archivo existe para que cualquier IA, agente o humano retome PadMe sin acceso a los chats originales. Es **memoria histórica y protocolo**, no sustituto del código, del Canon ni de los ADR. Cada afirmación debe distinguirse como:

- **VERIFICADO**: observado en el repositorio o en un artefacto ejecutado.
- **ACEPTADO**: intención/principio expresamente respaldado por el usuario; si afecta arquitectura y aún no tiene ADR, formalizarlo antes de implementaciones irreversibles.
- **PROPUESTO / GESTACIÓN**: discutido, pero no cerrado.
- **SUPERADO / MUTACIÓN**: formulación anterior que dio lugar a otra; conservar la genealogía, no eliminar el pasado.
- **PENDIENTE**: trabajo por realizar; no describir como completado.

**Regla crítica:** una frase del asistente como «ya lo documenté» no constituye evidencia de persistencia. Solo un archivo/commit verificable cuenta como guardado.

## 1. Identidad, origen y dirección

PadMe surgió de investigar Gentleman Programming / gentle-ai, Engram y cómo integrar IA, modelos, agentes, editores y automatizaciones en una estación de trabajo de ingeniería. Se buscaba flexibilidad entre proveedores y modelos (p. ej. Claude, GPT/Codex, Ollama, OpenCode), memoria durable, MCP, integración con GitHub y herramientas locales.

**Genealogía conceptual:** AI Workstation → Engineering Platform → Operational Ecosystem → metáfora de ecosistema vivo. El ADR-0001 existente acepta explícitamente «Engineering Platform» y define la workstation como primera implementación. El `canon.yaml` existente declara `identity.type: operational_ecosystem`. **No reescribir el ADR como si hubiera sido formalmente sustituido**: registrar el matiz y, si procede, emitir ADR posterior que explique la ampliación.

Misión existente en Vision.md: construir una plataforma de ingeniería que aprenda, preserve conocimiento y potencie a las personas en vez de sustituirlas. La plataforma no debe quedar cautiva de un modelo, proveedor, editor, formato o herramienta. Las variantes especializadas futuras pueden responder a dominios distintos, manteniendo principios compartidos.

**Intención humana:** unir claridad técnica y sensibilidad humana. La tecnología debe acompañar, no intimidar; contribuir al bienestar, a la comprensión y a la autonomía. Metáforas espirituales, mitológicas y biológicas son **fuentes de patrones**, nunca compromisos doctrinales, afirmaciones científicas literales ni obligaciones arquitectónicas.

## 2. Primer mecanismo operativo (VERIFICADO en canon.yaml)

`The First Sprout`:
1. **Seed**: idea, necesidad, pregunta o tensión con potencial.
2. **Desmalezar**: quitar ruido para descubrir/revelar patrones y abrir un claro; no imponer una respuesta.
3. **Habitat**: preparar un entorno coherente para que crezca la idea.
4. **Gestation**: permitir maduración antes de construir.
5. **Cultivation**: implementar, conectar, documentar y cuidar.
6. **Metamorphosis**: reconocer cuando la forma previa ya no alcanza y el concepto cambia de naturaleza.
7. **Fossil**: preservar pruebas del cómo y porqué de la evolución.

El `canon.yaml` define también estados `seed, growing, flourishing, pruning, harvest, reborn`; sistemas `canon, decision, evolution, knowledge, workstation, agent, model, integration, automation`; y eventos iniciales `seed_discovered, path_revealed, habitat_created, decision_accepted, metamorphosis_detected, fossil_preserved`.

**No confundir** ciclo conceptual, máquina de estados de software y eventos de dominio: sus contratos técnicos siguen por definir.

## 3. Revelaciones, principios y criterios de diseño

### ACEPTADO como dirección conceptual (pendiente de formalización técnica)

- **Tres preguntas:** «¿Qué revela? ¿Qué cultiva? ¿Qué transforma?». Usarlas para evaluar propuestas antes de escribir código. Si no hay respuestas, puede faltar maduración; no implica rechazar automáticamente trabajo de mantenimiento.
- **Preserved Revelation / Non-Redundant Cultivation:** no volver a desmalezar decisiones o entendimientos aceptados sin nueva evidencia, cambio de contexto o metamorfosis explícita. Preservar las razones de la evolución.
- **Una fuente de conocimiento, múltiples representaciones:** evitar duplicar manualmente el mismo conocimiento en Markdown, YAML, JSON y vistas. Una representación canónica persistida y adaptadores/manifestaciones derivadas.
- **Manifestation:** la semántica del conocimiento no debería depender de su presentación. JSON, HTML, Markdown, grafos, prompts o CLI son proyecciones según contexto. Esto **no** significa exportación automática a cualquier formato sin definir adaptadores; los formatos nuevos requieren implementaciones y pueden perder información si no se diseña el contrato.
- **Las analogías emergen de la arquitectura, no la gobiernan:** naturaleza es una maestra de principios, no un plano para copiar. Biología, ecología, permacultura, origami, bonsái, música, hospitalidad, filosofía, mitología, psicología y Lean/Kaizen son pozos de inspiración, no autoridades.
- **Origami:** complejidad emergente de reglas simples; reutilizar/recombinar antes de añadir componentes.
- **Bonsái:** podar complejidad sin perder esencia.
- **Rule of Roots:** lo fundamental no necesita ser lo más visible.
- **Gentle Return / Compass:** invitar a corregir rumbo mediante preguntas, no imponer obediencia.
- **Journey en lugar de roadmap rígido:** dirección evolutiva, horizonte orientador y decisiones revisables.
- **Arquitectura orientada a capacidades/patrones**, no a coleccionar herramientas.
- **Event-driven** como dirección preferida para desacoplar reacciones de sistemas; no existe todavía un bus de eventos verificado.

### Living Experience (LX) / Cognitive Architecture

La interfaz no solo debe informar; debe ayudar a alcanzar serenidad con atención, claridad cognitiva y ganas de continuar. El primer contacto transmite identidad antes que funcionalidad. Silencio visual, ritmo humano, movimientos sutiles y progresiva revelación reducen ruido, sin sedación ni distracción. «La primera lección se siente». «Una buena interfaz reduce el esfuerzo; una interfaz viva reduce el ruido». El usuario quiere que PadMe acompañe decisiones difíciles sin juzgar.

**Nombres explorados, NO necesariamente canonizados:** Contemplative Engineering, Engineering of Understanding/Revelation, Augmented Engineering/Humanity, PadMeForge, PadMeForce, «Contemplate. Reveal. Cultivate. Evolve.». No convertir slogans en identidad oficial sin decisión.

## 4. Knowledge Objects y evolución del modelo (historial fiel)

Secuencia de descubrimientos, **no** una sucesión de decisiones técnicas cerradas:

1. Documentos/archivos → conocimiento estructurado y trazable; Canon como «ADN conceptual» (analogía, no implementación).
2. **Knowledge Object**: la unidad semántica debe poder tener identidad, propósito, relaciones, estado e historia, independientemente del archivo.
3. **PadMe Entity Model (PEM)**: contrato común propuesto para entidades. Campos exploratorios:
   `identity {id,type,name,purpose}`,
   `life {stage,season,created,evolved}`,
   `meaning {reveals,cultivates,transforms}`,
   `relations {nourishes,depends_on,related_to}`,
   `memory {fossils,revelations,metamorphoses}`,
   `state {active,deprecated,experimental}`.
   **No hay schema definitivo ni validadores verificados.**
4. **Living Knowledge Object (LKO)**: nombre alternativo sugerido para enfatizar evolución, no aprobado como sustitución obligatoria de PEM.
5. **Living Knowledge Model / Kernel (LKM)**: separación propuesta entre conocimiento semántico y representaciones.
6. **Knowledge Nodes / Living Graph**: propuesta posterior de modelar relaciones como grafo. **No se debe asumir que «Node» sustituyó definitivamente a Object ni que el grafo sea ya la arquitectura aceptada.**
7. **Manifesters / interpreters**: adaptadores propuestos que generan vistas de un estado semántico; todavía no implementados.
8. **RFC-0001 Living Knowledge Graph**, «Seed Engine v0.0.1» y «Observatory conceptual» fueron propuestos, no creados ni aceptados formalmente en el historial disponible.

**Decisión provisional recomendada, no canónica:** persistencia legible como Markdown + frontmatter YAML para objetos narrativos; validación con schema; proyecciones JSON/HTML generadas. Antes de fijarlo, comprobar necesidades de consultas, diffs, integridad referencial, escala y sincronización. El usuario preguntó si el objeto podría manifestarse en formatos futuros: sí mediante adaptadores nuevos, **no por magia ni sin especificar la traducción**.

### Modelo de grafo propuesto

Nodo/objeto con identidad estable; relaciones tipadas; historia de cambios; estados; referencias a ADR/RFC/fósiles; proyecciones. Grafo como vista/índice derivado o como persistencia primaria es una **decisión pendiente**. Evitar diseñar primero «núcleo/citoplasma/ARN» por analogía biológica: solo introducir elementos que resuelvan necesidades demostradas.

## 5. Evolución visual y estado técnico

**VERIFICADO al 2026-11-11 mediante lectura del repositorio:**
- `canon.yaml` en raíz: Genesis 0.1.0, `operational_ecosystem`, First Sprout, sistemas, estados, eventos.
- `docs/00-foundation/Vision.md`: misión y Engineering Platform.
- `docs/09-decisions/ADR-0001-padme-as-engineering-platform.md`: Accepted.
- `terrarium/app.js`: arreglos de ciclo y sistemas **hardcodeados**, renderizados en DOM; no carga dinámica del Canon.

**Antecedentes de implementación narrados en el chat:** `docs/00-foundation/Dashboard.md`; `terrarium/index.html`, `terrarium/styles.css`, `terrarium/app.js`; otros ADR/fundación. Verificar archivos existentes antes de editar. El usuario vio Terrarium en navegador y aprobó la dirección estética.

**Genealogía:** Dashboard → Terrarium (primera ventana íntima/viva) → Observatory (posible vista amplia futura). No asumir Observatory implementado. Mejoras visuales propuestas: Current Bloom → Garden Status; Systems → Living Systems; Links → Canon; Operating Cycle → River of Evolution; habitats en vez de tarjetas, respiración visual sutil, navegación progresiva. **No afirmar que estén implementadas.**

**Tecnología:** prototipo HTML/CSS/JS local para validar identidad. Next.js/Vercel se consideró para fase web posterior, no como decisión final ni despliegue verificado. Preferencia: GitHub como memoria accesible desde distintos dispositivos; vistas y agentes comparten conocimiento. Un futuro engine debe producir estado para UI/CLI/compañeros sin duplicar datos; evitar que cada consumidor interprete YAML por su cuenta.

## 6. Evolution System: por qué existe y cómo registrar

El usuario pidió explícitamente «sacar fotos del caos», preservar el pensamiento y sus mutaciones, no solo un changelog de código. Ningún instante se elimina por haber sido superado: se documenta su función histórica. La memoria evita «volver en el tiempo» y reabrir lo resuelto sin motivo.

Categorías:
- **Revelation:** nuevo patrón comprendido.
- **Metamorphosis:** concepto transformado; documentar antes/después y causa.
- **Cultivation:** implementación concreta, ruta, commit y resultado comprobado.
- **Fossil / Snapshot:** evidencia fechada de un estado, incluidas incertidumbres y alternativas.
- **ADR:** decisión arquitectónica aceptada.
- **RFC:** propuesta bajo evaluación/gestación.
- **Supersession:** reemplazo explícito, sin borrar la idea anterior.

### Snapshot de consolidación — EV-0001 (2026-11-11)

**Revelaciones históricas:** plataforma más allá de workstation; conocimiento no equivalente a documento; Canon estructurado; tres preguntas; memoria evolutiva como primera clase; representación separada de semántica; experiencia contemplativa; manifestaciones contextuales; posibilidad de grafo relacional.

**Metamorfosis históricas:** Workstation→Platform→Operational Ecosystem; dashboard→Terrarium; documentación→Canon/Knowledge Objects; roadmap→Journey; herramientas/agentes→capacidades/companions; archivos→modelo semántico. Estas cadenas representan evolución del lenguaje y alcance, **no todas son cambios de código**.

**Pendientes relevantes:** especificar PEM mínimo; decidir representación canónica y modelo de relaciones; definir schemas/validadores y migraciones; crear primera instancia real; implementar loader/índice derivado; conectar Terrarium al estado; registrar decisiones mediante RFC/ADR; tests y documentación; investigar despliegue multiplataforma y coordinación multi-IA.

## 7. Protocolo obligatorio de colaboración entre IA

### 7.1 Inicio de sesión (READ FIRST)

1. Confirmar repositorio, rama, commit HEAD y estado de cambios; no asumir que la memoria conversacional está actualizada.
2. Leer `README.md`, `canon.yaml`, este documento, `docs/00-foundation/Vision.md`, ADR pertinentes, RFC activos y código afectado.
3. Determinar hechos verificados vs aceptados vs propuestos; citar rutas y commits cuando se hagan afirmaciones de implementación.
4. Declarar objetivo acotado y qué se pretende revelar/cultivar/transformar. Reutilizar decisiones previas; no volver a abrirlas por gusto.
5. Antes de cambios de arquitectura, comprobar impacto, compatibilidad, alternativas, riesgos y posibilidad de reversión.

### 7.2 Autoridad y fuente de verdad

- **Usuario humano:** decide prioridades y acepta cambios estratégicos.
- **GitHub:** memoria compartida, historial auditable y estado operativo.
- **Canon/ADRs aceptados:** autoridad de diseño vigente, sujetos a cambios explícitos documentados.
- **Código/tests:** evidencia del comportamiento implementado, no prueba automática de intención.
- **RFCs:** propuestas; no son órdenes ni hechos.
- **Chats de cualquier IA:** espacio de trabajo temporal, nunca autoridad exclusiva.

Ninguna IA debe proclamarse «dueña» de PadMe, reinterpretar silenciosamente decisiones, inventar aprobaciones ni reescribir historia. Si hay conflicto entre fuentes, documentar y solicitar resolución.

### 7.3 Coordinación y concurrencia

- Trabajar preferentemente en rama por tarea: `agent/<agente>/<tema>` o `feat/<tema>`. Verificar la política real del repo antes de aplicar convenciones.
- Un objetivo por PR; enlazar issue/RFC/ADR cuando exista.
- No editar simultáneamente los mismos archivos canónicos sin coordinación; antes de escribir, actualizar rama y comparar cambios.
- Evitar force-push, borrados destructivos y sobrescrituras de cambios ajenos.
- Resolver conflictos por significado, no solo por líneas: preservar ambas motivaciones y registrar decisión humana si afecta al Canon.
- En cambios pequeños directos a main, solo con autorización/política explícita y tras verificar HEAD; preferir PR para cambios estructurales.
- No registrar secretos, tokens, datos personales o credenciales en memoria, prompts o commits.

### 7.4 Contrato de trabajo y handoff

Al terminar una tarea, registrar en PR o archivo de seguimiento compartido:

```yaml
handoff:
  date: YYYY-MM-DD
  agent: "ChatGPT | Claude | Codex | otro"
  branch: "..."
  base_commit: "..."
  resulting_commit: "..."
  objective: "..."
  status: "done | partial | blocked | proposed"
  verified:
    - "hecho comprobado + ruta/test"
  decisions:
    - "id ADR/RFC o 'ninguna'"
  revelations:
    - "nuevo entendimiento; estado"
  metamorphoses:
    - "antes -> despues; razon"
  files_changed:
    - "ruta"
  tests:
    - "comando y resultado real"
  open:
    - "siguiente paso, dependencia o pregunta"
  risks:
    - "riesgo o 'ninguno identificado'"
```

No afirmar `done` sin evidencia. Si no hubo acceso de escritura, decirlo y proporcionar un parche/propuesta claramente marcado. Un agente receptor debe leer primero el handoff y contrastarlo con el repositorio actual.

### 7.5 Estados y control de decisiones

`seed → gestation → proposed/RFC → accepted/ADR → implemented → verified → evolving/superseded` es **flujo de trabajo recomendado**, no máquina de estados ya implementada. Una revelación no se vuelve automáticamente norma. Cambios de Canon requieren motivo, efectos, vínculo al antecedente y aprobación apropiada. Conservar fósiles y genealogía.

### 7.6 Criterios mínimos de aceptación

Un cambio está listo cuando:
- Tiene objetivo claro y relación con principios.
- No contradice silenciosamente Canon/ADRs.
- Tiene pruebas proporcionales y resultados reportados sin inventarlos.
- No introduce duplicaciones de fuente de verdad.
- Documenta cambios semánticos, decisiones y riesgos.
- Actualiza handoff y memoria evolutiva cuando hay descubrimientos o metamorfosis.
- Mantiene seguridad, privacidad y reversibilidad razonables.

### 7.7 Diferencias de criterio entre IA

**Se desea pluralidad de criterios, no uniformidad artificial.** Claude, Codex, ChatGPT y futuros agentes pueden proponer enfoques divergentes. Cada alternativa debe explicitar hipótesis, evidencias, ventajas, costes, riesgos y cómo se comprobaría. Registrar desacuerdos relevantes en RFC/ADR; nunca ocultarlos ni resolverlos reescribiendo el pasado. El humano decide cuando las alternativas afectan identidad, coste, seguridad o arquitectura.

## 8. Prompt de arranque para cualquier IA

> Estás colaborando en PadMe, un ecosistema de ingeniería y conocimiento en evolución. Tu primera acción es leer el repositorio `pablocollova/PadMe-AI-Workstation`, especialmente `canon.yaml`, `docs/00-foundation/Vision.md`, los ADR pertinentes y `docs/08-evolution/PADME-MEMORIA-Y-PROTOCOLO-MULTI-IA.md`. No dependas de recuerdos de chats. Distingue verificado, aceptado, propuesto, superado y pendiente. Conserva la genealogía de decisiones. Antes de proponer cambios responde: ¿qué revela, qué cultiva y qué transforma? Trabaja en tareas pequeñas, comprueba código y tests, usa rama/PR cuando corresponda, evita sobrescribir trabajos de otras IA, y deja handoff con commit, archivos, resultados, decisiones y pendientes. El modelo PEM/LKO/LKM/Knowledge Nodes/Living Graph sigue parcialmente en gestación: no lo declares implementado ni canonizado sin pruebas y decisión. Prioriza construir el mínimo sistema funcional de conocimiento y conectar el Terrarium con una fuente de verdad única. Presenta tu diagnóstico del estado real del repo y el siguiente incremento verificable antes de actuar.

## 9. Actualización de esta memoria

Actualizar este archivo cuando haya una metamorfosis importante o una corrección histórica. Para eventos frecuentes, crear registros fechados adicionales y enlazarlos aquí, en lugar de convertir este archivo en un log infinito. No borrar estados anteriores: anotar «superado por» y la evidencia. Cada IA debe dejar la memoria **más precisa**, no necesariamente más extensa.

**Próxima prioridad recomendada:** revisar el árbol completo y ADRs existentes; abrir RFC pequeño sobre contrato semántico y persistencia; implementar un primer Knowledge Object verificable con validación y proyección; conectar un primer dato del Terrarium sin hardcoding. Esto es una recomendación de continuidad, no una decisión ya aprobada.
