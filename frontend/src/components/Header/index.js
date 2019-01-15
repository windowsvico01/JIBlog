import React from 'react';
import styled from 'styled-components';
import { Button, Avatar, Menu, Dropdown, Icon } from 'antd';


const Bar = styled.div`
   height: 60px;
   padding: 10px 10px;
   background: #9F79EE;
   overflow: hidden;
   color: white;
   margin-bottom: 24px;
   box-shadow: 0 2px 7px rgba(0,0,0,.2);
`;
const LogoCon = styled.div`
   height: 40px;
   width: 100px;
   text-align: center;
   line-height: 40px;
   font-size: 20px;
   font-weight: bold;
   float: left;
`;
const LogCon = styled.div`
   height: 40px;
   width: auto;
   float: right;
   .btnCon{
      height: 40px;
      line-height: 40px;
      vertical-align: center;
      Button{
        font-size: 14px;
      }
      .ant-btn:hover, .ant-btn:focus{
        color: #7037e8;
        border-color: #7037e8;
      }
   }
   .personInfo{
    height: 42px;
    max-width: 150px;
    line-height: 40px;
    vertical-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    font-size: 16px;
    .userName{
        height: 40px;
        max-width: 150px;
        margin-left: 10px;
        text-align: left;
        line-height: 40px;
        font-size: 14px;
        color: #fff;
    }
   }
`;
const MenuItem = styled.a`
    width: 100px;
    text-align: left;
    line-height: 30px;
`;

const menu = (
    <Menu>
        <Menu.Item>
            <MenuItem href="http://www.baidu.com">
                <Icon type="user" theme="outlined" /> 个人中心
            </MenuItem>
        </Menu.Item>
        <Menu.Item>
            <MenuItem href="">
                <Icon type="logout" theme="outlined" /> 注销
            </MenuItem>
        </Menu.Item>
    </Menu>
);

class Header extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            loginStatus: '0',//0:未登录   1：已登录
        };
    }
    render() {
        const {loginStatus} = this.state;
        return (
            <Bar>
                <LogoCon>JIBlog</LogoCon>
                <LogCon>
                    {loginStatus === '0' && 
                    <div className="btnCon">
                        <Button ghost  style={{marginRight:'20px'}}>登录</Button>
                        <Button ghost>注册</Button>
                    </div>
                    }
                    {loginStatus === '1' && 
                    <Dropdown overlay={menu}>
                        <div className="personInfo" href="#">
                            <Avatar size={38} icon="user"></Avatar>
                            <span className="userName">二三四五六</span>
                        </div>
                    </Dropdown>
                    }
                </LogCon>
                
            </Bar>
        );
    }
}

export default Header;