var dataScope=angular.module('tmDataScope',[]);
dataScope.factory('sData',function(){
    var root={};
    <!-- {line#0} -->
    root.headerStyle={$remark#0};
    <!-- {/line} -->
    <!-- {line#1} -->
    root.banner={$remark#0};
    <!-- {/line} -->
    <!-- {line#2} -->
    root.callcenter={$remark#0};
    <!-- {/line} -->

    //店铺招牌设置
    root.headerStyle.config = {"title": "店铺招牌", "node_type": "parent", "data_num": 0};
    $.extend(root.headerStyle.hot_search_repeat.config , {
        "node_type": "elemtary-reapeat",
        "controller": "A_1"
    });
    root.headerStyle.menu_repeat.config = {
        "title": "导航栏",
        "node-type": "elemtary-reapeat",
        "max": 10,
        "controller": "A_2"
    };

    //焦点图设置
    root.banner.config = {"title": "焦点图", "node-type": "parent", "data_num": 1};
    root.banner.banner_pic_repeat.config = {
        "title": "焦点图详情",
        "node-type": "elemtary-reapeat",
        "controller": "B_1",
        "max": 7,
        "picSize-x": "140",
        "picSize-y": "31"
    };

    //旺旺客服设置
    root.callcenter.config = {"title": "旺旺客服", "node-type": "parent", "data_num": 2};
    $.extend(root.callcenter.travel_repeat.config , {
        "node-type": "elemtary-reapeat",
        "max": 10,
        "controller": "A_3"
    });
    $.extend(root.callcenter.ticket_repeat.config , {
        "node-type": "elemtary-reapeat",
        "max": 10,
        "controller": "A_3"
    });

    return root;
});