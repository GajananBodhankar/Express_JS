const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/GajananDB")
  .then(() => console.log("Connected to db"));

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
});

const model = mongoose.model("users", schema);

const read = async () => {
  try {
    //and operation
    const dataAnd = await model
      .find({ $and: [{ name: "Gajanan" }, { age: { $gt: 20 } }] })
      .select({ name: 1, age: 1, address: 1, _id: 0 });
    console.log(dataAnd);

    //or operation
    const dataOr = await model
      .find({
        $or: [{ name: "Gajanan" }, { name: "Brock" }],
      })

      .select({ name: 1, age: 1, address: 1, _id: 0 });
    console.log(dataOr);

    //not operation
    const dataNot = await model
      .find({ name: { $not: { $eq: "Gajanan" } } })
      .select({ name: 1, age: 1, address: 1, _id: 0 });
    console.log(dataNot);

    //nor operation
    const dataNor = await model
      .find({ $nor: [{ name: "Gajanan" }, { age: { $gt: 35 } }] })
      .select({ name: 1, age: 1, address: 1, _id: 0 });
    console.log(dataNor);
  } catch (e) {
    console.log("Error", e);
  }
};
read();
