import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder.js';
import ToolBar from './Components/Navigation/ToolBar/ToolBar'


class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<Layout>
           <BurgerBuilder/>
        </Layout>)
    }
}
export default App;