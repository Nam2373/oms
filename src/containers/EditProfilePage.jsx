import { Button, Col, Form, Input, Row, Space } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect, useState } from 'react'
import { userAPI } from '../services/userServices'
import { StyledDivUserProfile } from './styled/profile.styled'

const ProfilePage = props => {
  const [data, setData] = useState({})
  const router = useRouter()

  useEffect(() => {
    const getMe = async () => {
      try {
        const result = await userAPI.GET_ME()
        setData(result.data.data)
      } catch (error) {}
    }

    getMe()
  }, [])

  return (
    <StyledDivUserProfile>
      <h2 className="center my-4">EDIT PROFILE</h2>
      <hr />
      <Row gutter={[16, { xs: 16, md: 16, lg: 24 }]} justify="center">
        <Form layout="vertical" onFinish={value => console.log(value)}>
          <Col span={24}>
            <Form.Item name="username" rules={[{ required: true, message: 'Do not emty!' }]} label="Username">
              <Input size="large" placeholder="Enter your username" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="phone" rules={[{ required: true, message: 'Do not emty!' }]} label="Phone">
              <Input
                size="large"
                placeholder="Enter your phone"
                onKeyDown={event => {
                  if (!/[0-9]/.test(event.key) && event.key !== 'Backspace') {
                    event.preventDefault()
                  }
                }}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="age" rules={[{ required: true, message: 'Do not emty!' }]} label="Age">
              <Input size="large" placeholder="Enter your age" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="gender" rules={[{ required: true, message: 'Do not emty!' }]} label="Gender">
              <Input size="large" placeholder="Enter your gender" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="address" rules={[{ required: true, message: 'Do not emty!' }]} label="Address">
              <Input size="large" placeholder="Enter your address" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="ward" rules={[{ required: true, message: 'Do not emty!' }]} label="Ward">
              <Input size="large" placeholder="Enter your ward" />
            </Form.Item>
          </Col>

          <Col span={24} className="center">
            <Form.Item>
              <Space>
                <Button className="update-button" type="primary" onClick={() => router.back()}>
                  Back
                </Button>

                <Button className="update-button" type="primary" htmlType="submit">
                  Save
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Form>
      </Row>
    </StyledDivUserProfile>
  )
}

export default ProfilePage
