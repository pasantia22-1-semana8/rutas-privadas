import { Component, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Panel from "../pages/Panel";
import PrivateRoute from "./Private.routes";

class App extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route
                  path="/panel"
                  element={<PrivateRoute  component={Panel} role={"admin"} />}
                >

                </Route>
                <Route
                  path="/setting"
                  element={<PrivateRoute  component={Panel} role={"basic"} />}
                ></Route>
              </Routes>
            </>
        );
    }
}

export default App;