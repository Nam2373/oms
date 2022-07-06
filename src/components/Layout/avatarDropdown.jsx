import { Dropdown, Menu, notification } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { userAPI } from '../../services/userServices'
import { PATH } from '../../constants/path'
import Link from 'next/link'
function AvatarDropdown({ children }) {
  const handleLogout = async e => {
    try {
      const result = await userAPI.LOGOUT()
      notification.success({
        message: result?.data?.data,
        placement: 'top',
        duration: 1.5
      })
      localStorage.clear()

      setTimeout(() => {
        window.location.href = `${PATH.LOGIN}`
      }, 1500)
    } catch (error) {}
  }

  const menu = (
    <Menu>
      <Menu.Item key={1} style={{ padding: '8px 25px' }}>
        <Link href={PATH.PROFILE}>
          <a>
            <UserOutlined style={{ marginRight: '10px' }} />
            User profile
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={2} style={{ padding: '8px 25px' }} onClick={handleLogout}>
        <LogoutOutlined style={{ marginRight: '10px' }} />
        Log out
      </Menu.Item>
    </Menu>
  )
  return (
    <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
      {children}
    </Dropdown>
  )
}

export default AvatarDropdown
