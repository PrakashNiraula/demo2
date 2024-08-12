import express from 'express';
import categorycoontroller from '../controller/categorycontroller'
const router=express.Router();





router.route('/')
.post(async(req,res,next)=>{
  try{
   res.json(await categorycoontroller.createcategory(req.body.title))
   }catch(error){
    next(error)
   }
})



router.route('/getallcategory')
.get(async(req,res,next)=>{
  try{
    res.json(await categorycoontroller.getallcategories());
  }catch(error){
    next(error);
  }

})



router.route('/getcategory/:id')
.get(async(req,res,next)=>{
  try{
    res.json(await categorycoontroller.getcategorybyid(req.params.id));

  }catch(error){
    next(error);
  }
})


router.route('/deletecategory/:id')
.get(async(req,res,next)=>{

  try{
    res.json(await categorycoontroller.deletecategorybyid(req.params.id));

  }catch(error){
    next(error);
  }

  




})























module.exports=router;