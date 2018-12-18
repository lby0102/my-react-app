import L from 'leaflet'
import './leaflet.ChineseTmsProviders.js'; //源码上有修改

class SMap{

    initLayerGroup(map) {

        this.map=map;

        this.initTianDitu();
        this.initGaode();
        this.initGeoq();
        this.initBaidu();

        this.currentBaseLayer=null;
        this.currentOverlayLayer={};

        this.baseLayers = {
            "谷歌地图": this.googleLayers.normal.addTo(map),
            "谷歌影像": this.googleLayers.image,
            // "百度地图": this.baiduLayers.normal,
            // "百度卫星": this.baiduLayers.normal,
            "天地图": this.tianDituLayers.normal,
            "天地图影像": this.tianDituLayers.image,
            "高德地图": this.gaodeLayers.normal,
            "高德影像": this.gaodeLayers.image,

            "智图地图": this.geoqLayers.normal,
            "智图多彩": this.geoqLayers.color,
            "智图午夜蓝": this.geoqLayers.purplishBlue,
            "智图灰色": this.geoqLayers.gray,
            "智图暖色": this.geoqLayers.warm,
            "智图冷色": this.geoqLayers.cold,
            "智图水系":this.geoqLayers.water,
        };
        this.currentBaseLayer=this.googleLayers.normal;
        this.overlays={"智图地铁":this.geoqLayers.subway,};

        L.control.layers(this.baseLayers,this.overlays).addTo(map);

    }

    changeBaseLayer=(layername)=>{
        this.baseLayers[layername].addTo(window.map);

        this.currentBaseLayer.remove();
        this.currentBaseLayer=this.baseLayers[layername];
            
        
    }
    addOverlayLayer=(layername)=>{
        this.currentOverlayLayer[layername]=this.overlays[layername];
        this.overlays[layername].addTo(this.map);
    }

    initBaidu=()=>{
        let normal = L.tileLayer.chinaProvider('Baidu.Normal.Map', {
            maxZoom: 18,
            minZoom: 1
        });
        let satellite = L.tileLayer.chinaProvider('Baidu.Satellite.Map', {
            maxZoom: 18,
            minZoom: 1
        });
        this.baiduLayers={
            normal:normal,
            satellite:satellite
        };

        let googleImage = L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
            attribution: 'google'
        });
        let googleNormal = L.tileLayer.chinaProvider('Google.Normal.Map', {
            maxZoom: 18,
            minZoom: 1
        });

        this.googleLayers={
            normal:googleNormal,
            image:googleImage
        };

    }

    //初始化天地图
    initTianDitu=()=> {
        let normalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
                maxZoom: 18,
                minZoom: 1
            }),
            normala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {
                maxZoom: 18,
                minZoom: 1
            }),
            imgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
                maxZoom: 18,
                minZoom: 1
            }),
            imga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
                maxZoom: 18,
                minZoom: 1
            });

        let normal = L.layerGroup([normalm, normala]),
            image = L.layerGroup([imgm, imga]);

        let tianDituLayers = {
            normal: normal,
            image: image,
        }
        this.tianDituLayers = tianDituLayers;
    }
    //初始化高德地图
    initGaode() {
        let normalm = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
            maxZoom: 18,
            minZoom: 1
        });
        let imgm = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
            maxZoom: 18,
            minZoom: 1
        });
        let imga = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
            maxZoom: 18,
            minZoom: 1
        });

        let normal = L.layerGroup([normalm]),
            image = L.layerGroup([imgm, imga]);

        let gaodeLayers = {
            normal: normal,
            image: image,
        }
        this.gaodeLayers = gaodeLayers;

    }
    //初始化智图
    initGeoq() {
        let normal = L.tileLayer.chinaProvider('Geoq.Normal.Map', {
            maxZoom: 18,
            minZoom: 1
        });
        let color = L.tileLayer.chinaProvider('Geoq.Normal.Color', {
            maxZoom: 18,
            minZoom: 1
        });
        let purplishBlue = L.tileLayer.chinaProvider('Geoq.Normal.PurplishBlue', {
            maxZoom: 18,
            minZoom: 1
        });
        let gray = L.tileLayer.chinaProvider('Geoq.Normal.Gray', {
            maxZoom: 18,
            minZoom: 1
        });
        let warm = L.tileLayer.chinaProvider('Geoq.Normal.Warm', {
            maxZoom: 18,
            minZoom: 1
        });
        let cold = L.tileLayer.chinaProvider('Geoq.Normal.Cold', {
            maxZoom: 18,
            minZoom: 1
        });
        let water = L.tileLayer.chinaProvider('Geoq.Normal.Water', {
            maxZoom: 18,
            minZoom: 1
        });
        let subway = L.tileLayer.chinaProvider('Geoq.Normal.Subway', {
            maxZoom: 18,
            minZoom: 1
        });
        let geoqLayers = {
            normal: normal,
            color: color,
            purplishBlue: purplishBlue,
            gray: gray,
            warm: warm,
            cold: cold,
            water:water,
            subway:subway
        }

        this.geoqLayers = geoqLayers;
    }

};
export {SMap}