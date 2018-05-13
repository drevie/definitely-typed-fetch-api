export declare type fruit = 'apple' | 'orange' | 'banana';
export declare type blendStyle = 'smooth' | 'chunky';
export declare type size = 'small' | 'medium' | 'large';
export interface SmoothieOrder {
    fruit: fruit;
    blendStyle: blendStyle;
    size: size;
}
export interface SmoothieOrderResponse extends SmoothieOrder {
    smoothieOrders: SmoothieOrder[];
    orderNumber: number;
}
