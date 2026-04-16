// Timestamp and advanced queries
const mongoose = require("mongoose");
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/datedb");
        console.log("Connected to MongoDB");
        const demoSchema = new mongoose.Schema(
            {
                name: String,
            },
            {
                timestamps: true
            }
        );
        const Model = mongoose.model('LogTime', demoSchema);
        // await Model.deleteMany();
        // const data = await Model.create([
        //     { name: "Amar" },
        //     { name: "Meera" },
        //     { name: "Siddarth" }
        // ]);
        // console.log("data",data);

        const recent=await Model.find({
            createdAt:{
                $gte:new Date(Date.now()-900000)
            }
        }).sort({createdAt:-1});
        console.log("Recent:",recent);
    }
    catch (error) {
        console.error("Error:", error.message);
    }
    finally {
        await mongoose.disconnect();
        console.log("Disconnected from DB.");
    }
}
main();