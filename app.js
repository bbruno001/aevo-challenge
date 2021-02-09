const indexRoute = require("./src/routes/app.route");
const app = require("./config").express();

app.use("/", indexRoute);
