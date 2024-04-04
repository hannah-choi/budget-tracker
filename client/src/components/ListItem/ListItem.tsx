import React from "react";

import styles from "./ListItem.module.css";
import { Transaction } from "../../models/types";

type Props = {
    transaction: Transaction;
};

export const ListItem: React.FC<Props> = ({ transaction }) => {
    const { id, category, description, date, amount } = transaction;
    return (
        <div className={styles.item}>
            <span>{category}</span>
            <span>{amount}</span>
            <span>{description}</span>
            <span>{date}</span>
        </div>
    );
};
