import React from "react";
import { List } from "../../components/List/List";
import { Transaction } from "../../models/types";

type Props = { transactions: Transaction[] };

export const MainPage: React.FC<Props> = ({ transactions }) => {
    const modifyHandler = () => {
        return true;
    };

    const deleteHandler = () => {
        return true;
    };

    return (
        <div>
            <List transactions={transactions} modifyHandler={modifyHandler} deleteHandler={deleteHandler} />
        </div>
    );
};
