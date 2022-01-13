import { Avatar, Dropdown, Menu, message } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import React, { FC, memo } from 'react';
interface IProps {
  username?: string,
  exitUrl?: string
}

const User: FC<IProps> = ({ username = 'admin', exitUrl = '/login' }) => {

  const history = useHistory();

  // 用户中心
  const handelUserCenter = (): void => {
    history.replace(exitUrl);
    message.error('已退出登录！');
  };

  // 个人中心下拉框渲染
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <LogoutOutlined />
        <span onClick={handelUserCenter}> 退出登录 </span>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Avatar shape="square" size="small" icon={<UserOutlined />} />
      <Dropdown overlay={menu} placement="bottomCenter" trigger={[ 'click' ]}>
        <span style={{ marginLeft: 10, marginRight: 30 }}>{username}</span>
      </Dropdown>
    </>
  );
};

export default memo(User);
