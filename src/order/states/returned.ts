import IOrderState from "./orderState";

export default class Returned extends IOrderState {
    color(): string {
        return "green";
    }
}
