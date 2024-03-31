import React from "react";
import { ListItem } from "../ListItem/ListItem";

type Props = {
    transactions: Transaction[];
    deleteHandler: (id: number) => void;
    modifyHandler: (id: number) => void;
};

type Category = "grocery" | "culture" | "transport" | "subscription";

export type Transaction = {
    id: number;
    category: Category;
    amount: number;
    description: string;
    date: string;
};

export const List: React.FC<Props> = ({ transactions, deleteHandler, modifyHandler }) => {
    return (
        <ul>
            {transactions.map((transaction) => (
                <ListItem transaction={transaction} deleteHandler={deleteHandler} modifyHandler={modifyHandler} />
            ))}
        </ul>
    );
};
