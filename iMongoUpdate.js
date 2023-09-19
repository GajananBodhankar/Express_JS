const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/GajananDB")
  .then(() => console.log("Connected to db"));

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
  batch: Number,
});

const model = mongoose.model("users", schema);

const update = async () => {
  try {
    //set
    const data = await model.updateOne(
      { name: "Gajanan" },
      { $set: { name: "Gajanan Bodhankar", batch: 2022 } }
    );
    console.log(data);

    //Unset
    const dataUn = await model.updateOne(
      {
        name: "Gajanan Bodhankar",
      },
      { $unset: { batch: 2022 } }
    );
    console.log(dataUn);
  } catch (e) {
    console.log("error", e);
  }
};

update();
