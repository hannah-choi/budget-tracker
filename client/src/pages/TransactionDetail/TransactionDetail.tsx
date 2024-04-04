import React from "react";
import { useParams } from "react-router-dom";
import { Transaction } from "../../models/types";

//import styles from "./TransactionDetail.module.css";

type TransactionParams = {
    id: string;
};

type Props = { transactions: Transaction[] };

export const TransactionDetail: React.FC<Props> = ({ transactions }) => {
    const { id } = useParams<TransactionParams>();

    const transaction = transactions.find((t) => t.id === parseInt(id, 10));

    return (
        <div>
            <h1>TransactionDetail: {id}</h1>
            {transaction && (
                <>
                    <p>{transaction.category}</p>
                </>
            )}
        </div>
    );
};
