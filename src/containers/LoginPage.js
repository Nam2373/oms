import { StyledRegisterPage } from "./styled/login.styled";
import { Button, Col, Form, Input, Row, message } from "antd";
import { userAPI } from "../../src/services/userServices";
import { useRouter } from "next/router";

const Login = (props) => {
    const router = useRouter();
    const Login = async (payload) => {
        try {
            const result = await userAPI.LOGIN;
            console.log(result);
            message.success({
                content: "Login success!",
            });

            localStorage.setItem("accessToken", result?.data?.accessToken);
            localStorage.setItem("refreshToken", result?.data?.refreshToken);
        } catch (error) { }
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
                                name="username"
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
                                    placeholder="Username"
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
