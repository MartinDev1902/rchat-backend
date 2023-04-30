import express, {Application, Response, Request} from 'express';
import dotenv from 'dotenv';
class Server {
    public app: Application;
    private readonly port: number;
    constructor() {
        this.app = express()
        dotenv.config();
        this.port = Number(process.env.PORT) || 3000;
        console.log(process.env.PORT)
        this.init();
    }

    init(): void{

        this.app.get('/', (req: Request, res: Response) => {
            res.send("Hello world")
        })

        // Start server
        this.app.listen(this.port, () => {
            console.log(`The server started on port ${this.port}`)
        })
    }
}

export default new Server().app;
