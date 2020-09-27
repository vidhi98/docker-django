import React from 'react';
import "antd/dist/antd.css";
import { Layout} from 'antd';
import IAHeader from './Header';
import Detail from './Details/Details';
const { Content } = Layout;

class InterestAreas extends React.Component{

state = {
    contentComponent:<IAHeader selectRecord={(id,layout)=>this.showDetail(id,layout)} />,
}

showDetail(caseid,layoutt){
    this.setState({
    contentComponent:<Detail showIA= {(layoutt)=>this.showIA(layoutt)} caseid = {caseid} layoutt={layoutt} />,
    });
 }
 showIA(lay){
 console.log(lay);
    this.setState({
    contentComponent:<IAHeader selectRecord={(id)=>this.showDetail(id) } layo = {lay} />,
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

export default InterestAreas;