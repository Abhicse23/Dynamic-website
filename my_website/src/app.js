const express =require("express");
const hbs=require("hbs") //Template engine used to import dynamic data
const app = express(); 
const mongoose=require("mongoose")
const routes=require('./routes/main')
const Detail=require("./models/Detail")
const Slider=require("./models/Slider")

// /static/css/Style.c ss
app.use('/static',express.static("public"))  //here we are accesing public through static
app.use('',routes)


//template engine 
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")


//strict type cheking error
mongoose.set('strictQuery',false); 


//database connections
mongoose.connect("mongodb://127.0.0.1:27017/my_website",()=>{    //mongodb://localhost//my_website error coming for this
    console.log("Database connected");

     Slider.create([{
         title:'learn java in a very easy manner',
         subTitle:'java is a very popular language',
         imageUrl:".static/images/pexels-photo-7988089.webp"
     },
     {
        title:'what is Django in python?',
        subTitle:'Django is most famous web framework of python programming.',
        imageUrl:".static/images/pic.jpeg"
    },
     {
         title:'what about node js?',
         subTitle:'Node js is runtime environment to execute javascript outside browser',
         imageUrl:".static/images/programming.jpg"
     }
     ])

       Detail.create({
       brandname:"Abhi Technologies",
        brandIconUrl:"https://play-lh.googleusercontent.com/69Li6j-gRDmVXEvX-zSjpFGNl10CcaGQAjGREkrh5xZ5aRouNzvl8VIhsBYpKHCajB9-",
        links:[
         {
           label:"home",
           url:"/"
         },
    
         {
           label:"services",
           url:"/services"
         },
         {
           label:"gallery",
           url:"/gallery"
         },
         {
           label:"About",
           url:"/about"
        },
        {
           label:"contact us",
           url:"/contact_us"
         }
        ]
      }) 
     console.log("database created")
});


 
app.listen(process.env.PORT|5556,()=>{
    console.log("server started");
});
    //listens https request on a specific port
// "|" This is the pipe operator


