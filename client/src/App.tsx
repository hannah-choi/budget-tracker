import "./App.css";
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Create } from "./pages/Create/Create";
import { TransactionDetail } from "./pages/TransactionDetail/TransactionDetail";
import React, { useEffect, useState } from "react";
import { Transaction } from "./components/List/List";

function App() {
    const [transactions, setTransactions] = useState<Transaction[] | null>(null);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("/transaction")
            .then((res) => {
                if (!res.ok) {
                    throw Error("Response failed");
                }
                return res.json();
            })
            .then((data) => {
                setTransactions(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                const error = err as Error;
                setIsPending(false);
                setError(error.message);
            });
        // return () => {
        //     second;
        // };
    }, []);

    return (
        <BrowserRouter>
            <header>
                <nav>
                    <h1>Budget tracker!!</h1>
                    <NavLink to='/'>Home </NavLink>
                    <NavLink to='create'>Create</NavLink>
                </nav>
            </header>
            <main>
                <Switch>
                    <Route exact path='/'>
                        {transactions && <MainPage transactions={transactions} />}
                    </Route>
                    <Route path='/create'>
                        <Create />
                    </Route>
                    <Route path='/detail/:id'>
                        <TransactionDetail />
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;
