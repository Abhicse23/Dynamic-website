const express=require("express")
const{route}=require('express/lib/application')
const Detail=require("../models/Detail")
const Slider=require("../models/Slider")

const routes=express.Router()

routes.get("/", async(req,res)=>{

    const details = await Detail.findOne({"_id":"64ec3b5d9ff1d34c360db2fb"})
    const slides=await Slider.find() 
   
    console.log(slides)

    res.render("index",{
        details:details, 
        slides:slides
    });
});

routes.get("/gallery", async(req,res)=>{

    const details=await Detail.findOne({"_id":"64ec3b5d9ff1d34c360db2fb"})
    
    res.render("gallery",{
        details:details
    })
})

module.exports=routes