const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/GajananDB")
  .then(() => console.log("Connected to db"))
  .catch((e) => console.log("Error", e));

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
});

const model = mongoose.model("users", schema);

const read = async () => {
  const data = await model.find({name:'Gajanan'},{name:1,_id:0}).select({_id:1})
  console.log(data);
};
read();
