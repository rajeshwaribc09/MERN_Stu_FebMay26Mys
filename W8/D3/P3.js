// Pre-remove hook
const mongoose=require("mongoose");
const { title } = require("node:process");
async function runRemoveHookDemo(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/hooks");
        const courseSchema=new mongoose.Schema({
            title:String,
            tag:String
        });
        courseSchema.pre("deleteOne",{
            document:true,query:false
        },function(){
            console.log("Pre delete hook,",this.title,);
        },);
        const course=mongoose.models.HookCourse || mongoose.model("HookCourse",courseSchema);

        const Course=new course({
            title:"Database design basics",
            tag:"remove-hook-demo",
        });
        await Course.save();
        console.log("Document saved successfully");

        // const deleted=await course.findByIdAndDelete("69dddf853c16fc97f640aaf2");
        // console.log("deleted");

        await Course.deleteOne({title:"Database design basics"});
        console.log("Document deleted successfully");

        await mongoose.connection.close();
        console.log("Connection closed")
    }
    catch(error){
        console.log("Remove hook error",error.message);
    }
}
runRemoveHookDemo();