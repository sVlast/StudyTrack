import { Modal } from 'antd';
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