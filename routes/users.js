var express = require('express');
var router = express.Router();
var usercontroller=require('../controller/usercontroller');




router.route('/register')
.post(async(req,res,next)=>{

//this can be converted to user class for better object manipulation
  let {firstname,lastname,company,email,password}=req.body;

///imporovement :  THis logic can be transferred to validator for validation
  if(!firstname){
   res.status(500).json({"Error":"Firstname is required"});
  }

  if(!lastname){
    res.status(500).json({"Error":"Lastname is required"});
   }


   if(!company){
    res.status(500).json({"Error":"Company is required"});
   }


   if(!email){
    res.status(500).json({"Error":"Email is required"});
   }


   if(!password){
    res.status(500).json({"Error":"Password is required"});
   }


   //password can be salted using jsonwebtoken for securely storing in database

   try{
    res.json(await usercontroller.registeruser(req.body));
   }catch(error){
    next(error)
   }







})



router.route('/login')
.post(async(req,res,next)=>{


  try{
    res.json(await usercontroller.login(req.body));
   }catch(error){
    next(error)
   }




})


router.route('/getdetails/:userid')
.get(async (req,res,next)=>{


  
  try{
    res.json(await usercontroller.getuserbyid(req.params.userid));
   }catch(error){
    next(error)
   }





})






module.exports = router;
