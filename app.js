import express from "express";

// initialize express
const app = express();
const PORT = 3000;

// define a route
app.get("/", (req, res) => {
  res.send("Hello Backend development with express")
})


app.get("/about", (req, res) => {
  res.send("<h2>This is about us page</h2>");
});

app.get("/contact", (req, res) => {
  res.send("<h2>This is contact page</h2>");
});


// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})