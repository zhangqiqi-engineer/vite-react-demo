import React from 'react';
import { SmileOutlined, CrownOutlined, TabletOutlined, AntDesignOutlined } from '@ant-design/icons';
import Home from 'pages/Home';
import Base from 'pages/Base';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/home',
        name: '首页',
        icon: <SmileOutlined />,
        component:Home ,
      },
      {
        path: '/admin',
        name: '管理页',
        icon: <CrownOutlined />,
        access: 'canAdmin',
        component: './Admin',
        routes: [
          {
            path: '/admin/sub-page1',
            name: '一级页面',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
          {
            path: '/admin/sub-page2',
            name: '二级页面',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
        ],
      },
      {
        path: '/base',
        name: '基础页面',
        icon: <AntDesignOutlined />,
        component: Base,
      },
    ],
  },
  location: {
    pathname: '/',
  },
};
