const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/GajananDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successful"))
  .catch((e) => console.log(e));

//To create a new collection and insert into it
const Users = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
});

const model = new mongoose.model("Users", Users);

const createDocument = async () => {
  try {
    const data = new model({
      name: "Gajanan",
      age: 21,
      address: "HYderabad",
    });
    await data.save().then(() => console.log("Data saved"));
  } catch (e) {
    console.log("Error", e);
  }
};
createDocument();
//To insert in existing Collection
const temp = mongoose.model("apps", Users);

const insert = async () => {
  try {
    const raw = new temp({
      name: "Arvind",
      age: 45,
      address: "Hyderabad",
    });
    await raw.save().then(() => console.log("Data added"));
  } catch (e) {
    console.log("Error", e);
  }
};
insert();
