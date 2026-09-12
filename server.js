const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.static(__dirname));
app.use(cors());
app.use(express.json());

// Нүүр хуудас
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Бүтээгдэхүүн
app.get("/products", (req, res) => {
  res.json([
    { name: "Төмс", price: 900 },
    { name: "Лууван", price: 800 }
  ]);
});

// Захиалга
let orders = [];

app.post("/order", (req, res) => {
  const order = {
    id: orders.length + 1,
    ...req.body,
    createdAt: new Date().toISOString()
  };

  orders.push(order);

  console.log("Шинэ захиалга:", order);

  res.json({
    success: true,
    message: "Захиалга амжилттай хүлээн авлаа",
    order: order
  });
});

// Захиалгууд
app.get("/orders", (req, res) => {
  res.json(orders);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
