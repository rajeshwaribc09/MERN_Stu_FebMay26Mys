// Basics of embedding and referencing
const mongoose=require("mongoose");
async function main(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
        console.log("Connected to MongoDB");
        const orderSchema=new mongoose.Schema({
            product:String,
            price:Number
        });
        const userSchema=new mongoose.Schema({
            name:String,
            orders:[orderSchema] //embedded document
        });
        const User=mongoose.model('User',userSchema);
        const embeddedUser=await User.create({
            name:"Rajeshwari",
            orders:[
                {product:"Laptop",price:50000},
                {product:"printer",price:10000},
                {product:"projector",price:70000}
            ]
        });
        console.log("Users:\n");
        console.log(await User.find()); //used to fetch one user model
        // console.log("user:",embeddedUser); only fetches one user related data

        const users=await User.find().lean();
        console.log(JSON.stringify(users,null,2));

        // Referencing
        const userRefSchema=new mongoose.Schema({
            name:String
        });
        const orderRefSchema=new mongoose.Schema({
            product:String,
            price:Number,
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'UserRef'
            }
        });
        const UserRef=mongoose.model('UserRef',userRefSchema);
        const OrderRef=mongoose.model('OrderRef',orderRefSchema);

        const refUser=await User.create({name:"Rajeshwari"});
        await OrderRef.create([
            {product:"Phone",price:70000,user:refUser._id},
            {product:"Charger",price:2000,user:refUser._id}
        ]);
        // console.log("Referenced orders");
        // console.log(await OrderRef.find().populate('user'));
    }
    catch(error){
        console.log("Error:",error.message);
    }
    finally{
        await mongoose.disconnect();
        console.log("Disconnected from DB.");
    }
}
main();