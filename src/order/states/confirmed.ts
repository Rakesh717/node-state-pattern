import IOrderState from "./orderState";

export default class Confirmed extends IOrderState {
    color(): string {
        return "blue";
    }
}
