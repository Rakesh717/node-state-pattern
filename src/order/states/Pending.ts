import IOrderState from "./orderState";

export default class Pending extends IOrderState {
    color(): string {
        return "purple";
    }
}
