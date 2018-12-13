
// import L from 'leaflet';



import $ from 'jquery';
// import './leaflet-heat';
import './HeatLayer';
import './MarkerCluster';
import './MarkerClusterGroup';
// (function(win){
    const L=window.L;
    /**
     * @class ZMap2.0接口总入口,不能直接初始化，leaflet 原有接口：{@link https://leafletjs.com/reference-1.3.4.html}
	 * @author  LiBingya on 2018/11/08.  Email：li.bingya@iwhalecloud.com; 欢迎反馈！
     * @type {{}}
     */
    const Z={};



 /**
     * 获取当前时间
     * @returns {string}
     */
    function getCurrentTime() {
        let date = new Date();
        let sign1 = '-';
        let sign2 = ':';
        let year = date.getFullYear(); // 年
        let month = date.getMonth() + 1; // 月
        let day = date.getDate(); // 日
        let hour = date.getHours(); // 时
        let minutes = date.getMinutes(); // 分
        let seconds = date.getSeconds() //秒
        // let weekArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
        // let week = weekArr[date.getDay()];
        // 给一位数数据前面加 '0”
        if (month >= 1 && month <= 9) {
            month = '0' + month;
        }
        if (day >= 0 && day <= 9) {
            day = '0' + day;
        }
        if (hour >= 0 && hour <= 9) {
            hour = '0' + hour;
        }
        if (minutes >= 0 && minutes <= 9) {
            minutes = '0' + minutes;
        }
        if (seconds >= 0 && seconds <= 9) {
            seconds = '0' + seconds;
        }
        let currentdate = year + sign1 + month + sign1 + day + ' ' + hour + sign2 + minutes + sign2 + seconds;
        return currentdate;
    }

    //点击地图或悬停1秒埋点信息
    function createStoreInfo4Type1(type, evtObj) {
        const userJson = sessionStorage.getItem('currentUser');
        if (!userJson) {
            return null;
        }

        let info = {};
        const currentTime = getCurrentTime();
        const user = JSON.parse(userJson);
        //用户id
        info.userId = user.userId;
        //用户手机
        info.phoneNumber = user.phoneNumber;
        //时间戳
        info.gisTimestamp = currentTime;
        //单击地图
        if ('clickFeatureLayer' == type) {
            info.clickOrSuspend = '0';
        }
        //地图悬浮一秒
        else {
            info.clickOrSuspend = '1';
        }
        info.addressId = evtObj.featureAttr.addressid;
        if (evtObj.latlng) {
            info.clickOrSuspendGisId = evtObj.latlng.lat + ',' + evtObj.latlng.lng;
        } else {
            info.clickOrSuspendGisId = '';
        }

        //返回地图像素分辨率
        if (evtObj.resolution) {
            info.scale = JSON.stringify(evtObj.resolution);
        } else {
            info.scale = evtObj.zoom;
        }
        return info;
    }

    //点击地图或悬停1秒埋点信息
    function createStoreInfo4Type2(type, evtObj) {
        const userJson = sessionStorage.getItem('currentUser');
        if (!userJson) {
            return null;
        }

        let info = {};
        const currentTime = getCurrentTime();
        const user = JSON.parse(userJson);
        //用户id
        info.userId = user.userId;
        //用户手机
        info.phoneNumber = user.phoneNumber;
        //时间戳
        info.gisTimestamp = currentTime;
        info.operationName = type;
        if (evtObj.latlng) {
            info.coordinate = evtObj.latlng.lat + ',' + evtObj.latlng.lng;
        } else {
            info.coordinate = '';
        }

        //返回地图像素分辨率
        if (evtObj.resolution) {
            info.scale = JSON.stringify(evtObj.resolution);
        } else {
            info.scale = evtObj.zoom;
        }
        //返回中心矩形的坐标范围，默认大小：300*200 px
        if (evtObj.centerRectBounds) {
            info.currentCenter = evtObj.centerRectBounds.northEast.lat + ',' + evtObj.centerRectBounds.northEast.lng + ' ' +
                evtObj.centerRectBounds.southWest.lat + evtObj.centerRectBounds.southWest.lng;
        } else {
            evtObj.centerRectBounds = '';
        }

        return info;
    }

    /**
     * 埋点调用方法
     * @param type
     * @param evt
     */
    function storeOperateInfo(type, event) {
        if (!type || !event) {
            return;
        }
        const sendTypeObj = {
            'clickFeatureLayer': '1', //点击地图要素
            // 'mousemove map': '1',//鼠标悬停1秒
            'zoomInMap': '2', //放大
            'zoomOutMap': '2', //缩小
            'moveendMap': '2' //拖拽
        }
        const sendType = sendTypeObj[type];
        let info = null;
        if ('1' === sendType) {
            info = createStoreInfo4Type1(type, event);
        } else if ('2' === sendType) {
            info = createStoreInfo4Type2(type, event);
        }
        if (!info) {
            return;
        }
        const productCode = sessionStorage.getItem('currentOpenProductCode');
        const params = {
            'appId': productCode ? productCode : '',
            'type': sendType,
            'createTime': getCurrentTime(),
            'datas': [info]
        };
        // console.log(params);
    }

    //map类
    (function(z){
        
        z.Zmap=L.Map.extend({
            initialize:function(mapId, options){
                this._eventFunction={};
                // let CRS_3857 = new L.Proj.CRS('EPSG:3857',
                // '+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=6378137 +b=6378137 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ',  // EPSG:4490的PROJ.4描述
                // {
                //     origin:[-20037508.34,20037508.34],
                //     resolutions: [
                //         156543.03392800014,
                //         78271.51696400007,
                //         39135.758482000034,
                //         19567.879241000017,
                //         9783.939620500008,
                //         4891.969810250004,
                //         2445.984905125002,
                //         1222.992452562501,
                //         611.4962262812505,
                //         305.74811314062526,
                //         152.87405657031263,
                //         76.43702828515632, 
                //         38.21851414257816, 
                //         19.10925707128908, 
                //         9.55462853564454, 
                //         4.77731426782227, 
                //         2.388657133911135, 
                //         1.1943285669555674, 
                //         0.5971642834777837, 
                //         0.29858214173889186, 
                //         0.14929107086944593, 
                //         0.07464553543472296, 
                //         0.03732276771736148
                //     ]
                // });
                // options.crs=CRS_3857;
                options.zoomControl= false;
                options.attributionControl= false;
                L.Map.prototype.initialize.call(this,mapId, options);
            },
            /**
             * zmap 关闭事件方法
             * @example zmap.off('click',fn);
             */
            off:function(type,fn){
                if(!fn){
                    return;
                }
                L.Map.prototype.off.call(this,type,fn);
            },
            /**
             * zmap 类的获取地图当前像素分辨率函数，即每像素对应多少米
             * @returns {number}  单位：米/像素
             * @example let resolution=zmap.getResolution();
             */
            getResolution:function(){
                let bound = this.getBounds();
                let dlat = bound._northEast.lat - bound._southWest.lat; //纬度差值
                let dy = this.getSize().y; //地图高度，像素
                let long = 40008.6 * 1000 * dlat / 360; //经线弧长对应的实际长度，米
                return long / dy; //每个像素的长度
            },
            /**
             * zmap 类的获取地图范围函数函数
             * @returns {object} 例：{{northEast:{}, southEast:{}}}
             * @example let resolution=zmap.getBounds();
             */
            getBounds : function () {
                let bounds = L.Map.prototype.getBounds.call(this);
                bounds.northEast= bounds._northEast;
                bounds.southWest=bounds._southWest;
                return bounds;
            },
            /**
             * zmap 类的获取以地图中心为中心函数，宽为width，高height的矩形边界
             * @param {number} width 像素宽，px
             * @param {number} height 像素高，px
             * @returns {object}  矩形的地图范围坐标
             * @example let resolution=zmap.getRectangleBouds();
             */
            getRectangleBouds : function (width, height) {
                let center = this.getCenter();
                let centerPiexl = this.latLngToLayerPoint(center);

                let leftDown = [centerPiexl.x - width / 2, centerPiexl.y + height / 2];
                let rightTop = [centerPiexl.x + width / 2, centerPiexl.y - height / 2];

                let southWest = this.layerPointToLatLng(leftDown);
                let northEast = this.layerPointToLatLng(rightTop);
                return {
                    southWest: southWest,
                    northEast: northEast
                };
            },
            /**
             * zmap 类的打开鼠标跟随提示框
             * @param {string} text 提示文本
             * @param options 选项
             * @param options.direction direction 方向：'auto'|'left'|'right'|'top'|'bottom'|'center'
             * @example zmap.opentip('a,hahaha!');
             */
            opentip : function (text, options) {
                let opt = options || {};
                let toolTip = new L.tooltip({
                    direction: opt.direction || 'right'
                });
                this.mapTipLayer = new L.circleMarker([0, 0], {
                    opacity: 0,
                    fillOpacity: 0
                }).bindTooltip(toolTip).addTo(this);
                this.mapTipLayer.openTooltip();
                this.mapTipLayer.setTooltipContent(text);
                let self = this;
                this.on('mousemove', function (evt) {
                    if (self.mapTipLayer != null) {
                        let latlng = evt.latlng;
                        self.mapTipLayer.setLatLng(latlng);
                    }
                })
            },
            /**
             * zmap 类的关闭鼠标跟随提示框
             * @example zmap.closetip();
             */
            closetip : function () {
                this.mapTipLayer.closeTooltip();
                if (this.mapTipLayer) {
                    this.mapTipLayer.remove();
                    this.mapTipLayer = null;
                }
            },
            /**
             * zmap 类的判断是否包含feature，feature可为marker,polyline,polygon,circleMarker等
             * @param {object} feature zmap中矢量对象
             * @returns {boolean} 是否包含
             * @example let isHasFeature=zmap.hasFeature(feature);
             */
            hasFeature :function (feature) {
                return this.hasLayer(feature);
            },
            /**
             * zmap 类的添加feature函数
             * @param {object} feature  zmap矢量类型
             * @example zmap.addFeature(feature);
             */
            addFeature : function (feature) {
                feature.addTo(this);
            },
            /**
             * zmap 类的删除feature函数
             * @param {object} feature zmap中的矢量类型
             * @example zmap.removeFeature(feature);
             */
            removeFeature:function (feature) {
                feature.remove();
            },
            /**
             * zmap 类的添加监听事件函数
             * @param {string}type 事件类型，'load','zoom','resize','zoomend','move','moveend','click','dblclick','mouseup','mousedown','mousemove','moveover','mouseout'
             * @param {Function}fn 回调函数
             * @returns {string} 事件key值
             * @example let eventKey=zmap.addEvent('click',function(e){
             *  console.log(e);
             * });
             */
            addEvent : function (type, fn) {
                let keys = Object.keys(this._eventFunction);
                let objLen = keys.length;
                let eventKey = 'map_event_' + type + objLen;
                // let self=this;
                this.on(type, this._eventFunction[eventKey] = function (evt) {
                    fn(evt);
                });
                return eventKey;
            },
            /**
             * zmap 类的移除事件监听函数
             * @param {string} type 事件类型
             * @param {string} eventKey 事件key值
             * @example zmap.removeEvent('click',eventKey)
             */
            removeEvent: function (type, eventKey) {
                if (!eventKey) {
                    for (let a in this._eventFunction) {
                        if (a.indexOf(type) != -1) {
                            this.off(type, this._eventFunction[a]);
                        }
                    }
                } else {
                    if (this._eventFunction[eventKey]) {
                        this.off(type, this._eventFunction[eventKey]);
                    }
                }
            },
            /**
             * zmap 类设置监听状态
             * @example zmap.setListen(true)
             */
            setListen:function(state){
                this._keepListen=state;
            },
            /**
             * zmap 类设置中心矩形大小，size:[width, height]
             * @param {array} size size:[width, height]
             * @example zmap.setCenterRectangleSize([300,400])
             */
            setCenterRectangleSize:function(size){
                this._centerRectangleSize=size;
            },
            /**
             * zmap 类的获取以地图中心为中心函数，宽为width，高height的矩形边界
             * @param {number} width 像素宽，px
             * @param {number} height 像素高，px
             * @returns {object}  矩形的地图范围坐标
             * @example zmap.getRectangleBouds(300,400)
             */
            getRectangleBouds : function (width, height) {
                let center = this.getCenter();
                let centerPiexl = this.latLngToLayerPoint(center);

                let leftDown = [centerPiexl.x - width / 2, centerPiexl.y + height / 2];
                let rightTop = [centerPiexl.x + width / 2, centerPiexl.y - height / 2];

                let southWest = this.layerPointToLatLng(leftDown);
                let northEast = this.layerPointToLatLng(rightTop);
                return {
                    southWest: southWest,
                    northEast: northEast
                };
            },
            /**
             * zmap 类的添加底图方法
             * @param {string} type ,图层类型 value:TILELAYER|WMSLAYER|WMTSLAYER|ESRIMAPLAYER|ESRITILEMAPLAYER|ESRITILELAYER|GAODETILELAYER
             * @param {object} options 图层参数，options.url必填，坐标系要与map保持一致，地图默认为：'EPSG:3857”
             * @returns {object} 返回图层对象
             * @example leaflet切片服务 zmap.addBaseLayerByUrl("TILELAYER",{url:''})
             * @example wms服务 zmap.addBaseLayerByUrl("WMSLAYER",{url:'',layerName:'',format:'image/png'})
             * @example wmts服务 
             * zmap.addBaseLayerByUrl("WMTSLAYER",{
             *      leftTopLatLng:[20037508.3427892,-20037508.3427892],
             *      layerName:'ningbo:daolu',
             *      url:'http://10.45.34.185:8082/geoserver/gwc/service/wmts',
             *      tilematrixSet:'3857',//(或'EPSG:4326')
             *      format:'image/png',
             *      minZoom:2,
             *      maxZoom:20
             * })
             * @example arcgis dynamicMapLayer服务 zmap.addBaseLayerByUrl("ESRIMAPLAYER",{url:''})
             * @example arcgis tileMapLayer切片服务 zmap.addBaseLayerByUrl("ESRITILEMAPLAYER",{url:''})
             * @example arcgis 缓存本地切片服务 
             * zmap.addBaseLayerByUrl("ESRITILELAYER",{
             *      url:'',
             *      minZoom:2,
             *      maxZoom:20
             * })
             * @example 高德底图切片服务 
             * zmap.addBaseLayerByUrl("GAODETILELAYER",{
             *      url:'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
             *      subdomains:['1', '2', '3', '4'],
             *      minZoom:2,
             *      maxZoom:20
             * })
             */
            addBaseLayerByUrl : function (type, options) {
                let layerOptions = options || {};
                let layer = null;
                let layerType = type.toUpperCase();
                switch (layerType) {
                    case 'TILELAYER':
                        layer = L.tileLayer(layerOptions.url, {
                            noWrap: layerOptions.noWrap == undefined ? false : layerOptions.noWrap
                        });
                        break;
                    case 'WMSLAYER':
                        layer = L.tileLayer.wms(layerOptions.url, {
                            layers: layerOptions.layerName,
                            format: layerOptions.format || 'image/png'
                        });
                        break;
                    case 'WMTSLAYER':
                        let leftTopLatLng = layerOptions.leftTopLatLng ? layerOptions.leftTopLatLng : [90, -180];
                        let matrixIds = [];
                        for (let i = 0; i < 22; ++i) {
                            matrixIds[i] = {
                                identifier: '' + i,
                                topLeftCorner: new L.LatLng(leftTopLatLng[0], leftTopLatLng[1])
                            };
                        }
                        let epsgNum = layerOptions.tilematrixSet ? layerOptions.tilematrixSet.replace(/[^0-9]/ig, '') : '';

                        let crs = L.CRS['EPSG' + epsgNum] || null;
                        if (crs == null || this.options.crs != crs) {
                            console.log('图层未设置坐标系或与Map坐标系不同，可能导致图层无法正常加载,请正确配置Map及图层坐标系！');
                        }

                        let layerOpt = {
                            layer: layerOptions.layerName || '', //图层名称
                            tilematrixSet: layerOptions.tilematrixSet || 'EPSG:4326',
                            format: layerOptions.format || 'image/png',
                            matrixIds: matrixIds,
                            minZoom:layerOptions.minZoom == undefined ? 0 : layerOptions.minZoom,
                            maxZoom:layerOptions.maxZoom == undefined ? 22 : layerOptions.maxZoom
                        };
                        if (crs) {
                            layerOpt.crs = crs;
                        }
                        layer = new L.TileLayer.WMTS(layerOptions.url, layerOpt);
                        break;
                    case 'ESRIMAPLAYER':
                        layer = L.esri.dynamicMapLayer({
                            url: layerOptions.url
                        });
                        break;
                    case 'ESRITILEMAPLAYER': //arcgis tiledMapLayer 服务
                        layer = L.esri.tiledMapLayer({
                            url: layerOptions.url,
                            continuousWorld: false
                        });
                        break;
                    case 'ESRITILELAYER': //arcgis 本地缓存切片
                        layer = new z.esriTileLayer(layerOptions.url, {
                            minZoom: layerOptions.minZoom == undefined ? 0 : layerOptions.minZoom,
                            maxZoom: layerOptions.maxZoom == undefined ? 22 : layerOptions.maxZoom,
                        });
                        break;
                    case 'GAODETILELAYER': //高德服务
                        layer = new L.tileLayer(layerOptions.url, {
                            maxZoom: layerOptions.maxZoom == undefined ? 20 : layerOptions.maxZoom,
                            minZoom: layerOptions.minZoom == undefined ? 1 : layerOptions.minZoom,
                            subdomains: layerOptions.subdomains || ['1', '2', '3', '4']
                        });
                        break;
                    default:
                        console.log('不支持该图层类型！');
                        break;
                }

                if (layer != null) {
                    this.addLayer(layer);
                }

                return layer;
            }
        })

        /**
         * @extends {L.map}
		 * @class zmap 类，地图类，包含常用方法和事件，更多接口：{@link https://leafletjs.com/reference-1.3.4.html#map}
         * @example let zmap=new Z.map('mapId',{center:[28,115],zoom:8})
         * @param {string} mapId map容器id
         * @param {object} options 地图参数
         * @param {array} options.center 地图中心坐标 [30,120]
         * @param {number} options.zoom 地图等级 默认4
         * @param {boolean} options.zoomControl 层级控制工具 默认false
         * @param {boolean} options.attributionControl 属性控制工具 默认false
         * @param {onject} options.crs 坐标系，'EPSG4326'，'EPSG3857'等,或使用proj4等定义的crs对象
         * @param {onject} options.minZoom 地图最小缩放层级
         * @param {onject} options.maxZoom 地图最大缩放层级
         */
        z.zmap=function(mapId, options){
            let map=new z.Zmap(mapId, options);
            if(!options||!options.center){
                map.setView([41, 120], 2)
            }
            //启用埋点
            map.setListen(true);
            //中心矩形框大小默认值
            map.setCenterRectangleSize([300, 200]); 
            let _lastZoom = map.getZoom();
            let _lastZoom1 = map.getZoom(); //用于判断moveend事件
            let _queryDelayTime=1000//1000毫秒
            
            let _eventSetTimeOut={};
            //监听地图鼠标拖动(停止1秒响应)、缩放(停止1秒响应)
            map.on('zoomend moveend', function (evt) {
                //判断是否执行返回监听
                if (map._keepListen == true) {
                    let evtObj = {};
                    if (evt.type == 'mousemove') {//鼠标移动事件,暂不使用
                        if (_eventSetTimeOut['mousemove']) {
                            clearTimeout(_eventSetTimeOut['mousemove']);
                        }
                        //延迟事件，实现mousemove等事件触发后，停止超过（1秒）则执行一次
                        _eventSetTimeOut['mousemove'] = setTimeout(function () {
                            let bound = map.getBounds();
                            evtObj.bounds = {//返回边界
                                northEast: bound._northEast,
                                southWest: bound._southWest
                            };
                            if (evt.latlng) {
                                evtObj.latlng = evt.latlng;
                            }
                            let zoom = map.getZoom();
                            evtObj.zoom = zoom;//返回等级
                            evtObj.center = map.getCenter();//返回中心坐标
                            evtObj.resolution = map.getResolution();//返回分辨率
                            //返回中心矩形范围
                            evtObj.centerRectBounds = map.getRectangleBouds(map._centerRectangleSize[0], map._centerRectangleSize[1]);

                            storeOperateInfo(evt.type + 'Map', evtObj);
                        }, _queryDelayTime);
                    } else if (evt.type == 'moveend') {//鼠标拖动、缩放事件
                        if (_eventSetTimeOut['moveend']) {
                            clearTimeout(_eventSetTimeOut['moveend']);
                        }
                        //延迟事件，实现moveend等事件触发后，停止超过（1秒）则执行一次
                        _eventSetTimeOut['moveend'] = setTimeout(function () {

                            let bound = map.getBounds();
                            evtObj.bounds = {
                                northEast: bound._northEast,
                                southWest: bound._southWest
                            };
                            evtObj.center = map.getCenter();
                            evtObj.resolution = map.getResolution();
                            evtObj.centerRectBounds = map.getRectangleBouds(map._centerRectangleSize[0], map._centerRectangleSize[1]);

                            if (evt.latlng) {
                                evtObj.latlng = evt.latlng;
                            }
                            let zoom = map.getZoom();
                            evtObj.zoom = zoom;

                            if (_lastZoom1 == zoom) {//如果zoom不变，说明是鼠标移动事件
                                storeOperateInfo(evt.type + 'Map', evtObj);
                            } else {//如果zoom变，是缩放事件，单独显示
                                _lastZoom1 = zoom;
                            }

                        }, _queryDelayTime);
                    } else if (evt.type == 'zoomend') {//地图缩放事件

                        if (_eventSetTimeOut['zoomend']) {
                            clearTimeout(_eventSetTimeOut['zoomend']);
                        }
                        //延迟事件，实现zoomend等事件触发后，停止超过（1秒）则执行一次
                        _eventSetTimeOut['zoomend'] = setTimeout(function () {

                            let bound = map.getBounds();
                            evtObj.bounds = {
                                northEast: bound._northEast,
                                southWest: bound._southWest
                            };
                            evtObj.center = map.getCenter();
                            evtObj.resolution = map.getResolution();
                            evtObj.centerRectBounds = map.getRectangleBouds(map._centerRectangleSize[0], map._centerRectangleSize[1]);
                            if (evt.latlng) {
                                evtObj.latlng = evt.latlng;
                            }
                            let zoom = map.getZoom();
                            evtObj.zoom = zoom;
                            let type = evt.type;
                            if (evt.type == 'zoomend' || evt.type == 'moveend') {
                                if (zoom > _lastZoom) {
                                    type = 'zoomIn';//放大
                                    // type = 'zoomIn' + (zoom - _lastZoom);
                                } else if (zoom < _lastZoom) {
                                    // type = 'zoomOut' + (_lastZoom - zoom);
                                    type = 'zoomOut';//缩小
                                }
                                _lastZoom = zoom;
                            }
                            storeOperateInfo(type + 'Map', evtObj);
                        }, _queryDelayTime);
                    }
                }
            });

            //返回map
            return map;
        }
        
        L.map=z.zmap;


        /**
        * esriTileLayer初始化方法,用于arcgis本地缓存切片加载，目前发现大于19级会出现切片偏移问题
        */
       z.esriTileLayer = L.TileLayer.extend({
           getTileUrl: function (tilePoint) {
               var oo = '00000000';
               var xx = tilePoint.x.toString(16);
               xx = 'C' + oo.substring(0, 8 - xx.length) + xx;
               var yy = tilePoint.y.toString(16);
               yy = 'R' + oo.substring(0, 8 - yy.length) + yy;
   
               return L.Util.template(this._url, L.extend({
                   s: this._getSubdomain(tilePoint),
                   z: tilePoint.z.toString().length > 1 ? 'L' + tilePoint.z : 'L0' + tilePoint.z,
                   x: xx, // 注意切片命名的大小写
                   y: yy
               }, this.options));
           }
       });




       L.TileLayer.WMTS = L.TileLayer.extend({
        defaultWmtsParams: {
            service: 'WMTS',
            request: 'GetTile',
            version: '1.0.0',
            layers: '',
            styles: '',
            tilematrixSet: '',
            format: 'image/jpeg'
        }, initialize: function (url, options) {
            this._url = url;
            var wmtsParams = L.extend({}, this.defaultWmtsParams);
            var tileSize = options.tileSize || this.options.tileSize;
            if (options.detectRetina && L.Browser.retina) {
                wmtsParams.width = wmtsParams.height = tileSize * 2;
            } else {
                wmtsParams.width = wmtsParams.height = tileSize;
            }
            for (var i in options) {
                if (!this.options.hasOwnProperty(i) && i != "matrixIds") {
                    wmtsParams[i] = options[i];
                }
            }
            this.wmtsParams = wmtsParams;
            this.matrixIds = options.matrixIds || this.getDefaultMatrix();
            L.setOptions(this, options);
        }, onAdd: function (map) {
            this._crs = this.options.crs || map.options.crs;
            L.TileLayer.prototype.onAdd.call(this, map);
        }, getTileUrl: function (coords) {
            var tileSize = this.options.tileSize;
            var nwPoint = coords.multiplyBy(tileSize);
            nwPoint.x += 1;
            nwPoint.y -= 1;
            var sePoint = nwPoint.add(new L.Point(tileSize, tileSize));
            var zoom = this._tileZoom;
            var nw = this._crs.project(this._map.unproject(nwPoint, zoom));
            var se = this._crs.project(this._map.unproject(sePoint, zoom));
            var tilewidth = se.x - nw.x;
            var ident = this.matrixIds[zoom].identifier;
            // var tilematrix = this.wmtsParams.tilematrixSet + ":" + ident;
            var tilematrix =ident;//geoserver 2.13.2
            var X0 = this.matrixIds[zoom].topLeftCorner.lng;
            var Y0 = this.matrixIds[zoom].topLeftCorner.lat;
            var tilecol = Math.floor((nw.x - X0) / tilewidth);
            var tilerow = -Math.floor((nw.y - Y0) / tilewidth);
            var url = L.Util.template(this._url, {s: this._getSubdomain(coords)});
            return url + L.Util.getParamString(this.wmtsParams, url) + "&tilematrix=" + tilematrix + "&tilerow=" + tilerow + "&tilecol=" + tilecol;
        }, setParams: function (params, noRedraw) {
            L.extend(this.wmtsParams, params);
            if (!noRedraw) {
                this.redraw();
            }
            return this;
        }, getDefaultMatrix: function () {
            var matrixIds3857 = new Array(22);
            for (var i = 0; i < 22; i++) {
                matrixIds3857[i] = {identifier: "" + i, topLeftCorner: new L.LatLng(20037508.3428, -20037508.3428)};
            }
            return matrixIds3857;
        }
    });
    L.tileLayer.wmts = function (url, options) {
        return new L.TileLayer.WMTS(url, options);
    };

    })(Z);

    //vectorGridLayer
    (function (z) {
        
        z.VectorGridLayer = function (url, options) {
            let layerOptions = options || {};
            let vectorTileLayerStyles = {};
            layerOptions.renderFactory = layerOptions.renderFactory ? layerOptions.renderFactory : L.svg.tile;
            vectorTileLayerStyles[layerOptions.layerName] = options.vectorTileLayerStyles;
            layerOptions.vectorTileLayerStyles = vectorTileLayerStyles;
            let layer = L.vectorGrid.protobuf(url, layerOptions);
            return {
                layer: layer
            };
        };
        z.VectorGridLayer.prototype = {};
    
        /**
         * 矢量切片加载接口，pbf格式（通过geoserver首页-TMS找到地址）,Zmap特有方法
		 * @class 
         * @param {string} url 切片服务地址 
         * @param {object} options
         * @param {object} options.renderFactory 可选：L.svg.tile或L.canvas.tile，默认L.svg.tile
         * @param {object} options.vectorTileLayerStyles 切片样式
         * @param {object} options.vectorTileLayerStyles.layername 图层名不含geoserver工作区名
         * @param {object} options.vectorTileLayerStyles.renderFactory L.svg.tile或L.canvas.tile
         * @param {object} options.vectorTileLayerStyles.vectorTileLayerStyles function
         * @returns {object} 返回矢量切片图层
         */
        z.vectorGridLayer = function (url, options) {
            let vectorGridLayer=new z.VectorGridLayer(url, options)
            return vectorGridLayer.layer;
        }

    })(Z);

    //featureLayer类
    (function(z){
        z.FeatureLayer=L.FeatureGroup.extend({
            initialize:function(featureAry){
                this._eventFunction={};
                L.FeatureGroup.prototype.initialize.call(this,featureAry);
            },
            /**
             * featureLayer 类,添加features函数
             * @param {array} feature  marker,circlemarker,point,polyline,polygon..
             * @example featureLayer.addFeature(feature)
             */
            addFeature:function(feature){
                this.addLayer(feature);
            },
            /**
             * featureLayer 类,添加features函数
             * @param {array} feature  例：[feature1,feature2,...]
             * @example featureLayer.addFeatures(feature)
             */
            addFeatures:function(feature){
                let type = Object.prototype.toString.call(feature);
                if (type == '[object Array]') {
                    for (let i = 0, len = feature.length; i < len; i++) {
                        this.addLayer(feature[i]);
                    }
                } else {
                    this.addLayer(feature);
                }
            },
            /**
             * featureLayer 类,删除features函数
             * @param {object} feature 
             * @example featureLayer.removeFeature(feature)
             */
            removeFeature:function (feature) {
                this.layer.removeLayer(feature);
            },
            /**
             * featureLayer 类,删除所有features函数
             * @example featureLayer.clearFeature()
             */
            clearFeature:function(){
                this.clearLayers();
            },
            /**
             * featureLayer 类,添加事件函数
             * @param {string}type 事件类型 'click','dblclick','moveover'
             * @param {Function} fn 回调函数
             * @returns {string} 事件key值
             * @example let eventKey=featureLayer.addEvent('click',fn)
             */
            addEvent:function (type, fn) {

                let keys = Object.keys(this._eventFunction);
                let objLen = keys.length;
                let eventKey = 'layer_event_' + type + objLen;
                this.on(type, this._eventFunction[eventKey] = function (evt) {
                    fn(evt);
                });
                return eventKey;
            },
            /**
             * featureLayer 类,移除事件函数
             * @param {string} type 事件类型
             * @param {string} eventKey 添加事件时返回的事件key值，eventKey为空则不执行
             * @example featureLayer.removeEvent('click',eventKey)
             */
            removeEvent : function (type, eventKey) {
                if (!eventKey) {
                    for (let a in this._eventFunction) {
                        if (a.indexOf(type) != -1) {
                            this.off(type, this._eventFunction[a]);
                        }
                    }
                } else {
                    if (this._eventFunction[eventKey]) {
                        this.off(type, this._eventFunction[eventKey]);
                    }
                }
            },
            onAdd:function(map){
                this.clickLayerListen=this._sendListen.bind(this);
                this.on('click',this.clickLayerListen);
                this.on('mouseover',this.clickLayerListen);
                L.FeatureGroup.prototype.onAdd.call(this,map);
            },
            onRemove:function(map){
                if(this.clickLayerListen){
                    this.off('click',this.clickLayerListen);
                    this.off('mouseover',this.clickLayerListen);
                }
                L.FeatureGroup.prototype.onRemove.call(this,map);
            },
            _sendListen:function(evt){
                let str = evt.type + 'FeatureLayer';
                storeOperateInfo(str, {
                    latlng: evt.latlng,
                    layerName: evt.layer.layerName,
                    featureAttr: evt.layer.attributes || {}
                });
            }
        })

        /**
         * @extends {L.featuregroup}
         * @class featureLayer 类,更多接口：{@link https://leafletjs.com/reference-1.3.4.html#featuregroup}
         * @param {array} layerAry 图层数组,例：[layer1，layer2,...]
         * @param {object} options 图层属性
         * @example 
         * let featureLayer=L.featureLayer();
         * zmap.addLayer(featureLayer)
         */
        
        z.featureLayer=function(featureAry, options){
            let layer=new z.FeatureLayer(featureAry);
            layer.layerType = 'featureLayer';
            layer.layerName = '';
            if (options) {
                layer.attributes = options.attributes;
                layer.layerName = options.layerName || '';
            }
            return layer;
        }
        
        //
        L.featureLayer=Z.featureLayer;

        function sendListen(evt){

        }

    })(Z);
    


    //wfs查询
    (function (z) {
        /**
         * wfs查询,空间查询,Zmap特有方法
		 * @class 
         * @param {string} serviceUrl 服务地址
         * @param {object} options 参数
		 * @param {string} options.layerName 图层名，
		 * @param {string} options.field 查询字段，
		 * @param {object} options.geometry 'polygon'或'circle' 
		 * @param {string} options.coordString 坐标，
		 * @param {number} options.radius 半径
         * @param {function}fn 查询结果回调
         * @param {function}error 返回错误信息
         * @example
         * let serviceUrl = 'http://10.45.26.17:8082/geoserver/mysql/ows?';//路况WFS服务
         * let latlng=[20.5,120]
         * let options = {
         *       layerName: 'mysql:adm_devcoper_bas_rdnet_path_info',
         *       field: 'SHAPE',
         *       coordString: latlng[0] + ',' + latlng[1],
         *       geometry: 'circle',
         *       radius: radius//单位:米
         *   };
         * z.wfsQuery (serviceUrl, options, function(feature){
         *      console.log(feature);
         * }, function(error){}) 
         */
        z.wfsQuery = function (serviceUrl, options, fn, error) {
            let wfsOptions = options || {};

            let url = serviceUrl + 'service=WFS&request=GetFeature&version=1.0.0&maxFeatures=200&typeName=' + wfsOptions.layerName + '&outputFormat=json&Filter=';

            let param = '<Filter xmlns="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml">';
            param = param + '<Intersects>';
            param = param + '<PropertyName>' + wfsOptions.field + '</PropertyName>';
            param = param + '<gml:polygon><gml:outerBoundaryIs><gml:LinearRing>';
            if (wfsOptions.geometry == 'polygon') {
                param = param + '<gml:coordinates>' + wfsOptions.coordString + '</gml:coordinates>';
            } else if (wfsOptions.geometry == 'circle') {
                let coordString = getCircleRing(wfsOptions.coordString, wfsOptions.radius);
                param = param + '<gml:coordinates>' + coordString + '</gml:coordinates>';
            }
            param = param + '</gml:LinearRing></gml:outerBoundaryIs></gml:polygon>';
            param = param + '</Intersects>';
            param = param + '</Filter>';

            $.ajax({
                type: 'POST',
                contentType: 'text/plain;charset=UTF-8',
                async: true,
                url: url+param,
                // data:param,
                // dataType:'String',
                success: function (data) {
                    fn(data);
                },
                error: function (e) {
                    error(e);
                }
            });

            
        }
		/**
         * Z.vectorTileClick 矢量切片单击,Zmap特有方法
		 * @class 
         * @param {string}serviceUrl 服务地址
         * @param {object}options 参数
		 * @param {string} options.layerName 图层名，
		 * @param {string} options.field 查询字段，
		 * @param {object} options.geometry 'polygon'或'circle' 
		 * @param {string} options.coordString 坐标，
		 * @param {number} options.radius 半径
         * @param {function}fn 查询结果回调
         * @param {function}error 返回错误信息
         */
        z.vectorTileClick=function(serviceUrl, options, fn, error){
            let dataBaseTableConfig=null;
            
            z.wfsQuery(serviceUrl, options, function(data){
                if (data.features && data.features.length > 0) {//features为查询的路段

                    $.ajax({
                        type: 'get',
                        dataType:'json',
                        async: false,
                        url:'./assets/utils/dataBaseTableConfig.json',
                        success: function (data) {
                            dataBaseTableConfig=data;
                        },
                        // error: function (e) {
                        //     error('未获取到路况图层配置文件！');
                        // }
                    });
                    let feature = data.features[0];
                    let properties = feature.properties;
                    let str = 'clickFeatureLayer';
                    let pointary = options.coordString.split(',');
                    storeOperateInfo(str, {
                        latlng: {lat:pointary[0],lng:pointary[1]},
                        layerName: options.layerName,
                        featureAttr: properties || {}
                    });
                    let curFeature;
                    if(dataBaseTableConfig){
                        //转换查询结果为统一的字段名返回
                        curFeature=changeFieldName(feature,dataBaseTableConfig['geo_gd_segment_pl']);
                    }else{
                        curFeature=feature;
                    }
                   fn(curFeature);
                }else{
                    fn(null);
                }
            }, function(e){error(e)})
        }

        //z.wfsQuery = wfsQuery;
        //z.vectorTileClick = vectorTileClick;
        //for oracle to mysql ai...
        function changeFieldName(features,config){
            let type=Object.prototype.toString.call(features);
            if(type=='[object Array]'){
                for(let i=0,len=features.length;i<len;i++){
                    let propertiesN={};
                    let propertiesO=features[i].properties;
                    for(let a in propertiesO){
                        // propertiesN[a.toLowerCase()]=propertiesO[a];
                        if(config[a]){
                            propertiesO[config[a]]=propertiesO[a];
                            delete propertiesO[a];
                        }
                    }
                    // if(propertiesO['NAME']!=undefined){
                    //     propertiesN['path_name']=propertiesO['NAME'];
                    // }
                    features[i].properties=propertiesN;
                }
            }else if(type=='[object Object]'){
                let propertiesN={};
                let propertiesO=features.properties;
                for(let a in propertiesO){
                    // propertiesN[a.toLowerCase()]=propertiesO[a];
                    if(config[a]){
                        propertiesO[config[a]]=propertiesO[a];
                        delete propertiesO[a];
                    }
                }
                // if(propertiesO['name']!=undefined){
                //     propertiesN['path_name']=propertiesO['NAME'];
                // }
                features.properties=propertiesO;
            }
            return features;
        }

        /**
         * 根据圆心，半径，点数，生成圆圈坐标
         * @param coordString 圆心，'33,120'
         * @param radius 半径 ，米
         * @returns {string} 圆坐标串  '120,21 120,22 121,22 ...'
         */
        function getCircleRing(coordString, radius, ringLen) {
            let pointstr = coordString.split(',').reverse();
            let point = [parseFloat(pointstr[0]), parseFloat(pointstr[1])];
            let pointWeb = lonLatToWebMercator(point[0], point[1]);
            let circleRing = [];
            let circleRingl = '';
            let startPoint;
            let len = ringLen == undefined ? 30 : ringLen;
            for (let i = 0; i < len; i++) {
                let angle = i * 12;
                let x = pointWeb[0] + radius * Math.cos(angle * 3.14 / 180)
                let y = pointWeb[1] + radius * Math.sin(angle * 3.14 / 180);
                let pointl = webMercator2lonlat(x, y);
                circleRing.push(pointl);
                let pointlStr = pointl[0] + ',' + pointl[1];
                circleRingl = circleRingl + pointlStr + ' ';
                if (i == 0) {
                    startPoint = pointl;
                }
            }
            return circleRingl + startPoint[0] + ',' + startPoint[1];
        }
        /**
         * wgs84转墨卡托投影
         * @param lng 经度
         * @param lat 纬度
         * @returns {[*,*]}
         */
        function lonLatToWebMercator(lng, lat) {
            var x = lng * 20037508.34 / 180;
            var y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);
            y = y * 20037508.34 / 180;
            return [x, y];
        }

        /**
         * 墨卡托转wgs84
         * @param x
         * @param y
         * @returns {[*,*]}
         */
        function webMercator2lonlat(x, y) {
            let lon = x / 20037508.34 * 180;
            let lat = y / 20037508.34 * 180;
            lat = 180 / Math.PI * (2 * Math.atan(Math.exp(lat * Math.PI / 180)) - Math.PI / 2);
            return [lon, lat];
        }
    })(Z);


    //矢量图层
    (function(z){

        /**
         * 产生随机十六进制颜色代码
         */
        function getColor(){
            var colorValue="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";                       
            var colorArray = colorValue.split(",");                
            var color="#";           
            for(var i=0;i<6;i++){                 
                color+=colorArray[Math.floor(Math.random()*16)];               
            }
            return color;           
        }
       
        z.addFeatureLayer=function(map,data,featureType,options,attributes){
            let layer=new Z.AddFeatureLayer(map,data,featureType,options,attributes);
            return layer
        }
         /**
         * 
         * @class addFeatureLayer 类，可以控制图层显隐，设置图层显示的等级，以及图片和矢量点的切换,Zmap特有方法
         * @extends {Z.featureLayer}
         * @param {object} map map对象
         * @param {array} data 图层数据，服务地址或数据数组 [{lat:20,lng:120,,},{}..]
         * @param {string} featureType 要素类型，marker、circlemarker,polyline,polygon
         * @param {object} options 样式、显隐等
         * @param {object} options.minZoom 开始显示等级
         * @param {object} options.maxZoom 结束显示等级
         * @example 
         * let data=[];
         * data.push({lat:29,lng:121,name:'001'});
         * data.push({lat:29,lng:121,name:'001'});
         * let featureLay=Z.addFeatureLayer(map,data,'circlemarker',{radius:8,minZoom:8,maxZoom:16})
         */
        z.AddFeatureLayer=function(map,data,featureType,options,attributes){
            this._data=data;

            this._zmap=map;
            this._style=options||{};
            // this._featureType0=featureType.toLocaleLowerCase();
            this._featureType=featureType.toLocaleLowerCase();
            this._eventKeys={};
            this._addFeatureLayerEvent={};
            this._tempColor=null;
            this._layerName=this._style.layerName||''

            if(this._style.visible==false){
                this._visible=false;
            }else{
                this._visible=true;
            }
            if(this._style.minZoom!=undefined){
                this._minZoom=this._style.minZoom;
            }else{
                this._minZoom=0;
            }
            if(this._style.maxZoom!=undefined){
                this._maxZoom=this._style.maxZoom;
            }else{
                this._maxZoom=22;
            }
            //this._layer=new Z.featureLayer();
            //this.layer=this._layer.layer;
            this.layer=new Z.featureLayer();
            this.layer.attributes=attributes||{};
            if(this._visible){
                this._zmap.addLayer(this.layer)
            }

            this.setData(data);
            // this._lastzoom = this._zmap.getZoom();
            // if(this._lastzoom>=this._minZoom&&this._lastzoom<=this._maxZoom){
            //     this._addCurExtentFeatureToLayer();
            // }
            //添加事件,动态显示
            this._addMoveEvent();
            
            //继承featureLayer的方法
            for(var p in this.layer){
                z.addFeatureLayer.prototype[p]=this.layer[p]
            }
        }
        z.AddFeatureLayer.prototype={
            /**
             * addFeatureLayer 类，设置图层可见性
             * @param {boolean} visible true 或 false，默认true
             * @example addFeatureLayer.setVisible(false)
             */
            setVisible:function(visible){
                this._visible=visible;
                let isAddLayer=this._zmap.hasLayer(this.layer);
                let zoom= this._zmap.getZoom();
                if(visible){
                    if(isAddLayer){
                        return;
                    }
                    this._clearLayer();
                    this._zmap.addLayer(this.layer);
                    this._addMoveEvent();
                    if(zoom>=this._minZoom&&zoom<=this._maxZoom){
                        this._addCurExtentFeatureToLayer();
                    }
                }else{
                    if(isAddLayer){
                        this._clearLayer();
                        this._zmap.removeLayer(this.layer);
                        this._removeMoveEvent();
                    }
                } 
            },
            /**
             * addFeatureLayer 类，设置图层可见性
             * @param {boolean} visible true 或 false，默认true
             * @example let visible=addFeatureLayer.getVisible();
             */
            getVisible:function(){
                return this._visible;
            },
            /**
             * addFeatureLayer 类，设置图层可见性
             * @param {number} zoom 层级
             * @example addFeatureLayer.setMinZoom(2);
             */
            setMinZoom:function(zoom){
                this._minZoom=zoom;
                if(!this._visible){
                    return;
                }
                let curZoom=this._zmap.getZoom();
                //更新显示
                this._updateFeature(this,curZoom);
            },
            /**
             * addFeatureLayer 类，设置图层可见性
             * @param {number} zoom 层级
             * @example let zoom=addFeatureLayer.getMinZoom(2);
             */
            getMinZoom:function(){
                return this._minZoom;
            },
            /**
             * addFeatureLayer 类，设置图层可见性
             * @param {number} zoom 层级
             * @example addFeatureLayer.setMaxZoom(20);
             */
            setMaxZoom:function(zoom){
                this._maxZoom=zoom;
                if(!this._visible){
                    return;
                }
                let curZoom=this._zmap.getZoom();
                //更新显示
                this._updateFeature(this,curZoom);
            },
            /**
             * addFeatureLayer 类，设置图层可见性
             * @param {number} zoom 层级
             * @example let zoom=addFeatureLayer.getMinZoom(2);
             */
            getMaxZoom:function(){
                return this._maxZoom;
            },
            /**
             * addFeatureLayer 类，设置数据源
             * @param {string|array} data 数据地址或数据数组
             * @example addFeatureLayer.setData(data);
             */
            setData:function(data){
                this._data=data;
                this._dataType = Object.prototype.toString.call(data);
                if (this._dataType == '[object Array]') {
                    this._alldata=data;
                }else if(this._dataType == '[object String]'){
                    this._alldata=this._getData(data)||[];
                }
                if(this.layer instanceof L.FeatureGroup)
                this.refresh();
            },
            /**
             * addFeatureLayer 类，更新显示图层
             * @example addFeatureLayer.refresh();
             */
            refresh:function(){
                if(this._dataType == '[object String]'){
                    this._alldata=this._getData(this._data)||[];
                }
                //更新显示
                this._updateFeature(this,this._zmap.getZoom());
            },
            /**
             * addFeatureLayer 类，从地图移除图层
             * @example addFeatureLayer.removeFromMap();
             */
            removeFromMap:function(){
                if(this._zmap.hasLayer(this.layer)){
                    this._clearLayer();
                    this._zmap.removeLayer(this.layer);
                    this._removeMoveEvent();
                } 
            },
            /**
             * addFeatureLayer 类，从地图移除图层
             * @example addFeatureLayer.addToMap();
             */
            addToMap:function(){
                if(!this._zmap.hasLayer(this.layer)){
                    this._zmap.addLayer(this.layer);
                    this._updateFeature();
                    //添加事件,动态显示
                    this._addMoveEvent();
                } 
            },
            onAdd:function(t){
                this._map=t;
                console.log(t);
            },
            /**
             * addfeatureLayer 类的添加事件函数
             * @param {string}type 事件类型 'click','dblclick','moveover'
             * @param {Function} fn 回调函数
             * @returns {string} 事件key值
             * @example let eventKey=addFeatureLayer.addEvent('click',fn);
             */
            addEvent:function (type, fn) {

                let keys = Object.keys(this._eventKeys);
                let objLen = keys.length;
                let eventKey = 'layer_event_' + type + objLen;
                this.layer.on(type, this._eventKeys[eventKey] = function (evt) {
                    fn(evt);
                });
                return eventKey;
            },
            /**
             * addfeatureLayer 类的移除事件函数
             * @param {string} type 事件类型
             * @param {string} eventKey 添加事件时返回的事件key值，eventKey为空则不执行
             * @example addFeatureLayer.removeEvent('click',eventKey);
             */
            removeEvent : function (type, eventKey) {
                if (!eventKey) {
                    for (let a in this._eventKeys) {
                        if (a.indexOf(type) != -1) {
                            this.layer.off(type, this._eventKeys[a]);
                        }
                    }
                } else {
                    if (this._eventKeys[eventKey]) {
                        this.layer.off(type, this._eventKeys[eventKey]);
                    }
                }
            },
            _getBounds:function(){
                let bounds = this._zmap.getBounds();
                let maxLat = bounds._northEast.lat;
                let minLat = bounds._southWest.lat;
                let maxLng = bounds._northEast.lng;
                let minLng = bounds._southWest.lng;
                return{maxLat:maxLat,minLat:minLat,maxLng:maxLng,minLng}
            },
            _addCurExtentFeatureToLayer:function(){
                let dataList=this._alldata;
                if(null==this._tempColor)
                this._tempColor=getColor();
                let extent=this._getBounds();
                for(let i=0,len=dataList.length;i<len;i++){
                    let isInCurExtent=this._isInCurExtent(dataList[i],extent);
                    isInCurExtent.layerName=this._layerName;
                    if(isInCurExtent){
                        if(this._featureType.toLowerCase()=='marker'){
                            let latlng = [isInCurExtent.lat, isInCurExtent.lng];
                            let marker = new Z.marker(latlng, this._style/*{
                                iconUrl: this._style.iconUrl,
                                type: 'icon'
                            }*/, isInCurExtent);
                            this.layer.addFeature(marker);
                        }else if(this._featureType.toLowerCase()=='circlemarker'){
                            let latlng = [isInCurExtent.lat, isInCurExtent.lng];
                            let circleMarker = new Z.circleMarker(latlng, this._style/*{
                                color: this._style.color||this._tempColor,
                                radius:this._style.radius||5,//像素
                            }*/, isInCurExtent);
                            this.layer.addFeature(circleMarker);
                        }else if(this._featureType.toLowerCase()=='polyline'){
                            let paths = isInCurExtent.linePaths;
                            let polyline = new Z.polyline(paths, this._style, isInCurExtent);
                            this.layer.addFeature(polyline);
                        }else if(this._featureType.toLowerCase()=='polygon'){
                            let paths = isInCurExtent.linePaths;
                            let polygon = new Z.polygon([paths], this._style, isInCurExtent);
                            this.layer.addFeature(polygon);
                        }
                    }
                }
            },
            _isInCurExtent:function(dataListi,extent){
                if(this._featureType.toLowerCase()=='marker'||this._featureType.toLowerCase()=='circlemarker'){
                    let lat = dataListi.centerLat || dataListi.lat;
                    let lng = dataListi.centerLng || dataListi.lng;
                    if (lat && lng) {
                        if (lat > extent.minLat && lat < extent.maxLat && lng < extent.maxLng && lng > extent.minLng) {
                            dataListi.lat=lat;
                            dataListi.lng=lng;
                            return dataListi;
                        }else{return false}
                    }else{return false}
                }else if (this._featureType.toLowerCase()=='polyline'||this._featureType.toLowerCase()=='polygon'){
                    let pathsString = dataListi.SHAPE || dataListi.POINTS;
                    let linePaths=this._stringLatlngToArray(pathsString);
                    if(linePaths.length>0){
                        if (linePaths[0][0] > extent.minLat && linePaths[0][0] < extent.maxLat && linePaths[0][1] < extent.maxLng && linePaths[0][1] > extent.minLng&&linePaths[linePaths.length-1][0] > extent.minLat && linePaths[linePaths.length-1][0] < extent.maxLat && linePaths[linePaths.length-1][1] < extent.maxLng && linePaths[linePaths.length-1][1] > extent.minLng) {
                            dataListi.linePaths=linePaths;
                            return dataListi;
                        }else{return false}
                    }else{return false}
                }
            },
            _clearLayer:function(){
                this.layer.clearFeature();
            },
            _addMoveEvent:function(){
                //放大，缩小地图隐藏/显示地图图层
                this._addFeatureLayerEvent=this._updateFeature.bind(this);
                this._eventKey=this._zmap.on('moveend', this._addFeatureLayerEvent);
            },
            _removeMoveEvent:function(){
                this._zmap.off('moveend',this._addFeatureLayerEvent);
            },
            _updateFeature:function(){
                let self=this;
                let zoom=self._zmap.getZoom();
                if(!self._visible){
                    return;
                }
                let isAddLayer=self._zmap.hasLayer(self.layer);
                if(zoom>=self._minZoom&&zoom<=self._maxZoom){
                    //刷新
                    self._clearLayer();
                    self._addCurExtentFeatureToLayer();
                    if(!isAddLayer){
                        //显示
                        self._zmap.addLayer(self.layer);
                    }
                }else{
                    if(isAddLayer){
                        //移除显示
                        self._zmap.removeLayer(self.layer);
                    }
                }
            },
            _getData:function(serviceUrl){
                let result;
                $.ajax({
                    type: 'get',
                    async: false,
                    url: serviceUrl, //后台查询服务地址
                    dataType: 'json',
                    success: function (data) {
                        result = data;
                    },
                    error: function (e) {
                        console.log(e);
                    }
                });

                return result;
            },
            _stringLatlngToArray:function(str){
                let pointsStr=str;
                //let pointsStr='LINESTRING  ( 121.58346132 29.83323510, 121.58346168 29.83323510, 121.58382204 29.83301973, 121.58383284 29.83301325, 121.58384796 29.83300371, 121.58413668 29.83283145, 121.58437212 29.83269177, 121.58446428 29.83263723)'
                pointsStr=pointsStr.replace('LINESTRING','');
                pointsStr=pointsStr.replace('POLYGON','');
                pointsStr=pointsStr.replace(/\(/g,'').replace(/\)/g,'');//去除所有"("、")"
                let pAry=pointsStr.split(',');
                let linePaths=[];
                for(let j=0;j<pAry.length;j++){
                    pAry[j]=pAry[j].replace(/(^\s*)|(\s*$)/g, '');//去除前后空格
                    pAry[j]=pAry[j].split(' ');
                    let pointAry=[parseFloat(pAry[j][1]),parseFloat(pAry[j][0])];
                    linePaths.push(pointAry);
                }
                return linePaths;
            }
        }
    })(Z);


    //HeatLayer
    // (function(z){
    //     z.HeatLayer=L.HeatLayer.extend({
    //         initialize:function(data,options){
    //             if(data!=null&&data!=undefined){
    //                 if(typeof data=='object'){
    //                     this._alldata=data;
    //                     this._serviceUrl='';
    //                 }else if(typeof data=='string'){
    //                     this._serviceUrl=data;
    //                     this._alldata=this._getDataFromService()
    //                 }else{
    //                     this._alldata=[];
    //                     this._serviceUrl='';
    //                 }
    //             }else{
    //                 this._alldata=[];
    //                 this._serviceUrl='';
    //             }

    //             this._options=options||{};
                
    //             let opt={
    //                 minOpacity:this._options.maxOpacity||1,//热量开始时的最小不透明度,默认1
    //                 maxZoom:this._options.maxZoom||22,//点到达最大强度的缩放级别（随着缩放的强度比例），默认等于地图的maxZoom
    //                 minZoom:this._options.minZoom||0,
    //                 max:this._options.max||1,//最大点强度，默认为1.0 
    //                 radius:this._options.radius||25,//热图的每个“点”的半径，默认为25 
    //                 blur:this._options.blur||15,//模糊量，默认为15 
    //                 gradient:this._options.gradient||{//颜色渐变配置，例如{0.4：'蓝色'，0.65：'石灰'，1：'红色'}
    //                     "1": "rgba(255,0,0,1)",
    //                     "0.9": "rgba(255,255,0,1)",
    //                     "0.8": "rgba(0,255,0,1)",
    //                     "0.5": "rgba(0,255,255,1)",
    //                     "0": "rgba(0,0,255,1)"
    //                 }
    //             }
                
    //             this._heatData=this._getHeatmapData();
    //             L.HeatLayer.prototype.initialize.call(this,this._heatData,opt);
    //         },
    //         _getHeatmapData:function(){
    //             let len=this._alldata.length;
    //             if(len==0)
    //             return [[0,0,0]];
    //             let reaultAry=[];
    //             for(let i=0;i<len;i++){
    //                 let lat = this._alldata[i].centerLat || this._alldata[i].lat;
    //                 let lng = this._alldata[i].centerLng || this._alldata[i].lng;
    //                 if (lat && lng) {
    //                     reaultAry.push([lat,lng,0.5]);
    //                 }
    //             }
    //             return reaultAry;  
    //         },
    //         _getDataFromService:function(serviceUrl){
    //             let result;
    //             if(serviceUrl!=undefined){
    //                 this._serviceUrl=serviceUrl;
    //             }
    //             if(this._serviceUrl==''){
    //                 return []
    //             }
    //             $.ajax({
    //                 type: 'get',
    //                 async: false,
    //                 url: this._serviceUrl, //后台查询服务地址
    //                 dataType: 'json',
    //                 success: function (data) {
    //                     result = data;
    //                 },
    //                 error: function (e) {
    //                     console.log(e);
    //                 }
    //             });
    //             return result;
    //         },
    //         onAdd:function(map){
    //             this._map=map;
    //             this._eventFunction=this._updateFeature.bind(this);
    //             this._map.on('moveend',this._eventFunction);
    //             this._zminZoom=this._options.minZoom!=undefined?this._options.minZoom:0;
    //             this._zmaxZoom=this._options.maxZoom!=undefined?this._options.maxZoom:this._map.getMaxZoom();

    //             //
    //             this._resetEventFunction=this._reset.bind(this);
    //             this._animateZoomEventFunction=this._animateZoom.bind(this);

    //             let t = map;this._canvas || this._initCanvas();
    //             if(this._isShow){t._panes.overlayPane.appendChild(this._canvas)}
    //             t.on("moveend", this._resetEventFunction); t.options.zoomAnimation && L.Browser.any3d && t.on("zoomanim", this._animateZoomEventFunction); this._reset()

    //             //L.HeatLayer.prototype.onAdd.call(this,map);
    //         },
    //         onRemove:function(){
    //             this._map.off('moveend',this._eventFunction);
    //             //L.HeatLayer.prototype.onRemove.call(this,this._map);
    //             let t=this._map;
    //             if(this._isShow){t.getPanes().overlayPane.removeChild(this._canvas)}
	// 	        t.off("moveend", this._resetEventFunction); t.options.zoomAnimation && t.off("zoomanim", this._animateZoomEventFunction)
    //             this._map=null;

    //         },
    //         _updateFeature:function(){
    //             let zoom=this._map.getZoom();
    //             let isShow=this.getShowState();
    //             if(zoom>=this._zminZoom&&zoom<=this._zmaxZoom){
    //                 if(!isShow){
    //                     //显示
    //                     this.addCanvas(this._map);
    //                 }
    //             }else{
    //                 if(isShow){
    //                     //移除显示
    //                     this.removeCanvas(this._map);
    //                 }
    //             }
    //         },
    //         /**
    //          * heatLayer 类，添加一个点
    //          * @param {object} options 参数
    //          * @param {number} options.minOpacity 热量开始时的最小不透明度，默认1
    //          * @param {number} options.maxZoom 点到达最大强度的缩放级别（随着缩放的强度比例），默认等于地图的22
    //          * @param {number} options.minZoom 最小显示层级，默认0
    //          * @param {number} options.max 最大点强度，默认为1.0
    //          * @param {number} options.radius 热图的每个“点”的半径，默认为25
    //          * @param {number} options.blur 模糊量，默认为15
    //          * @param {object} options.gradient 颜色渐变配置，例如{0.4：'颜色1'，0.65：'颜色2'，1：'颜色3'}
    //          * @example 
    //          * heatLayer.setOptions({max:0.8,blur:10,minOpacity:0.5,radius:10,maxZoom:17,minZoom:13});
    //          */
    //         setOptions:function(options){
    //             L.HeatLayer.prototype.setOptions.call(this,options);
    //         },
    //         /**
    //          * heatLayer 类，添加一个点
    //          * @param {object} data Z.marker对象
    //          * @example 
    //          * let data={lat:20,lng:120,name:'eee'};
    //          * heatLayer.setData(data);
    //          */
    //         addData:function(data){
    //             let lat = data.lat;
    //             let lng = data.lng;
    //             let latLng;
    //             if (lat && lng) {
    //                 latLng=[lat,lng,0.5];
    //                 this._heatData.push(latLng);
    //                 L.HeatLayer.prototype.addLatLng.call(this,latLng);
    //             }
    //         },
    //         /**
    //          * heatLayer 类，通过数据更新图层
    //          * @param {array} data :[{lat:20,lng:120,..},{},...] 
    //          * @example 
    //          * var data=[];
    //          * data.push({lat:29,lng:121,name:'001'});
    //          * data.push({lat:29,lng:121,name:'001'}); 
    //          * heatLayer.setData(data);
    //          */
    //         setData:function(data){
    //             this._alldata=data;
    //             this._heatData=this._getHeatmapData();
    //             L.HeatLayer.prototype.setLatLngs.call(this,this._heatData);
    //         },
    //         /**
    //          * heatLayer 更新来自服务的数据及显示
    //          * @example heatLayer.refresh();
    //          */
    //         refresh:function(serviceUrl){
    //             this._alldata=this._getDataFromService(serviceUrl);
    //             this._heatData=this._getHeatmapData();
    //             L.HeatLayer.prototype.setLatLngs.call(this,this._heatData);
    //         },
    //         /**
    //          * heatLayer 类，刷新显示
    //          * @example heatLayer.redraw();
    //          */
    //         redraw:function(){
    //             L.HeatLayer.prototype.redraw.call(this);
    //         }
    //     });

    //     /**
    //      * 热力图层类,Zmap特有方法
    //      * @class 
    //      * @param {array} data [{lat:20,lng:120,..},{},...]
    //      * @param {object} options 参数
    //      * @param {number} options.minOpacity 热量开始时的最小不透明度 
    //      * @param {number} options.maxZoom 点到达最大强度的缩放级别（随着缩放的强度比例），默认等于地图的22
    //      * @param {number} options.minZoom 最小显示层级，默认0
    //      * @param {number} options.max 最大点强度，默认为1.0
    //      * @param {number} options.radius 热图的每个“点”的半径，默认为25
    //      * @param {number} options.blur 模糊量，默认为15
    //      * @param {object} options.gradient 颜色渐变配置，例如{0.4：'颜色1'，0.65：'颜色2'，1：'颜色3'}
    //      * @example 
    //      * let data=[];
    //      * data.push({lat:29,lng:121,name:'001'});
    //      * data.push({lat:29,lng:121,name:'001'});
    //      * let heatmapLayer =Z.heatLayer(data,{max:0.8,blur:10,minOpacity:0.5,radius:10,maxZoom:17,minZoom:13});
    //      */
    //     z.heatLayer=function(data,options){
    //         let layer=new z.HeatLayer(data,options);
    //         return layer;
    //     }
    // })(Z);


    //markerClusterLayer
    (function(z){
        z.MarkerClusterLayer=L.MarkerClusterGroup.extend({
            initialize:function(data,options,iconStyle){
                if(data!=null&&data!=undefined){
                    if(typeof data=='object'){
                        this._alldata=data;
                        this._serviceUrl='';
                    }else if(typeof data=='string'){
                        this._serviceUrl=data;
                        this._alldata=this._getDataFromService()
                    }else{
                        this._alldata=[];
                        this._serviceUrl='';
                    }
                }else{
                    this._alldata=[];
                    this._serviceUrl='';
                }

                this._allMarkers=[];
                this._options=options||{};
                this._iconStyle=iconStyle||{};
                this._eventKeys={};
                
                this._isAddFeatures=true;

                let opt={
                    showCoverageOnHover:this._options.showCoverageOnHover||false,
                    zoomToBoundsOnClick:this._options.zoomToBoundsOnClick||false,
                    spiderfyOnMaxZoom:this._options.spiderfyOnMaxZoom||false,
                    disableClusteringAtZoom:this._options.disableClusteringAtZoom||18,
                    maxClusterRadius:this._options.maxClusterRadius||80,
                    animate:this._options.animate||true,
                    iconCreateFunction:this._options.IconCreateFunction||null
                }
                
                L.MarkerClusterGroup.prototype.initialize.call(this,opt);
                if(this._alldata!=[]&&this._alldata!=undefined){
                    this._addDataToLayer();
                }
            },
            onAdd:function(map){
                
                this._zmap=map;
                this._eventFunction=this._updateEvent.bind(this);
                this._zmap.on('moveend',this._eventFunction);
                this._zminZoom=this._options.minZoom!=undefined?this._options.minZoom:0;
                this._zmaxZoom=this._options.maxZoom!=undefined?this._options.maxZoom:this._map.getMaxZoom();
                // this._zmap.off('moveend',this._updateEvent,this);
                // L.MarkerClusterGroup.prototype.onAdd.call(this,this._zmap);

                // this._map = map;
                var i, l, layer;

                if (!isFinite(this._map.getMaxZoom())) {
                    throw "Map has no maxZoom specified";
                }

                this._featureGroup.addTo(map);
                this._nonPointGroup.addTo(map);

                if (!this._gridClusters) {
                    this._generateInitialClusters();
                }
                this._maxLat = map.options.crs.projection.MAX_LATITUDE;
                //Restore all the positions as they are in the MCG before removing them
                for (i = 0, l = this._needsRemoving.length; i < l; i++) {
                    layer = this._needsRemoving[i];
                    layer.newlatlng = layer.layer._latlng;
                    layer.layer._latlng = layer.latlng;
                }
                //Remove them, then restore their new positions
                for (i = 0, l = this._needsRemoving.length; i < l; i++) {
                    layer = this._needsRemoving[i];
                    this._removeLayer(layer.layer, true);
                    layer.layer._latlng = layer.newlatlng;
                }
                this._needsRemoving = [];
                //Remember the current zoom level and bounds
                this._zoom = Math.round(this._map._zoom);
                this._currentShownBounds = this._getExpandedVisibleBounds();

                this._zoomEndEventFunction=this._zoomEnd.bind(this);
                this._moveEndEventFunction=this._moveEnd.bind(this);
                this._map.on('zoomend', this._zoomEndEventFunction);
                this._map.on('moveend', this._moveEndEventFunction);

                if (this._spiderfierOnAdd) { //TODO FIXME: Not sure how to have spiderfier add something on here nicely
                    this._spiderfierOnAdd();
                }

                this._bindEvents();
                //Actually add our markers to the map:
                l = this._needsClustering;
                this._needsClustering = [];
                this.addLayers(l, true);

                //判断是否在显示层级内
                let curZoom=this._zmap.getZoom();
                if(curZoom>this._zmaxZoom||curZoom<this._zminZoom){
                    this.clearLayers();
                }
            },
            onRemove:function(map){

                this._zmap.off('moveend',this._eventFunction);
                // L.MarkerClusterGroup.prototype.onRemove.call(this,this._zmap);

                map.off('zoomend', this._zoomEndEventFunction);
                map.off('moveend', this._moveEndEventFunction);

                this._unbindEvents();
                //In case we are in a cluster animation
                this._map._mapPane.className = this._map._mapPane.className.replace(' leaflet-cluster-anim', '');
                if (this._spiderfierOnRemove) { //TODO FIXME: Not sure how to have spiderfier add something on here nicely
                    this._spiderfierOnRemove();
                }
                delete this._maxLat;
                //Clean up all the layers we added to the map
                this._hideCoverage();
                this._featureGroup.remove();
                this._nonPointGroup.remove();
                this._featureGroup.clearLayers();
                this._zmap=null;
            },
            //将_alldata转成marker，并添加到layer
            _addDataToLayer:function(){
                let len=this._alldata.length;
                if(len==0)
                return;
                for(let i=0;i<len;i++){
                    let lat = this._alldata[i].centerLat || this._alldata[i].lat;
                    let lng = this._alldata[i].centerLng || this._alldata[i].lng;
                    let myIcon = null;
                    if (this._iconStyle.type&&this._iconStyle.type == 'divIcon') {
                        myIcon = L.divIcon(this._iconStyle);
                    } else {
                        myIcon = L.icon(this._iconStyle);
                    }
                    if (lat && lng) {
                        this._alldata[i].lat=lat;
                        this._alldata[i].lng=lng;
                        var marker = L.marker(new L.LatLng(lat, lng),{icon:myIcon});
                        marker.attributes=this._alldata[i];
                        this.addFeature(marker);
                    }
                }
            }, 
            _updateEvent:function(){
                if(!this._zmap)
                return;
                let zoom=this._zmap.getZoom();
                if(zoom>=this._zminZoom&&zoom<=this._zmaxZoom){
                    if(!this._isAddFeatures){
                        //显示
                        this._addFeatures();
                        this._isAddFeatures=true;
                    }
                }else{
                    if(this._isAddFeatures){
                        //移除显示
                        this.clearLayers();
                        this._isAddFeatures=false;
                    }
                }
            },
            _addFeatures:function(){
                if(this._allMarkers){
                    for(let i=0,len=this._allMarkers.length;i<len;i++){
                        this.addLayer(this._allMarkers[i]);
                    }  
                }
            },
            _getDataFromService:function(serviceUrl){
                let result=[];
                if(serviceUrl!=undefined){
                    this._serviceUrl=serviceUrl;
                }
                if(this._serviceUrl==''){
                    return result
                }
                $.ajax({
                    type: 'get',
                    async: false,
                    url: this._serviceUrl, //后台查询服务地址
                    dataType: 'json',
                    success: function (data) {
                        result = data;
                    },
                    error: function (e) {
                        console.log('数据获取失败！'+e);
                    }
                });
                return result;
            },
            
            /**
             * markerClusterLayer 类,添加事件函数
             * @param {string}type 事件类型 'click','dblclick','moveover'||'clusterclick','clusterdblclick','clustermoveover'
             * @param {Function} fn 回调函数
             * @returns {string} 事件key值
             * @example let eventKey=markerClusterLayer.addEvent('click',fn);
             */
            addEvent:function (type, fn) {

                let keys = Object.keys(this._eventKeys);
                let objLen = keys.length;
                let eventKey = 'layer_event_' + type + objLen;
                this.on(type, this._eventKeys[eventKey] = function (evt) {
                    fn(evt);
                });
                return eventKey;
            },
            /**
             * markerClusterLayer 类,的移除事件函数
             * @param {string} type 事件类型
             * @param {string} eventKey 添加事件时返回的事件key值，eventKey为空则不执行
             * @example markerClusterLayer.removeEvent('click',eventKey);
             */
            removeEvent : function (type, eventKey) {
                if (!eventKey) {
                    for (let a in this._eventKeys) {
                        if (a.indexOf(type) != -1) {
                            this.off(type, this._eventKeys[a]);
                        }
                    }
                } else {
                    if (this._eventKeys[eventKey]) {
                        this.off(type, this._eventKeys[eventKey]);
                    }
                }
            },
            /**
             * markerClusterLayer 类,添加feature
             * @param {Z.Marker} feature Z.marker对象
             * @example markerClusterLayer.addFeature(Z.marker([20,120]));
             */
            addFeature:function(feature){
                this._allMarkers.push(feature);
                L.MarkerClusterGroup.prototype.addLayer.call(this,feature);
            },
            /**
             * markerClusterLayer 类,清除显示的数据
             * @example markerClusterLayer.clearFeatures();
             */
            clearFeatures:function(){
                this._allMarkers=[];
                L.MarkerClusterGroup.prototype.clearLayers.call(this);
            },
            /**
             * markerClusterLayer 类,通过features更新图层
             * @param {array} features Z.marker数组
             * @example markerClusterLayer.setFeatures([marker1,marker2...]);
             */
            setFeatures:function(features){
                this._allMarkers=features;
                this.clearLayers();
                this._addFeatures();
            },
            /**
             * markerClusterLayer 类,通过数据更新图层
             * @param {array} data :[{lat:20,lng:120,..},{},...] 
             * @example 
             * let data=[];
             * data.push({lat:29,lng:121,name:'001'});
             * data.push({lat:29,lng:121,name:'001'});
             * markerClusterLayer.setData(data);
             */
            setData:function(data){
                this._alldata=data;
                this.clearFeatures();
                this._addDataToLayer();
            },
            /**
             * markerClusterLayer 类,更新来自服务的数据及显示
             * @param {string} 数据服务地址
             * @example markerClusterLayer.refresh('http://10.45.70.121:8874/gisService/InterInfo/selectByParams');
             */
            refresh:function(serviceUrl){
                this._alldata=this._getDataFromService(serviceUrl);
                this.clearFeatures();
                this._addDataToLayer();
            }
        });

        /**
         * markerClusterLayer 类,Zmap特有方法
         * @class 
         * @param {object} map zamp对象
         * @param {object|string} data  
         * @param {boolean} options 聚合效果相关设置
         * @param {boolean} options.showCoverageOnHover 将鼠标悬停在群集上时，它会显示其标记的边界。默认false
         * @param {boolean} options.zoomToBoundsOnClick 单击群集时，我们会缩放到其边界。默认true
         * @param {boolean} options.spiderfyOnMaxZoom 当您点击底部缩放级别的群集时，我们会将其抓取，以便您可以看到其所有标记。 默认false
         * @param {number} options.disableClusteringAtZoom 停止聚合层级。默认18
         * @param {number} options.maxClusterRadius 最大聚合半径,默认80像素
         * @param {boolean} options.animate 是否显示动画,默认true
         * @param {Function} options.IconCreateFunction 自定义聚合图标方法
         * @example 
         * IconCreateFunction: function (cluster) {
         *  var childCount = cluster.getChildCount();
         *  var c = ' marker-cluster-';
         *      if (childCount < 10) {
         *          c += 'small';
         *      } else if (childCount < 100) {
         *          c += 'medium';
         *      } else {
         *          c += 'large';
         *  }
         * return new L.DivIcon({ html: '<div><span>' + childCount + '</span></div>', className: 'marker-cluster' + c, iconSize: new L.Point(40, 40) });
	     * },
         * @param {object} iconStyle 单个点显示样式，同marker
         * @example
         * let data =_getData(deviceUrl);
         * let markerClusterLayer=Z.markerClusterLayer(data,{maxClusterRadius:50,maxZoom:19,minZoom:13},{iconUrl:icon});
         * let map.addLayer(markerClusterLayer);
         */
        z.markerClusterLayer=function(data,options,iconStyle){
            let layer=new z.MarkerClusterLayer(data,options,iconStyle);
            return layer;
        }

    })(Z);


    //draw绘制方法
    (function (z) {
        /**
         * 绘制几何图形方法,Zmap特有方法
		 * @class 
         * @param {object} map map对象
         * @example let draw=new Z.draw();
         */
        z.draw = function (map) {
            this._map = map;
            this._type = null;
            this._pointAry = [];
            this._container = this._map._container;
            this._tempLayer = null;
            this._currentLayer = null;
            this._layerAry = [];

            this._center = null;
            this._radius = null;

            this.eventElement = {};
        }
        z.draw.prototype = {
            /**
             * 开始绘制，传入绘制类型参数
             * @param {String} type  'circlemarker','polyline','polygon','circle','rectangle'
             * @param {function} fn 回调
             * @example 
             * let draw=new Z.draw();
             * draw.startDraw('polyline',function(e){
             *      console.log(e);
             * });
             */
            startDraw: function (type, fn) {
                this.stop();
                this._type = type.toLowerCase();

                this._map.doubleClickZoom.disable();

                this.eventElement.mousemove = this._onMove.bind(this);
                this.eventElement.click = this._onClick.bind(this);
                this.eventElement.dblclick = this._onFinish.bind(this, fn);
                this.eventElement.mousedown = this._onmouseDown.bind(this);
                this.eventElement.mouseup = this._onmouseUp.bind(this, fn);

                this._map.on('mousemove', this.eventElement.mousemove);
                this._map.on('click', this.eventElement.click);
                this._container.style.cursor = 'crosshair';

                if (this._type == 'circle' || this._type == 'rectangle') {
                    this._map.on('mousedown', this.eventElement.mousedown);
                    this._map.on('mouseup', this.eventElement.mouseup);
                }
                this._map.on('dblclick', this.eventElement.dblclick);
            },
            //鼠标单击事件
            _onClick: function (evt) {
                let latlng = evt.latlng;
                if (this._type == 'polyline') {
                    this._pointAry.push(latlng);
                    if (this._pointAry.length > 1) {
                        if (!this._currentLayer) {
                            this._currentLayer = new L.polyline([this._pointAry[0], this._pointAry[1]]);
                            this._currentLayer.addTo(this._map);
                        } else {
                            this._currentLayer.addLatLng(latlng);
                        }
                    }
                } else if (this._type == 'polygon') {
                    this._pointAry.push(latlng);
                    if (this._pointAry.length > 1) {
                        if (!this._currentLayer) {
                            this._currentLayer = new L.polyline([this._pointAry[0], this._pointAry[1]]);
                            this._currentLayer.addTo(this._map);
                        } else {
                            this._currentLayer.addLatLng(latlng);
                        }
                    }
                } else if (this._type == 'point') {
                    this._pointAry.push(latlng);
                    this._currentLayer = new L.circleMarker(latlng);
                    this._currentLayer.addTo(this._map);
                    this._layerAry.push(this._currentLayer);
                    this._currentLayer = null;
                }
            },
            //鼠标按下事件
            _onmouseDown: function (evt) {
                this._map.dragging.disable();
                this._center = evt.latlng;
                if (this._type == 'circle') {
                    this._currentLayer = L.circle(this._center, {
                        radius: 0
                    });
                    this._currentLayer.addTo(this._map);
                }
                if (this._type == 'rectangle') {
                    this._currentLayer = L.rectangle([this._center, this._center]);
                    this._currentLayer.addTo(this._map);
                }
            },
            //鼠标弹起事件
            _onmouseUp: function (fn) {
                let result;
                if (this._type == 'circle') {
                    result = {
                        type: this._type,
                        center: this._center,
                        radius: this._radius,
                    };
                } else {
                    let rectBounds=this._currentLayer.getLatLngs();
                    rectBounds[0].push(rectBounds[0][0]);
                    result = {
                        type: this._type,
                        rectBounds: rectBounds
                    };
                }
                this._layerAry.push(this._currentLayer);
                this._center = null;
                this._currentLayer = null;
                this._map.dragging.enable();
                if (fn) {
                    fn(result);
                }
            },
            //鼠标移动事件
            _onMove: function (evt) {
                let latlng = evt.latlng;
                if (this._type == 'polyline') {
                    if (this._pointAry.length > 0) {
                        if (this._tempLayer) {
                            this._tempLayer.setLatLngs([this._pointAry[this._pointAry.length - 1], latlng]);
                        } else {
                            this._tempLayer = new L.polyline([this._pointAry[this._pointAry.length - 1], latlng]);
                            this._tempLayer.addTo(this._map);
                        }
                    }
                } else if (this._type == 'polygon') {
                    if (this._pointAry.length > 0) {
                        //与起点
                        if (this._tempLayer) {
                            this._tempLayer.setLatLngs([this._pointAry[0], latlng]);
                        } else {
                            this._tempLayer = new L.polyline([this._pointAry[this._pointAry.length - 1], latlng]);
                            this._tempLayer.addTo(this._map);
                        }
                        //与终点
                        if (this._tempLayer1) {
                            this._tempLayer1.setLatLngs([this._pointAry[this._pointAry.length - 1], latlng]);
                        } else {
                            this._tempLayer1 = new L.polyline([this._pointAry[this._pointAry.length - 1], latlng]);
                            this._tempLayer1.addTo(this._map);
                        }
                    }
                } else if (this._type == 'circle') {
                    if (this._center) {
                        this._radius = L.latLng(latlng).distanceTo(this._center);
                        this._currentLayer.setRadius(this._radius);
                    }
                } else if (this._type == 'rectangle') {
                    if (this._center) {
                        this._rectBounds = [this._center, latlng];
                        this._currentLayer.setBounds(this._rectBounds);
                    }
                }
            },
            //单次绘制完成
            _onFinish: function (fn) {
                //删除动态线
                if (this._tempLayer) {
                    this._tempLayer.remove();
                    this._tempLayer = null;
                }
                if (this._tempLayer1) {
                    this._tempLayer1.remove();
                    this._tempLayer1 = null;
                }
                
                if (this._type == 'point'||this._type == 'polyline') {
                    //删除最后一个点
                    if(this._type == 'point'){
                        this._layerAry[this._layerAry.length - 1].remove();
                        this._layerAry.pop();
                    }
                    this._pointAry.pop();
                }
                if (this._type == 'polygon') {
                    //删除最后一个点
                    this._pointAry.pop();
                    //删除当前多边形
                    if (this._currentLayer) {
                        this._currentLayer.remove();
                        this._currentLayer = null;
                    }
                    //首位相接
                    this._pointAry.push(this._pointAry[0]);
                    //重绘多边形
                    this._currentLayer = new L.polygon(this._pointAry).addTo(this._map);
                }
                if (this._type == 'circle' || this._type == 'rectangle') {
                    this._layerAry[this._layerAry.length - 1].remove();
                    this._pointAry.pop();
                    this._layerAry[this._layerAry.length - 2].remove();
                    this._pointAry.pop();
                }
                //返回绘制结果
                let result = {
                    type: this._type,
                    latLngAry: this._pointAry||[],
                };
                
                //当前次数绘制点
                this._pointAry = [];
                if (this._currentLayer) {
                    this._layerAry.push(this._currentLayer);
                    this._currentLayer = null;
                }

                
                if (fn) {
                    //if(result.latLngAry.length>0)
                    fn(result);
                }
            },
            /**
             * draw 类，清除绘制结果
             * @example 
             * let draw=new Z.draw();
             * draw.clearResult();
             */
            clearResult: function () {
                if (this._layerAry.length > 0) {
                    for (let i = 0; i < this._layerAry.length; i++) {
                        this._layerAry[i].remove();
                    }
                }
            },
            /**
             * draw 类，结束本次绘制
             * @example 
             * let draw=new Z.draw();
             * draw.cancel();
             */
            cancel: function () {
                this._pointAry = [];
                this._center = null;
                this._radius = null;
                if (this._currentLayer) {
                    this._currentLayer.remove();
                    this._currentLayer = null;
                }
                if (this._tempLayer) {
                    this._tempLayer.remove();
                    this._tempLayer = null;
                }
                if (this._tempLayer1) {
                    this._tempLayer1.remove();
                    this._tempLayer1 = null;
                }
            },
            /**
             * draw 类，终止绘制功能
             * @example 
             * let draw=new Z.draw();
             * draw.stop();
             * 例：一次绘制后停止绘制功能
             * draw.startDraw('polyline',function(e){
             *      draw.stop();
             * });
             */
            stop: function () {
                this.cancel();
                this._map.off('mousedown', this.eventElement.mousedown);
                this._map.off('mouseup', this.eventElement.mouseup);
                this._map.off('mousemove', this.eventElement.mousemove);
                this._map.off('click', this.eventElement.click);
                this._map.off('dblclick', this.eventElement.dblclick);
                this._container.style.cursor = '';
            }
        };
        //z.draw = draw;
    })(Z);

    //CircleMarker类
    (function(z){
        z.CircleMarker=L.CircleMarker.extend({});

        /**
         * 
         * @extends {L.circlemarker}
		 * @class circleMarker 类，更多接口：{@link https://leafletjs.com/reference-1.3.4.html#circlemarker}
         * @param {array} coords  坐标点位，例：[32,120]
         * @param {object} options  参数
         *  @param {number} options.radius  像素大小
         *  @param {number}options.opacity 透明度
         *  @param {string}options.color 外边线颜色
         *  @param {number}options.weight 外边线粗细
         *  @param {boolean}options.stroke 是否显示外边框
         *  @param {string}options.fillColor 填充色 rgb或16进制
         *  @param {number}options.fillOpacity 填充透明度
         * @param {number}attributes 属性信息
         * @example
         *  let circlemarker=L.circleMarker([20,120],{radius:10});
         */
        z.circleMarker=function(coords, options, attributes) {
            let circleMarker=new z.CircleMarker(coords, options);
            if(attributes){
                circleMarker.attributes=attributes;
            }
            return circleMarker;
        }
        L.circleMarker=z.circleMarker;
    })(Z);

    //marker类
    (function(z){
        z.Marker=L.Marker.extend({
            initialize: function(latlng, options) {
                this.iconOpt = options || {};
                let opt = {};
                let myIcon = null;
                if(this.iconOpt.icon!=undefined&&this.iconOpt.icon instanceof L.Icon){
                    myIcon=this.iconOpt.icon;
                }else if((this.iconOpt.icon!=undefined&&typeof this.iconOpt.icon=='string')||(this.iconOpt.iconUrl!=undefined&&typeof this.iconOpt.iconUrl=='string')){
                    this.iconOpt.iconUrl=this.iconOpt.icon||this.iconOpt.iconUrl;
                    myIcon = L.icon(this.iconOpt);
                }else if(this.iconOpt.html&&typeof this.iconOpt.html=='string'){
                    myIcon = L.divIcon(this.iconOpt);
                }
                if(myIcon)
                opt.icon = myIcon;
                L.Marker.prototype.initialize.call(this,latlng,opt);
            },
            flashMarker:function(time,map){
                let t=0;
                let self=this;
                this.intervalKey=setInterval(function(){
                    t++;
                    if(t>5){
                        clearInterval(self.intervalKey);
                        return;
                    }
                    if(t%2==0){
                        self.remove();
                    }else{
                        self.addTo(map);
                    }
                },time);
            },
            setLatLng:function(latlng,map){
                L.Marker.prototype.setLatLng.call(this,latlng);
                if(map && map instanceof Z.Zmap)
                this.flashMarker(500,map);
            },
            /**
             * 更换图标
             * @param {string|object} icon 图标地址
             */
            setIcon: function (icon) {
                let type=Object.prototype.toString.call(icon);
                let myIcon;
                if(type=='[object String]'){
                    this.iconOpt.iconUrl = icon;
                    myIcon = L.icon(this.iconOpt);
                }else if (type=='[object Object]'){
                    myIcon = L.icon(this.iconOpt);
                }
                L.Marker.prototype.setIcon.call(this,myIcon);
            },
            /**
             * 更换div图标
             * @param {string|object} html 图标html内容
             */
            setDivIcon: function (html) {
                let type=Object.prototype.toString.call(html);
                let myIcon;
                if(type=='[object String]'){
                    this.iconOpt.html = html;
                    myIcon = L.divIcon(this.iconOpt);
                }else if (type=='[object Object]'){
                    myIcon = L.divIcon(html);
                }
                L.Marker.prototype.setIcon.call(this,myIcon);
            },
            //解决addFeature,缩放事件报错问题
            // _animateZoom:function(e){
            //     if(this._map)
            //     L.Marker.prototype._animateZoom.call(this,e);
            // }
            alertSelf:function(){
                alert('i am z.marker!')
            }
        })


        /**
         * 
         * @extends {L.marker}
		 * @class marker 类,更多接口：{@link https://leafletjs.com/reference-1.3.4.html#marker}
         * @param {array} coords  坐标点位，例：[32,120]
         * @param {object} options  参数
         * @param {String}options.icon 图标路径
         * @param {number}options.iconSize 图标大小，px
         * @param {array}options.popupAnchor 信息窗位置偏移
         * @param {array}options.iconAnchor 图标偏移
         * @param {string}options.className css类名
         * @param {html}options.html html内容
         * @param attributes {object} 属性信息
         */
        z.marker=function(latlng, options,attributes){
            let marker=new z.Marker(latlng, options);
            if(attributes){
                marker.attributes=attributes;
            }
            return marker;
        }

        L.marker=z.marker;

    })(Z);

    //polyline类
    (function(z){
        z.Polyline=L.Polyline.extend({})
        /**
         * @extends {L.polyline}
		 * @class polyline 类，根据一系列坐标生成折线,更多接口：{@link https://leafletjs.com/reference-1.3.4.html#polyline}
         * @param coordsAry {array} 坐标点位二位数组，例：[[32,120],[32,121],[32,122],...]
         * @param options {object} 参数
         * @param options.color 折线颜色
         * @param options.weight 折线粗细
         * @param attributes 属性信息
         */
        z.polyline=function(coordsAry, options, attributes){
            let polyline=new z.Polyline(coordsAry, options, attributes);
            polyline.attributes=attributes||'';
            return polyline;
        }
        L.polyline=z.polyline;
    })(Z);

    //polygon类
    (function(z){
        z.Polygon=L.Polygon.extend({});

        /**
         * @extends {L.polygon}
		 * @class polygon 类，根据一系列首位相接的坐标生成多边形,更多接口：{@link https://leafletjs.com/reference-1.3.4.html#polygon}
         * @param {array} coordsAry  坐标点位二位数组，首尾坐标相同例：[[32,120],[32,121],[32,122],...[32,120]}
         * @param {object} options  参数
         *  @param {boolean} options.stroke 是否显示外边线
         *  @param {string} options.color 外边线颜色，rgb或16进制
         *  @param {number} options.weight 外边线粗细，默认3
         *  @param {string} options.fillColor 填充色，rgb或16进制
         *  @param {number} options.fillOpacity 填充透明度
         * @param {onject} attributes 属性信息
         */
        z.polygon=function(coordsAry, options, attributes){
            let polygon=new z.Polygon(coordsAry, options);
            polygon.attributes=attributes||''
            return polygon;
        }

        L.polygon=z.polygon;
    })(Z);


    //popup
    (function(z){
        z.Popup=L.Popup.extend({});
        /**
         * @extends {L.popup}
		 * @class popup 类,更多接口：{@link https://leafletjs.com/reference-1.3.4.html#popup}
         * @param {L.feature} feature
         * @param {object} options 参数
         * @param {number} options.maxWidth 最大宽度，默认300px;
         * @param {number} options.minWidth 最小宽度，默认50px，
         * @param {boolean} options.autoPan 是否跟随地图拖动,默认true
         * @param {boolean} options.closeButton 是否显示关闭按钮,默认true
         * @param {boolean} options.autoClose 是否自动关闭，默认false
		 * @param {string} options.className 名称
         * @param attributes {object} 属性信息
         */
        z.popup=function(options){
            let popup=new z.Popup(options);
            return popup;
        }
    })(Z);

    //tooltip
    (function(z){
        z.Tooltip=L.Tooltip.extend({});
        /**
         * @extends {L.tooltip}
		 * @class tooltip 类,更多接口：{@link https://leafletjs.com/reference-1.3.4.html#tooltip}
         * @param options
		 * @param options.sticky {boolean} 默认false toolTip位置固定或跟随鼠标移动，默认false 固定
		 * @param options.permanent {boolean} 永久显示或鼠标触碰显示，默认false 鼠标触碰显示
		 * @param options.offset {array} 默认[0, 0]
		 * @param options.interactive {boolean} 是否监听feature 事件，默认false
		 * @param options.direction {string} 打开tooltip的方向，可选值right, left, top, bottom, center, auto。默认auto
         */
        z.tooltip=function(options){
            let tooltip=new z.Tooltip(options);
            return tooltip;
        }
    })(Z);

    

export default {Z}
// })(window)