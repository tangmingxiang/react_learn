import React from "react"
import styles from './BusinessPartners.module.css'
import { Divider, Image, Typography } from "antd"

import Facebook from '../../assets/images/facebook-807588_640.png'
import Instagram from '../../assets/images/follow-826033_640.png'
import YouTube from '../../assets/images/icon-720944_640.png'
import Microsoft from '../../assets/images/microsoft-80658_640.png'

const sponsors = [
  { src: Facebook, title: 'Facebook' },
  { src: Instagram, title: 'Instagram' },
  { src: YouTube, title: 'YouTube' },
  { src: Microsoft, title: 'Microsoft' }
]

export const BusinessPartners: React.FC = () => {
  return (
    <div>
      <Divider>
        <Typography.Title level={3}>
          合作企业
        </Typography.Title>
      </Divider>
      <div className={styles.content}>
        { 
          sponsors.map(item => 
            {
              return (
                <a href='https://www.baidu.com' target="_blank" rel="noreferrer" key={item.title}>
                  <Image src={item.src} alt="sponsors"  />
                </a>
              )
            }
          )
        }
      </div>
    </div>
  )
}
