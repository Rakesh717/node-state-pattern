import IOrderState from "./orderState";

export default class Delivered extends IOrderState {
    color(): string {
        return "green";
    }
}
