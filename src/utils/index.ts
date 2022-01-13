
// 进入全屏
export function requestFullScreen():void{
    const de:any = document.body;
    if(de.requestFullScreen){
        de.requestFullScreen();
    }else if(de.mozRequestFullScreen){
        de.mozRequestFullScreen();
    }else if(de.webkitRequestFullScreen){
        de.webkitRequestFullScreen();
    }
}

// 退出全屏
export function exitFullScreen():void{
    const de:any = document;
if(de.exitFullScreen){
    de.exitFullScreen();
}else if(de.mozCancelFullScreen){
    de.mozCancelFullScreen();
}else if(de.webkitCancelFullScreen){
    de.webkitCancelFullScreen();
}

}

