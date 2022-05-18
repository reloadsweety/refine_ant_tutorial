import "./styles.css";

import {
    AntdLayout,
    Button,
    Card,
    Checkbox,
    Col,
    Divider,
    Form,
    Image,
    Input,
    Radio,
    Row,
    Space,
    Typography
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-react-router-v6";

const { Text, Title } = Typography;
const { Link } = routerProvider;

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
                <Image src="./logo_p.png" preview={false} height={90}/>
            </div>
        </div>
    );

    return (
        <AntdLayout className="layout register">
            <Row
                justify="center"
                align="middle"
            >
                <Col xs={23}>
                    <div className="container">
                        <Form<IRegistaterForm>
                                layout="vertical"
                                form={form}
                                onFinish={(values) => { return values }}
                                initialValues={{ remember: false }}
                                size="large"
                            >
                            <Card
                                bordered={false}
                                title={CardTitle} headStyle={{ borderBottom: 0 }}
                                bodyStyle={{alignContent: "center", padding: "auto"}}
                                actions={[
                                    <div key="actions">
                                        <Button className="regis-btn" type="primary" size="large" htmlType="submit"> เริ่มต้นใช้งาน </Button>
                                    </div>
                                ]}
                            >
                                <Row gutter={16}>
                                    <Col lg={{ span: 9, offset: 8}} xs={{ span: 20 }}>
                                        <Form.Item
                                            name="email" label="Email"
                                            rules={[{ required: true, type: 'email' }]}
                                        >
                                            <Input size="large" placeholder="Pawling@gmail.com" />
                                        </Form.Item>
                                    </Col>
                                    <Col lg={{ span: 9, offset: 8}} xs={{ span: 20 }}>
                                        <Form.Item
                                            name="password" label="Password"
                                            rules={[{ required: true }]}
                                        >
                                            <Input style={{marginBottom: "8px"}} type="password" placeholder="กรอกรหัสผ่านอย่างน้อย 8 ตัวอักษร" size="large"/>
                                            <Text style={{ color: "#bfbfbf"}}> รหัสผ่านควรมีทั้งตัวอักษร ตัวเลข และสัญลักษณ์ผสมกัน</Text>
                                        </Form.Item>
                                    </Col>
                                    <Col lg={{ span: 9, offset: 8}} xs={{ span: 20 }}>
                                        <Form.Item
                                            name="confirmPassword" label="Confirm Password"
                                            rules={[{ required: true }]}
                                        >
                                            <Input type="confirmPassword" placeholder="●●●●●●●●" size="large" />
                                        </Form.Item>
                                    </Col>
                                    <Col lg={{ span: 9, offset: 8}} xs={{ span: 20 }}>
                                        <Form.Item
                                            name="phoneNumber" label="Phone Number"
                                            rules={[{ required: true }]}
                                        >
                                            <Input size="large" placeholder="Phone Number" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}>
                                        <Divider orientationMargin={0}
                                            orientation="left" plain style={{ padding: "0 5% 0 5%" }}
                                        >
                                            <Title level={5}>ระบุหน้าที่ของคุณ</Title>
                                        </Divider>
                                        <Col lg={{ span: 9, offset: 5}} xs={{ span: 20 }}>
                                            <Form.Item
                                                name="role"
                                                rules={[{ required: true }]}
                                                style={{ textAlign: 'center'}}
                                            >
                                                <Radio.Group size="large" buttonStyle="solid">
                                                    <Space size="large">
                                                        <Radio.Button value="a">Admin Panel</Radio.Button>
                                                        <Radio.Button value="b">เจ้าของธุรกิจ</Radio.Button>
                                                    </Space>
                                                </Radio.Group>
                                            </Form.Item>
                                        </Col>
                                    </Col>
                                    <Col span={24}>
                                        <Divider orientationMargin={0}
                                            orientation="left" plain style={{ padding: "0 5% 0 5%" }}
                                        >
                                            <Title level={5}>ข้อมูลธุรกิจ</Title>
                                        </Divider>
                                        <Row>
                                            <Col lg={{ span: 18, offset: 4}} xs={{ span: 20 }}>
                                                <Row gutter={[50, 0]}>
                                                    <Col span={10}>
                                                        <Form.Item
                                                            name="companyName" label="ชื่อธุรกิจ"
                                                            rules={[{ required: true }]}
                                                            style={{ textAlign: 'center'}}
                                                        >
                                                            <Input size="large"/>
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={10}>
                                                        <Form.Item
                                                            name="companyPhonenumber" label="เบอร์ติดต่อธุรกิจ"
                                                            rules={[{ required: true }]}
                                                            style={{ textAlign: 'center'}}
                                                        >
                                                            <Input size="large"/>
                                                        </Form.Item>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col lg={{ span: 18, offset: 4}} xs={{ span: 20 }}>
                                                <Form.Item
                                                    name="companyType" label="ลักษณะธุรกิจ"
                                                    rules={[{ required: true }]}
                                                >
                                                    <Radio.Group size="large" buttonStyle="solid">
                                                        <Space size={30}>
                                                            <Radio.Button value="a" >Hospital/Clinic</Radio.Button>
                                                            <Radio.Button value="b">PetShop</Radio.Button>
                                                            <Radio.Button value="c">Grooming</Radio.Button>
                                                            <Radio.Button value="d">Hotel</Radio.Button>
                                                        </Space>
                                                    </Radio.Group>
                                                </Form.Item>
                                            </Col>
                                        </Row>
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
