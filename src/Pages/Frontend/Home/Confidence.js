import React from 'react'
import { ShoppingOutlined,DollarOutlined,CustomerServiceOutlined,CreditCardOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const {Title,Text}=Typography

export default function Confidence() {
  return (
<>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-6  col-md-6 col-lg-3 col-xl-3 ">
        <ShoppingOutlined  className='fs-2'/>
        <Title level={4}>Free Notes</Title>
        <Text className='text-muted'>Free notes after $150</Text>
        </div>

        <div className="col col-12 col-sm-6  col-md-6 col-lg-3 col-xl-3">
        <DollarOutlined   className='fs-2'/>
        <Title level={4}>Money Guarantee</Title>
        <Text className='text-muted'>Within 30 days for an exchange</Text>
        </div>

        <div className="col col-12 col-sm-6  col-md-6 col-lg-3 col-xl-3 ">
        <CustomerServiceOutlined className='fs-2'/>
        <Title level={4}>Online Reading</Title>
        <Text className='text-muted'>24 hours a day, 7 days a week </Text>
        </div>
        <div className="col col-12 col-sm-6  col-md-6 col-lg-3 col-xl-3 ">
        <CreditCardOutlined   className='fs-2'/>
        <Title level={4}>Explained topics</Title>
        <Text className='text-muted'>On ervery subjects</Text>
        </div>
    </div>
</div>
</>
  )
}
