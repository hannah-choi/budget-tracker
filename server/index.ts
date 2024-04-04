import express, { Express, Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import transactions from "./transactions.json";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8081;

app.use(express.json());
app.use(cors());

app.get("/transaction", (req: Request, res: Response) => {
    console.log(req);
    res.status(200).json(transactions);
});

app.post("/transaction", (req: Request, res: Response) => {
    const newTransaction = {
        amount: new Intl.NumberFormat("en-GB", { currency: "GBP", style: "currency" }).format(
            parseInt(req.body.amount, 10)
        ),
        id: transactions.length + 1,
        ...req.body
    };
    transactions.push(newTransaction);

    fs.writeFile(path.join(__dirname, "transactions.json"), JSON.stringify(transactions, null, 2), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: "Internal Server error" });
        } else {
            res.status(201).send(newTransaction);
        }
    });
});

app.delete("/transaction/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const index = transactions.findIndex((transaction) => transaction.id === parseInt(id, 10));
    if (index <= -1) {
        res.status(404).send({ message: "Transaction not found" });
    } else {
        transactions.splice(index, 1);
        res.status(204).end();
    }
});

app.put("/transaction/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const index = transactions.findIndex((transaction) => transaction.id === parseInt(id, 10));
    if (index <= -1) {
        res.status(404).send({ message: "Transaction not found" });
    }
    const modified = { ...transactions[index], ...req.body };
    transactions[index] = modified;
    res.status(200).send(modified);
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));

    // catch-all
    app.get("*", (_, res: Response) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
