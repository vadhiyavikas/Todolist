const schedule_typemodel = require("../model/schedule_type-model")


//add
module.exports.addSchedule_type = function (req,res){
    //db insert role
    console.log(req.body.schedule_typeName);
    
    let schedule_type = new schedule_typemodel({
        schedule_typeName:req.body.schedule_typeName
    })

    schedule_type.save(function(err,success){
            if(err){
                console.log("err");
                //sendMailToDev(err);
                res.json({msg:"something went wrong",status:-1,data:req.body})

            }else{
                res.json({msg:"scedule_type added",status:200,data:success})
            }
    })
 }

   

 
module.exports.getAllschedule_type = function(req,res){
    schedule_typemodel.find(function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"data retrive succefully",status:200,data:success})

        }
    })
}
//delete
module.exports.deleteschedule_type = function(req,res){
    let schedule_typeId = req.params.schedule_typeId 
    //delete from role where roleId = 1 

    schedule_typemodel.deleteOne({"_id":schedule_typeId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })
}
//updateroleName 

module.exports.updateschedule_type = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let schedule_typeId = req.body.schedule_typeId 
    let schedule_typeName = req.body.schedule_typeName 

    schedule_typemodel.updateOne({_id:schedule_typeId},{schedule_typeName:schedule_typeName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}

