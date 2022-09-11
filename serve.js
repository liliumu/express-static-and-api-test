const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("page"));
app.get("/me.json", (req, res) => {
  res.json({ id: 1 });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
