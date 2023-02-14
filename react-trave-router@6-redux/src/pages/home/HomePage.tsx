import React from 'react';
import styles from './HomePage.module.css'
import { Header, Footer, SideMenu, Carousel, ProductCollection, BusinessPartners } from '../../components'
import { Row, Col, Typography } from 'antd'
import { productList1, productList2, productList3 } from "./mockups"
import sideImage from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import { withRouter, RouteComponentProps } from '../../helper/withRouter'
import { withTranslation, WithTranslation } from 'react-i18next'

class HomePageComponent extends React.Component<RouteComponentProps & WithTranslation> {
  render() {
    console.log(this.props)
    const { t } = this.props
    return (
      <>
        <Header />
        {/* 页面内容 */}
        <div className={styles["page-content"]}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <SideMenu/>
            </Col>
            <Col span={18}>
              <Carousel/>
            </Col>
          </Row>
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                {t("home_page.hot_recommended")}
              </Typography.Title>
            }
            sideImage={sideImage}
            products={productList1}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                {t("home_page.new_arrival")}
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList2}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="success">
                {t("home_page.domestic_travel")}
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList3}
          />
          <BusinessPartners />
        </div>
        <Footer />
      </>
    )
  }
}

// 通过 HOC 来实现 react-router-dom@6 对类组件的支持
// withTranslation()(Component) 第一个小括号代表的是语言所使用的命名空间
export const HomePage = withTranslation()(withRouter(HomePageComponent))

// export const HomePage = () => {
//   return (
//     <>
//       <Header />
//       {/* 页面内容 */}
//       <div className={styles["page-content"]}>
//         <Row style={{ marginTop: 20 }}>
//           <Col span={6}>
//             <SideMenu/>
//           </Col>
//           <Col span={18}>
//             <Carousel/>
//           </Col>
//         </Row>
//         <ProductCollection
//           title={
//             <Typography.Title level={3} type="warning">
//               爆款推荐
//             </Typography.Title>
//           }
//           sideImage={sideImage}
//           products={productList1}
//         />
//         <ProductCollection
//           title={
//             <Typography.Title level={3} type="danger">
//               新品上市
//             </Typography.Title>
//           }
//           sideImage={sideImage2}
//           products={productList2}
//         />
//         <ProductCollection
//           title={
//             <Typography.Title level={3} type="success">
//               国内游推荐
//             </Typography.Title>
//           }
//           sideImage={sideImage3}
//           products={productList3}
//         />
//         <BusinessPartners />
//       </div>
//       <Footer />
//     </>
//   )
// }
