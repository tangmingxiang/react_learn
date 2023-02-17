import React from "react"
import styles from "./Header.module.css"
import logo from '../../assets/logo.svg'
import { Layout, Typography, Input, Dropdown, Button, Menu } from 'antd'
import { GatewayOutlined } from '@ant-design/icons'
import { withRouter, RouteComponentProps } from "../../helper/withRouter"
import { RootState } from "../../redux/store"
import { MenuInfo } from "rc-menu/lib/interface"
import { withTranslation, WithTranslation } from "react-i18next"
import { changeLanguageActionCreater } from "../../redux/language/languageActions"
import { connect } from 'react-redux'
import { Dispatch } from "redux"

function mapStateToProps(state: RootState) {
  return {
    language: state.language,
    languageList: state.languageList
  }
}
function mapDispatchToProps(dispatch: Dispatch) {
  function handleLanguageChange (e: MenuInfo) {
    const language = e.key === 'zh' ? 'zh' : 'en'
    const action = changeLanguageActionCreater(language)
    dispatch(action)
  }
  return {
    handleLanguageChange
  }
}

type PropsType = RouteComponentProps & // react-router 路由 props 类型
                 WithTranslation & // i18n props类型
                 RootState & // redux store 映射类型 
                 ReturnType<typeof mapDispatchToProps>

class HeaderComponent extends React.Component<PropsType> {
  render(): React.ReactNode {
    const { navigate, t } = this.props
    return (
      <div className={styles["app-header"]}>
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Typography.Text style={{ width: 98 }}>{ t('header.slogan') }</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              menu={{
                items: this.props.languageList.map(l => ({
                  key: l.code,
                  label: l.name
                })),
                onClick: (e) => this.props.handleLanguageChange(e)
              }}
              icon={<GatewayOutlined />}
              >
              <span>{ this.props.language === 'zh' ? '中文' : 'English' }</span>
            </Dropdown.Button>
            <Button.Group className={styles["button-group"]}>
              <Button onClick={() => navigate('register') }>{ t('header.register') }</Button>
              <Button onClick={() => navigate('login') }>{ t('header.signin') }</Button>
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
}

// 在 react-router-dom@6 中通过 HOC 将路由相关接口传递给类组件
export const Header = connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(withRouter(HeaderComponent))
)
