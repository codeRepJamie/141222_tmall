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
        if(n>m)//��ǰ�ƶ�>����������λ�ü����м��Ԫ�����¸�ֵ[˳��]
        {

            temp=[this[m],this[m]=this[n]][0];//����n��m��ֵ����m�ϵ�ֵ����temp
            for(var i=m+1; i<=n; i++)
            {
                temp=[this[i],this[i]=temp][0];
            }

        }
        else{//����ƶ�>����������λ�ü����м��Ԫ�����¸�ֵ[����]

            temp=[this[m],this[m]=this[n]][0];//����n��m��ֵ����m�ϵ�ֵ����temp
            for(var i=m-1; i>=n; i--)
            {
                temp=[this[i],this[i]=temp][0];
            }

        }
        return this;
    }
};