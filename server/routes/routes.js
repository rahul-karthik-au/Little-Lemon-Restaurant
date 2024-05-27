import express from "express";
import db from "../db/connection.js";

const router=express.Router();



router.get("/top_dishes",async(req,res)=>{
    try{
        const query={}
        const sort={Qty_Sold:-1}
        const limit=3
        let collection=await db.collection("Dishes")
        let result=await collection.find(query).sort(sort).limit(limit).toArray()
        res.send(result).status(200)
    }
    catch(err){
        res.status(500).send("Error in retriving booking history")
    }
})

router.get("/:email",async(req,res)=>{
    try{
        let collection = await db.collection("User_Table")
        const query={ Email: req.params.email }
        let result=await collection.findOne(query)
        if (!result) {
            res.status(204)
        }
        res.send(result).status(200)   
    }
    catch(err){
        console.log(err)
    }
})

router.post("/", async(req,res)=>{
    try{
        let collection = await db.collection("User_Table")
        const query={ Email: req.body.email }
        const userAvailable = await collection.findOne(query);
        if (userAvailable) {
            res.sendStatus(204)
        }
        else{
            let newUser={
                Email:req.body.email,
                Password:req.body.password
            }
            let result=await collection.insertOne(newUser)
            res.send(result).status(200)
        }
    }
    catch(err){
        res.status(500).send("Error in Registering User")
    }
})

router.post("/table_reservation",async(req,res)=>{
    try {
        let newBooking={
            User:req.body.email,
            Date:req.body.date,
            Time:req.body.time,
            No_of_Guest:req.body.no_of_guest,
            Occasion:req.body.occasion
        }
        let collection=await db.collection("Booking_History")
        let result=await collection.insertOne(newBooking)
        res.status(201).send(result)
    } catch (err) {
        res.status(500).send("Error in Reservation")
    }
})

router.get("/table_reservation/:email",async(req,res)=>{
    try{
        const query={ User: req.params.email }
        let collection=await db.collection("Booking_History")
        let result=await collection.find(query).toArray()
        res.send(result).status(200)
    }
    catch(err){
        res.status(500).send("Error in retriving booking history")
    }
})

export default router