// Validation and schema constraints
const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{type:Number,min:18},
    role:{type:String,
        enum:["admin","user","manager"]
    },
    email:{
        type:String,
        // . indicates multiple occurence while + indicates single occurence
        match:/.+@.+\..+/
        // word@domainname.com.co.in/.org/.edu.in
    }
});
const User=mongoose.model("HookValidationUser",userSchema);
async function runValidationDemo(){
    try{
        const invalidUser=new User({
            age:15,
            role:"guest",
            email:"notValidEmail"
        });
        // await invalidUser.validate();
        const validUser=new User({
            name:"Rajeshwari",
            age:21,
            role:"user",
            email:"r@r.com"
        });
        await validUser.validate();
    }
    catch(error){
        console.log("Validation errors found:");
        for(const fieldName in error.errors){
            console.log(fieldName+":"+error.errors[fieldName].message);
        }
    }
}
runValidationDemo();