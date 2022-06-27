import styled from "styled-components";
import { down } from 'styled-breakpoints';

export const StyledRegisterPage = styled.div`
    height: 100vh;
    background: white;

    .main-login{
        padding: 0 50px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .ant-form {
            width: 100%;
            padding: 0px !important;

            .ant-form-item{
                margin-bottom: 24px;

                /* .ant-input-affix-wrapper, input{
                    background: linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #333333;
                } */

                .ant-input-affix-wrapper{
                    border-radius: 10px;
                }
                
                button{
                    background: #FF6600;
                    padding: 8px 0;
                    border-radius: 10px;
                    border: unset;
                }
            }
        }


        img{
            height: 133px;
            width: 195px;
            margin-bottom: 90px;
        }

    }

    
    ${down('lg')} {
        .main-bg{
            display: none;
        }

        .main-login{
            padding: 0 16px;

            img{
            height: 133px;
            width: 195px;
            margin-bottom: 50px;
        }
        }
    }

`