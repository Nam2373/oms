import { Button, Col, Row, Space } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect, useState } from 'react'
import { userAPI } from '../services/userServices'
import { StyledDivUserProfile } from './styled/profile.styled'
import { PATH } from '../constants/path'

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

  const renderGender = {
    0: 'Male',
    1: 'Female'
  }

  return (
    <StyledDivUserProfile>
      <h2 className="center my-4">USER PROFILE</h2>
      <hr />
      <Row gutter={[16, { xs: 16, md: 16, lg: 24 }]}>
        <Col span={24}>
          <div className="profile-item">
            <div className="profile-item-label">Email</div>
            <div className="profile-item-content">{data?.email}</div>
          </div>
        </Col>
        <Col span={24}>
          <div className="profile-item">
            <div className="profile-item-label">Username</div>
            <div className="profile-item-content">{data?.username}</div>
          </div>
        </Col>
        <Col span={24}>
          <div className="profile-item">
            <div className="profile-item-label">Phone</div>
            <div className="profile-item-content">{data?.phone ?? <span>Not updated</span>}</div>
          </div>
        </Col>
        <Col span={24}>
          <div className="profile-item">
            <div className="profile-item-label">Age</div>
            <div className="profile-item-content">{data?.age ?? <span>Not updated</span>}</div>
          </div>
        </Col>
        <Col span={24}>
          <div className="profile-item">
            <div className="profile-item-label">Gender</div>
            <div className="profile-item-content">{renderGender[data?.gender] ?? <span>Not updated</span>}</div>
          </div>
        </Col>
        <Col span={24}>
          <div className="profile-item">
            <div className="profile-item-label">Address</div>
            <div className="profile-item-content">{data?.address ?? <span>Not updated</span>}</div>
          </div>
        </Col>
        <Col span={24}>
          <div className="profile-item">
            <div className="profile-item-label">Ward</div>
            <div className="profile-item-content">{data?.ward ?? <span>Not updated</span>}</div>
          </div>
        </Col>

        <Col span={24} className="center">
          <Space>
            <Button className="update-button" type="primary" onClick={() => router.back()}>
              Back
            </Button>

            <Button
              className="update-button"
              type="primary"
              onClick={() => (window.location.href = `${PATH.PROFILE}${PATH.EDIT}`)}
            >
              Update
            </Button>
          </Space>
        </Col>
      </Row>
    </StyledDivUserProfile>
  )
}

export default ProfilePage
