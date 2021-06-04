import { Modal, Form } from 'antd';
import styled from 'styled-components';

export const StyledLogModal = styled(Modal)`
        .ant-modal{
        text-decoration: none;
        width: 100%;
        }
        .ant-modal-content{
            min-width: 580px ;
            background-color: #1890FF !important;
            height: 780px;
            border-radius: 20px !important;

        }

        .ant-modal-header{
            text-align: center;
            border-radius: 20px 20px 0 0 !important;
            border: none !important;
        }

        .ant-modal-body{
            background-color: #fff;
            text-align: center;


        }
        .ant-modal-body img{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
        }
        .ant-modal-body p{
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
            text-align: center;
            margin-top: 30px;
            font-size: 22px;
        }

        .ant-modal-body p:last-of-type{
            margin: 80px 0 30px;
            padding: 0;
        }

        a.forgot-pass{
            color: #BFBFBF;
            margin: 40px 0 40px;
            display: inline-block;
        }

        .ant-modal form{
            margin:0 auto;
        }
        .ant-modal-footer{
            width: max-content;
            margin: 0 auto;
            border: none !important;
            color: #fff;
        }
        .ant-modal-footer p{
            margin-top: 60px;
        }
        .ant-modal-footer button{
            display: flex;
            justify-content: center;
            margin: 0 auto;
        }


    `;


export const StyledRegModal = styled(Modal)`
        .ant-modal{
            text-decoration: none;
            width: 100%;
        }
        .ant-modal-content{
            border-radius: 20px;
            background-color: #1890FF;
            height: 780px;
            
        }
        .ant-modal-body{
            min-width: 580px ;
            background-color: #1890FF !important;
            padding-bottom: 0;
            
        }

        .ant-modal-header{
            text-align: center;
            border-radius: 20px 20px 0 0;
            border: none;
            background-color: #1890FF;
        }

        .ant-modal-body img{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
        }
        .ant-modal-body p{
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
            text-align: center;
            font-size: 22px;
            color: #fff;
            margin: 40px 0 20px;
        }
        a.registerlink{
            color: #fff;
        }
        .ant-modal form{
            margin:0 auto;
        }
        .ant-modal-footer{
            width: max-content;
            margin: 0 auto;
            border: none !important;
            color: #fff;
        }
        .ant-modal-footer p{
            margin-top: 40px;
        }
        .ant-modal-close-x{
            color:#fff;
        }
        .ant-form-item-label > label{
            color: #fff;
        }
        .ant-form-item-required > .anticon{
            color: #fff;
        }
        #text{
            color: #fff;
        }
        .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{
            color:#fff;
        }
    `;

export const StyledLogForm = styled(Form)`
  .ant-form-inline{
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
}
`;

export const StyledRegForm = styled(Form)`
            .ant-row{
                margin-bottom: 0;
            }

            .ant-row:last-of-type{
                margin-top: 20px;
            }

        `;


export const StyledFeedbackModal = styled(Modal)`
        .ant-modal{
        text-decoration: none;
        width: 100%;
        }
        .ant-modal-content{
            min-width: 580px ;
            background-color: #fff !important;
            height: 800px;
            border-radius: 20px !important;

        }

        .ant-modal-header{
            text-align: center;
            border-radius: 20px 20px 0 0 !important;
            border: none !important;
        }

        .ant-modal-body{
            background-color: #fff;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;

        }
        .ant-modal-body img{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
        }
        .ant-modal-body p{
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
            text-align: center;
            font-size: 22px;
            margin-bottom: 10px;
        }

        .ant-modal-body p:last-of-type{
            margin-bottom: 25px;
        }

        .ant-modal form{
            margin:0 auto;
        }
        .ant-modal-body h2{
            margin: 15px 0;
            font-family: 'Roboto', sans-serif;
            font-size: 22px;
        }
        .ant-modal-body .ant-rate{
            margin: 20px 0 50px;
        }
        
        .ant-modal-body .ant-rate .anticon svg{
            transform: scale(2);
            margin: 0 10px;
        }


        .ant-form-item-control-input-content textarea.ant-input{
            max-width: 70% !important;
            margin-bottom: 20px;

        }
    `;
