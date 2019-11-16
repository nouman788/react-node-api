import {Request, Response, NextFunction} from "express";
import { PaymentController } from "../controllers/PaymentController";

export class PaymentRoutes { 
    
    public paymentController: PaymentController = new PaymentController() 
    
    public routes(app): void {   
        
        //Ping
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                code:0, message: 'GET request successfulll!!!!'
            })
        })

        //GET
        app.route('/payments')
        .get((req: Request, res: Response, next: NextFunction) => {
            console.log("url:::::::"+req.url)         
            next();                      
        }, this.paymentController.getPayments)        

        // POST 
        .post((req: Request, res: Response, next: NextFunction) => {
            console.log("request:"+req.body.currency) 
            if(!req.body.currency) {
                res.send({
                    code: -1 , message: 'currecy is missing'
                });
            }           
            next();                      
        }, this.paymentController.addPayment);


        // Payment detail
        app.route('/payment/:paymentId')
        .get(this.paymentController.getPayment);
        

    }
}