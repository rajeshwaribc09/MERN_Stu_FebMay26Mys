// Using the EventEmitter class
const EventEmitter=require("events");

// create a new event emitter instance
// This object can publish event and allow listeners
// to subscribe
const orderEmitter=new EventEmitter();

// Register a listener for the "orderplaced" event.
// whenever the event is emitted,the function will execute
// once() registers a listener that automatically removes itself after running for the first time.
orderEmitter.once("OrderPlaced",function(orderId,name,orderValue){
    console.log("Bill amount:",orderValue);
    console.log("waiting for restaurant to accept the order. ",orderId)
});


orderEmitter.on("OrderPlaced",function(orderId,customerName){
    console.log("Hello",customerName);
    console.log("Restaurant accepted order. ",orderId)
});

orderEmitter.on("OrderPlaced",function(orderId,customerName){
    console.log("Hello",customerName);
    console.log("Assigning delivery partner. ",orderId)
});

orderEmitter.on("OrderPlaced",function(orderId,customerName){
    console.log("Hello",customerName);
    console.log("Ramesh is delivering your order. ",orderId)
});

// Emit the event with extra data
// The listener receives the orderId value.
orderEmitter.emit("OrderPlaced","ORD-2403001","Rajeshwari",1000);
orderEmitter.emit("OrderPlaced","ORD-2403001","Rajeshwari",1000);