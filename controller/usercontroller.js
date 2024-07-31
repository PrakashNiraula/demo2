var conn=require('../db/index');


var db={};






db.registeruser=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
         conn.query("insert into users values(Null, ?,?,?,?,?,?)",[data.firstname,data.lastname,data.company,data.email,data.password,'user'],((error,res)=>{
                    if (error){
                        reject(error);
                    }      
            resolve(res);
         }))

        }catch(error){
            reject(error);
        }
    })

}





db.login=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
         conn.query("select * from users where email=? and password=?",[data.email,data.password],((error,res)=>{
                    if (error){
                        reject(error);
                    }      
            resolve(res);
         }))

        }catch(error){
            reject(error);
        }
    })



}


db.getuserbyid=(userid)=>{

    return new Promise(async(resolve,reject)=>{
        try{
         conn.query("select * from users where id=?",[userid],((error,res)=>{
                    if (error){
                        reject(error);
                    }      
            resolve(res);
         }))

        }catch(error){
            reject(error);
        }
    })




}


module.exports=db;