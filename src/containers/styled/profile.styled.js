import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const StyledDivUserProfile = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-family: 'Montserrat';
  padding-bottom: 24px;

  ${down('md')} {
    padding-bottom: 16px;
  }

  .profile-item-label,
  .ant-form-item-label {
    font-weight: 600;
    font-size: 16px;
    color: #616161;
    padding: 0;
  }

  .profile-item-label {
    margin-bottom: 8px;
  }

  .profile-item-content {
    color: black;

    & span {
      color: #95a5a6;
    }
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .update-button {
    border-radius: 4px;
    background-color: #ff6600;
    border: unset;
  }

  .ant-form {
    width: 100%;
  }
`
