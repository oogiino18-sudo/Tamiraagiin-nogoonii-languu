const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API ажиллаж байна 🚀");
});

app.get("/products", (req, res) => {
  res.json([
    { name: "Төмс", price: 900 },
    { name: "Лууван", price: 800 }
  ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
