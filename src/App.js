import { Layout, Row, Col } from "antd";
import logo from "./assets/billhop-logo.svg";
import "./App.less";
import HeroLayout from "./components/heroLayout";
import Solutions from "./components/solutions";
import Jokes from "./components/jokes";
const { Header, Content } = Layout;

function App() {
  return (
    <Layout
      style={{ minHeight: "100vh", maxWidth: "1300px", margin: "0 auto" }}
    >
      <Header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </Header>

      <HeroLayout />

      <div className="section">
        <Solutions />
      </div>
      <div style={{ backgroundColor: "rgb(236 236 236)" }} className="section">
        <Jokes />
      </div>

      <Row justify="center">
        <Col span={20}>
          <Content className="App">
            My empty canvas is not empty anymore 🧑‍🎨
          </Content>
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
