import { Drawer, Layout, Menu, MenuProps, Modal, theme } from "antd";
import { useEffect, useState } from "react";
import {
  BarsOutlined,
  CalendarOutlined,
  FileTextOutlined,
  FundOutlined,
  LogoutOutlined,
  MedicineBoxOutlined,
  MenuOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Image, { StaticImageData } from "next/image";
import logo from "@/assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { ROUTE_PATH } from "@/utilities/enums";
import { useRouter } from "next/router";
import { SignInServices } from "@/services/auth/signIn";
import { RootState } from "@/redux/store";
import { UserServices } from "@/services/user";
import { getLocalStorage, getSpaceBodyAppLayout } from "@/utilities/helper";
import STORAGE from "@/utilities/storage";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: string | React.ReactNode | StaticImageData,
  onClick?: () => void | null,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    onClick,
    children,
    label,
  } as MenuItem;
}

export const AppLayout = ({ children }: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [curWidth, setCurWidth] = useState(window.innerWidth);
  const user = useSelector((state: RootState) => state.auth.user);
  const [IsOpenMenu, setIsOpenMenu] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setCurWidth(window.innerWidth);
      if (window.innerWidth <= 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    }

    window.addEventListener('resize', handleWindowResize);
    
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    const userId = getLocalStorage(STORAGE.userId);
    UserServices.getSingleUserProcess(dispatch, userId);
  };

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const handleLogOut = () => {
    SignInServices.logOutProcess(dispatch);
  };
  const handleBeforeLogOutMobile = () => {
    handleLogOut();
    onCloseMenuMobile();
  };
  
  const handleRedirect = (route: string) => {
    router.push(route);
  };
  
  const handleClickMenuItemMobile = (route: string) => {
    handleRedirect(route);
    onCloseMenuMobile();
  };
  
  const showMenuMobile = () => {
    setOpenMenuMobile(true);
  };
  
  const onCloseMenuMobile = () => {
    setOpenMenuMobile(false);
  };
  
  const items: MenuItem[] = [
    getItem('Dashboard', '1', <FundOutlined style={{fontSize: '25px', color: '#000'}}/>, () => handleRedirect(ROUTE_PATH.dashboard)),
    getItem('Patients', '2', <UserOutlined style={{fontSize: '25px'}}/>, () => handleRedirect(ROUTE_PATH.patients)),
    getItem('Doctors', '3', <TeamOutlined style={{fontSize: '25px', color: '#000'}}/>, () => handleRedirect(ROUTE_PATH.doctors)),
    getItem('Appointments', '4', <CalendarOutlined style={{fontSize: '25px', color: '#000'}}/>, () => handleRedirect(ROUTE_PATH.appointments)),
    getItem('Medicine', '5', <MedicineBoxOutlined style={{fontSize: '25px', color: '#000'}}/>, () => handleRedirect(ROUTE_PATH.medicine)),
    getItem('Content', '6', <FileTextOutlined style={{fontSize: '25px', color: '#000'}}/>, () => handleRedirect(ROUTE_PATH.content)),
  ];
  
  const secondItems: MenuItem[] = [
    getItem('More', '1', <BarsOutlined style={{fontSize: '25px'}}/>, undefined, [
      getItem('Settings', '2', <SettingOutlined style={{fontSize: '17px'}}/>, () => handleRedirect(ROUTE_PATH.editProfile)),
      getItem('Log out', '3', <LogoutOutlined style={{fontSize: '17px'}}/>, handleLogOut),
    ]),
  ];

  const mobileItems: MenuItem[] = [
    getItem('Dashboard', '1', <FundOutlined style={{fontSize: '25px', color: '#000'}}/>, () => handleClickMenuItemMobile(ROUTE_PATH.dashboard)),
    getItem('Patients', '2', <UserOutlined style={{fontSize: '25px'}}/>, () => handleClickMenuItemMobile(ROUTE_PATH.patients)),
    getItem('Doctors', '3', <TeamOutlined style={{fontSize: '25px', color: '#000'}}/>, () => handleClickMenuItemMobile(ROUTE_PATH.doctors)),
    getItem('Appointments', '4', <CalendarOutlined style={{fontSize: '25px', color: '#000'}}/>, () => handleClickMenuItemMobile(ROUTE_PATH.appointments)),
    getItem('Medicine', '5', <MedicineBoxOutlined style={{fontSize: '25px', color: '#000'}}/>, () => handleClickMenuItemMobile(ROUTE_PATH.medicine)),
    getItem('Content', '6', <FileTextOutlined style={{fontSize: '25px', color: '#000'}}/>, () => handleClickMenuItemMobile(ROUTE_PATH.content)),
    getItem('More', '7', <BarsOutlined style={{fontSize: '25px', color: '#000'}}/>, undefined, [
      getItem('Settings', '71', <SettingOutlined style={{fontSize: '17px', color: '#000'}}/>, () => handleClickMenuItemMobile(ROUTE_PATH.editProfile)),
      getItem('Log out', '72', <LogoutOutlined style={{fontSize: '17px', color: '#000'}}/>, handleBeforeLogOutMobile),
    ])
  ];
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {
        curWidth > 600 &&
        <Sider collapsed={collapsed} width={"270px"} style={{ background: colorBgContainer, position: "fixed", height: "100vh", padding: "3vh 0 7vh", borderRight: "1px solid #ccc" }}>
          <div className="wrap-logo-sider">
            <Link href={ROUTE_PATH.dashboard}><Image className="logo" src={logo} priority alt="logo"/></Link>
          </div>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} triggerSubMenuAction="click"/>
          <Menu theme="light" mode="inline" items={secondItems} triggerSubMenuAction="click" expandIcon={null}/>
        </Sider>
      }
      <Layout>
        {
          curWidth <= 600 &&
          <Header style={{ padding: "0 20px 0 10px", background: colorBgContainer, width: "100%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid #ccc", position: "fixed", zIndex: 10000}} >
            <div><Image src={logo} priority alt="logo"/></div>
            <div><MenuOutlined onClick={showMenuMobile} className="mb-link-nav" style={{fontSize: '25px', color: '#000'}}/></div>
          </Header>

        }
        <Content style={{marginLeft: getSpaceBodyAppLayout(curWidth), overflow: "hidden"}}>
          <div style={{ padding: curWidth > 600 ? 24 : "80px 7px 7px 7px", minHeight: curWidth > 600 ? "100vh" : "90vh", background: colorBgContainer }}>
            {children}
          </div>
        </Content>
      </Layout>
        <Drawer title="Menu" placement="left" onClose={onCloseMenuMobile} open={openMenuMobile} zIndex={10001}>
          <Sider width={"100%"}>
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={mobileItems} triggerSubMenuAction="click" expandIcon={null}/>
          </Sider>
        </Drawer>
    </Layout>
  );
};
