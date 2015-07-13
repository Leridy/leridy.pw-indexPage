/*VERSION:1.0
 * Created by 宇笛 on 2015/7/11.
 */
function startTime()
{
    var today=new Date();
    var weekdays =['星期日','星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
    var wd = weekdays[today.getDay()];
    var d=today.getDay();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var j;
    var i;
    s=buling(s);
    m=buling(m);
    h=buling(h);
    document.getElementById('time').innerHTML=wd+"&nbsp;&nbsp;"+h+":"+m+":"+s+"&nbsp;";
    t=setTimeout('startTime()',100);
}//时间功能
function buling(x){
    if(x<10){
        x="0"+x;
    }
    return x;
}
startTime();

var ww;
var hh;
function bg(cw,ch){
    if(cw*9>ch*16){
        ww=cw;
        hh=ww/16*9;
    }else{
        hh=ch;
        ww=hh/9*16;
    }
}
function changeBg(){
    var cw=document.documentElement.clientWidth;
    var ch=document.documentElement.clientHeight;
    bg(cw,ch);
    document.getElementById("bg").innerHTML='body{background-size:'+ ww+'px,'+hh+'px;background-position:center;background-attachment: fixed;}';
    document.getElementById("div").innerHTML='.section{weight:'+ww+'px;height:'+hh+'px;background-position:center;background-attachment: fixed;}';
}
changeBg();
window.onresize=changeBg;

$(function(){
  $("#navBody").children("li").bind("click",function(){
      var i= $("#navBody").children("li").index($(this));
      $("#navBody").children("li").each(function(index){
          if(i==index){
              $(this).addClass("active");
          }else{
              $(this).removeClass("active")
          }
      })
  })
})
