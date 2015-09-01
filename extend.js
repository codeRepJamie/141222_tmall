/**
 * Created by Administrator on 2015/9/1.
 */
Array.prototype.movePos=function(n,m){

    n=n<0?0:(n>this.length-1?this.length-1:n);
    m=m<0?0:(m>this.length-1?this.length-1:m);
    var temp;
    if(n===m){
        return this;
    }
    else{
        if(n>m)//向前移动>对两个索引位置及其中间的元素重新赋值[顺推]
        {

            temp=[this[m],this[m]=this[n]][0];//交换n和m的值并将m上的值赋给temp
            for(var i=m+1; i<=n; i++)
            {
                temp=[this[i],this[i]=temp][0];
            }

        }
        else{//向后移动>对两个索引位置及其中间的元素重新赋值[倒推]

            temp=[this[m],this[m]=this[n]][0];//交换n和m的值并将m上的值赋给temp
            for(var i=m-1; i>=n; i--)
            {
                temp=[this[i],this[i]=temp][0];
            }

        }
        return this;
    }
};