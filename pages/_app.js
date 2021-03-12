import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;
import Link from "next/link";
function MyApp({ Component, pageProps }) {
  console.log(Component, pageProps);

  return (
    <Layout>
      <Sider className={styles.slider}>
        <div className={styles.menIt}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link href="/Profile">
                <a>Profile</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BarChartOutlined />}>
              <a>nav 4</a>
            </Menu.Item>
            <Menu.Item key="5" icon={<CloudOutlined />}>
              <a>nav 5</a>
            </Menu.Item>
            <Menu.Item key="6" icon={<AppstoreOutlined />}>
              <a>nav 6</a>
            </Menu.Item>
            <Menu.Item key="7" icon={<TeamOutlined />}>
              <a>nav 7</a>
            </Menu.Item>
            <Menu.Item key="8" icon={<ShopOutlined />}>
              <a>nav 8</a>
            </Menu.Item>
            <Menu.Item key="9" icon={<ShopOutlined />}>
              <a>nav 9</a>
            </Menu.Item>
            <Menu.Item key="9" icon={<ShopOutlined />}>
              <a>nav 9</a>
            </Menu.Item>
            <Menu.Item key="9" icon={<ShopOutlined />}>
              <a>nav 9</a>
            </Menu.Item>
            <Menu.Item key="9" icon={<ShopOutlined />}>
              <a>nav 9</a>
            </Menu.Item>
            <Menu.Item key="9" icon={<ShopOutlined />}>
              <a>nav 9</a>
            </Menu.Item>
            <Menu.Item key="9" icon={<ShopOutlined />}>
              <a>nav 9</a>
            </Menu.Item>
            <Menu.Item key="9" icon={<ShopOutlined />}>
              <a>nav 9</a>
            </Menu.Item>{" "}
            <Menu.Item key="9" icon={<ShopOutlined />}>
              <a>nav 9</a>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <Component {...pageProps} />;
        </Content>
      </Layout>
    </Layout>
  );
}

export default MyApp;
