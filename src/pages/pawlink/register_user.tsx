import "./styles.css";

import {
    AntdLayout,
    Button,
    Card,
    Checkbox,
    Col,
    Form,
    Image,
    Input,
    Row,
    Typography
} from "@pankod/refine-antd";

const { Text } = Typography;

export interface IRegistaterForm {
    email: string;
    password: string;
    confirmPassword: boolean;
    phonenumber: string;
    role: string;
    companyName: string;
    companyPhonenumber: string;
    companyType: string;
}

export const RegisterPage: React.FC = () => {
    const [form] = Form.useForm<IRegistaterForm>();

    const CardTitle = (
        <div className="title">
            <div className="imageContainer">
                <Image src="./logo_p.png" preview={false} height={80}/>
            </div>
        </div>
    );

    return (
        <AntdLayout className="layout" id="register-user">
            <Row
                justify="center"
                align="middle"
                style={{
                    height: "100vh",
                }}
            >
                <Col lg={15} xs={20}>
                    <div className="container">
                        <Form<IRegistaterForm>
                                layout="vertical"
                                form={form}
                                onFinish={(values) => { return values }}
                                initialValues={{ remember: false }}
                                size="large"
                                wrapperCol={{span: 18}}
                            >
                            <Card
                                bordered={false}
                                title={CardTitle} headStyle={{ borderBottom: 0 }}
                                // bodyStyle={{ 'height': "75vh" }}
                            >
                                <Row>
                                    <Col lg={{ span: 13, offset: 8}} xs={{ span: 20, offset: 4 }}>
                                        <Form.Item
                                            name="email" label="Email"
                                            rules={[{ required: true, type: 'email' }]}
                                        >
                                            <Input size="large" placeholder="Pawling@gmail.com" />
                                        </Form.Item>
                                    </Col>
                                    <Col lg={{ span: 13, offset: 8}} xs={{ span: 20, offset: 4 }}>
                                        <Form.Item
                                            name="password" label="Password"
                                            rules={[{ required: true }]}
                                        >
                                            <Input style={{marginBottom: "8px"}} type="password" placeholder="กรอกรหัสผ่านอย่างน้อย 8 ตัวอักษร" size="large"/>
                                            <Text style={{ color: "#bfbfbf"}}> รหัสผ่านควรมีทั้งตัวอักษร ตัวเลข และสัญลักษณ์ผสมกัน</Text>
                                        </Form.Item>
                                    </Col>
                                    <Col lg={{ span: 13, offset: 8}} xs={{ span: 20, offset: 4 }}>
                                        <Form.Item
                                            name="confirmPassword" label="Confirm Password"
                                            rules={[{ required: true }]}
                                        >
                                            <Input type="confirmPassword" placeholder="●●●●●●●●" size="large" />
                                        </Form.Item>
                                    </Col>
                                    <Col lg={{ span: 13, offset: 8}} xs={{ span: 20, offset: 4 }}>
                                        <Form.Item
                                            name="phoneNumber" label="Phone Number"
                                            rules={[{ required: true }]}
                                        >
                                            <Input size="large" placeholder="098XXXXXXX" />
                                        </Form.Item>
                                    </Col>
                                    <Col lg={{ span: 13, offset: 8}} xs={{ span: 20, offset: 4 }} >
                                        <Form.Item 
                                            name="agreement"
                                            valuePropName="checked"
                                            rules={[
                                                {
                                                    validator: (_, value) =>
                                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                                },
                                            ]}
                                            style={{marginTop: "15%"}}
                                        >
                                            <Checkbox> คุณได้อ่านและยอมรับ <a href="">เงื่อนไขการใช้บริการ </a> และ <a href="">นโยบายส่วนตัว</a></Checkbox>
                                        </Form.Item>
                                        <Form.Item >
                                            <Button className="regis-btn" type="primary" size="large" htmlType="submit"> เริ่มต้นใช้งาน </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                        </Form>
                    </div>
                </Col>
            </Row>
        </AntdLayout>
    );
};
