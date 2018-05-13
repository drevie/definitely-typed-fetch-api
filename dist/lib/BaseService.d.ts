export declare type method = 'GET' | 'POST' | 'PUT' | 'DELETE';
declare abstract class BaseService<T> {
    private requestInit;
    private serviceContext;
    constructor(_serviceContext?: string, _requestInit?: RequestInit);
    protected setServiceContext(context: string): void;
    protected getServiceContext(): string;
    protected getHeaders(): Headers;
    protected buildRequest(url: string, method: method, body?: string): Request;
    protected get(url: string): Promise<T>;
    protected post<P>(url: string, payload: P): Promise<T>;
    protected update<P>(url: string, payload: P): Promise<T>;
    protected delete(url: string): Promise<T>;
}
export default BaseService;
