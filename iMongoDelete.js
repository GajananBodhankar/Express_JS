const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/GajananDB")
  .then(() => console.log("Connection established"));

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
});

const model = mongoose.model("users", schema);

const deleteDoc = async () => {
  try {
    const deletedData =await model.deleteOne({name:"Gajanan Bodhankar"});
    deletedData.then(() => console.log("Deleted"));
    // console.log(deletedData)
  } catch (e) {
    console.log("Error", e);
  }
};

deleteDoc();
