import { StyledRegisterPage } from "./styled/register.styled";
import { Button, Col, Form, Input, Row, message } from "antd";
import { userAPI } from "../../src/services/userServices";
import { useRouter } from "next/router";

const Register = (props) => {
    const router = useRouter();
    const Register = async (payload) => {
        try {
            const data = await userAPI.REGISTER;

            message.success({
                content: "Register success!",
            });

            setTimeout(() => {
                router.push("/login");
            }, 2000);
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

                            <Form.Item
                                name="confirmPassword"
                                className="input"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your confirm password!",
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (
                                                !value ||
                                                (value && getFieldValue("password") === value)
                                            ) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(
                                                new Error("Confirm password do not match!")
                                            );
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password size="large" placeholder="Confirm password" />
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
