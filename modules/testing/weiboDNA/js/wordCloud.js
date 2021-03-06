define(function(require){

	var pw,ph;
    var wordSize=36;
    var minWordSize=16;
    var maxWordCount=20;//最多展示的词数量
    var gaps=[];
    var maxWeight=0;
    var duringTime=2000;//展示完毕需要的时间
    var rdata;
    var callbackTimer;
    var $plat;
    var opts;

    var inPlat=[];

    var getColor=function(){
        if(opts.colorBase){
            return opts.colorBase[parseInt(Math.random()*opts.colorBase.length)]
        }
        return [
            parseInt(70+Math.random()*180).toString(16),
            parseInt(70+Math.random()*180).toString(16),
            parseInt(70+Math.random()*180).toString(16)
        ].join('');
    }

    var throwOne=function(text,size,l,t){
        var span=document.createElement('span');
        span.innerHTML=text;
        span.className='platItem';
        span.style.fontSize=Math.max(size,minWordSize)+'px';
        span.style.left=l+'px';
        span.style.t=t+'px';
        span.style.color='#'+getColor();
        span.style.opacity=0;
        span.style.lineHeight=Math.max(size,minWordSize)*1.28+'px';//乘以1.28是因为避免字母g的下半部分超出边缘
        $plat.append(span);
        setTimeout(function(){
            span.style.opacity=1;
        },Math.random()*duringTime);
        return {
            w:$(span).width(),
            h:$(span).height(),
            node:span
        }
    }

    var checkConflict=function(l,t,w,h){
        if(l+w>pw-15 || t+h>ph){return false;}
        for(var i=0,len=inPlat.length;i<len;i++){
            var item=inPlat[i];
            if(l+w>=item.l && l<=item.l+item.w){
                if(t<=item.t+item.h && t+h>=item.t){
                    return false;
                }
            }
        }
        return true;
    }

    var findGap=function(platItem){
        var rw=platItem.w,rh=platItem.h;
        var result;
        for(var i=0,len=gaps.length;i<len;i++){
            var gap=gaps[i];
            var result=checkConflict(gap.l,gap.t,rw,rh);
            if(result){
                return {
                    l:gap.l,
                    t:gap.t,
                    w:rw,
                    h:rh
                }
            }else{
            }
        }     
    }

    var reSortGaps=function(){
        gaps=[];
        for(var row=15;row<pw-15;row+=5){
            for(var col=15;col<ph-15;col+=5){
                gaps.push({
                    l:row,
                    t:col
                })
            }
        }

        for(var i=0;i<gaps.length;i++){
            var pos=parseInt(Math.random()*gaps.length);
            var temp=gaps[pos];
            gaps[pos]=gaps[i];
            gaps[i]=temp;
        }
    }

    var initPlatform=function(data,callback,oOpts){
        opts=oOpts||{};
        inPlat=[];
        rdata=data;
        $plat=$(opts.node || '#platform');  
        wordSize=opts.maxFontSize || wordSize;
        minWordSize=opts.minFontSize||minWordSize; 
        maxWordCount=opts.maxWordCount || maxWordCount; 
        var w=pw=$plat.width(),h=ph=$plat.height();
        for(var i=0;i<rdata.length;i++){
            maxWeight=Math.max(rdata[i].weight,maxWeight);
        }

        reSortGaps();

        for(var i =0,len=Math.min(rdata.length,maxWordCount);i<len;i++){
            var next=rdata[i];
            var size=throwOne(next.name,(next.weight/maxWeight)*wordSize,0,0);
            var newpos=findGap(size);
            if(!newpos){
                $(size.node).remove();
                continue;
            }
            inPlat.push(newpos);
            size.node.style.left=newpos.l+'px';
            size.node.style.top=newpos.t+'px';
        }
        callbackTimer=setTimeout(callback,duringTime);
    }

    return {
    	draw:initPlatform,
        destroy:function(){
            inPlat=undefined;
            gaps=undefined;
            $plat && $plat.remove();
            clearTimeout(callbackTimer);
        }
    }
})