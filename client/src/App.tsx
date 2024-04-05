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
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [transactions, setTransactions] = useState<Transaction[] | null>(null);

    useEffect(() => {
        const getTransactions = async () => {
            try {
                setIsLoading(true);
                const data = await requestHandler<TransactionResponse>(process.env.REACT_APP_TRANSACTION_API_URL!);
                setTransactions(data);
            } catch {
                console.error("could not get the transactions");
                //trackException(...)
            } finally {
                setIsLoading(false);
            }
        };

        getTransactions();
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
