const express = require("express");
const cors=require("cors")
const { default: mongoose } = require("mongoose");
const app = express();
const router=require('./route/postRouter')
app.use(express.json())
app.use(cors())
app.use('/',router)
mongoose
  .connect("mongodb://localhost:27017/food", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

app.listen(8000, () => {
  console.log("Server Started");
});
