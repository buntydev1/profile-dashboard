import { Layout } from "antd";
import styles from "../styles/Home.module.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
const { Header, Content } = Layout;
import { Button } from "antd";
function Profile() {
  return (
    <div>
      <Layout>
        <Header></Header>
        <div className={styles.titleName}>
          <label>Account Profile</label>
        </div>

        <div className={styles.contentLayout}>
          <Content>
            <div className={styles.avatar}>
              <Avatar size={150} icon={<UserOutlined />} />
            </div>
            <div className={styles.inputField}>
              <Input placeholder="Name" />
              <br />
              <Input placeholder="Email" />
              <br />
              <Input placeholder="City" />
              <br />
              <Input placeholder="Contact" />
              <br />
              <Button type="submit">Submit</Button>
            </div>
          </Content>
        </div>
      </Layout>
    </div>
  );
}

export default Profile;
