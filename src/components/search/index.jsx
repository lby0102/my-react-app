import React, {Component} from 'react';

import {Input }from 'antd';
import './index.css';

class MapSearch extends Component{
    constructor(props){
        super(props)
        this.map=window.map;
        this.mainMap=null;

    }
    componentDidMount=()=>{
    }

    onSearch=(e)=>{
        console.log(e);
    }

    render(){
        const Search=Input.Search;
        return<div className='search'>
            <Search
                placeholder="请输入.."
                onSearch={this.onSearch}
                enterButton
            />
            {/* <div className="test">
            </div> */}
        </div>
    }
}

export default MapSearch;