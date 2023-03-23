import React, { PropsWithChildren } from "react";
import styles from "./UserLayout.module.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { Layout, Dropdown, Button } from "antd";
const { Header, Footer, Content } = Layout;

// interface PropsTypes {
//   children: React.ReactNode;
// }

export const UserLayout: React.FC<PropsWithChildren> = (props) => {
  return (
    <Layout className={styles["user-layout-container"]}>
      <Header className={styles["header"]}>
        <div className={styles["lang"]}>
          <Dropdown
            menu={{
              items: [{code: 'zh', name: "中文"}, {code: 'en', name: "English"}].map((item) => ({
                key: item.code,
                label: item.name
              }))
            }}
          >
            <Button>
              {" "}
              选择语言 <CaretDownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Header>
      <Content className={styles["content"]}>
        <div className={styles["top"]}>
          <div className={styles["content-header"]}>
            <Link to="/">
              <img alt="logo" className={styles["logo"]} src={logo} />
              <span className={styles["title"]}>React 旅游网</span>
            </Link>
          </div>
          <div className={styles["desc"]}>
            慕课网 是我朝最具影响力的 线上课程学习网站
          </div>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer就不写了，太累了</Footer>
    </Layout>
  );
};
