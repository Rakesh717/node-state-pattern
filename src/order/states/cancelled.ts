import IOrderState from "./orderState";

export default class Cancelled extends IOrderState {
    color(): string {
        return "red";
    }
}
