import './App.css';
import * as React from "react";
import {Route, BrowserRouter, Switch, Redirect, Link} from "react-router-dom";
import Bids from "./pages/Bids";
import Workshop from "./pages/Workshop";
import Page404 from "./pages/Page404";
import Storage from "./pages/Storage";
import Cashier from "./pages/Cashier";
import Login from "./pages/Login/Login";
import Settings from "./pages/Settings";
import Archive from "./pages/Archive";
import {Nav, Navbar} from "react-bootstrap";
import MainButton from "./components/UI/Buttons/MainButton/MainButton";

const items = [
    {title: 'Заявки', link:'/bids'},
    {title: 'Мастерская', link:'/workshop'},
    {title: 'Склад', link:'/storage'},
    {title: 'Касса', link:'/cashier'},
    {title: 'Архив', link:'/archive'},
    {title: 'Настройки', link:'/settings'},

]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div  className="Navbar-wrapper">
              <Navbar bg="dark" variant="dark" style={{minWidth:'600px', paddingLeft:'20px'}}>
                  <Nav className="me-auto">
                      {items.map((item, id) => (
                          <Link className={'link'} to={item.link} key={id}>{item.title} </Link>
                      ))}
                  </Nav>
                  <MainButton className="justify-content-end" style={{marginRight:'20px'}}>Выход</MainButton>
              </Navbar>
          </div>



          <Switch>
              <Route path="/bids">
                  <Bids/>
              </Route>
              <Route path="/workshop">
                  <Workshop/>
              </Route>
              <Route path="/storage">
                  <Storage/>
              </Route>
              <Route path="/cashier">
                  <Cashier/>
              </Route>
              <Route path="/settings">
                  <Settings/>
              </Route>
              <Route path="/login">
                  <Login/>
              </Route>
              <Route path="/404">
                  <Page404/>
              </Route>
              <Route path="/archive">
                  <Archive/>
              </Route>
              <Redirect to="/404"/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
