# definitely-typed-fetch-api
A Node.js module that provides a typesafe wrapper class around the fetch api that is easily extendable
## Installation 
```sh
npm install definitely-typed-fetch-api --save
yarn add definitely-typed-fetch-api
bower install definitely-typed-fetch-api --save
```
## Usage
### TypeScript
```typescript
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
```
```sh
Output should be 'Geese'
```
### AMD
```javascript
define(function(require,exports,module){
  var pluralise = require('mypluralize');
});
```
## Test 
```sh
npm run test
```
