/**
 * Created by Administrator on 2015/9/10.
 */
function justifyModel(arr) {
    for (var i = 0; i < arr.length; i++) {
        $.extend(arr[i], {
            "id": i
        })
    }
}

function dataConfig(root) {
//店铺招牌设置
    $.extend(root.headerStyle.config, {"title": "店铺招牌", "node_type": "parent", "data_num": 0});
    $.extend(root.headerStyle.hot_search_repeat.config, {
        "node_type": "elemtary-reapeat",
        "controller": "A_1",
        "model": {"text": "", "url": ""}
    });
    $.extend(root.headerStyle.menu_repeat.config, {
        "title": "导航栏",
        "node-type": "elemtary-reapeat",
        "max": 10,
        "controller": "A_2",
        "model": {"text": "", "url": ""}
    });

//焦点图设置
    $.extend(root.banner.config, {"title": "焦点图", "node-type": "parent", "data_num": 1});
    $.extend(root.banner.banner_pic_repeat.config, {
        "title": "焦点图详情",
        "node-type": "elemtary-reapeat",
        "controller": "B_1",
        "max": 7,
        "picSize-x": "140",
        "picSize-y": "31",
        "model": {
            "url": "",
            "pic": ""
        }
    });

//旺旺客服设置
    $.extend(root.callcenter.config, {"title": "旺旺客服", "node-type": "parent", "data_num": 2});
    $.extend(root.callcenter.travel_repeat.config, {
        "node-type": "elemtary-reapeat",
        "max": 10,
        "controller": "A_3",
        "model": {
            "text": ""
        }
    });
    $.extend(root.callcenter.ticket_repeat.config, {
        "node-type": "elemtary-reapeat",
        "max": 10,
        "controller": "A_3",
        "model": {
            "text": ""
        }
    });

//分类栏目设置
    $.extend(root.catalog.config, {
        "title": "分类栏目",
        "data_num": 3
    });
    $.extend(root.catalog.catalog_item_repeat.config, {
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

    justifyModel(root.catalog.catalog_item_repeat.model);



    $.extend(root.catalog.catalog_banner_repeat.config, {
        "title": "焦点图",
        "max": 4,
        "controller": "B_2",
        "defaultSize":{"picSize-x": 205, "picSize-y": 109},
        "option": {
            "config": [{"id": 0, "name": "单图", "value": "default"}, {"id": 1, "name": "多图", "value": "four_in_one"}],
            "default": {
                "config": {"picSize-x": 205, "picSize-y": 109},
                "model": {"text": "", "type": "defualt", "url": "", "pic": ""}
            },
            "four_in_one": {
                "config": {"picSize_1-x": 140, "picSize_1-y": 109, "picSize_2-x": 62, "picSize_2-y": 35},
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