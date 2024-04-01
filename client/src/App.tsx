import "./App.css";
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Create } from "./pages/Create/Create";
import { TransactionDetail } from "./pages/TransactionDetail/TransactionDetail";
import React, { useEffect, useState } from "react";
import { Transaction } from "./components/List/List";

function App() {
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <h1>Budget tracker</h1>
                    <NavLink to='/'>Home </NavLink>
                    <NavLink to='create'>Create</NavLink>
                </nav>
            </header>
            <main>
                <Switch>
                    <Route exact path='/'>
                        <MainPage />
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
