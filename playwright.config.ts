import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  // Permite ejecución paralela
  fullyParallel: true,
  // Evita subir test.only por error
  forbidOnly: !!process.env.CI,
  // Reintentos
  retries: process.env.CI ? 2 : 0,
  // Requisito de la prueba técnica
  workers: 2,
  // Reporte HTML
  reporter: 'html',
  use: {
    // Aplicación bajo prueba
    baseURL: 'https://automationintesting.online',
    // Evidencias
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    // Timeout de navegación
    navigationTimeout: 30000,

    // Timeout de acciones
    actionTimeout: 15000,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
});