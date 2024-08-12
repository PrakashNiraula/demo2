var conn=require('../db/index');


var db={}


db.createcategory=(title)=>{



    return new Promise((reject,resolve)=>{



        try{
            conn.query("insert into category values(Null,?)",[title],(error,result)=>{
                if(error){
                    reject(error)
                }
                resolve(result);
            })
    

        }catch(error){
            reject(error);
        }
        

    })



    





}




db.getallcategories=()=>{


    return new Promise((reject,resolve)=>{


        try{

            conn.query('select * from category',(error,result)=>{
                if(error){
                    reject(error);
                }

                resolve(result);



            })



        }catch(error){
            reject(error)
        }





    })


   




}


db.getcategorybyid=(id)=>{

    return new Promise((reject,resolve)=>{


        try{

            conn.query('select * from category where id=?',[id],(error,result)=>{

                if(error){
                    reject(error)
                }
                resolve(result);
            })


        }catch(error){
            reject(error);
        }




    })


        
}



db.deletecategorybyid=(id)=>{


    return new Promise((reject,resolve)=>{


        try{

            conn.query("delete from category where id=?",[id],(error,result)=>{
                if(error){
                    reject(error)
                }
                resolve(result);
            })

        }catch(error){
            reject(error)

        }





    })




}





module.exports=db;