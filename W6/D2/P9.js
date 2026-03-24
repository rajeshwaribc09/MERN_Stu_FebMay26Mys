// Removing EventEmitter listeners
const EventEmitter=require("events");

const jobEmitter=new EventEmitter();

function showJobProgress(status){
    console.log("Job status: ",status);
}

// Add listener
jobEmitter.on("progress",showJobProgress);

// Emit the event
jobEmitter.emit("progress","50% completed");

// Remove the listener
jobEmitter.off("progress",showJobProgress);

// Emit the event
jobEmitter.emit("progress","100% completed");