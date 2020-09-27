import React from 'react';
import "antd/dist/antd.css";
import './Header.css';
import {Select, Button, Input} from 'antd';
import { SearchOutlined, FilterFilled } from '@ant-design/icons';
import FilterModal from './FilterModal/FilterModal';
import Filtericon from './../../Assets/filter.svg';
const { Option } = Select;

class Header extends React.Component{

  state={
    modalVisible: true,
    modalcomponent:null,
  }

setfilterModal(modalVisible) {
  this.setState({
    modalcomponent:<FilterModal modalVisible={this.state.modalVisible} handleCancel={()=>this.handlecancel(false)} />,
   });
  }
handlecancel(modalVisible){
  this.setState({
    modalcomponent:null,
  });
  }


  render(){
    return (
          <div id='btns-div'>
              <Select
              defaultValue="Select" size='large' style={{ width: '150px',opacity:'0.5', fontWeight:'bold',color:'#096dd9'}} >
              <Option value="Admins">Clients 1</Option>
                  <Option value="Services">Clients 2</Option>
              </Select>
              <span style={{float:'right',display:'flex'}}>
              <Input id='search-field' style={{border:'0',borderRadius:'7px',fontWeight:'600',fontSize:'14px'}}
                placeholder= "Search by" prefix={<SearchOutlined style={{opacity: '0.3'}} />}
              />
                <Button className='btns' onClick={() => this.setfilterModal(true)}
                type="primary" size='large' icon={<FilterFilled/>} > </Button>
                <Button className='btns' onClick={() => this.props.layoutchange("list")}
                type="primary" size='large' > <img src={Filtericon}/></Button>
                <Button className='btns' onClick={() => this.props.layoutchange("grid")}
                type="primary" size='large' > <img src={Filtericon}/></Button>
              </span>

              {this.state.modalcomponent}
          </div>

      );
  }
}

export default Header;