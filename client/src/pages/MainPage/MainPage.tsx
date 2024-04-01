import React from "react";
import { List } from "../../components/List/List";
import transactions from "../../transactions.json";

type Props = {};

export const MainPage: React.FC<Props> = ({}) => {
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
