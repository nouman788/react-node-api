"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PaymentRoutes_1 = require("./routes/PaymentRoutes");
class App {
    constructor() {
        this.app = express();
        this.router = new PaymentRoutes_1.PaymentRoutes();
        this.config();
        this.router.routes(this.app);
    }
    config() {
        this.app.use(cors({ origin: '*' }));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map