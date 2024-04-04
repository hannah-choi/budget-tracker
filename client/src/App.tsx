import "./App.css";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Create } from "./pages/Create/Create";
import { TransactionDetail } from "./pages/TransactionDetail/TransactionDetail";
import React, { useEffect, useState } from "react";
import { Transaction } from "./models/types";
import { TransactionResponse } from "./models/Response";
import { requestHandler } from "./services/requestHandler";

function App() {
    const [transactions, setTransactions] = useState<Transaction[] | null>(null);
    const [isLoading, setisLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setisLoading(true);

                const getTransactions = await requestHandler<TransactionResponse>("http://localhost:3001/transaction");
                setTransactions(getTransactions);
            } catch {
                //trackException
            } finally {
                setisLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <BrowserRouter>
            <header>
                <nav>
                    <h1>Budget tracker!!!</h1>
                    <NavLink to='/'>Home </NavLink>
                    <NavLink to='create'>Create</NavLink>
                </nav>
            </header>
            <main>
                <Switch>
                    <Route exact path='/'>
                        {isLoading && "Loading..."}
                        {transactions && <MainPage transactions={transactions} />}
                    </Route>
                    <Route path='/create'>
                        <Create />
                    </Route>
                    <Route path='/detail/:id'>
                        {transactions && <TransactionDetail transactions={transactions} />}
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;
