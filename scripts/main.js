/**
 * Created by Tsang on 2014/12/24.
 */
//console.log(dataJson);
function PageElement(data){
    var _this=this;
    this.data=data;
    this.editZone={
        headerStyle:$('#headerStyle'),
        banner:$('#banner'),
        /*mainSlide:$('#mainSlide'),*/
        callcenter:$('#callcenter'),
        catBox:$('#catBox')
    };

    this.callerObject={
        headerStyle:{
            title:'设置店招',
            lineNumber:0,
            content:[
                {
                    subTitle:'搜索关键词',
                    name:'searchKeyword',
                    uiContent:$('#keywords'),
                    dataInput:{value:1,url:1}
                },
                {
                    subTitle:'导航菜单',
                    name:'navWords',
                    uiContent:$('#navMeun'),
                    dataInput:{value:1,url:1}
                }
            ],
            htmlSource:_this.data.headStyleHTMLSource,
            rawArr:[
                {replaceName:'[[searchKeywordHTMLRepeater]]',templateString:this.data.searchKeywordHTMLRepeatTemplate,dataList:this.data.headerStyle.searchKeyword},
                {replaceName:'[[navWordsHTMLRepeater]]',templateString:this.data.navWordsHTMLRepeatTemplate,dataList:this.data.headerStyle.navWords}
            ]
        },
        banner:{
            title:'设置焦点图和背景',
            lineNumber:1,
            content:[
                {
                    classify:'picture',
                    subTitle:'设置焦点图',
                    name:'bannerCont',
                    uiContent:$('#bannerCont'),
                    dataInput:{value:1,url:1}
                }/*,
                {
                    isPulse:false,
                    classify:'picture',
                    subTitle:'设置背景',
                    name:'ackground'
                }*/
            ],
            htmlSource:_this.data.bannerHTMLSource,
            rawArr:[
                {replaceName:'[[bannerHTMLRepeater]]',templateString:this.data.bannerHTMLRepeatTemplate,dataList:this.data.banner.bannerCont},
                {replaceName:'[[backgroundHTMLRepeater]]',templateString:this.data.backgroundRepeatTemplate,dataList:this.data.banner.background},
                {replaceName:'[[bannerHTMLNumberRepeater]]',templateString:this.data.bannerHTMLNumberRepeatTemplate,dataList:this.data.banner.bannerCont.length}
            ]
        },
        callcenter:{
            title:'设置客服中心',
            lineNumber:2,
            content:[
                {
                    subTitle:'设置旅游度假',
                    name:'holiday',
                    uiContent:$('#holidayCont'),
                    dataInput:{value:1}
                },
                {
                    subTitle:'设置订房订票',
                    name:'ticket',
                    uiContent:$('#ticketCont'),
                    dataInput:{value:1}
                }
            ],
            htmlSource:_this.data.callcenterHTMLSource,
            rawArr:[
                {replaceName:'[[callcenterHolidayRepeater]]',templateString:this.data.callcenterHTMLRepeatTemplate,dataList:this.data.callcenter.holiday},
                {replaceName:'[[callcenterTicketHTMLRepeater]]',templateString:this.data.callcenterHTMLRepeatTemplate,dataList:this.data.callcenter.ticket}
            ]
        },
        catBox:{
            title:'设置分类',
            lineNumber:3,
            content:[
                {
                    subTitle:this.data.catBoxHeadName[0],
                    name:'c1',
                    uiContent:$('#c1'),
                    dataInput:{value:1,url:1}
                },
                {
                    subTitle:this.data.catBoxHeadName[1],
                    name:'c2',
                    uiContent:$('#c2'),
                    dataInput:{value:1,url:1}
                },
                {
                    subTitle:this.data.catBoxHeadName[2],
                    name:'c3',
                    uiContent:$('#c3'),
                    dataInput:{value:1,url:1}
                },
                {
                    subTitle:this.data.catBoxHeadName[3],
                    name:'c4',
                    uiContent:$('#c4'),
                    dataInput:{value:1,url:1}
                },
                {
                    subTitle:this.data.catBoxHeadName[4],
                    name:'c5',
                    uiContent:$('#c5'),
                    dataInput:{value:1,url:1}
                }
            ],
            htmlSource:_this.data.catBoxAllHTMLSource,
            rawArr:[
                {replaceName:'[[catBoxRepeater]]',templateString:this.data.catBoxHTMLRepeatTemplate,dataList:this.data.catBox.c1},
                {replaceName:'[[catBoxRepeater]]',templateString:this.data.catBoxHTMLRepeatTemplate,dataList:this.data.catBox.c2},
                {replaceName:'[[catBoxRepeater]]',templateString:this.data.catBoxHTMLRepeatTemplate,dataList:this.data.catBox.c3},
                {replaceName:'[[catBoxRepeater]]',templateString:this.data.catBoxHTMLRepeatTemplate,dataList:this.data.catBox.c4},
                {replaceName:'[[catBoxRepeater]]',templateString:this.data.catBoxHTMLRepeatTemplate,dataList:this.data.catBox.c5}
            ]
        }/*,
        mainSlide:{
            title:'设置主轮换图',
            content:[
                {
                    subTitle:'第一轮换图',
                    dataList:this.data.mainSlide.lunhuan1
                },
                {
                    subTitle:'第二轮换图',
                    dataList:this.data.mainSlide.lunhuan2
                },
                {
                    subTitle:'第三轮换图',
                    dataList:this.data.mainSlide.lunhuan2
                }
            ]
        }*/
    };
    this.uiListValue='';
    this.dialogForm=$( "#dialog-form" );
    this.inital=function(){
       var _this=this;
        var target;

        for(var attr2 in this.callerObject){
            target=this.callerObject[attr2];
            for(var i=0;i<this.callerObject[attr2]['content'].length;i++){

               this.singleTextTemplatesInitial(this.callerObject[attr2]['content'][i]['uiContent'],this.callerObject[attr2]['rawArr'][i]['templateString'],this.data[attr2][this.callerObject[attr2]['content'][i]['name']]);
            }
        }
       this.bindHover.call(_this);
       for(var attr in this.editZone){
           this.editZone[attr].click(function() {
               _this.bindTargetCall($(this).attr('id'));
               _this.dialogForm.dialog( "open" );
               //console.log(.html());
               _this.dialogForm.siblings('.ui-dialog-buttonpane').find(' .ui-button:eq(2)').attr('disabled',true).addClass('ui-state-disabled').removeClass('ui-state-hover ui-state-focus');
           });
       }
    }
}
PageElement.prototype.singleTextTemplatesInitial=function(target,template,dataList){
    target.html('');
    //console.log(dataList);
    for(var i=0;i<dataList.length;i++){
        target.append(template.replace(/\[\[value\]\]/g,dataList[i].value).replace(/\[\[url\]\]/g,'javascript:;').replace(/\[\[pic\]\]/g,dataList[i].pic));
    }
};
PageElement.prototype.bindHover=function(){
    for(var attr in this.editZone){
        this.editZone[attr].css('cursor','pointer');
        !this.editZone[attr].find('.editMaskHover').length&&this.editZone[attr].append('<div class="editMaskHover hidden"></div>');
        this.editZone[attr].hover(function(){
            $(this).css('position','relative').find('.editMaskHover').addClass('visible').removeClass('hidden');
        },function(){
            $(this).css('position','static').find('.editMaskHover').addClass('hidden').removeClass('visible');
        })
    }
};

