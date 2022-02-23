const express = require("express")
const mongoose = require("mongoose")


const rolecontroller = require("./controller/role-controller")
const usercontroller = require("./controller/user-controller")
const schedule_typecontroller = require("./controller/schedule_type-controller")
const categorycontroller = require("./controller/category-controller")
const schedule_mastercontroller = require("./controller/schedule_master-controller")
const daily_schedulecontroller = require("./controller/daily_schedule-controller")
const remindercontroller = require("./controller/reminder-controller")
const app = express()

//middle ware
app.use(express.json()) //mobile accept json data
app.use(express.urlencoded({extended:true})) //browser

//database
mongoose.connect('mongodb://localhost:27017/Tudolist',function(err){

    if (err){
    console.log("db connection fail .. ..");
    console.log(err);
    }else{
        console.log("db connected...");

    }
})



// role controller 
app.post("/roles",rolecontroller.addRole)
app.get("/roles",rolecontroller.getAllRoles)
app.delete("/roles/:roleId",rolecontroller.deleteRole)
app.put("/roles",rolecontroller.updateRole)

//user controller 
app.post("/users",usercontroller.addUser)
app.get("/users",usercontroller.getAllUsers)
app.delete("/users/:userId",usercontroller.deleteUser)
app.put("/users",usercontroller.updateUser)
//login
app.post("/login",usercontroller.login)


//schedule_typecontroller

app.post("/schedule_types",schedule_typecontroller.addSchedule_type)
app.get("/schedule_types",schedule_typecontroller.getAllschedule_type)
app.delete("/schedule_types/:schedule_typeId",schedule_typecontroller.deleteschedule_type)
app.put("/schedule_types",schedule_typecontroller.updateschedule_type)

//category
app.post("/categories",categorycontroller.addCategory)
app.get("/categories",categorycontroller.getAllCategory)
app.delete("/categories/:categoryId",categorycontroller.deleteCategory)
app.put("/categories",categorycontroller.updateCategory)

//scedulemaster
app.post("/schedule_masters",schedule_mastercontroller.addSchedule_master)
app.get("/schedule_masters",schedule_mastercontroller.getAllSchedule_master)
app.delete("/schedule_masters/:schedule_masterId",schedule_mastercontroller.deleteSchedule_master)
app.put("/schedule_masters",schedule_mastercontroller.updateSchedule_master)

//dailyschedule
app.post("/daily_schedules",daily_schedulecontroller.addDaily_schedule)
app.get("/daily_schedules",daily_schedulecontroller.getAllDaily_schedule)
app.delete("/daily_schedules/:daily_scheduleId",daily_schedulecontroller.deleteDaily_schedule)
//app.put("/daily_schedules",daily_schedulecontroller.updateDaily_schedule)


//remindercontroller 
app.post("/reminders",remindercontroller.addReminder)
app.get("/reminders",remindercontroller.getAllReminder)
app.delete("/reminders/:reminderId",remindercontroller.deleteReminder)












//server
app.listen(3000,function(){
    console.log("server started on 3000");
    
})