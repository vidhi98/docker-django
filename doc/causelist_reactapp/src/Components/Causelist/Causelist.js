import React from 'react';
import "antd/dist/antd.css";
import { Layout} from 'antd';
import ClHeader from './Header';
import Detail from './Detail/Detail';
const { Content } = Layout;

class Causelist extends React.Component{

state = {
    contentComponent:<ClHeader selectRecord={(id)=>this.showDetail(id)}/>,
}

showDetail(caseid){
    this.setState({
    contentComponent:<Detail showCL = {()=>this.showCL()} caseid = {caseid} />,
    });
 }
 showCL(){
    this.setState({
    contentComponent:<ClHeader selectRecord={(id)=>this.showDetail(id)}/>,
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

export default Causelist;