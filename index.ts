import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hol0a");
});

app.listen(port, () => {
    console.log(`server  is listening on port ${port}`);
});
