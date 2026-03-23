// Basics of NodeJS Modules
const moduleTitle="NodeJS module basics";
function describeModule(){
    console.log("This file is its own Module");
    console.log("Title: ",moduleTitle);
    console.log("Local values stay inside the files unless exported");
}
describeModule(); //invoking the function