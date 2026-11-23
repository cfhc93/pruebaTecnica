Playwright Booking Automation Skill
Purpose
Implement API and UI tests for the Restful Booker Platform using Playwright.

Technology
Playwright Test
TypeScript
Page Object Model (POM)
Project Structure
/api /pages /fixtures /data /tests

API Rules
Create API clients under /api
Validate status code
Validate response body
Avoid duplicated code
UI Rules
Use Page Objects
Store locators inside page classes
Use stable locators
Do not use waitForTimeout()
Fixtures Rules
Reuse common setup
Keep tests independent
Validation Commands
npx playwright test

npx playwright show-report

Success Criteria
Tests pass successfully
Assertions are implemented
HTML report generated
Evidence available
Error Handling
Verify API contract.
Verify locators.
Document observed behavior.
Do not weaken assertions.