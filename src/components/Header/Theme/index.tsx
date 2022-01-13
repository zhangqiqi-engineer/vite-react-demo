import {Switch} from 'antd';
import { changeTheme } from './utils';
import React,{FC , memo,useEffect} from 'react';

const Theme: FC = ()=>{

    const theme = JSON.parse(localStorage.getItem("isDark")||'false');

    useEffect(()=>{
        changeTheme(theme);
    },[]);

    const iconRender=(filename:string):React.ReactNode=>(
        <img style={{width:15,height:15}} src = {`images/layout/${filename}.png`}/>
    )
    
    return(
        <Switch defaultChecked={theme} onChange={changeTheme} checkedChildren={iconRender('sun')} unCheckedChildren={iconRender('moon')} ></Switch>
    );
}

export default memo(Theme);