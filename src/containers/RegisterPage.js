import { StyledRegisterPage } from './styled/register.styled'
import { Button, Col, Form, Input, Row, notification } from 'antd'
import { userAPI } from '../../src/services/userServices'
import { useRouter } from 'next/router'
import { PATH } from '../../src/constants/path'

const Register = props => {
  const router = useRouter()

  const Register = async payload => {
    try {
      const result = await userAPI.REGISTER(payload)
      notification.success({
        message: result.data.data,
        placement: 'top',
        duration: 1.5
      })

      setTimeout(() => {
        router.push(PATH.LOGIN)
      }, 1500)
    } catch (error) {
      notification.error({
        message: error.error.message,
        placement: 'top',
        duration: 1.5
      })
    }
  }

  return (
    <>
      <StyledRegisterPage>
        <Row align="middle" style={{ height: '100%' }}>
          <Col className="main-bg" xl={16}>
            <img src="/img/bg.jpg" style={{ height: '500px' }} />
          </Col>
          <Col className="main-login" xl={8}>
            <img src="/img/Logo.png" />

            <Form name="basic" onFinish={values => Register(values)}>
              <Form.Item
                name="username"
                className="input"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input size="large" placeholder="Username" style={{ borderRadius: '10px' }} />
              </Form.Item>

              <Form.Item
                name="email"
                className="input"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  {
                    type: 'email',
                    message: 'Invalid email format!'
                  }
                ]}
              >
                <Input size="large" placeholder="Email" style={{ borderRadius: '10px' }} />
              </Form.Item>

              <Form.Item
                name="password"
                className="input"
                rules={[
                  { required: true, message: 'Please input your password! ' },
                  () => ({
                    validator(_, value) {
                      const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}$/
                      const testResult = regex.test(value)

                      if (!value) {
                        return Promise.resolve()
                      }

                      if (!testResult) {
                        return Promise.reject(
                          new Error('Your password must be 6 letter, including [A-Z][a-z] and digit letter!')
                        )
                      } else {
                        return Promise.resolve()
                      }
                    }
                  })
                ]}
              >
                <Input.Password size="large" placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                  SIGN UP
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </StyledRegisterPage>
    </>
  )
}

export default Register
