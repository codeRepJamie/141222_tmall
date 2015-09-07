var dataScope=angular.module('tmDataScope',[]);
dataScope.factory('sData',function(){
    var root={};
    
    root.headerStyle={"hot_search_repeat":{"config":{"title":"热搜123","node_type":"elemtary-reapeat","controller":"A_1"},"model":[{"value":"","$$hashKey":"object:7","text":"1991555","url":"哈哈哈哈"},{"value":"","$$hashKey":"object:12","text":"改改个7777222","url":"硕士生123"},{"url":"http://www.baidu.com","text":"韩国","$$hashKey":"object:5"},{"value":"","$$hashKey":"object:35","text":"213122222","url":"5555"}]},"menu_repeat":{"model":[{"value":"","$$hashKey":"object:7","text":"签证","url":"4569999999"},{"value":"","$$hashKey":"object:12","text":"环球卡","url":"硕士生123"},{"value":"","$$hashKey":"object:13","text":"出境","url":"123"},{"value":"","$$hashKey":"object:15","text":"导航","url":"66666"},{"value":"","$$hashKey":"object:11","text":"国内","url":"http://abc.com"},{"url":"http://www.baidu.com","text":"首页","$$hashKey":"object:5"}],"config":{"title":"导航栏","node-type":"elemtary-reapeat","max":10,"controller":"A_2"}},"config":{"title":"店铺招牌","node_type":"parent","data_num":0}};
    
    
    root.banner={"banner_pic_repeat":{"model":[{"value":"","$$hashKey":"object:25","pic":"https://img.alicdn.com/imgextra/i1/2067413496/TB2ikBPdVXXXXXpXXXXXXXXXXXX_!!2067413496.jpg","url":"http://cgzl.tmall.com/p/rd600857.htm"},{"value":"","$$hashKey":"object:7","pic":"https://img.alicdn.com/imgextra/i2/2067413496/TB2OTSIeVXXXXcfXXXXXXXXXXXX_!!2067413496.jpg","url":"http://cgzl.tmall.com/p/rd743438.htm"}]}};
    
    
    root.callcenter={"travel_repeat":{"config":{"title":"旅游度假123","node-type":"elemtary-reapeat","max":10,"controller":"A_3"},"model":[{"value":"","$$hashKey":"object:7","text":"坤坤"}]},"ticket_repeat":{"config":{"title":"订房订票","node-type":"elemtary-reapeat","max":10,"controller":"A_3"},"model":[{"value":"","$$hashKey":"object:7","text":"云儿"}]},"config":{"title":"旺旺客服","node-type":"parent","data_num":2}};
    

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