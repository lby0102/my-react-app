import React, {Component} from 'react';

import {Input,Button}from 'antd';
import './index.css';

class MapSearch extends Component{
    constructor(props){
        super(props)
        this.map=window.map;
        this.mainMap=null;
        this.state={
            searchSize:'little'
        }

    }
    componentDidMount=()=>{
    }

    onSearch=(e)=>{
        console.log(e);
        if(e===""){
            this.changeSearchbar('little');
        }
    }

    changeSearchbar=(type)=>{

        this.setState({
            searchSize:type
        })
    }

    render(){
        const Search=Input.Search;
        return<div className='search'>
        <Button type="primary"  icon="search" id="littleSearch" onClick={this.changeSearchbar.bind(this,"primary")} style={{left:"0",position:"absolute",display:this.state.searchSize=='little'?"block":"none"}}/>
            <Search
                placeholder="请输入.."
                onSearch={this.onSearch.bind(this)}
                enterButton id="search"
                style={{display:this.state.searchSize=='primary'?"block":"none"}}
            />
            {/* <div className="test">
            </div> */}
        </div>
    }
}

export default MapSearch;