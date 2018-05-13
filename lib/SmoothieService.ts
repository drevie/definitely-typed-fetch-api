import { BaseService } from '..';
import { SmoothieOrderResponse, SmoothieOrder } from './smoothieServiceTypes';

class SmoothieService extends BaseService<SmoothieOrderResponse> {

    constructor() {
        super('www.smoothiecentral.com');
    }

    public async getSmoothieOrders(): Promise<SmoothieOrderResponse> {
        return await this.get(`${this.getServiceContext()}/smoothie/orders`);
    }

    public async createNewSmoothieOrder(order: SmoothieOrder): Promise<SmoothieOrderResponse> {
        return await this.post(`${this.getServiceContext()}/smoothie/createorder`, order);
    }

    public async modifySmoothieOrder(order: SmoothieOrderResponse): Promise<SmoothieOrderResponse> {
        return await this.update(`${this.getServiceContext()}/smoothie/createorder`, order);
    }

    public async deleteSmoothieOrder(orderId: string): Promise<SmoothieOrderResponse> {
        return await this.delete(`${this.getServiceContext()}/smoothie/deleteorder/${orderId}`);
    }
}

export default SmoothieService;