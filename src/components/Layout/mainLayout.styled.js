import { Layout, Menu } from "antd";
import styled from "styled-components";

const { Header, Content, Footer } = Layout;

export const StyledHeader = styled(Header)`
  font-family: "Montserrat";
  padding: 0;
  height: fit-content;
  background: #ffdcc5;
  padding: 39px 0;

  .header-content {
    display: flex;
    align-items: center;
    gap: 12px;

    .logo {
      height: 57px;
      width: 60px;
      background: url("/img/logo_only.png");
    }

    .logo-title {
      height: 30px;
      width: 195px;
      background-color: red;
      background: url("/img/logo_title.png") no-repeat;
    }

    .search-box {
      display: flex;
      width: 608px;
      align-items: center;
      position: relative;
    }

    .search-box-input {
      border-radius: 8px;
      padding: 10px 16px;

      &::placeholder {
        font-size: 14px;
        color: #333333;
        font-weight: 500;
      }
    }

    .search-box-button {
      background: #ff6600;
      border: unset;
      border-radius: 4px;
      position: absolute;
      transform: translateX(497px);
      padding: 4px 9px;
    }

    .options {
      display: flex;
      gap: 38px;
      margin-left: 36px;
      font-weight: 700;

      .op-item a {
        color: #ff6600;
        flex: 1;
      }
    }

    .info {
      display: flex;
      align-items: center;
      margin-left: auto;
      .info-item {
        display: flex;
        padding: 0 21px;

        .avatar {
          height: 36px;
          width: 36px;
          background-color: green;
          border-radius: 50%;
          border: 2px solid #ff6600;
          background: url("/img/avatar.jpg");
          background-position: center;
          background-size: cover;
        }
      }
    }
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
  max-width: 1582px;
`;
