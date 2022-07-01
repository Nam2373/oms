import styled from "styled-components";
import { down } from "styled-breakpoints";

export const StyledRegisterPage = styled.div`
  height: 100vh;
  background: white;

  .main-login {
    padding: 0 50px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat";

    .ant-form {
      width: 100%;
      padding: 0px !important;

      .ant-form-item {
        margin-bottom: 24px;

        .forgot-pwd {
          text-align: right;
          text-decoration: underline;
          margin-top: 8px;
        }

        .ant-input-affix-wrapper {
          border-radius: 10px;
        }

        button {
          background: #ff6600;
          padding: 8px 0;
          border-radius: 10px;
          border: unset;
        }
      }
    }

    img {
      height: 133px;
      width: 195px;
      margin-bottom: 90px;
    }
  }

  ${down("lg")} {
    .main-bg {
      display: none;
    }

    .main-login {
      padding: 0 16px;

      img {
        height: 133px;
        width: 195px;
        margin-bottom: 50px;
      }
    }
  }
`;
