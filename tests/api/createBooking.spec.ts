import { expect, test } from '@playwright/test';
import { AuthClient } from '../../api/AuthClient';
import { BookingClient } from '../../api/BookingClient';
import { generateBookingData } from '../../utils/BookingDataGenerator';

const bookingDataList = [
    generateBookingData(2),
    generateBookingData(3)
];

for (const [index, data] of bookingDataList.entries()) {

    test(`Create booking dataset ${index + 1}`,
        async ({ request }) => {
            const authClient =new AuthClient(request);
            const bookingClient = new BookingClient(request);
            const authResponse =await authClient.login();
            expect(authResponse.status()).toBe(200);
            const authBody = await authResponse.json();
            const token = authBody.token;
            const createResponse = await bookingClient.createBooking(data,token);
            console.log('CREATE STATUS:',createResponse.status());
            if (createResponse.status() === 409 ) {
                console.log('Room already booked in shared environment');
                return;
            }
            expect(createResponse.status()).toBe(201);
            const bookingBody =await createResponse.json();
            expect(bookingBody.firstname).toBe(data.firstname);
            expect(bookingBody.lastname).toBe(data.lastname);
            expect(bookingBody.roomid).toBe(data.roomid);
            expect(bookingBody.depositpaid).toBe(data.depositpaid);
            expect(bookingBody.bookingdates.checkin).toBe(data.bookingdates.checkin);
            expect(bookingBody.bookingdates.checkout).toBe(data.bookingdates.checkout);
        }
    );
}
