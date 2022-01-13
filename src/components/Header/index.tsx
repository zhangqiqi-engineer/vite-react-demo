

import Fullscreen from './Fullscreen/index';
// import I18n from './I18n';
import React, { FC } from 'react';
import Theme from './Theme';
import User from './User';
// import styles from './index.less';

interface IProps {
  username?: string,
  exitUrl?: string
}

const Header: FC<IProps> = ({ username, exitUrl }) => {
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
      {/* 头部导航左侧 */}
      <div style={{display:'flex',alignItems:"center"}}>
        <Fullscreen />
      </div>
      <div style={{display:'flex',alignItems:"center",justifyContent:'space-between'}}>
        {/* 昼夜模式 */}
        <Theme/>
        {/* 中英双语切换 */}
        {/* <I18n /> */}
        {/* 个人中心 */}
        <User username={username} exitUrl={exitUrl} />
      </div>
    </div>
    // <div className={styles.rightContent}>
    //   {/* 头部导航左侧 */}
    //   <div className={styles.headerLeft}>
    //     <Fullscreen />
    //   </div>
    //   <div className={styles.headerRight}>
    //     {/* 昼夜模式 */}
    //     <Theme />
    //     {/* 中英双语切换 */}
    //     {/* <I18n /> */}
    //     {/* 个人中心 */}
    //     <User username={username} exitUrl={exitUrl} />
    //   </div>
    // </div>
    );
};

export default Header;
