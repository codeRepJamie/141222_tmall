/**
 * Created by Administrator on 2015/9/10.
 */
function justifyModel(arr) {
    for (var i = 0; i < arr.length; i++) {
        if(arguments[1]){
            $.extend(arr[i][arguments[1]], {
                "id": i
            })
        }else{
            $.extend(arr[i], {
                "id": i
            })
        }

    }
}

function clone(obj)
{
    var o,i,j,k;
    if(typeof(obj)!="object" || obj===null)return obj;
    if(obj instanceof(Array))
    {
        o=[];
        i=0;j=obj.length;
        for(;i<j;i++)
        {
            if(typeof(obj[i])=="object" && obj[i]!=null)
            {
                o[i]=arguments.callee(obj[i]);
            }
            else
            {
                o[i]=obj[i];
            }
        }
    }
    else
    {
        o={};
        for(i in obj)
        {
            if(typeof(obj[i])=="object" && obj[i]!=null)
            {
                o[i]=arguments.callee(obj[i]);
            }
            else
            {
                o[i]=obj[i];
            }
        }
    }

    return o;
}

function dataConfig(root) {
//店铺招牌设置
    (function () {
        var module = root.headerStyle;
        if (module) {
            $.extend(module.config, {"title": "店铺招牌", "node_type": "parent", "data_num": 0});
            $.extend(module.hot_search_repeat.config, {
                "node_type": "elemtary-reapeat",
                "controller": "A_1",
                "model": {"text": "", "url": ""}
            });
            $.extend(module.menu_repeat.config, {
                "title": "导航栏",
                "node-type": "elemtary-reapeat",
                "max": 10,
                "controller": "A_2",
                "model": {"text": "", "url": ""}
            });
        }
    })();


//焦点图设置
    (function () {
        var module = root.banner;
        if (root.banner) {
            $.extend(module.config, {"title": "焦点图", "node-type": "parent", "data_num": 1});
            $.extend(module.banner_pic_repeat.config, {
                "title": "焦点图详情",
                "node-type": "elemtary-reapeat",
                "controller": "B_1",
                "max": 7,
                "picSize-x": 900,
                "picSize-y": 420,
                "model": {
                    "url": "",
                    "pic": ""
                }
            });
        }
    })();

//旺旺客服设置
    (function () {
        var module = root.callcenter;
        if (module) {
            $.extend(module.config, {"title": "旺旺客服", "node-type": "parent", "data_num": 2});
            $.extend(module.travel_repeat.config, {
                "node-type": "elemtary-reapeat",
                "max": 10,
                "controller": "A_3",
                "model": {
                    "text": ""
                }
            });
            $.extend(module.ticket_repeat.config, {
                "node-type": "elemtary-reapeat",
                "max": 10,
                "controller": "A_3",
                "model": {
                    "text": ""
                }
            });
        }
    })();

//分类栏目设置
    (function () {
        var module = root.catalog;
        if (module) {
            $.extend(module.config, {
                "title": "分类栏目",
                "data_num": 3
            });
            $.extend(module.catalog_item_repeat.config, {
                "title": "推荐分类",
                "max": 5,
                "controller": "A_4",
                "model": {
                    "text": "",
                    "sub_item_repeat": {
                        "config": {
                            "title": "次级标题",
                            "max": 10,
                            "controller": 'A_2'
                        },
                        "model": [{"text": "", "url": ""}]
                    }
                }
            });

            justifyModel(module.catalog_item_repeat.model);

            $.extend(module.catalog_banner_repeat.config, {
                "title": "焦点图",
                "max": 4,
                "controller": "B_2",
                "defaultSize": {"picSize-x": 790, "picSize-y": 420},
                "option": {
                    "config": [{"id": 0, "name": "单图", "value": "default"}, {
                        "id": 1,
                        "name": "多图",
                        "value": "four_in_one"
                    }],
                    "default": {
                        "config": {"picSize-x": 790, "picSize-y": 420},
                        "model": {"text": "", "type": "defualt", "url": "", "pic": ""}
                    },
                    "four_in_one": {
                        "config": {
                            "picSize_1-x": 540,
                            "picSize_1-y": 420,
                            "picSize_2-x": 240,
                            "picSize_2-y": 140
                        },
                        "model": {
                            "text": "",
                            "type": "four_in_one",
                            "url1": "",
                            "pic1": "",
                            "url2": "",
                            "pic2": "",
                            "url3": "",
                            "pic3": "",
                            "url4": "",
                            "pic4": ""
                        }
                    }
                },
                "model": {"text": "", "type": "defualt", "url": "", "pic": ""}
            });
        }
    })();

//1F热门目的地推荐设置
    (function () {
        var module = root.hotSale;
        if (module) {
            $.extend(root.hotSale.config, {
                "title": "1F热门目的地推荐",
                "data_num": 4
            });
            $.extend(module.big_ads_left.config, {
                "title": "广告左",
                "max": 1,
                "controller": "B_1",
                "picSize-x": 313,
                "picSize-y": 446,
                "model": {
                    "pic": "",
                    "url": ""
                }
            });
            $.extend(module.big_ads_top.config, {
                "title": "广告上",
                "max": 1,
                "controller": "B_1",
                "picSize-x": 326,
                "picSize-y": 220,
                "model": {
                    "pic": "",
                    "url": ""
                }
            });
            $.extend(module.big_ads_bottom.config, {
                "title": "广告下",
                "max": 1,
                "controller": "B_1",
                "picSize-x": 326,
                "picSize-y": 220,
                "model": {
                    "pic": "",
                    "url": ""
                }
            });
            $.extend(module.big_ads_right.config, {
                "title": "广告右",
                "max": 1,
                "controller": "B_1",
                "picSize-x": 313,
                "picSize-y": 446,
                "model": {
                    "pic": "",
                    "url": ""
                }
            });
        }
    })();

//2F本周爆款设置
    (function () {
        var module = root.weekSale;
        if (module) {
            $.extend(module.config, {
                "title": "2F本周爆款",
                "data_num": 5
            });
            $.extend(module.week_sale_repeat.config,  {
                "title": "本周爆款产品",
                "max": null,
                "controller": "B_1",
                "picSize-x": 247,
                "picSize-y": 380,
                "model": {"pic": "", "url": ""}
            });
        }
    })();
//3F出境游
    (function(){
        var module= root.outbound;
        if(module){
            $.extend(module.config,{
                "title": "3F出境游", "data_num": 6,
                "picSize-x": 240,
                "picSize-y": 645,
                "controller": "C_1",
                "max": null,
                "model": {
                    "model": [{
                        "pic": "",
                        "url": "",
                        "title": "标题",
                        "sub_title": "次标题",
                        "price": "0"
                    }],
                    "config": {
                        "title": "标题",
                        "max": 6,
                        "pic": "",
                        "url": "",
                        "controller": "B_1",
                        "picSize-x": 229,
                        "picSize-y": 229,
                        "model": {
                            "pic": "",
                            "url": "",
                            "title": "标题",
                            "sub_title": "次标题",
                            "price": "0"
                        }
                    }
                }
            });
            justifyModel(module.model,'config');
        }
    })();
//4F港澳台
    (function(){
        var module= root.gangaotai;
        if(module){
            $.extend(module.config,{
                "title": "4F港澳台", "data_num": 7,
                "picSize-x": 240,
                "picSize-y": 645,
                "controller": "C_1",
                "max": null,
                "model": {
                    "model": [{
                        "pic": "",
                        "url": "",
                        "title": "标题",
                        "sub_title": "次标题",
                        "price": "0"
                    }],
                    "config": {
                        "title": "标题",
                        "max": 6,
                        "pic": "",
                        "url": "",
                        "controller": "B_1",
                        "picSize-x": 229,
                        "picSize-y": 229,
                        "model": {
                            "pic": "",
                            "url": "",
                            "title": "标题",
                            "sub_title": "次标题",
                            "price": "0"
                        }
                    }
                }
            });
            justifyModel(module.model,'config');
        }
    })();
//5F国内游
    (function(){
        var module= root.inbound;
        if(module){
            $.extend(module.config,{
                "title": "5F国内游", "data_num": 8,
                "picSize-x": 240,
                "picSize-y": 645,
                "controller": "C_1",
                "max": null,
                "model": {
                    "model": [{
                        "pic": "",
                        "url": "",
                        "title": "标题",
                        "sub_title": "次标题",
                        "price": "0"
                    }],
                    "config": {
                        "title": "标题",
                        "max": 6,
                        "pic": "",
                        "url": "",
                        "controller": "B_1",
                        "picSize-x": 229,
                        "picSize-y": 229,
                        "model": {
                            "pic": "",
                            "url": "",
                            "title": "标题",
                            "sub_title": "次标题",
                            "price": "0"
                        }
                    }
                }
            });
            justifyModel(module.model,'config');
        }
    })();
//6F周边游
    (function(){
        var module= root.province;
        if(module){
            $.extend(module.config,{
                "title": "7F广东周边游", "data_num": 9,
                "picSize-x": 240,
                "picSize-y": 645,
                "controller": "C_1",
                "max": null,
                "model": {
                    "model": [{
                        "pic": "",
                        "url": "",
                        "title": "标题",
                        "sub_title": "次标题",
                        "price": "0"
                    }],
                    "config": {
                        "title": "标题",
                        "max": 6,
                        "pic": "",
                        "url": "",
                        "controller": "B_1",
                        "picSize-x": 229,
                        "picSize-y": 229,
                        "model": {
                            "pic": "",
                            "url": "",
                            "title": "标题",
                            "sub_title": "次标题",
                            "price": "0"
                        }
                    }
                }
            });
            justifyModel(module.model,'config');
        }
    })();
}