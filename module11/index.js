const express=require("express")
const app=express()
const port=3000
const morgan=require("morgan")
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');

app.use(bodyParser.json())
app.use(morgan("combined"))
app.use(cors(""))

app.use(
  fileUpload({
    limits: {
      fileSize: 10000000,
    },
    abortOnLimit: true,
  })
);
  

app.use(express.static('public'));

let database=[
  {"BookId":"b1","BookName":"Kỹ thuật lập trình cơ bản",
  "Price":70,"Image":"Map.jpg"},
  {"BookId":"b2","BookName":"Kỹ thuật lập trình nâng cao",
  "Price":100,"Image":"Map.jpg"},
  {"BookId":"b3","BookName":"Máy học cơ bản","Price":200,"Image":"Map.jpg"},
  {"BookId":"b4","BookName":"Máy học nâng cao","Price":300,"Image":"Map.jpg"},
  {"BookId":"b5","BookName":"Lập trình Robot cơ bản","Price":250,"Image":"Map.jpg"},
]

let books = [
  {"name":"Giáo trình tin học cơ bản", 
  "price":26000,
  "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quas voluptatem. Recusandae corporis totam, laborum amet quae porro eius iure repellendus aliquam nam voluptate ipsam illo adipisci soluta expedita culpa.",
  "image":"book1.jpg",
  "date":"19/3",
  "quantity":120,
  "maCD":"7",
  "maNXB":"1"},
  {"name":"Giáo trình Cơ sở dữ liệu", 
  "price":12000,
  "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quas voluptatem. Recusandae corporis totam, laborum amet quae porro eius iure repellendus aliquam nam voluptate ipsam illo adipisci soluta expedita culpa.",
  "image":"book1.jpg",
  "date":"19/3",
  "quantity":25,
  "maCD":"3",
  "maNXB":"2"},
  {"name":"Visual Basic 2005", 
  "price":20000,
  "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quas voluptatem. Recusandae corporis totam, laborum amet quae porro eius iure repellendus aliquam nam voluptate ipsam illo adipisci soluta expedita culpa.",
  "image":"book1.jpg",
  "date":"19/3",
  "quantity":240,
  "maCD":"8",
  "maNXB":"4"}
]

app.get("/books/all", cors(), (req,res) => {
  res.send(books)
})
app.get("/books/all/:id", cors(), (req,res) => {
  id = req.params.id
  selectedBook = books.find(x => x.maCD == id)
  res.send(selectedBook)
})
app.post("/books/new",cors(),(req,res) => {
  // Get the file that was set to our field named "image"
  const file = req.files.file;
  // If no image submitted, exit
  if (!file) return res.sendStatus(400);
  // Move the uploaded image to our upload folder
  file.mv(__dirname + '/upload/' + file.name);
  // All good

  const formData = req.body
  console.log(formData)
  books.push(formData)
  res.send(formData)
})
app.put("/books/update",cors(),(req,res)=>{
   
  if (req.files && req.files.file) {
    const file = req.files.file;
    file.mv(__dirname + '/upload/' + file.name, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
    });
  }
  id = req.body.maCD
  const selectedBook = books.find(book => book.maCD == id)
  if(selectedBook!=null) {
    selectedBook.name=req.body.name || selectedBook.name
    selectedBook.price=req.body.price || selectedBook.price
    selectedBook.description=req.body.description || selectedBook.description
    selectedBook.image=req.body.image || selectedBook.image
    selectedBook.date=req.body.date || selectedBook.date
    selectedBook.quantity=req.body.quantity || selectedBook.quantity
    selectedBook.maCD=req.body.maCD || selectedBook.maCD
    selectedBook.maNXB=req.body.maNXB || selectedBook.maNXB
  }
  res.send(books)
})
app.get("/books/all/delete/:id", cors(), (req, res) => {
  const id = req.params.id;
  const index = books.findIndex(x => x.maCD === id);
  if (index !== -1) {
    books.splice(index, 1);
    res.send(books);
  } else {
    res.status(404).send("Book not found");
  }
});


app.get('/', (req, res) => {
  res.sendFile('index.html');
  date = new date();
});

app.post('/upload', (req, res) => {
  // Get the file that was set to our field named "image"
  const { image } = req.files;
  // If no image submitted, exit
  if (!image) return res.sendStatus(400);
  // Move the uploaded image to our upload folder
  image.mv(__dirname + '/upload/' + image.name);
  // All good
  res.sendStatus(200)
});

// app.get("/",(req,res)=>{
//   res.send("Hello Restful API")
// })

app.get("/books/image/:id", cors(), (req,res) => {
  id = req.params["id"]
  res.sendFile(__dirname + "/upload/" + id)

})

app.get("/books",(req,res)=>{
  res.send(database)
})

app.get("/books/:id",cors(),(req,res)=>{
  id=req.params["id"]
  let p=database.find(x=>x.BookId==id)
  res.send(p)
})

app.post("/books",cors(),(req,res) => {
  const newBook = req.body; // Parse JSON data from request body
  console.log(newBook);
  database.push(newBook);
  res.send(database);
})

app.put("/books",cors(),(req,res)=>{
  book=database.find(x=>x.BookId==req.body.BookId)
  if(book!=null) {
    book.BookName=req.body.BookName
    book.Price=req.body.Price
    book.Image=req.body.Image
  }
  res.send(database)
})

app.get("/books/delete/:id", cors(), (req, res) => {
  const id = req.params.id;
  const index = database.findIndex(x => x.BookId === id);
  if (index !== -1) {
    database.splice(index, 1);
    res.send(database);
  } else {
    res.status(404).send("Book not found");
  }
});



app.listen(port,()=>{
console.log(`My Server listening on port ${port}`)
})
