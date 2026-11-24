import { faker } from '@faker-js/faker';

export function generateBookingData() {
    return {
        roomid: faker.number.int({
            min: 2,
            max: 5
        }),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        depositpaid: true,
        email: faker.internet.email(),
        phone: '30012345678',
        bookingdates: {
            checkin: '2040-01-10',
            checkout: '2040-01-12'
        }
    };
}