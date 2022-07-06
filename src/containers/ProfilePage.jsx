import { Button, Col, Row, Space } from 'antd'
import React from 'react'
import { useEffect, useState } from 'react'
import { userAPI } from '../services/userServices'
import { StyledDivUserProfile } from './styled/profile.styled'

const ProfilePage = props => {
  const [data, setData] = useState({})

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
      <h2 className="center my-4">USER PROFILE</h2>
      <hr />
      <Row gutter={[16, { xs: 16, md: 16, lg: 24 }]}>
        <Col span={24}>
          <div className="profile-item">
            <div className="profile-item-label">Username</div>
            <div className="profile-item-content">{data?.username}</div>
          </div>
        </Col>
        <Col span={24}>
          <div className="profile-item">
            <div className="profile-item-label">Email</div>
            <div className="profile-item-content">{data?.email}</div>
          </div>
        </Col>
        <Col span={24}>
          <div className="profile-item">
            <div className="profile-item-label">Password</div>
            <div className="profile-item-content">
              <Space style={{ width: '100%', justifyContent: 'space-between' }}>**************</Space>
            </div>
          </div>
        </Col>
        <Col span={24}>
          <div className="profile-item">
            <div className="profile-item-label">Phone</div>
            <div className="profile-item-content">{data?.phone ?? 'Not updated'}</div>
          </div>
        </Col>
        <Col span={24}>
          <div className="profile-item">
            <div className="profile-item-label">Age</div>
            <div className="profile-item-content">{data?.age ?? 'Not updated'}</div>
          </div>
        </Col>
        <Col span={24}>
          <div className="profile-item">
            <div className="profile-item-label">Gender</div>
            <div className="profile-item-content">{data?.gender ?? 'Not updated'}</div>
          </div>
        </Col>
        <Col span={24}>
          <div className="profile-item">
            <div className="profile-item-label">Ward</div>
            <div className="profile-item-content">{data?.phone ?? 'Not updated'}</div>
          </div>
        </Col>

        <Col span={24} className="center">
          <Button className="update-button" type="primary">
            Update
          </Button>
        </Col>
      </Row>
    </StyledDivUserProfile>
  )
}

export default ProfilePage