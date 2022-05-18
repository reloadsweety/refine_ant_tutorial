import "@pankod/refine-antd/dist/styles.min.css";

import {
    Footer,
    Header,
    Layout,
    OffLayoutArea,
    Sider,
    Title
} from "components/layout";

import {
    ErrorComponent,
    notificationProvider,
    ReadyPage
} from "@pankod/refine-antd";
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

function App() {
  return (
    <Refine
      notificationProvider={notificationProvider}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      routerProvider={routerProvider}
      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
      resources={[{
        name: "posts"
      }]}
      Title={Title}
      Header={Header}
      Sider={Sider}
      Footer={Footer}
      Layout={Layout}
      OffLayoutArea={OffLayoutArea}
    />
  );
}

export default App;