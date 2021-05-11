// import React from 'react'
// import { Navbar, Nav } from 'react-bootstrap';

// export default function NavigationBar (){
//         return (
//             <div>
               
//                 <Navbar bg='primary' variant="dark" >

//                     <Navbar.Brand href="/" eventkey="home">Tutuila</Navbar.Brand>
//                     <Nav justify variant="pill">
//                         <Nav.Item>
//                             <Nav.Link href="/workspace" eventKey="workspace" >Workspace</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link href="/modeldetails" eventKey="modeldetails" >Details</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link href="/background" eventKey="background" >Background</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link href="/about" eventKey="about" >AboutApp</Nav.Link>
//                         </Nav.Item>
//                     </Nav>
//                 </Navbar>
   
                    
                

//             </div>
//         )
    
// }

import React from 'react'
import { Menu } from 'antd';
import { HomeOutlined, SettingFilled, InfoCircleOutlined, UserOutlined, BlockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

const { SubMenu } = Menu;

export default class NavigationBar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
            <a href="/" >
          Home
            </a>
        </Menu.Item>
        <Menu.Item key="workspace" icon={<SettingFilled />}>
          <a href="/workspace">
            Workspace
          </a>
        </Menu.Item>
        <Menu.Item key="modeldetails" icon={<InfoCircleOutlined />}>
          <a href="/modeldetails">
            Model Details
          </a>
        </Menu.Item>
        <Menu.Item key="background" icon={<BlockOutlined />}>
          <a href="/background">
            Background
          </a>
        </Menu.Item>
        <Menu.Item key="about" icon={<UserOutlined />}>
          <a href="/about">
            About
          </a>
        </Menu.Item>

      </Menu>
    );
  }
}