import { StyledRegisterPage } from "./styled/register.styled";
import { Button, Col, Form, Input, Row, message, Alert } from "antd";
import { userAPI } from "../../src/services/userServices";
import { useRouter } from "next/router";

const Register = (props) => {
    const router = useRouter();

    const Register = async (payload) => {
        try {
            const result = await userAPI.REGISTER(payload)
            message.success({
                content: result.data.data
            })
            setTimeout(() => {
                router.push('/login')
            }, 1500)
        } catch (error) {
            message.error({ content: error.error.message })
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

                        <Form name="basic" onFinish={(values) => Register(values)}>
                            <Form.Item
                                name="username"
                                className="input"
                                rules={[
                                    { required: true, message: "Please input your username!" },
                                ]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Username"
                                    style={{ borderRadius: "10px" }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                className="input"
                                rules={[
                                    { required: true, message: "Please input your email!" },
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
                                    SIGN UP
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </StyledRegisterPage>
        </>
    );
};

export default Register;
