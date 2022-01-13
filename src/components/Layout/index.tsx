import React, { FC, PropsWithChildren, memo, useEffect, useState} from 'react';
import ProLayout, { PageContainer, SettingDrawer } from '@ant-design/pro-layout';
import { MenuDataItem } from '@ant-design/pro-layout/lib/typings';
import { useHistory, useLocation } from 'react-router-dom';

import { Layout as AntdLayout, Spin } from "antd";
import Settings from './defaultSettings';
import defaultProps from './_defaultProps';
import Header from '../Header/index';

const { Content } = AntdLayout;

const Layout: FC<any> = (props: PropsWithChildren<any>) => {
    const {menu} = props;
    const [pathname, setPathname] = useState('/');
    const [ username, setUsername ] = useState(''); // 用户信息

    const history = useHistory();
    const location = useLocation();
 // 菜单渲染
 const menuItemRender = (item: MenuDataItem, dom: React.ReactNode) => (
    <a
      onClick={() => {
        history.push(item.path || '/');
        setPathname(item.path || '/');
      }}>
      {dom}
    </a>
  );
  const rightContentRender = () => <Header username={"小七同学"} />;

    return(
        <div style={{height:'100vh'}}>
            <ProLayout
                menuItemRender={menuItemRender}
                rightContentRender={rightContentRender}

                {...defaultProps}
                {...Settings}
                location={{
                    pathname,
                }}
                >
                <PageContainer >{props.children}</PageContainer>
                </ProLayout>
        </div>
    )
};
export default memo(Layout);

