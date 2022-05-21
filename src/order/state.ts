import Cancelled from "./states/cancelled";
import Confirmed from "./states/confirmed";
import Delivered from "./states/delivered";
import IOrderState from "./states/orderState";
import Pending from "./states/Pending";
import Returned from "./states/returned";

export default class OrderState  {
    protected table = new WeakMap<typeof IOrderState, typeof IOrderState[]>();

    constructor(protected state: IOrderState = new Pending) {
        this.state = state;

        this.table.set(Pending, [Confirmed, Cancelled]);
        this.table.set(Confirmed, [Delivered, Cancelled]);
        this.table.set(Delivered, [Returned]);
        this.table.set(Returned, []);
    }

    transitionTo(state: IOrderState): OrderState {
        let currentType: typeof IOrderState =
            this.state.constructor.prototype.constructor;
        let newType: typeof IOrderState =
            state.constructor.prototype.constructor;

        if ((this.table.get(currentType) || []).includes(newType)) {
            this.state = state;

            return this;
        }

        throw new Error(
            `Cannot transition state from ${this.state.constructor.name} to ${state.constructor.name}`
        );
    }

    color(): string {
        return this.state.color();
    }
}
