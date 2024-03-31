import "./App.css";
import { BrowserRouter, Routes, Route, Link, NavLink, Switch } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Create } from "./pages/Create/Create";
import { TransactionDetail } from "./pages/TransactionDetail/TransactionDetail";

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
                    <Route path='/transaction/:id'>
                        <TransactionDetail />
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;
