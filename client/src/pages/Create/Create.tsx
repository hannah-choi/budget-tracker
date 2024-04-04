import React, { ChangeEvent, FormEvent, useState } from "react";

import styles from "./Create.module.css";
import moment from "moment";
import { useHistory } from "react-router-dom";

type Props = {};

export type Category = "grocery" | "transport" | "culture" | "shopping";

export const Create: React.FC<Props> = ({}) => {
    const history = useHistory();

    moment.locale("en-gb");
    const [category, setCategory] = useState<Category>("grocery");
    const [amount, setAmount] = useState<number>(0);
    const [description, setDescription] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTransaction = { category, amount, description, date: moment().format("ll") };

        setIsLoading(true);

        fetch("http://localhost:3001/transaction", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTransaction)
        })
            .then((res) => res.json())
            .then(() => {
                console.log("new transaction added");
                setIsLoading(false);
                history.push("/");
            });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <select
                required
                value={category}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value as Category)}
            >
                <option value='grocery<'>grocery</option>
                <option value='transpor'>transport</option>
                <option value='culture<'>culture</option>
                <option value='shopping'>shopping</option>
            </select>
            <input
                type='number'
                value={amount}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(parseInt(e.target.value))}
            />
            <input
                type='text'
                value={description}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
            />
            <button type='submit' disabled={isLoading}>
                {isLoading ? "Submitting.." : "Submit"}
            </button>
        </form>
    );
};
