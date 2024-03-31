import React from "react";

import styles from "./ListItem.module.css";
import { Transaction } from "../List/List";

type Props = {
    transaction: Transaction;
    deleteHandler: (id: number) => void;
    modifyHandler: (id: number) => void;
};

export const ListItem: React.FC<Props> = ({ transaction, deleteHandler, modifyHandler }) => {
    const { id, category, description, date, amount } = transaction;
    return (
        <div className={styles.item}>
            <span>{category}</span>
            <span>{amount}</span>
            <span>{description}</span>
            <span>{date}</span>
            <button onClick={() => modifyHandler(id)}>modify</button>
            <button onClick={() => deleteHandler(id)}>x</button>
        </div>
    );
};
