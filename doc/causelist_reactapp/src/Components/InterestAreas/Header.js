import React from 'react';
import "antd/dist/antd.css";
import Header from './../Header/Header';
import Interestrows from './Interestrows/Interestrows';
import Interestgrid from './Interestgrid/Interestgrid';

class IAHeader extends React.Component{

constructor(props) {
    super(props);
    console.log(this.props.layo);
    this.layoutchange = this.layoutchange.bind(this);
    this.layoutchange(props.layo);
  }

state = {
    layoutComponent:<Interestrows selectRecord={(id,layout)=>this.props.selectRecord(id,layout)}/>,
}


layoutchange(layout){
console.log(layout);
    switch(layout){
        case 'list':
            this.setState({
                layoutComponent:<Interestrows selectRecord={(id,layout)=>this.props.selectRecord(id,layout)}/>,
            });
            break;
        case 'grid':
            this.setState({
                layoutComponent:<Interestgrid selectRecord={(id,layout)=>this.props.selectRecord(id,layout)}/>,
            });
            break;
        default:
            this.setState({
                layoutComponent:<Interestgrid selectRecord={(id,layout)=>this.props.selectRecord(id,layout)}/>,
            });

    }
}


  render(){
  const layyy = this.props.layo;
  console.log(layyy)
//this.layoutchange(this.props.layo);

    return (
          <div>
              <Header layoutchange = {(layout) => this.layoutchange(layout)}/>
              {this.state.layoutComponent}
          </div>

      );
  }
}

export default IAHeader;