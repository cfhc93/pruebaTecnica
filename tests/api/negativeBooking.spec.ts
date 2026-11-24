import { expect, test } from '@playwright/test';
import { AuthClient } from '../../api/AuthClient';
import { BookingClient } from '../../api/BookingClient';
import { invalidBookingData } from '../../data/invalidBookingData';

test('Should reject booking with invalid phone number', async ({ request }) => {

    const authClient = new AuthClient(request);
    const bookingClient = new BookingClient(request);
    const authResponse = await authClient.login();

    expect(authResponse.status()).toBe(200);
    const authBody = await authResponse.json();
    const token = authBody.token;
    const createResponse = await bookingClient.createBooking(
        invalidBookingData,
        token
    );
    expect(createResponse.status()).toBe(400);
    const responseBody = await createResponse.json();
    expect(responseBody.errors[0]).toContain(
        'size must be between 11 and 21'
    );

});