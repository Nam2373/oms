import { Button, Col, Form, Input, message, notification, Row, Select, Space } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect, useState } from 'react'
import { userAPI } from '../services/userServices'
import { PATH } from '../constants/path'
import { StyledDivUserProfile } from './styled/profile.styled'

const ProfilePage = props => {
  const router = useRouter()
  const [form] = Form.useForm()

  useEffect(() => {
    const renderGender = {
      0: 'Male',
      1: 'Female'
    }

    const getMe = async () => {
      try {
        const result = await userAPI.GET_ME()
        form.setFieldsValue({ ...result.data.data, gender: renderGender[result.data.data.gender] })
      } catch (error) {}
    }

    getMe()
  }, [form])

  const convertFormData = values => {
    const formData = new FormData()
    Object.keys(values).forEach(key => values[key] && formData.append(key, values[key]))
    return formData
  }

  const handleSubmit = async payload => {
    const formData = convertFormData(payload)

    try {
      const result = await userAPI.UPDATE_ME(formData)

      notification.success({
        message: result?.data?.data,
        placement: 'top',
        duration: 1.5
      })

      setTimeout(() => {
        router.push(PATH.PROFILE)
      }, 1500)
    } catch (error) {}
  }

  return (
    <StyledDivUserProfile>
      <h2 className="center my-4">EDIT PROFILE</h2>
      <hr />
      <Row gutter={[16, { xs: 16, md: 16, lg: 24 }]} justify="center">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Col span={24}>
            <Form.Item name="username" rules={[{ required: true, message: 'Do not emty!' }]} label="Username">
              <Input size="large" placeholder="Enter your username" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[
                { required: true, message: 'Do not empty!' },
                { min: 10, message: '10 characters minimum' }
              ]}
            >
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
            <Form.Item name="age" label="Age">
              <Input
                size="large"
                placeholder="Enter your age"
                onKeyDown={event => {
                  if (!/[0-9]/.test(event.key) && event.key !== 'Backspace') {
                    event.preventDefault()
                  }
                }}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="gender" label="Gender">
              <Select size="large" placeholder="Select gender">
                <Select.Option value={'Male'}>Male</Select.Option>
                <Select.Option value={'Female'}>Female</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="ward" rules={[{ min: 3, message: '3 characters minimum' }]} label="Ward">
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
