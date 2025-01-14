import { Col, Image, Row } from 'antd';
import { InstagramOutlined } from '@ant-design/icons';
import React from 'react';
import Title from 'antd/es/typography/Title';
// import './styles.css';  // Assuming you're placing your CSS here

function Instagram({ src }) {
  return (
    <div className="card3 ">
      <Image className="img" src={src} preview={false} />
      <div className="textBox">
        <InstagramOutlined className="fs-1" />
      </div>
    </div>
  );
}

export default function Instagram1() {
  const customers = [
    { src: "/Assets/image/t1.jpg" },
    { src: "/Assets/image/t2.jpg" },
    { src: "/Assets/image/t3.jpg" },
    { src: "/Assets/image/t4.jpg" }
  ];

  return (
    <>
    <Title level={2}  >Our Notes Providers</Title>
    <Row gutter={[16, 32]} justify="center" className="container py-md-5 text-center">
      {customers.map((customer, index) => (
        <Col key={index} xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
          <Instagram {...customer} />
        </Col>
      ))}
    </Row>
      </>
  );
}
