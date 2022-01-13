import { Link } from 'react-router-dom';
import React, { FC, memo } from 'react';
import { List, Card } from 'antd';
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

const Base: FC = () => {
  return (
    <div>
       <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />
    </div>
  );
};

export default memo(Base);
