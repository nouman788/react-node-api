
import { Request, Response } from 'express';
import https = require('https'); 

export class PaymentController{

    public addPayment (req: Request, res: Response) { 
      console.log("request:"+req.body.currency) 
        res.json({code:0,result:'Payment Saved'});
    }

    public getPayments (req: Request, response: Response) { 
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
              response.json({code:0,result:body});   
            });
            res.on("error",()=> {
              response.json({code:-1,message:'Network Error'});
            });
          });
    }

    public getPayment (req: Request, res: Response) {           
        
    }

    public updatePayment (req: Request, res: Response) {           
        
    }

    public deletePayment (req: Request, res: Response) {           
        
    }
    
}