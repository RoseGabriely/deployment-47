require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(`
    <h1>DEPLOYMENT</h1>
    `);
});
app.get("/port", (req, res) => {
  res.send(`
      <div>DEPLOYMENT ${PORT}</div>
      `);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

function deployment() {
  console.log("args", process.argv.slice(2));
  console.log(`deployment ${process.argv[2]} practice`);
}
deployment();

function deploymentEnv() {
  console.log(`home folder is ${process.env.HOME}`);
  console.log(`shell is ${process.env.SHELL}`);
  console.log(`my super secret comes from ${process.env.FOO}`);
}

deploymentEnv();
