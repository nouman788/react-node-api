"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
class PaymentController {
    addPayment(req, res) {
        res.json({ code: 0, result: 'Payment Saved' });
    }
    getPayments(req, response) {
        const url = `https://gist.githubusercontent.com/sverraest/7be1341f3a92391edf629c09c8749d15/raw/ee87f5c1722b9b11198a35cba5fd9d068135adf4/gistfile1.txt`;
        https.get(url, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                body = JSON.parse(body);
                //console.log(body);
                response.json({ code: 0, result: body });
            });
            res.on("error", () => {
                response.json({ code: -1, message: 'Network Error' });
            });
        });
    }
    getPayment(req, res) {
    }
    updatePayment(req, res) {
    }
    deletePayment(req, res) {
    }
}
exports.PaymentController = PaymentController;
//# sourceMappingURL=PaymentController.js.map