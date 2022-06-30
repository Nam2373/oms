import { StyledRegisterPage } from "./styled/login.styled";
import { Button, Col, Form, Input, Row, message, notification } from "antd";
import { userAPI } from "../../src/services/userServices";
import { useRouter } from "next/router";
import { PATH } from '../../src/constants/path'

const Login = (props) => {
    const router = useRouter();
    const Login = async (payload) => {
        try {
            const result = await userAPI.LOGIN(payload);
            notification.success({
                message: 'Login success!',
                placement: 'top',
                duration: 1.5
            })

            localStorage.setItem("accessToken", result?.data?.data?.accessToken);
            localStorage.setItem("refreshToken", result?.data?.data?.refreshToken);

            setTimeout(() => {
                router.push(PATH.HOME)
            }, 1500)

        } catch (error) {
            notification.error({
                message: error?.error?.message,
                placement: 'top',
                duration: 1.5
            })
        }
    };

    return (
        <>
            <StyledRegisterPage>
                <Row align="middle" style={{ height: "100%" }}>
                    <Col className="main-bg" xl={16}>
                        <img src="/img/bg.jpg" style={{ height: "500px" }} />
                    </Col>
                    <Col className="main-login" xl={8}>
                        <img src="/img/Logo.png" />

                        <Form name="basic" onFinish={(values) => Login(values)}>
                            <Form.Item
                                name="email"
                                className="input"
                                rules={[
                                    { required: true, message: "Please input your username!" },
                                    {
                                        type: "email",
                                        message: "Invalid email format!",
                                    },
                                ]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Email"
                                    style={{ borderRadius: "10px" }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                className="input"
                                rules={[
                                    { required: true, message: "Please input your password! " },
                                ]}
                            >
                                <Input.Password size="large" placeholder="Password" />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" block size="large">
                                    SIGN IN
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </StyledRegisterPage>
        </>
    );
};

export default Login;
