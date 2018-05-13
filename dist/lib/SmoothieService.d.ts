import { BaseService } from '..';
import { SmoothieOrderResponse, SmoothieOrder } from './smoothieServiceTypes';
declare class SmoothieService extends BaseService<SmoothieOrderResponse> {
    constructor();
    getSmoothieOrders(): Promise<SmoothieOrderResponse>;
    createNewSmoothieOrder(order: SmoothieOrder): Promise<SmoothieOrderResponse>;
    modifySmoothieOrder(order: SmoothieOrderResponse): Promise<SmoothieOrderResponse>;
    deleteSmoothieOrder(orderId: string): Promise<SmoothieOrderResponse>;
}
export default SmoothieService;
