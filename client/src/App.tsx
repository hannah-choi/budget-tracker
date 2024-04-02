import "./App.css";
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Create } from "./pages/Create/Create";
import { TransactionDetail } from "./pages/TransactionDetail/TransactionDetail";
import React from "react";
import { useFetch } from "./hooks/useFetch/useFetch";

function App() {
    const { isLoading, error, data: transactions } = useFetch("http://localhost:3001/transaction");
    if (transactions) {
        console.log(transactions);
    }

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
                        <TransactionDetail />
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;
