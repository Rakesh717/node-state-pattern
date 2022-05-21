import Order from "./order";
import Confirmed from "./order/states/confirmed";

let order = new Order(1, 120, ["Tshirt", "Pant", "Shoe"]);

let color = order.state.transitionTo(new Confirmed()).color;

console.log(color);
