import React from "react";
import { ListItem } from "../ListItem/ListItem";
import { Link } from "react-router-dom";

type Props = {
    transactions: Transaction[];
    deleteHandler: (id: number) => void;
    modifyHandler: (id: number) => void;
};

export type Transaction = {
    id: number;
    category: string;
    amount: number;
    description: string;
    date: string;
};

export const List: React.FC<Props> = ({ transactions, deleteHandler, modifyHandler }) => {
    return (
        <ul>
            {transactions.map((transaction) => (
                <Link to={`/detail/${transaction.id}`}>
                    <ListItem transaction={transaction} deleteHandler={deleteHandler} modifyHandler={modifyHandler} />
                </Link>
            ))}
        </ul>
    );
};
