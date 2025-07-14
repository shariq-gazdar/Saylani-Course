const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const users = [
  { name: "Shariq", roll: "45" },
  { name: "Ahmed", roll: "46" },
  { name: "Touseef", roll: "47" },
  { name: "Mustufa", roll: "48" },
];
app.post("/", (req, res) => {
  console.log(req.body);
  const user = users.find((item) => item.name == req.body.name);
  res.send({ data: user });
});
app.get("/users", (req, res) => {
  res.send({ data: users });
});
app.listen("3000", () => {
  console.log("App running on 3000");
});
