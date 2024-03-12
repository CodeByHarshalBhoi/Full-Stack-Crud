import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb+srv://HarshalBhoi:pJ76B78E6liA5wSp@cluster0.4ziz3k2.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connect SuccessFully")
  } catch (err) {
    console.log("Error while connecting to databse", err);
  }
};

export default Connection;