const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/GajananDB")
  .then(() => console.log("Connected to DB"));

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
});

const model = mongoose.model("users", schema);

const read = async () => {
  try {
    //Sort()
    const data = await model
      .find()
      .select({ name: 1, age: 1, address: 1, _id: 0 })
      .sort({ age: -1 });
    console.log(data);

    //CountDocuments
    const count = await model.countDocuments();
    console.log("Count is", count);
  } catch (e) {
    console.log("Error", e);
  }
};
read();
