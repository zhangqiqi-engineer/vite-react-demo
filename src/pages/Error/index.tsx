import { Button, Result } from 'antd';
import { useHistory } from 'react-router-dom';
import React, { FC, memo } from 'react';

const Error: FC = () => {
  const history = useHistory();
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="您访问的页面不存在，请联系管理员！"
        extra={<Button type="primary" onClick={() => history.replace('/')}>返回首页</Button>} />
    </div>
  );
};

export default memo(Error);
