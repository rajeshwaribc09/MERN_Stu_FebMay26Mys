const express=require("express");
const router=express.Router();
const bookingController=require("../controllers/booking.controller");
const {protect}=require("../middleware/auth.middleware");

// user booking route
router.post("/",protect,bookingController.createBooking);
router.get("/my",protect,bookingController.getMyBookings);
router.post("/",protect,bookingController.cancelBooking);

module.exports=router;