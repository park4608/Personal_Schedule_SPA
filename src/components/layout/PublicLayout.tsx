import React, { ReactNode, useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import 'antd/dist/reset.css';
import { FileOutlined } from '@ant-design/icons';
import { Typography, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import { Home, CalendarToday, Calendar, File } from '../Icons/MenuIcons';
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
  getItem(<Link to={`/`}>Home</Link>, '1', <Home />),
  getItem(<Link to={`/dailyTodo`}>Daily / Weekly</Link>, '2', <CalendarToday />),
  getItem(<Link to={`/monthlyPlan`}>Monthly Plan</Link>, '3', <Calendar />),
  getItem(<Link to={`/StickerMemo`}>Memo</Link>, '4', <File />),
];

let currentPath = '';

export default function PublicLayout() {
  const [collapsed, setCollapsed] = useState(false);

  let location = useLocation();

  // useEffect(() => {
  //   if (currentPath === location.pathname) window.location.reload();
  //   currentPath = location.pathname;
  // }, [location]);

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Title style={{ margin: 0, padding: 8, color: '#fff', textAlign: 'center' }} level={2}>
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
