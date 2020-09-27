import React from 'react';
import "antd/dist/antd.css";
import { Layout} from 'antd';
import MCHeader from './Header';
import Detail from './Detail/Detail';
const { Content } = Layout;

class Myclient extends React.Component{

state = {
    contentComponent:<MCHeader selectRecord={(id)=>this.showDetail(id)}/>,
//    contentComponent:<Detail showCL = {()=>this.showCL()} caseid = '1' />,
}

showDetail(caseid){
    this.setState({
    contentComponent:<Detail showMC = {()=>this.showMC()} caseid = {caseid} />,
    });
 }
 showMC(){
    this.setState({
    contentComponent:<MCHeader selectRecord={(id)=>this.showDetail(id)}/>,
    });
 }


  render(){
    return (
      <Content style={{ margin: '25px', padding: 2, background: 'rgb(243, 240, 240)', minHeight: 642 }}>
          {this.state.contentComponent}
      </Content>
      );
  }
}

export default Myclient;