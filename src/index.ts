import express,{ Express, Request, Response } from "express";

const app: Express = express();

const port=3006;


app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
  });
  app.get('/hola', (req: Request, res: Response) => {
    res.send('HOLA');
  });
  
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
