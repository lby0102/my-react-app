import React, {Component} from 'react';
import{Button} from 'antd';
import MainMap from '../map';
import MapSearch from '../search'

import './index.css';

class MainPage extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return<div className="mainPage">
            <MainMap/>
            <div id="gaode"></div>
            <MapSearch/>
                

        </div>
    }
}

export default MainPage;

