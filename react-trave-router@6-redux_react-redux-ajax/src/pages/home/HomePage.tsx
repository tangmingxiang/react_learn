import React from 'react';
import styles from './HomePage.module.css'
import { Header, Footer, SideMenu, Carousel, ProductCollection, BusinessPartners } from '../../components'
import { Row, Col, Typography, Spin } from 'antd'
// import { productList1, productList2, productList3 } from "./mockups"
import sideImage from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import { withRouter, RouteComponentProps } from '../../helper/withRouter'
import { withTranslation, WithTranslation } from 'react-i18next'
import axios from 'axios'
import { connect } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchRecommendProductsErrorActionCreator, fetchRecommendProductsStartActionCreator, fetchRecommendProductsSuccessActionCreator } from '../../redux/recommendProducts/recommendProductsActions'

function mapStateToProps (state: RootState) {
  return {
    loading: state.recommendProducts.loading,
    error: state.recommendProducts.error,
    productList: state.recommendProducts.productList
  }
}

function mapDispatchToProps (dispach) {
  return {
    fetchStart: () => dispach(fetchRecommendProductsStartActionCreator()),
    fetchSuccess: (data) => dispach(fetchRecommendProductsSuccessActionCreator(data)),
    fetchError: (errMsg) => dispach(fetchRecommendProductsErrorActionCreator(errMsg))
  }
}

type PropsType = RouteComponentProps & WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

class HomePageComponent extends React.Component<PropsType> {
  async componentDidMount(): Promise<void> {
    this.props.fetchStart()
    try {
      const { data } = await axios.get('/productCollections')
      this.props.fetchSuccess(data)
    } catch (error) {
      this.props.fetchError(error instanceof Error ? error.message : "error")
    }
  }

  render() {
    console.log(this.props)
    const { t, loading, error: err, productList } = this.props
    if (loading) {
      return (
        <Spin
          size="large"
          style={{
            marginTop: 200,
            marginBottom: 200,
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
        />
      )
    }
    if (err) {
      return <div>网站出错：{err}</div>;
    }
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
            products={productList[0].touristRoutes}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                {t("home_page.new_arrival")}
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList[1].touristRoutes}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="success">
                {t("home_page.domestic_travel")}
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList[2].touristRoutes}
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
export const HomePage = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withRouter(HomePageComponent)))

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
