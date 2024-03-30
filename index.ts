import express, { Express, Response } from "express";
import path from "path";

const app: Express = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (_, res: Response) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
// app.get("/", (req: Request, res: Response) => {
//     res.send("Hol0a");
// });

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
