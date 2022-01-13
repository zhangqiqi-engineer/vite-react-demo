import React,{FC,memo,useState}from 'react';
import {FullscreenExitOutlined,FullscreenOutlined} from '@ant-design/icons';
import {exitFullScreen,requestFullScreen} from '../../../utils/index';

const Fullscreen:FC=()=>{
    const [isFull,setIsFull] = useState(false);
    const toggleFullScreen =():void=>{
        !isFull ? requestFullScreen():exitFullScreen();
        setIsFull(!isFull);
    };

    return(
        <>
            {
                isFull?<FullscreenExitOutlined style={{fontSize:20}} onClick={toggleFullScreen}></FullscreenExitOutlined>:
                <FullscreenOutlined style={{fontSize:20}} onClick={toggleFullScreen}></FullscreenOutlined>
            }
        </>
    )
}
export default memo(Fullscreen);
