import "./styles.css";

import React from "react";

import {
    AntdLayout,
    Button,
    Card,
    Col,
    Form,
    Image,
    Input,
    Row,
    Space,
    Switch,
    Typography
} from "@pankod/refine-antd";
import { useLogin } from "@pankod/refine-core";

const { Text } = Typography;

export interface ILoginForm {
    email: string;
    password: string;
    remember: boolean;
}

export const PawlinkLogin: React.FC = () => {
    const [form] = Form.useForm<ILoginForm>();

    const { mutate: login } = useLogin<ILoginForm>();

    const CardTitle = (
        <div className="title">
            <div className="imageContainer">
                <Image src="./logo_p.png" preview={false} height={110}/>
            </div>
            {/* <Text type="secondary">Company Name</Text> */}
        </div>
    );

    return (
        <AntdLayout className="layout login">
            <Row
                justify="center"
                align="middle"
                style={{
                    height: "50vh",
                }}
            >
                <Col xs={23}>
                    <div className="container">
                        <Form<ILoginForm>
                                layout="horizontal"
                                form={form}
                                onFinish={(values) => { login(values); }}
                                requiredMark={false}
                                initialValues={{ remember: false }}
                                labelCol={{ span: 9 }}
                                wrapperCol={{ span: 8 }}
                                size={'large'}
                            >
                            <Card
                                bordered={false}
                                title={CardTitle} headStyle={{ borderBottom: 0 }}
                                bodyStyle={{'height': "70vh"}}
                                actions={[
                                    <div key="actions">
                                        <Button type="primary" size="large"> Cancel </Button>,
                                        <Button type="primary" size="large" htmlType="submit"> Sign in</Button>
                                    </div>
                                ]}
                            >

                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[{ required: true }]}
                                >
                                    <Input size="large" placeholder="Email" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[{ required: true }]}
                                >
                                    <Input type="password" placeholder="●●●●●●●●" size="large" />
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    wrapperCol={{ offset: 9, span: 16 }}
                                >
                                    <Row gutter={16}>
                                        <Col span={7} >
                                        <Space>
                                            <Switch size="small"/>
                                            <Text style={{fontSize: 12}}>Remember me</Text>
                                        </Space>
                                        </Col>
                                        <Col span={6} style={{textAlign: 'right'}}>
                                            <Text style={{ fontSize: 12 }}> Don’t have an account?{" "}
                                                <a href="#" style={{ fontWeight: "bold" }}> Sign up </a>
                                            </Text>
                                        </Col>
                                    </Row>
                                </Form.Item>
                            </Card>
                        </Form>
                    </div>
                </Col>
            </Row>
        </AntdLayout>
    );
};
