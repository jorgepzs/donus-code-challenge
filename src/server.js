const app = require("./app");
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running at port 3000");
});
