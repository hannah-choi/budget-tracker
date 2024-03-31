import express, { Express, Request, Response } from "express";
import path from "path";
import transactions from "./transactions.json";

const app: Express = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", (_, res: Response) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.get("/transactions", (req: Request, res: Response) => {
    res.json(transactions);
});

app.post("/transactions", (req: Request, res: Response) => {
    const newTransactions = { id: transactions.length + 1, ...req.body };
    transactions.push(newTransactions);
    res.send(201).send(newTransactions);
});

app.delete("/transactions/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const index = transactions.findIndex((transaction) => transaction.id === parseInt(id, 10));
    if (index <= -1) {
        res.status(404).send({ message: "Transaction not found" });
    } else {
        transactions.splice(index, 1);
        res.status(204).end();
    }
});

app.put("/transactions/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const index = transactions.findIndex((transaction) => transaction.id === parseInt(id, 10));
    if (index <= -1) {
        res.status(404).send({ message: "Transaction not found" });
    }
    const modified = { ...transactions[index], ...req.body };
    transactions[index] = modified;
    res.status(200).send(modified);
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