PageElement.prototype.bindTargetCall=function(callerString){
    var _this=this;
    var spcFun,rawFn;
    switch (callerString){
        case 'headerStyle':

            break;
        case 'banner':

            break;
        case 'callcenter':
            spcFun=function(){
                _this.dialogForm.find('input[data-type="url"]').remove();
            };
            rawFn=addition;
            break;
    }
    this.dialogSetting.call(_this,callerString,spcFun,rawFn);
};

PageElement.prototype.dialogSetting=function(name,fn,rawfn){
    var _this=this;
    var settings=_this.callerObject[name];
    var opts={};
    this.dialogForm.html('');
    var target;
    var addLink;

    for(var i=0; i< this.callerObject[name]['content'].length;i++){
        opts ={
            isPulse:true,
            subTitle:'次标题',
            classify:'text',
            dataInput:{value:1,url:1}
        };
        $.extend(opts,settings.content[i]);
        switch (opts.classify){
            case 'text':
                this.uiListValue=replaceUiListValue();
                break;
            case 'picture':
                this.uiListValue=replaceUiListPicValue();
                break;
        }

        if(opts.isPulse){
            this.dialogForm.append('<p class="validateTips">'+opts.subTitle+'<a class="funcLink" href="javascript:;">添加一项</a></p>');
            addLink=this.dialogForm.find('.validateTips .funcLink:eq('+i+')');
            addLink[0].cIndex=i;
            addLink[0].opts=opts;
            //console.log(addLink[0].cIndex);
            addLink[0].recall=fn;
            var abc=2;
            addLink.click(function(){
                //console.log($(this)[0]['cIndex'],$(this)[0]['opts']);
                _this.editPlusListDraw($('#uiList'+$(this)[0].cIndex),_this.uiListValue,$(this)[0]['opts']['dataInput']);
                //console.log($(this)[0].recall);
                $(this)[0].recall&&$(this)[0].recall();
            });
        }else{
            this.dialogForm.append('<p class="validateTips">'+opts.subTitle+'</p>');
        }
        this.dialogForm.append('<ul id="uiList'+i+'" class="widgetList"></ul>');
        target=$('#uiList'+i);
        this.uiListDraw(target,this.data[name][this.callerObject[name]['content'][i]['name']],this.uiListValue,opts.dataInput);
        //this.uiListDraw(target,this.data[name][this.callerObject[name]['content'][i]['name']],this.uiListValue,['opts']['dataInput']);


    }
    this.uiListEdit();

    this.dialogForm.dialog({
        title:settings.title,
        autoOpen: false,
        height: 600,
        width: 990,
        modal: true,
        buttons: {
            "保存": function() {
                //$( this ).dialog( "close" );
                rawfn&&rawfn();
                _this.saveSimpleDate.call(_this,name);
                viewRawCode(this,_this,name);
            },
            "查看源代码": function() {
                rawfn&&rawfn();
                viewRawCode(this,_this,name);
            },
            "设置": function() {
                _this.dialogSetting(name,fn);
                $(this).siblings('.ui-dialog-buttonpane').find('.ui-button:eq(0)').attr('disabled',false).removeClass('ui-state-disabled');
                $(this).siblings('.ui-dialog-buttonpane').find('.ui-button:eq(1)').attr('disabled',false).removeClass('ui-state-disabled');
                $(this).siblings('.ui-dialog-buttonpane').find('.ui-button:eq(2)').attr('disabled',true).addClass('ui-state-disabled').removeClass('ui-state-hover ui-state-focus');
            },
            "关闭": function() {
                $( this ).dialog( "close" );
            }
        },
        close: function() {

        }
    });
    fn&&fn();

};
function viewRawCode(target,_this,name){
    _this.dialogForm.html('');
    _this.dialogForm.append('<p class="validateTips">HTML源代码</p>');
    _this.dialogForm.append('<textarea class="htmlSource">'+_this.getRawSource(name)+'</textarea>');
    $(target).siblings('.ui-dialog-buttonpane').find('.ui-button:eq(0)').attr('disabled',true).addClass('ui-state-disabled').removeClass('ui-state-hover ui-state-focus');
    $(target).siblings('.ui-dialog-buttonpane').find('.ui-button:eq(1)').attr('disabled',true).addClass('ui-state-disabled').removeClass('ui-state-hover ui-state-focus');
    $(target).siblings('.ui-dialog-buttonpane').find('.ui-button:eq(2)').attr('disabled',false).removeClass('ui-state-disabled');
}

