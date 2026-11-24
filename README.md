Prueba Técnica - Quality Engineer
Descripción
Automatización desarrollada con Playwright y TypeScript para validar funcionalidades de la plataforma Restful Booker.

La solución incluye:

Escenario API positivo.
Escenario API negativo.
Datos sintéticos mediante Faker.
Parametrización de escenarios.
Arquitectura basada en clientes API.
Skill para guiar la generación de pruebas asistidas por IA.
Tecnologías utilizadas
Playwright
TypeScript
Faker
Node.js
Estructura del proyecto
api/
data/
fixtures/
pages/
skills/
tests/
utils/
api
Contiene los clientes para consumir los servicios REST.

data
Contiene datos de prueba.

tests
Contiene los escenarios automatizados.

skills
Contiene la definición de la Skill utilizada para trabajar con IA.

utils
Contiene utilidades y generación de datos sintéticos.

Instalación
npm install
Ejecución
Ejecutar todas las pruebas:

npx playwright test
Ejecutar únicamente Chromium:

npx playwright test --project=chromium
Reporte
Visualizar reporte HTML:

npx playwright show-report
Escenarios implementados
API Exitosa
Validaciones realizadas:

Autenticación.
Obtención de token.
Creación de reserva.
Validación de nombre.
Validación de apellido.
Validación de habitación.
Validación de fechas.
Validación de código HTTP 201.
API Negativa
Validaciones realizadas:

Número telefónico inválido.
Código HTTP 400.
Mensaje de error esperado.
Parametrización
El escenario de creación de reserva fue parametrizado utilizando dos conjuntos de datos diferentes y datos sintéticos generados con Faker.

Hallazgos encontrados
HALLAZGO-001
Endpoint:

GET /api/room/1
Resultado observado:

500 Internal Server Error
HALLAZGO-002
Endpoint:

GET /api/booking/{id}
Resultado observado:

500 Internal Server Error
Impacto:

No fue posible completar la consulta de la reserva creada utilizando el endpoint documentado.

HALLAZGO-003
Validación del atributo phone.

Restricción encontrada:

Longitud mínima: 11
Longitud máxima: 21
HALLAZGO-004
Validación de disponibilidad.

Resultado observado:

409 Conflict
cuando una habitación ya posee reserva para las fechas seleccionadas.

Uso de IA
Se implementó un archivo:

SKILL.md
para definir:

Convenciones del proyecto.
Estructura de carpetas.
Reglas para automatización API.
Criterios de éxito.
Manejo de errores.
La Skill se utilizó para apoyar la construcción de la solución manteniendo una arquitectura consistente.

Casos adicionales propuestos
Caso 1
Reserva sobre fechas ocupadas.

Riesgo cubierto:

Overbooking
Caso 2
Consulta de reserva inexistente.

Riesgo cubierto:

Manejo incorrecto de errores
Caso 3
Email inválido.

Riesgo cubierto:

Información inconsistente del huésped
Skills adicionales propuestas
API Contract Validator
Propósito:

Validar contratos REST y detectar cambios de esquema.

Prioridad:

Alta.

Test Data Generator
Propósito:

Generar datos sintéticos para automatización.

Prioridad:

Alta.

Bug Report Generator
Propósito:

Generar defectos automáticamente a partir de evidencias de ejecución.

Prioridad:

Media.