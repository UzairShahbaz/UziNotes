import { Button, Col, Image, Row, Typography } from 'antd'
import React from 'react'
import { ShoppingOutlined } from '@ant-design/icons';

const { Title } = Typography
export default function Hero() {
  return (
    <>
      <Row gutter={[0, 16]} style={{ backgroundColor: '#F0FAFF' }}  className=' container d-flex align-items-center min-vh-100'>
        <Col xs={24} lg={12} md={12} className='d-flex align-items-center justify-content-center' >
          <div  >
            {/* <Title className='text-muted' level={4}>CLASSIC EXCLUSIVE</Title> */}

            <h1 className='ps-5 fw-bolder fs-1 mt-0 '>UziNotes</h1>
            <p className='ps-5 fw-200'><i>UziNotes is a user-friendly note-taking application designed to enhance your study experience.
               With UziNotes, students can easily create, manage, and share notes in real-time, 
               facilitating collaboration and effective learning. The app features intuitive user authentication,
                allowing you to personalize your experience with profile pictures and a seamless interface. 
                You can organize your notes by subject, make comments on previously added notes,
                 and retrieve your information effortlessly.
                   UziNotes provides the perfect platform to keep your ideas organized and accessible</i></p>
            <Button type='primary' className='ms-5 px-5 fs-5 py-4 rounded-pill '> Login to add notes!! <ShoppingOutlined /></Button>
          </div>

        </Col>
        <Col xs={24} lg={12} md={12} className='container d-flex align-items-center justify-content-center order-first order-lg-last mt-5' >

          <div style={{ width: "70%" }}>

            <Image src='/Assets/image/hero.png' preview={false} />
          </div>


        </Col>



      </Row>
    </>
  )
}
