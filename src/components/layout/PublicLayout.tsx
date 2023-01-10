import React, { ReactNode, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import 'antd/dist/reset.css';
import { FileOutlined } from '@ant-design/icons';
import { Typography, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import { CalendarToday, Calendar } from '../Icons/MenuIcons';
import DailyTodo from '../pages/ScheduleManagement/DailyTodo';

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
export interface Props {
  children: ReactNode;
}

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to={`/dailyTodo`}>Daily / Weekly</Link>, '1', <CalendarToday />),
  getItem(<Link to={`/monthlyPlan`}>Monthly Plan</Link>, '2', <Calendar />),
  getItem(<Link to={`/`}>Memo</Link>, '9', <FileOutlined />),
];

export default function PublicLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Title style={{ margin: 0, padding: 8, color: '#fff' }} level={2}>
            Schedule
          </Title>
          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' items={items} />
        </Sider>
        <Layout className='site-layout'>
          <Content style={{ margin: '0 16px' }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
