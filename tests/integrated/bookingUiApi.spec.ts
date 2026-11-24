import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { BookingPage } from '../../pages/BookingPage';

test(
    'UI and API integrated booking flow',
    async ({ page }) => {
        const homePage = new HomePage(page);
        const bookingPage = new BookingPage(page);
        await homePage.open();

        // Flujo pendiente debido a
        // error identificado en el backend

    }
);