PageElement.prototype.uiListDraw=function(target,dataList,uiReplacement,obj){

    var reg;
    var str='';
    var temp='';
    //console.log(obj);
    for(var i=0;i<dataList.length;i++) {
        temp=uiReplacement;
        for(var attr in obj){
            reg=new RegExp('\\[\\['+attr+'\\]\\]','g');
            temp=temp.replace(reg,dataList[i][attr]);
        }
        str+=temp;
    }
    target.append(str);
    bindClose(target.find('li'));
    zebraClass(target.find('li'),'odds');
};
PageElement.prototype.editPlusListDraw=function(target,string,obj){
    var reg;

    for(var attr in obj){
        reg=new RegExp('\\[\\['+attr+'\\]\\]','g');
        string=string.replace(reg,'');

    }
    target.append(string);

    //target.append(string.replace(/\[\[value\]\]/g,'').replace(/\[\[url\]\]/g,''));
    bindClose(target.find('li'));
    zebraClass(target.find('li'),'odds');
};


PageElement.prototype.getRawSource=function(name){
    var tempString='';
    var temp='';
    var reg;
    var reg2;
    var source=this.callerObject[name]['htmlSource'];
    var i=0;
    var bannerString='',bannerStrings='';
    for(var attr in this.data[name]) {
        for (var j = 0; j < this.data[name][attr].length; j++) {
            temp=this.callerObject[name]['rawArr'][i]['templateString'];
                temp= temp.replace(/\[\[value\]\]/g,this.data[name][attr][j].value).replace(/\[\[url\]\]/g, this.data[name][attr][j].url);
                if(this.data[name][attr][j].pic){
                    temp= temp.replace(/\[\[pic\]\]/g, this.data[name][attr][j].pic)
                }
                tempString+=temp;
            if(name=='banner'){
                bannerString=this.callerObject[name]['rawArr'][2]['templateString'].replace('[[url]]',this.data[name][attr][j].value);
                if(j==0){
                    bannerString=bannerString.replace('[[isFirst]]','ks-active');
                }else{
                    bannerString=bannerString.replace('[[isFirst]]','')
                }
                bannerStrings+=bannerString;
            }
        }
        if(name=='banner'){
            source = source.replace(this.callerObject[name]['rawArr'][2]['replaceName'], bannerStrings);
        }
        if(name!='catBox') {
            source = source.replace(this.callerObject[name]['rawArr'][i]['replaceName'], tempString);
        }else{
            reg=new RegExp('\\[\\[catBox'+(i+1)+'Repeater\\]\\]');
            reg2=new RegExp('\\[\\['+attr+'\\]\\]');
            source = source.replace(reg,tempString).replace(reg2,this.data.catBoxHeadName[i]);
        }
            tempString = '';
        i++;
    }
    return source.replace(/(?=[^\w])\s*(?=[^\w])/g,'');

};
PageElement.prototype.uiListEdit=function(){
    var list=this.dialogForm.find('.widgetList');
    for(var i=0;i<list.length;i++){
        list.eq(i).sortable({
            axis: 'y',
            cursor: "move",
            stop: function( event, ui ) {
                zebraClass($(this).find('li'),'odds');
            }
        });
    }
};
PageElement.prototype.changeEditObjectWidget=function(opts){
        var temp=[];
        var i=0;
        //console.log(opts);
        for(var attr in this.data[opts.dataListData]) {
            opts.dataListUI.eq(i).find('li').each(function (j, e) {
                //console.log($(e).find('input[data-type=value]').val());
                var obj = {'value': $(e).find('input[data-type=value]').val(), 'url': $(e).find('input[data-type=url]').val()};
                //console.log(obj);
                temp.push(obj);
            });
            this.data[opts.dataListData][attr]=temp;
            //console.log(this.data[opts.dataListData][attr]);
            temp=[];
            i++;
        }
};
PageElement.prototype.saveSimpleDate=function(name){
    this.changeEditObjectWidget({
        type:'simpleText',
        name:name,
        dataListUI:this.dialogForm.find('.widgetList'),
        dataListData:name
    });
    //console.log(this.data[name]);
    /*for(var i=0;i<this.callerObject[name]['content'][length];i++){*/
    var i=0;
    for(var attr in this.data[name]){
        savePreferences({
            line: this.callerObject[name]['lineNumber'],
            index: 5,
            value: encodeURI(JSON.stringify(this.data[name][attr])),
            remark: i,
            path: '141222_tmall'
        });
        i++;
    }
    createStaticFiles();
    this.inital();
    Response.clearResultCount();
};
function zebraClass(target,className){
    $(target).removeClass(className);
    $(target).filter(':even').addClass(className);
}

