import React, {Component} from 'react';
import './index.css'


class MainMap extends Component{
    constructor(props){
        super(props)
        this.mainMap=null;

    }
    componentDidMount=()=>{
        let map=window.Z.zmap('mapDiv',{
            center:[31.8687, 105.54291],
            zoom:4
        });
        this.mainMap=map;
        map.setMaxZoom(20)
        //高德切片
        map.addBaseLayerByUrl('GAODETILELAYER', {
            url: 'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
            // url: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
        });
        window.map=map;



        //定位
        // let AMap=window.AMap;
        // var amap = new AMap.Map('gaode', {
        //     resizeEnable: true
        // });
        // let self=this;
        // AMap.plugin('AMap.Geolocation', function() {
        //     var geolocation = new AMap.Geolocation({
        //         enableHighAccuracy: true,//是否使用高精度定位，默认:true
        //         timeout: 10000,          //超过10秒后停止定位，默认：5s
        //         buttonPosition:'RB',    //定位按钮的停靠位置
        //         buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        //         zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
    
        //     });
        //     amap.addControl(geolocation);
            
        //     geolocation.getCurrentPosition(function(status,result){
        //         console.log(result);
        //         if(status=='complete'){
                    
        //             self.onComplete(result)
        //         }else{
        //             //onError(result)
        //         }
        //     });
        // });


        //定位
        let self=this;
        let options={
                enableHighAccuracy:true, //boolean 是否要求高精度的地理信息，默认为false
                maximumAge:1000 //应用程序的缓存时间
             }
        if (navigator.geolocation) {
            console.log("浏览器支持!");
            navigator.geolocation.getCurrentPosition(self.onSuccess,self.UNSAFE_componentWillUpdateonError,options);
         }else {
            console.log("浏览器不支持!");
         }


        //陀螺仪
        try {

            let beta=0,alpha=0,gamma=0,dbeta=0,dalpha=0,dgamma=0;
            window.addEventListener("deviceorientation", orientationHandler, false);
            function orientationHandler(event) {

                let zoom=map.getZoom();

                let center=map.getCenter();
                dbeta=(event.beta-beta);
                dalpha=(event.alpha-alpha);
                dgamma=(event.gamma-gamma);
                beta=event.beta;
                alpha=event.alpha;
                gamma=event.gamma;

                center.lat=center.lat+dbeta*0.0002*Math.pow(2,(18-zoom));
                center.lng=center.lng-(dgamma+dalpha)*0.0002*Math.pow(2,(18-zoom));
                map.panTo(center);

            }
        }
        catch (e) {
            console.log(e.message)
        }

    }

    onComplete=(result)=>{

        window.map.setView([result.position.lat,result.position.lng],10);
        window.map.addLayer(window.Z.circleMarker([result.position.lat,result.position.lng]));
    }
    onSuccess=(result)=>{
        console.log(result);

        var longitude =result.coords.longitude;
        var latitude = result.coords.latitude;
        window.map.setView([latitude,longitude],16);
        window.map.addLayer(window.Z.circleMarker([latitude,longitude]));
    }
    onError=(e)=>{
        console.log(e);
    }




    render(){
        return<div id='mapDiv' className="mapDiv" style={{width:"100%",height:"100%"}}>
        </div>
    }
}

export default MainMap;