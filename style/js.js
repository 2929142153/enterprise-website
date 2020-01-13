/**
 * Created by Administrator on 2019-03-07.
 */


//图片轮播及切换

var selectNum=0;
//图片改变
function changeImg(changeNum,type){
    var imgs = window.document.getElementsByName('imgs');//getElementsByTagName('li');
    //console.log(imgs);
    for(var i=0;i<imgs.length;i++){
        if(i==changeNum){
            imgs[i].style.display="block";
        }else{
            imgs[i].style.display="none";
        }
    }
    if(type==1){
        selectNum++;
        if(selectNum>4){
            selectNum=0;
        }
    }else if(type==2){
        if(selectNum<=0){
            selectNum=5;
        }
    }
}
//向左切换图片
function changeImgLeft(){
    if(selectNum>0){
        selectNum--;
    }
    changeImg(selectNum,2);
}
//向右切换图片
function changeImgRight(){
    changeImg(selectNum,1);
}
changeImg(selectNum,1);
//鼠标移动图片切换
function changeOver(obj){
    selectNum=obj.innerText-1;
    changeImg(selectNum,2);
}
setInterval(changeImgRight,7000);






































