import { faker } from '@faker-js/faker';

export function generateBookingData(roomid: number) {
    const checkInDate = faker.date.soon({days: 120});
    const checkOutDate = new Date(checkInDate);
    checkOutDate.setDate(checkOutDate.getDate() + 2);
    return {
        roomid,
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        depositpaid: true,
        email: faker.internet.email(),
        phone: `57${faker.string.numeric(10)}`,
        bookingdates: {
            checkin: checkInDate
                .toISOString()
                .split('T')[0],
            checkout: checkOutDate
                .toISOString()
                .split('T')[0]
        }
    };
}
