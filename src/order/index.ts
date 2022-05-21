import OrderState from "./state";

export default class Order {
    constructor(
        protected id: number,
        protected total: number,
        protected products: Array<string>,
        protected _state: OrderState = new OrderState
    ) {}

    get state(): OrderState {
        return this._state;
    }
}

