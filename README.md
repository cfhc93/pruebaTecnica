Prueba Técnica - Quality Engineer
Descripción
Automatización desarrollada con Playwright y TypeScript para validar funcionalidades de la plataforma Restful Booker.

La solución implementa:

Escenario API positivo.
Escenario API negativo.
Parametrización de escenarios.
Datos sintéticos mediante Faker.
Arquitectura basada en API Clients.
Skill para soporte de IA.
Tecnologías utilizadas
Playwright
TypeScript
Faker
Node.js
Arquitectura
api/
├── AuthClient.ts
└── BookingClient.ts

data/
└── invalidBookingData.ts

tests/
├── api/
│   ├── createBooking.spec.ts
│   └── negativeBooking.spec.ts
│
├── integrated/
│   └── bookingUiApi.spec.ts
│
└── ui/

utils/
└── BookingDataGenerator.ts

skills/
└── SKILL.md
AuthClient
Centraliza la autenticación y obtención de token.

BookingClient
Centraliza las operaciones REST relacionadas con reservas.

Tests
Contiene los escenarios automatizados.

Utils
Contiene generación de datos sintéticos mediante Faker.

Skills
Contiene la definición utilizada para guiar la implementación asistida por IA.

Instalación
npm install
Ejecución
Ejecutar todas las pruebas:

npx playwright test
Ejecutar únicamente Chromium:

npx playwright test --project=chromium
Reportes
npx playwright show-report
Escenarios implementados
Escenario API Exitosa
Validaciones realizadas:

Login exitoso.
Obtención de token.
Creación de reserva.
Validación de firstname.
Validación de lastname.
Validación de roomid.
Validación de fechas.
Validación de código HTTP 201.
Escenario API Negativa
Validaciones realizadas:

Número telefónico inválido.
Respuesta HTTP 400.
Mensaje de validación esperado.
Parametrización
El escenario de creación de reservas fue parametrizado utilizando dos conjuntos de datos.

Se utilizó Faker para generar:

firstname
lastname
email
permitiendo ejecutar las pruebas con datos sintéticos y reduciendo dependencia de datos estáticos.

Escenario UI + API
Se construyó la estructura inicial basada en Page Object Model para soportar el escenario integrado UI + API.

Durante la exploración manual y técnica se identificó una limitación del ambiente:

Endpoint afectado
GET /api/room/{id}
Resultado observado
500 Internal Server Error
Impacto
La interfaz no logra completar la carga del detalle de la habitación y permanece en estado de procesamiento indefinido.

Debido a esta limitación no fue posible completar la automatización del flujo integrado UI + API utilizando el ambiente disponible.

La evidencia fue documentada y se continuó con la validación mediante pruebas API.

Hallazgos encontrados
HALLAZGO-001
Endpoint

GET /api/room/1
Resultado observado

500 Internal Server Error
Impacto

No fue posible consultar correctamente el detalle de una habitación.

HALLAZGO-002
Endpoint

GET /api/booking/{id}
Resultado observado

500 Internal Server Error
Impacto

No fue posible completar la consulta de una reserva creada mediante el endpoint documentado.

HALLAZGO-003
Validación del atributo phone

Restricción identificada:

Mínimo: 11 caracteres
Máximo: 21 caracteres
Cuando no se cumple la restricción:

400 Bad Request
HALLAZGO-004
Validación de disponibilidad

Resultado observado:

409 Conflict
cuando una habitación ya se encuentra reservada para las mismas fechas.

Uso de IA
Se implementó un archivo:

SKILL.md
para definir:

Convenciones del proyecto.
Estructura de carpetas.
Reglas de automatización.
Criterios de validación.
Manejo de errores.
Evidencia de uso de IA
La Skill fue utilizada para apoyar la generación y revisión de:

AuthClient.
BookingClient.
Escenario API positivo.
Escenario API negativo.
Estructura del escenario UI + API.
Organización de la arquitectura del proyecto.
Todo el código generado fue revisado manualmente antes de incorporarse al proyecto.

Casos adicionales propuestos
Caso 1: Reserva sobre fechas ocupadas
Riesgo cubierto

Overbooking.

Caso 2: Consulta de reserva inexistente
Riesgo cubierto

Manejo incorrecto de errores.

Caso 3: Email inválido
Riesgo cubierto

Información inconsistente del huésped.

Skills adicionales propuestas
API Contract Validator
Propósito

Detectar cambios en contratos REST y estructuras de respuesta.

Usuario

QA y desarrolladores.

Entradas

Swagger/OpenAPI.

Salida

Reporte de diferencias.

Prioridad

Alta.

Test Data Generator
Propósito

Generar datos sintéticos reutilizables para automatización.

Usuario

QA Automation.

Entradas

Reglas de negocio.

Salida

Datos válidos para pruebas.

Prioridad

Alta.

Bug Report Generator
Propósito

Generar reportes de defectos a partir de logs, screenshots y reportes de Playwright.

Usuario

QA.

Entradas

Resultados de ejecución.

Salida

Reporte listo para Jira o Azure DevOps.

Prioridad

Media.

Tiempo invertido
Tiempo aproximado:

8 horas.

Distribución:

Configuración inicial: 1 hora.
Investigación del sistema: 1.5 horas.
Automatización API positiva: 2 horas.
Automatización API negativa: 1 hora.
Parametrización y Faker: 1 hora.
Documentación y evidencias: 1.5 horas.
Pendientes
Completar escenario UI + API cuando el endpoint GET /api/room/{id} se encuentre disponible.
Completar validación de consulta de reserva cuando GET /api/booking/{id} retorne información correctamente.
Implementar fixtures reutilizables para autenticación.