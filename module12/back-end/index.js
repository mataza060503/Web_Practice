const express = require('express');
const app = express();
const port = 3002;

const morgan=require("morgan")
app.use(morgan("combined"))

const cors=require("cors");
app.use(cors({credentials:true, origin:"http://localhost:4200" }));

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

const bodyParser=require("body-parser")
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var session = require('express-session');
app.use(session({
  secret: "Shh, its a secret!",
  resave: false, // Set to false to avoid the deprecation warning
  saveUninitialized: false
}));

app.use(express.json());


const { MongoClient, ObjectId } = require('mongodb');
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("TestingDB");
fashionCollection = database.collection("TestingTB");
const myFashion = database.collection("MyFashionTB")

app.post('/cart',cors(), (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Credentials", true);
  const item = req.body._id;
  // Retrieve cart content from session or initialize if it doesn't exist
  req.session.cart = req.session.cart || [];
  // Add item to cart
  req.session.cart.push(item);
  res.send('Item added to cart');
});
app.post('/cart/update',cors(), (req,res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Credentials", true);
  const cartContent = req.body
  req.session.cart = cartContent
  res.send(cartContent)
})

// View cart
app.get('/cart',cors(), async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Credentials", true);
  // Retrieve cart content from session
  const cartContent = req.session.cart || [];
  const cartList = []
  // for (let i = 0; i < cartContent.length; i++) {
  //   var id = new ObjectId(cartContent[i])
  //   var cartItem = await myFashion.find({_id:id}).toArray()
  //   cartList.push(cartItem)
  // }
  const cartIds = cartContent.map(id => new ObjectId(id));
// Assuming cartContent is an array of IDs
  // for (let i = 0; i < cartContent.length; i++) {
  //   const element = cartContent[i];
  //   cartIds.push(new ObjectId(element))
  // }


// Find documents in myFashion collection that match the IDs in cartIds
  for (let i = 0; i < cartIds.length; i++) {
    const id = cartIds[i];
    var cartItems = await myFashion.find({_id: id}).toArray();
    cartList.push(...cartItems)
  }

  res.send(cartList); // Send the matched cart items to the client
});

// Clear cart
app.post('/clearCart', (req, res) => {
  // Clear cart content in session
  req.session.cart = [];
  res.send('Cart cleared');
});

app.get("/contact",cors(),(req,res)=>{
  if(req.session.visited!=null)
  {
  req.session.visited++
  res.send("You visited this page "+req.session.visited +" times")
  }
  else
  {
  req.session.visited=1
  res.send("Welcome to this page for the first time!")
  }
  })
  
app.post("/login",cors(), (req,res)=> {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Credentials", true);
  const account = {
    "username":req.body.username,
    "password":req.body.password}
  res.cookie("account",account)
  res.send(req.body)
})
app.get("/login",cors(),(req,res)=> {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Credentials", true);
 
  account = req.cookies.account
  res.send(account)
})

app.get("/create-cookie",cors(),(req,res)=>{
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Credentials", true);
  res.cookie("username","tranduythanh")
  res.cookie("password","123456")
  account={"username":"tranduythanh",
  "password":"123456"}
  res.cookie("account",account)
  res.send("cookies are created")
})

app.get("/read-cookie",cors(),(req,res)=>{
  //cookie is stored in client, so we use req
  username=req.cookies.username
  password=req.cookies.password
  account=req.cookies.account
  infor="username = "+username+"<br/>"
  infor+="password = "+password+"<br/>"
  infor+="account.username = "+account.username+"<br/>"
  infor+="account.password = "+account.password+"<br/>"
  res.send(infor)
})

app.get("/myFashion",cors(),async (req,res)=>{
  const data = await myFashion.find({}).toArray();
  res.send(data)
})
app.get("/myFashion/:style",cors(),async (req,res)=> {
  const style = req.params.style
  const data = await myFashion.find({
    fashion_style:style
  }).toArray()
  res.send(data)
})
app.get("/myFashion/detail/:id",cors(),async (req,res)=>{
  var o_id = new ObjectId(req.params["id"]);
  const data = await myFashion.find({_id:o_id}).toArray();
  res.send(data[0])
})
app.post("/myFashion",cors(),async (req,res) => {
  await myFashion.insertOne(req.body)
  const data = await myFashion.find({}).toArray();
  res.send(req.body)
})
app.put("/myFashion",cors(),async (req,res) => {
  const selectedFashion = await myFashion.find({_id:req.body._id})
  await myFashion.updateOne(
    {_id:new ObjectId(req.body._id)},//condition for update
    { $set: { //Field for updating
      fashion_style: req.body.fashion_style || selectedFashion.fashion_style,
      fashion_details:req.body.fashion_details,
      thumbnail:req.body.thumbnail,
      fashion_title:req.body.fashion_title
      }
    })
  //send Fahsion after updating
  var o_id = new ObjectId(req.body._id);
  const result = await myFashion.find({_id:o_id}).toArray();
  res.send(result[0])
})
app.delete("/myFashion/delete/:id",cors(),async (req,res)=> {
  var id = new ObjectId(req.params.id)
  await myFashion.deleteOne({_id:id})
  const data = await myFashion.find({}).toArray()
  res.send(data)
})

app.get("/",(req,res)=>{
  res.send("This Web server is processed for MongoDB")
})

app.get("/fashions",cors(),async (req,res)=>{
  const result = await fashionCollection.find({}).toArray();
  res.send(result)
})

app.get("/fashions/:id",cors(),async (req,res)=>{
  var o_id = new ObjectId(req.params["id"]);
  const result = await fashionCollection.find({_id:o_id}).toArray();
  res.send(result[0])
})


app.post("/fashions",cors(),async(req,res)=>{
  //put json Fashion into database
  await fashionCollection.insertOne(req.body)
  //send message to client(send all database to client)
  res.send(req.body)
})

app.put("/fashions",cors(),async(req,res)=>{
  //update json Fashion into database
  await fashionCollection.updateOne(
    {_id:new ObjectId(req.body._id)},//condition for update
    { $set: { //Field for updating
      style: req.body.style,
      fashion_subject:req.body.fashion_subject,
      fashion_detail:req.body.fashion_detail,
      fashion_image:req.body.fashion_image
      }
    })
  //send Fahsion after updating
  var o_id = new ObjectId(req.body._id);
  const result = await fashionCollection.find({_id:o_id}).toArray();
  res.send(result[0])
  })

app.delete("/fashions/:id",cors(),async(req,res)=>{
//find detail Fashion with id
var o_id = new ObjectId(req.params["id"]);
const result = await fashionCollection.find({_id:o_id}).toArray();
//update json Fashion into database
await fashionCollection.deleteOne(
{_id:o_id}
)
//send Fahsion after remove
res.send(result[0])
})
  
app.listen(port,()=>{
  console.log(`My Server listening on port ${port}`)
  })