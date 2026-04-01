// JWT fundamentals:token generation and verification
// npm install jsonwebtoken
const jwt=require("jsonwebtoken");
const secretKey="monkey123";

// Payload holds small sensitive data
const payload={
    userId:101,
    role:"member"
};
// jwt.sign() creates a signed jwt token
const token=jwt.sign(payload,secretKey,{expiresIn:"1h"});
console.log("Token generated successfully\n",token);

const tokenParts=token.split(".");
console.log("Header section:",tokenParts[0]);
console.log("Payload section:",tokenParts[1]);
console.log("Signature section:",tokenParts[2]);
console.log("JWT part count:",tokenParts.length);
// const newSecretKey="donkey123";
try{
    // jwt.verify() checks trust,signature and expiration
    const verfiedPayload=jwt.verify(token,secretKey);
    // invalid token when we put newSecertKey
    console.log("Verified payload:",verfiedPayload);
}
catch(error){
    console.log("Verification failed",error.message);
}
const decodeWithoutVerification=jwt.decode(token);
console.log("Decoded token:",decodeWithoutVerification);