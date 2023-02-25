import React from "react";
import styles from "./Header.module.css"
import logo from '../../assets/logo.svg';
import { Layout, Typography, Input, Dropdown, Button, Menu } from 'antd'
import { GatewayOutlined } from '@ant-design/icons'
// import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useSelector } from "../../redux/hooks"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
// import { Dispatch } from "redux"
// import { languageActionTypes } from "../../redux/language/languageActions"
import { changeLanguageActionCreater } from "../../redux/language/languageActions";

export const Header:React.FC = () => {
  const navigate = useNavigate()
  const language = useSelector(state => state.language.language)
  const languageList = useSelector(state => state.language.languageList)
  // const dispatch = useDispatch<Dispatch<languageActionTypes>>()
  const dispatch = useDispatch() // 推荐，以免代码显得臃肿
  const { t } = useTranslation()

  return (
    <div className={styles["app-header"]}>
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text style={{ width: 98 }}>{ t('header.slogan') }</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            menu={{
              items: languageList.map((item, index) => ({
                key: item.code,
                label: item.name
              })),
              onClick: (e) => dispatch(changeLanguageActionCreater(e.key === 'zh' ? 'zh' : 'en'))
            }}
            icon={<GatewayOutlined />}
            
            >
            { language === 'zh' ? '中文' : 'English' }
          </Dropdown.Button>
          <Button.Group className={styles["button-group"]}>
            <Button onClick={() => navigate('register') }>注册</Button>
            <Button onClick={() => navigate('login') }>登录</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles["main-header"]}>
        <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="logo" className={styles["App-logo"]}/>
          <Typography.Title level={3} className={styles["title"]}>{ t('header.title') }</Typography.Title>
        </span>
        <Input.Search
          placeholder='请输入旅游目的地、主题或关键字'
          className={styles["search-input"]}
        />
      </Layout.Header>
      <Menu
        mode="horizontal"
        className={styles["main-menu"]}
        items={[
          { key: "1", label: t("header.home_page") },
          { key: "2", label: t("header.weekend") },
          { key: "3", label: t("header.group") },
          { key: "4", label: t("header.backpack") },
          { key: "5", label: t("header.private") },
          { key: "6", label: t("header.cruise") },
          { key: "7", label: t("header.hotel") },
          { key: "8", label: t("header.local") },
          { key: "9", label: t("header.theme") },
          { key: "10", label: t("header.custom") },
          { key: "11", label: t("header.study") },
          { key: "12", label: t("header.visa") },
          { key: "13", label: t("header.enterprise") },
          { key: "14", label: t("header.high_end") },
          { key: "15", label: t("header.outdoor") },
          { key: "16", label: t("header.insurance") }
        ]}
      />
    </div>
  )
}
