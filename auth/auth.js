const jwt=require('jsonwebtoken');

function verifyUser(req,res,next){
   let authHeader=req.headers.authorization;
   if(!authHeader){
    //    let Err=new Error("No authentication header");
    //    Err.status=401;
    return res.json({
        
        "Error":"Token validation failed"
       },403);
    //    return next({"err":"no authentication header"});
       //return next(Err);
   }
   let token=authHeader.split(' ')[1];
   jwt.verify(token,"SignKey",(err,payload)=>{
       if(err){
        return res.json({
            "Error":"Token validation failed"
           });
       }
       req.user=payload;
       console.log(req.user);
       next();
   })
   
}

function verifyAdmin(req,res,next){
    let authHeader=req.headers.authorization;
    if(!authHeader){
     //    let Err=new Error("No authentication header");
     //    Err.status=401;
     return res.json({
         
         "Error":"Token validation failed"
        },403);
     //    return next({"err":"no authentication header"});
        //return next(Err);
    }
    let token=authHeader.split(' ')[1];
    jwt.verify(token,"SignKey",(err,payload)=>{
        if(err){
         return res.json({
             "Error":"Token validation failed"
            });
        }
        console.log('payload',payload);
        req.user=payload;

        if(req.user.role!='admin'){
            return res.json({
                "Error":"Only For Admin"
               });
        }
        console.log(req.user);
        next();
    })
    
 }






module.exports={
    verifyUser, 
    verifyAdmin
};