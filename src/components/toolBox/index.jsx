import React, {Component} from 'react';

import {Button,Icon}from 'antd';
import './index.css';
import '../../img/point.svg';
import SvgImg from '../svgImg';


const ButtonGroup=Button.Group;

class MapToolBox extends Component{
    constructor(props){
        super(props)
        this.map=null;
        this.mainMap=null;
        this.state={
            location:null,
            showLayerGroup:false
        }

    }
    componentDidMount=()=>{
        this.map=window.map;
        let self=this;
        this.showLocation();

        this.initLayerGroupEvent();
    }

    initLayerGroupEvent=()=>{
        let curbaselayer=document.getElementById("layergroup");
        let self=this;
        curbaselayer.onmouseover=function(){
            self.setState({
                showLayerGroup:true
            });
        }
        curbaselayer.onmouseout=function(){
            self.setState({
                showLayerGroup:false
            });
        }

        let item=document.getElementsByClassName("groupitem");

        for(let i=0;i<item.length;i++){
            item[i].onclick=function(){
                window.smap.changeBaseLayer(item[i].innerText);
            }
        }
    }

    showLocation=()=>{
        let self=this;
        this.map.on("mousemove",function(evt){
            let n=parseInt(evt.latlng.lng/180);
            let lng=evt.latlng.lng%180;
            if(n/2!==0){
                lng=-lng;
            }
            self.setState({
                location:"经度："+lng.toFixed(6)+" 纬度："+evt.latlng.lat.toFixed(6)
            })
        })
    }

    onSearch=(e)=>{
        console.log(e);
    }

    render(){
        return<div className='toolBox'>
            {/* 用户信息 */}
            <div className="user" ><Icon type="user" style={{fontSize:"30px",color:'#1890ff',cursor: "pointer",margin:"0.6rem"}}/></div>
           {/* <Icon type="smile" theme='filled' style={{fontSize:"35px",color:'#1890ff',cursor: "pointer"}}/> */}
            {/* 绘制工具 */}
            <div className="drawBox">
                <div>
                <Button className="drawButton">
                    <SvgImg params={{name:'point',size:'1.5rem',maxSize:'17px',minSize:'10px'}}/>
                </Button><br/>
                <Button className="drawButton">
                    <SvgImg params={{name:'polyline',size:'1.5rem',maxSize:'17px',minSize:'10px'}}/>
                </Button><br/>
                <Button className="drawButton">
                    <SvgImg params={{name:'polygon',size:'1.5rem',maxSize:'17px',minSize:'10px'}}/>
                </Button><br/>
                <Button className="drawButton">
                    <SvgImg params={{name:'rectangle',size:'1.5rem',maxSize:'17px',minSize:'10px'}}/>
                </Button><br/>
                <Button className="drawButton">
                    <SvgImg params={{name:'circle',size:'1.5rem',maxSize:'17px',minSize:'10px'}}/>
                </Button><br/>
                <Button className="drawButton">
                    <Icon type="edit" />
                </Button><br/>
                <Button className="drawButton">
                    <Icon type="delete" />
                </Button>
                </div>
            </div>
            {/* 经纬度显示 */}
            <div className="location">
                {this.state.location}
            </div>
            {/* 放大缩小定位 */}
            <div className="zoomBox">
                <div>
                <Button className="drawButton">
                    <Icon type="plus" />
                </Button><br/>
                <Button className="drawButton">
                    <Icon type="minus" />
                </Button><br/>
                <Button className="drawButton">
                    <SvgImg params={{name:'locate',size:'1.5rem',maxSize:'17px',minSize:'10px'}}/>   
                </Button><br/>
                <Button className="drawButton">
                    <SvgImg params={{name:'fullchina',size:'1.5rem',maxSize:'17px',minSize:'10px'}}/>  
                </Button><br/>

                </div>
            </div>
            {/* 鹰眼 */}
            <div className="overview">

            </div>
            {/* 图层组 */}
            <div className="layergroup" id="layergroup">
                <span className="groupitem" id='curbaselayer' ></span>
                <div className="groupExpland" style={{display:this.state.showLayerGroup?'block':'none'}}>
                    <span className="groupitem">谷歌地图</span>
                    <span className="groupitem">谷歌影像</span>
                    <span className="groupitem">高德地图</span>
                    <span className="groupitem">高德影像</span>
                    <span className="groupitem">智图地图</span>

                    <span className="groupitem">天地图</span>
                    <span className="groupitem">天地图影像</span>
                    <span className="groupitem">智图午夜蓝</span>
                    <span className="groupitem">智图灰色</span>
                    <span className="groupitem">智图暖色</span>
                    <span className="groupitem">智图水系</span>

                </div>
            </div>
            {/* 功能图层 */}
            <div className="functionlayers">
                
            </div>
        </div>
    }
}

export default MapToolBox;