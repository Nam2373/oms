import { Button, Input, Layout, Menu } from "antd";
import { StyledHeader, Container } from "./mainLayout.styled";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
import CartIcon from "../../../public/icon/cart.icon";
import NotificationIcon from "../../../public/icon/notification.icon";
const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <StyledHeader>
        <Container>
          <div className="header-content">
            <div className="logo" />
            <div className="logo-title" />
            <div className="search-box">
              <Input
                className="search-box-input"
                placeholder="Gongcha giảm 15%...  "
              />
              <Button
                className="search-box-button"
                type="primary"
                icon={<SearchOutlined />}
              >
                Tìm kiếm
              </Button>
            </div>
            <div className="options">
              <div className="op-item">
                <Link href="/">
                  <a>Shop</a>
                </Link>
              </div>
              <div className="op-item">
                <Link href="/">
                  <a>About us</a>
                </Link>
              </div>
              <div className="op-item">
                <Link href="/">
                  <a>Blog</a>
                </Link>
              </div>
              <div className="op-item">
                <Link href="/">
                  <a>Contact Us</a>
                </Link>
              </div>
            </div>
            <div className="info">
              <div className="info-item">
                <CartIcon />
              </div>
              <div className="info-item">
                <NotificationIcon />
              </div>
              <div className="info-item">
                <div className="avatar"></div>
              </div>
            </div>
          </div>
        </Container>
      </StyledHeader>

      <Content style={{ background: "white" }}>
        <Container>
          <div className="site-layout-content">{children}</div>
        </Container>
      </Content>
    </Layout>
  );
};

export default MainLayout;
