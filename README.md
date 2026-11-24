Prueba Técnica - Quality Engineer
Descripción
Automatización desarrollada con Playwright y TypeScript para validar funcionalidades API de Restful Booker.

Tecnologías
Playwright
TypeScript
Faker
Node.js
Instalación
npm install

Ejecución
npx playwright test

Reporte
npx playwright show-report

Escenarios implementados
API Exitosa
Login
Obtención de token
Creación de reserva
Validación de datos de negocio
API Negativa
Número telefónico inválido
Validación HTTP 400
Validación mensaje de error
Hallazgos encontrados
HALLAZGO-001
GET /api/room/1

Resultado observado:

500 Internal Server Error

HALLAZGO-002
GET /api/booking/{id}

Resultado observado:

500 Internal Server Error

HALLAZGO-003
Validación del atributo phone.

Mínimo 11 caracteres
Máximo 21 caracteres
HALLAZGO-004
Validación de disponibilidad.

Resultado observado:

409 Conflict

cuando una habitación ya se encuentra reservada.

Casos adicionales propuestos
Caso 1
Reserva sobre fechas ocupadas.

Riesgo: Overbooking.

Caso 2
Consulta de reserva inexistente.

Riesgo: Manejo incorrecto de errores.

Caso 3
Email inválido.

Riesgo: Información inconsistente del huésped.

Skills adicionales propuestas
API Contract Validator
Validar contratos REST.

Test Data Generator
Generar datos sintéticos.

Bug Report Generator
Generar defectos a partir de evidencias Playwright.

Uso de IA
Se implementó un archivo SKILL.md para definir convenciones de automatización, estructura del proyecto, validaciones y manejo de errores.