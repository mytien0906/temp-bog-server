import { Card, Table } from 'antd';
import React from 'react';
import { UserType } from '../../constants/type';

export default function Users() {
  const data: UserType[] = [
    {
      _id:1,
      user_login:'Mtien',
      user_name:'Mtien',
      user_email:'thaithimytien0906@gmail.com',
      user_role:'admin',
      user_status:'active',
      user_registered:'2020-01-01',
      
    }
  ];
  return (
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <Table columns={} dataSource={data} />
    </Card>
  );
}
