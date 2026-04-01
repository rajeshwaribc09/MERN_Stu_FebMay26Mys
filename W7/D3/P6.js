// generating token using login function and verifying the token
const jwt=require("jsonwebtoken");
const secretKey="monkey123";
const wrongsecretKey="man123";
function loginUser(email,password){
    if(email==="correct@email.com" && password==="mp123"){
        const token=jwt.sign({
            userId:101,
            email:email,
            role:"student"
        },secretKey,{expiresIn:"1h"});
        return{
            success:true,
            token:token
        };
    }
     return{
            success:false,
            message:"Invalid credentials"
        };
}
const loginResult=loginUser("correct@email.com","mp123");
console.log("login result",loginResult);

if(loginResult){
    try{
        const verfiedPayload=jwt.verify(loginResult.token,wrongsecretKey);
        console.log("Verified payload:",verfiedPayload);
    }
    catch(error){
    console.log("Verification failed",error.message);
}
}