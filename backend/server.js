import express from "express";
import data from "./data";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import bodyParser from "body-parser";
import productRoute from "./routes/productRoute";
/* 
import config from "./config";
import path from 'path'; 
import orderRoute from './routes/orderRoute';
import uploadRoute from './routes/uploadRoute'; 
*/

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connected"))
  .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
/* 
app.use('/api/uploads', uploadRoute);
app.use('/api/orders', orderRoute);
app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
}); */

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
/* app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x._id === productId);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: "product not found" });
  }
});
app.get("/api/products", (req, res) => {
  res.send(data.products);
}); */

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
