//JWT flow with login, refresh-style login and secure verification
const express = require("express");

const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const secretKey = "Mysecretkey";
const refreshSecretKey = "MyNewsecretkey";
// in memory storage for refresh token
const refreshTokens = [];

function authenticateAccessToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Bearer token is missing"
        });
    }
    try {
        req.user = jwt.verify(token, secretKey, {
            algorithms: ["HS256"],
            issuer: "jwt-example"
        });
        next();
    }
    catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Access token has expired"
            });
        }
        return res.status(401).json({
            success: false,
            message: "Access token is invalid"
        });
    }
}
app.post("/login", function (req, res) {
    const { email, password } = req.body;
    if (email !== "email@email.com" || password !== "pass@123") {
        return res.status(401).json({
            success: false,
            message: "Invalid Credentials."
        });
    }
    const accessToken = jwt.sign({
        userId: 101,
        email: email,
        role: "member"
    }, secretKey, { expiresIn: "10m", algorithm: "HS256", issuer: "jwt-example" });
    const refreshToken = jwt.sign({
        userId: 101,
        email: email
    }, refreshSecretKey, {
        expiresIn: "10d",//d:days m:mins h:hour
        algorithm: "HS256", issuer: "jwt-example"
    }
    );
    refreshTokens.push(refreshToken);
    res.json({
        success: true,
        message: "Login successful",
        accessToken: accessToken,
        refreshToken: refreshToken
    });
});
app.post("/refresh", function (req, res) {
    const { refreshToken } = req.body;
    if (!refreshToken || !refreshTokens.includes(refreshToken)) {
        return res.status(401).json({
            success: false, message: "Refresh token is missing or invalid"
        });
    }
    try {
        const decoded = jwt.verify(refreshToken, refreshSecretKey, {
            algorithms: ["HS256"],
            issuer: "jwt-example"
        });
        const newAccessToken = jwt.sign({
            useId: decoded.userId,
            email: decoded.email,
            role: "member"
        }, secretKey, {
            expiresIn: "15m",
            algorithm: "HS256",
            issuer: "jwt-example"
        });
        res.json({
            success: true,
            message:"Token refreshed Successfully",
            accessToken: newAccessToken
        });
    }
    catch (error) {
        res.status(403).json({
            success: false,
            message: "Refresh token verification failed."
        });
    }
});
app.get("/me",authenticateAccessToken,function(req,res){
    res.json({
        success:true,
        message:"Protected user route",
        user:req.user
    });
});
app.listen(4000,function(){
    console.log("JWT demo server running @ http://localhost:4000");
});


// curl -X POST http://localhost:4000/login -H "Content-Type: application/json" -d "{\"email\":\"email@email.com\",\"password\":\"pass@123\"}" for login
// curl -X POST http://localhost:4000/refresh -H "Content-Type: application/json" -d "{\"refreshToken\":\"eyJhbG
// ciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJpYXQiOjE3NzUxMTIwMTksImV4cCI6MTc3NTk3NjAxOSwiaXNzIjoiand0LWV4Y
// W1wbGUifQ.2h_r1Bvs_eWOXhTrBmxt0VegIygAGtgGfDJ7SzEqkKM\"}"  for refresh


// curl http://localhost:4000/me -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VJZCI6MTAxLCJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsInJvbGUiOiJtZW1iZXIiLCJpYXQiOjE3NzUxMTQyNTYsImV4cCI6MTc3NTExNTE1NiwiaXNzIjoiand0LWV4YW1wbGUifQ.ztf09PkwrLxCKylqu0b-YWqpbZNKl4CfTWJdgWbYnJ4"   