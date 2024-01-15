const app = require("./app");
const mongoose = require("mongoose");
const { DB_HOST } = process.env;
// const DB_HOST =
//   "mongodb+srv://phoneBook:phoneBook@cluster0.auojrsw.mongodb.net/Phone_book_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection success");
    app.listen(3002);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3002, () => {
//   console.log("Server running. Use our API on port: 3000  все гуд ");
// });
