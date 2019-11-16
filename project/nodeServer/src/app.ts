import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import { PaymentRoutes } from "./routes/PaymentRoutes";


class App {

    public app: express.Application = express();
    public router: PaymentRoutes = new PaymentRoutes();

    constructor() {
        this.config();
        this.router.routes(this.app);     
    }

    private config(): void{
        this.app.use(cors({origin: '*'}));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }


}

export default new App().app;
