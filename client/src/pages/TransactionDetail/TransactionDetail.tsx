import React from "react";
import { useParams } from "react-router-dom";

//import styles from "./TransactionDetail.module.css";

type TransactionParams = {
    id: string;
};

type Props = {};

export const TransactionDetail: React.FC<Props> = ({}) => {
    const { id } = useParams<TransactionParams>();
    return (
        <div>
            <h1>TransactionDetail: {id}</h1>
        </div>
    );
};
