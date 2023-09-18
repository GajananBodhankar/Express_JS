const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/GajananDB")
  .then(() => console.log("Connected to db"));

const schema=new mongoose.Schema({
    name:String,
    age:Number,
    address:String
})
const model=mongoose.model('users',schema)

const read=async()=>{
    //Equal to
    const dataEq=await model.find({name:{$eq:'Brock'}},{name:1,age:1,address:1,_id:0})
    console.log(dataEq)
    //Not equal to 
    const dataNe=await model.find({age:{$ne:44}},{name:1,age:1,address:1,_id:0})
    console.log(dataNe)
    //Greater than and similarly gte(greater than equal to)
    const dataGt =await model.find({age:{$gt:35}},{name:1,age:1,address:1,_id:0})
    console.log(dataGt)
    //Less than and similary lte(less than equal to)
    const dataLt=await model.find({age:{$lt:35}},{name:1,age:1,address:1,_id:0})
    console.log(dataLt)
    //In  and similarly nin(not in)
    const dataIn=await model.find({name:{$in :['Brock','Gajanan']}},{name:1,age:1,address:1,_id:0})
    console.log(dataIn)
}
read()