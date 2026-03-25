// Reading and writing files asynchronously with callbacks
const fs=require("fs");
const path=require("path");
const filePath=path.join(__dirname,"async-note.txt");

// To wrrite to a file
fs.writeFile(filePath,"This is written synchronously using writeFile().",
    function(writeError){
        if(writeError){
            console.log("Write error: ",writeError.message);
            return;
        }
        console.log("file written asynchronously.");
});
// Read from a file
const content=fs.readFile(filePath,"utf-8",
    function(readError,content){
        if(readError){
        console.log("Read error: ",readError.message);
        return;
    }
    console.log(content);
});
console.log("Script continues while file operations are in progress")