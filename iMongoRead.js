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

const insert = async () => {
  try {
    const insertData = new model({
      name: "Max",
      age: 38,
      address: "Moscow",
    });
    await model.insertMany([insertData]).then(() => {
      console.log("Data added");
      read();
    });
  } catch (e) {
    console.log(e);
  }
};
// insert();

const read = async () => {
  const data = await model.find().select({ name: 1, age: 1, _id: 0 });
  console.log(data);
};

read();
