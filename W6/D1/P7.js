// Understanding path module and JSON module

const path=require("path");
// JSON is loaded as anormal JS object in commonJS
const appConfig=require("./support/app-config.json");
console.log("__dirname ",__dirname);
console.log("__filename ",__filename);
console.log("Application name: ",appConfig.appName);
console.log("Environment: ",appConfig.environment);
// join:adds all elements in a array to a string and separates by ,
console.log("Features: ",appConfig.features.join(", "));