import React from "react";
import { ListItem } from "../ListItem/ListItem";
import { Link } from "react-router-dom";
import { Transaction } from "../../models/types";

type Props = {
    transactions: Transaction[];
    deleteHandler: (id: number) => void;
    modifyHandler: (id: number) => void;
};

export const List: React.FC<Props> = ({ transactions }) => {
    return (
        <ul>
            {transactions.map((transaction) => (
                <Link to={`/detail/${transaction.id}`}>
                    <ListItem transaction={transaction} />
                </Link>
            ))}
        </ul>
    );
};
