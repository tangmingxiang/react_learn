import React from "react"
import { Image, Typography } from "antd"
// import { withRouter, RouteComponentProps, Link } from "react-router-dom"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

interface PropsType {
  id: number | string,
  size: 'large' | 'small',
  title: string,
  imageSrc: string,
  price: number | string
}

export const ProductImage:React.FC<PropsType> = ({ id, size, title, imageSrc, price }) => {
  // console.log(history)
  // console.log(location)
  // console.log(match)
  const { t } = useTranslation()
  return (
    // <div onClick={() => history.push(`/detail/${id}`)} style={{ cursor: 'pointer' }}>
    <Link to={`/detail/${id}`}>
      {
        size === 'large' ? (
          <Image src={imageSrc} height={285} width={490} preview={false} />
        ) : (
          <Image src={imageSrc} height={120} width={240} preview={false} />
        )
      }
      <div>
        <Typography.Text type="secondary">
          {title.slice(0,25)}
        </Typography.Text>
        <Typography.Text type="danger" strong>
          ￥ {price} {t('home_page.start_from')}
        </Typography.Text>
      </div>
    </Link>
    // </div>
  )
}

// export const ProductImage = withRouter(ProductImageComponent)
