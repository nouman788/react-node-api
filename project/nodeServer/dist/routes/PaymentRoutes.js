"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentController_1 = require("../controllers/PaymentController");
class PaymentRoutes {
    constructor() {
        this.paymentController = new PaymentController_1.PaymentController();
    }
    routes(app) {
        //Ping
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                code: 0, message: 'GET request successfulll!!!!'
            });
        });
        //GET
        app.route('/payments')
            .get((req, res, next) => {
            console.log("url:::::::" + req.url);
            next();
        }, this.paymentController.getPayments)
            // POST 
            .post((req, res, next) => {
            if (!req.params || !req.params.currency) {
                res.send({
                    code: -1, message: 'GET request successfulll!!!!'
                });
            }
            else
                next();
        }, this.paymentController.addPayment);
        // Payment detail
        app.route('/payment/:paymentId')
            .get(this.paymentController.getPayment);
    }
}
exports.PaymentRoutes = PaymentRoutes;
//# sourceMappingURL=PaymentRoutes.js.map