import {
  ApartmentOutlined,
  AppstoreOutlined,
  SwapOutlined,
  TableOutlined,
  TranslationOutlined,
} from '@ant-design/icons';
import React from 'react';

const iconMap: any = {
  AppstoreOutlined: <AppstoreOutlined />,
  TranslationOutlined: <TranslationOutlined />,
  ApartmentOutlined: <ApartmentOutlined />,
  SwapOutlined: <SwapOutlined />,
  TableOutlined: <TableOutlined />,
};

// 用于渲染菜单图标
const Icon = (icon: string): React.ReactNode => iconMap[icon];

export default Icon;
