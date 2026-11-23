import { APIRequestContext } from '@playwright/test';

export class BookingClient {

    constructor(private request: APIRequestContext) {}

    async createBooking(payload: any) {
        return await this.request.post('/booking', {
            data: payload
        });
    }

    async getBooking(bookingId: number) {
        return await this.request.get(`/booking/${bookingId}`);
    }
}