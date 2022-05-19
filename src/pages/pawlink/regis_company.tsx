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

export interface IRegistaterCompanyForm {
    role: string;
    companyName: string;
    companyPhonenumber: string;
    companyType: string;
}

export const RegisterCompany: React.FC = () => {
    const [form] = Form.useForm<IRegistaterCompanyForm>();

    const CardTitle = (
        <div className="title">
            <div className="imageContainer">
                <Image src="./logo_p.png" preview={false} height={80}/>
            </div>
        </div>
    );

    const columnLayout = {
        lg: { span: 17, offset: 4 },
        xs: { span: 20, offset: 4 }
    }

    return (
        <AntdLayout className="layout" id="register-company">
            <Row
                justify="center"
                align="middle"
                style={{
                    height: "100vh",
                }}
            >
                <Col lg={15} xs={20}>
                    <div className="container">
                        <Form<IRegistaterCompanyForm>
                            layout="vertical"
                            form={form}
                            onFinish={(values) => { return values }}
                            initialValues={{ remember: false }}
                            size="large"
                            // wrapperCol={{span: 18}}
                            // labelCol={{ span: 10}}
                        >
                            <Card
                                bordered={false}
                                title={CardTitle} headStyle={{ borderBottom: 0 }}
                                // bodyStyle={{ 'height': "80vh" }}
                            >
                                <Row>
                                    <Col {...columnLayout} >
                                        <Form.Item
                                            name="role"
                                            rules={[{ required: true }]}
                                            style={{ textAlign: 'center'}}
                                        >
                                            <Divider orientationMargin={0}
                                                orientation="left" plain 
                                            >
                                            <Title level={5}>ระบุหน้าที่ของคุณ</Title>
                                        </Divider>
                                            <Radio.Group size="large" buttonStyle="solid">
                                                <Space size="large">
                                                    <Radio.Button value="a">Admin Panel</Radio.Button>
                                                    <Radio.Button value="b">เจ้าของธุรกิจ</Radio.Button>
                                                </Space>
                                            </Radio.Group>
                                        </Form.Item>
                                    </Col>
                                    <Col {...columnLayout}>
                                        <Divider orientationMargin={0}
                                            orientation="left" plain 
                                        >
                                            <Title level={5}>ข้อมูลธุรกิจ</Title>
                                        </Divider>
                                        <Row id="company-detail">
                                            <Col lg={{ span: 22, offset: 2}} xs={{ span: 20 }}>
                                                <Row gutter={[50, 0]}>
                                                    <Col  lg={{ span: 11 }} xs={{ span: 20 }}>
                                                        <Form.Item
                                                            name="companyName" label="ชื่อธุรกิจ"
                                                            rules={[{ required: true }]}
                                                            style={{ textAlign: 'center'}}
                                                        >
                                                            <Input size="large"/>
                                                        </Form.Item>
                                                    </Col>
                                                    <Col  lg={{ span: 11 }} xs={{ span: 20 }}>
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
                                            <Col lg={{ span: 22, offset: 2}} md={{ span: 20 }}>
                                                <Form.Item
                                                    name="companyType" label="ลักษณะธุรกิจ"
                                                    rules={[{ required: true }]}
                                                >
                                                    <Radio.Group size="large" buttonStyle="solid" id="company-type-radio">
                                                        <Radio.Button value="a">Hospital/Clinic</Radio.Button>
                                                        <Radio.Button value="b">PetShop</Radio.Button>
                                                        <Radio.Button value="c">Grooming</Radio.Button>
                                                        <Radio.Button value="d">Hotel</Radio.Button>
                                                    </Radio.Group>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col {...columnLayout} >
                                        <Form.Item style={{marginTop: "15%", textAlign: "center"}}>
                                            <Button className="regis-company-btn" type="primary" size="large" htmlType="submit"> เริ่มต้นธรุกิจ </Button>
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
