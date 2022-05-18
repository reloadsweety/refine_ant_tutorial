import "@pankod/refine-antd/dist/styles.min.css";
import "styles/antd.less";

import {
    PawlinkLogin as PawlinkLoginPage,
    RegisterCompany,
    RegisterPage
} from "pages/pawlink";

import {
    ErrorComponent,
    Layout,
    LoginPage,
    notificationProvider,
    ReadyPage
} from "@pankod/refine-antd";
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

import { authProvider } from "./auth-provider";
import {
    DashboardPage,
    PostCreate,
    PostEdit,
    PostList,
    PostShow
} from "./pages";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    // import axiosInstance from "./auth-provider"
    // dataProvider={dataProvider(API_URL, axiosInstance)}
    // LoginPage={LoginPage}

    return (
        <Refine
            routerProvider={{
                ...routerProvider,
                routes: [
                    {
                        element: <DashboardPage />,
                        path: "/dashboard",
                        layout: true
                    },
                    {
                        element: <PawlinkLoginPage />,
                        path: "/pawlink-login",
                    },
                    {
                        element: <RegisterPage />,
                        path: "/pawlink-register",
                    },
                    {
                        element: <RegisterCompany />,
                        path: "/pawlink-register-company",
                    },
                ],
            }}
            dataProvider={dataProvider(API_URL)}
            notificationProvider={notificationProvider}
            catchAll={<ErrorComponent />}
            resources={[{
                name: "posts",
                list: PostList,
                show: PostShow,
                edit: PostEdit,
                create: PostCreate,
                canDelete: true,
            }, {
                name: "custom",
            }]}

            Layout={Layout}
            ReadyPage={ReadyPage}

    
            authProvider={authProvider}
            // LoginPage={CustomLoginPage}
            LoginPage={LoginPage}
            DashboardPage={DashboardPage}
        />
    );
};

export default App;