import { Link } from 'react-router-dom';
import React, { FC, memo ,useEffect,useState} from 'react';
import { Button ,Table} from 'antd';
import * as Api from "../../utils/servers.js";
import './index.less';


const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render:(text:any) => {
      return(<div>{text.title} {text.first} {text.last}</div>)

    }
  },
  {
    title: '性别',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: '电话',
    dataIndex: 'cell',
    key: 'cell',
  },

  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
];
const Home: FC = () => {
   const [resdata,setResData] = useState([]);
  useEffect(()=>{
     queryUser();
  },[])

  const queryUser= async() => {
    await Api.get("api/api?results=55")
    //then获取成功；response成功后的返回值（对象）
    .then((response:any) => {
      console.log("response.data.results",response.data.results)
      setResData(response.data.results)
    })
    //获取失败
    .catch((error:any) => {
      console.log(error);
      alert("网络错误，不能访问");
    });
  
}

  return (
    <div>
      <div className="top">
        <Button type="primary" danger>
          Primary
        </Button>
        <Button danger>Default</Button>
        <Button type="dashed" danger>
          Dashed
        </Button>
        <Button type="text" danger>
          Text
        </Button>
        <Button type="link" danger>
          Link
        </Button>
      </div>
      <Table dataSource={resdata} columns={columns}  />
    </div>
  );
};

export default memo(Home);
