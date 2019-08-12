"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dbConfig = _interopRequireDefault(require("../dbConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use((0, _helmet.default)());
app.use((0, _bodyParser.json)());
app.use((0, _morgan.default)("dev"));
app.get("/products", (req, res, next) => {
  (0, _dbConfig.default)("products").select("id", "name", "price", "image_url").then(products => {
    res.json(products);
  }).catch(next);
});
const port = 5000;
app.listen(port, () => {
  console.log(`Web API Listening on port ${port} `);
});