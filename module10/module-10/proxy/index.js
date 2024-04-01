const express = require("express");
const app = express();
const cors = require("cors");

const { createProxyMiddleware } = require("http-proxy-middleware");

app.use(cors());

app.get("/products", createProxyMiddleware({target: "https://fakestoreapi.com/products", changeOrigin: true}));
app.get("/", createProxyMiddleware({target: "https://www.dongabank.com.vn/exchange/export", changeOrigin: true}));


app.listen(3000, () => {
  console.log("proxy started")
})
