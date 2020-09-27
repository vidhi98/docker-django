import { Layout, Menu, Avatar } from 'antd';
import React from 'react';
import './Baselayout.css';
import "antd/dist/antd.css";
import Myclient from './../Myclient/Myclient';
import Causelist from './../Causelist/Causelist';
import InterestAreas from './../InterestAreas/InterestAreas';
import {Route, Link} from 'react-router-dom';

import {
  LayoutFilled,
  ContactsFilled,
  UserOutlined,
  AmazonCircleFilled,
  BellFilled,
} from '@ant-design/icons';


const { Header, Sider} = Layout;

class Baselayout extends React.Component {
  state = {
    collapsed: false,
    header:"My Client",
  };


  render() {
    return (
      <Layout>
        <Sider trigger={null} >
          <div className="logo" ><AmazonCircleFilled /></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            <Menu.Item key={0} onClick={() => this.setState({header:"My Client"})}>
                <Link to="/Myclient"><UserOutlined /><br />My Client</Link>
            </Menu.Item>
            <Menu.Item key={1} onClick={() => this.setState({header:"Causelist"})}>
            <Link to="/Causelist"><LayoutFilled /><br/>Causelist</Link>
            </Menu.Item>
            <Menu.Item key={2} onClick={() => this.setState({header:"Interest Areas"})}>
            <Link to="/InterestAreas"><ContactsFilled /><br/>Interest <br/> Areas</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout  >
        <Header style={{ background: '#fff', textAlign: 'left',fontWeight: '700', fontSize: 'x-large' }}>
            {this.state.header}
            <span style={{float: 'right'}}>
              <span style={{fontSize: 24, paddingRight: 20,color: 'grey',opacity: '0.3'}}><BellFilled /></span>
              <Avatar style={{verticalAlign: 'sub', marginRight: 10, backgroundColor: '#096dd9'}}>{"VS"}</Avatar>
              <div className="client-name">
                  <span style={{verticalAlign: 'top', fontWeight: '700', fontSize: '16px',color:'#096dd9'}}>Vivek Singh</span>
                  <br/>
                  <span style={{fontSize: '12px', opacity: '0.5'}}> Attorney </span>
              </div>
            </span>
          </Header>
            <Route path="/" exact component ={Myclient} />
            <Route path="/Myclient" exact component ={Myclient} />
            <Route path="/CauseList" exact  component ={Causelist}/>
            <Route path="/InterestAreas" exact  component ={InterestAreas}/>
        </Layout>
      </Layout>
    );
  }
}

export default Baselayout;