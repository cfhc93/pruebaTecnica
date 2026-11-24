import { APIRequestContext } from '@playwright/test';

export class BookingClient {

    constructor(private request: APIRequestContext) {}
    async createBooking(payload: any, token: string) {
        console.log('REQUEST BODY:');
        console.log(JSON.stringify(payload,null,2) );
        return await this.request.post('/api/booking/',
            {
                headers: {Cookie: `token=${token}`}, data: payload
            }
        );
    }
    async getBooking(id: number) {
        return await this.request.get(`/api/booking/${id}`);
    }
}