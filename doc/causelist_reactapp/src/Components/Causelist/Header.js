import React from 'react';
import "antd/dist/antd.css";
import Header from './../Header/Header';
import Causelistrows from './Causelistrows/Causelistrows';
import Causelistgrid from './Causelistgrid/Causelistgrid';

class ClHeader extends React.Component{

state = {
    layoutComponent:<Causelistrows selectRecord={(id)=>this.props.selectRecord(id)}/>,
}
layoutchange(layout){
    console.log(layout);
    switch(layout){
        case 'list':
            this.setState({
                layoutComponent:<Causelistrows selectRecord={(id)=>this.props.selectRecord(id)}/>,
            });
            break;
        case 'grid':
            console.log("gridcomp");
            this.setState({
                layoutComponent:<Causelistgrid selectRecord={(id)=>this.props.selectRecord(id)}/>,
            });
            break;
    }
}

  render(){
    return (
          <div>
              <Header layoutchange = {(layout) => this.layoutchange(layout)}/>
              {this.state.layoutComponent}
          </div>

      );
  }
}

export default ClHeader;