function replaceUiListValue(){
    return '<li>\
            <input class="keyWords" data-type="value" type="text" value="[[value]]"/>\
            <input class="url" data-type="url" type="text" value="[[url]]"/>\
            <a href="javascript:;" class="ui-button-icon-primary ui-icon ui-icon-closethick close"></a>\
        </li>'
}
function replaceUiListPicValue(){
    return '<li class="pic">\
            <a href="javascript:;" class="ui-button-icon-primary ui-icon ui-icon-closethick close"></a>\
            <img class="picture" src="[[value]]" />\
            <div class="inputCont"><p>图片地址:\
            <input class="url" data-type="value" type="text" value="[[value]]"/></p>\
           <p>目标地址:\
           <input class="url" data-type="url" type="text" value="[[url]]"/></p>\
            </div>\
        </li>'
}
function bindClose(target){
    for(var i=0;i<target.length;i++){
        target.eq(i).find('.close').click(function(){
            $(this).parent().remove();
            zebraClass(target.parent().find('li'),'odds');
        });
    }
}
//发送保存数据到服务器端处理
function savePreferences(dataObject) {
    //console.log(dataObject);
    $.ajax({
        data: dataObject,
        type: "POST",
        url: '/subject/edit/priceEidtor4.0/edit.ashx',
        timeout: 20000,
        async: false,//设置为同步，必须等待服务器返回结果后才继续执行,这个很重要
        error: function (XMLHttpRequest, strError, strObject) {
            Response.resultFalure++;
        },
        success: function (strValue) {
        },
        complete: function () {
            dataObject={};
        }
    });
}
//打印
function createStaticFiles() {
    $('#loading_unit p').html("<img src='/subject/edit/images/loading_bar.gif' />");
    var filename = '/141222_tmall/';
    $.ajax({
        data: { path: filename },
        type: "POST",
        url: '/subject/edit/priceEidtor4.0/create.ashx',
        timeout: 50000,
        async: false,
        error: function (XMLHttpRequest, strError, strObject) {
            Response.uiController.errorShowResultBox(strError);
        },
        success: function (strValue) {
            if (strValue == "True"){
                var timeEnd = (new Date()).getTime();
                //$createLink.attr("href", '/subject/' + filename + '/index.htm').html('网页已经生成(用时' + timeRecoder(timeStar, timeEnd) + '秒)<br/>请点击这里查看');
            }
            Response.uiController.successShowResultBox(strValue);
        }
    });
    //setTimeout("$('#loading_unit').fadeOut(500)", 3800);
};
$(function(){
   Page.checkAccout(creatXHR);
    function creatXHR(){
        var page=new PageElement(dataJsonConfig);
        page.inital();
        Response.uiController.drawBox();
    }
});

