import {Button,Tooltip} from 'antd';
import { TranslationOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import React, {FC,memo} from 'react';

const I18n:FC=()=>{
    const [_,i18n] = useTranslation();

    //

    const toggleLanguages = ():void=>{
        const _locale = i18n.language === 'zh-CN'? 'en-US':'zh-CN';
        i18n.changeLanguage(_locale);
    }

    return(
        <Tooltip title={`${i18n.language==='zh-CN' ? 'Switch to English':'切换成中文'}`}>
            <Button type="text" icon={<TranslationOutlined style={{fontSize:20}} onClick={toggleLanguages}/>}>

            </Button>

        </Tooltip>)
}
export default memo(I18n)