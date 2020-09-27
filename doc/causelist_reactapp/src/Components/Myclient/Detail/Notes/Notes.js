import React from 'react';
import "antd/dist/antd.css";
import './Notes.css';
import {Button, Row, Col, Avatar} from 'antd';
import { PlusCircleFilled , UserOutlined} from '@ant-design/icons';
import NotesModal from './NotesModal';

class Notes extends React.Component{

  state={
    modalVisible: true,
    modalcomponent:null,
  }

setfilterModal(modalVisible) {
  this.setState({
    modalcomponent:<NotesModal modalVisible={this.state.modalVisible} handleCancel={()=>this.handlecancel(false)} />,
   });
  }
handlecancel(modalVisible){
  this.setState({
    modalcomponent:null,
  });
  }


  render(){
    return (
          <div>
              <div className='notes_head'>
                  <span className='notes_title'>Notes(3)</span>
                  <span style={{float:'right',display:'flex'}}>
                    <a className='notes-btn' onClick={() => this.setfilterModal(true)}>
                    <PlusCircleFilled /> Add Notes  </a>
                  </span>
                  {this.state.modalcomponent}
              </div>
              <div className='notes_div'>
                    <Row className='notes_row'>
                    <Col span={2}><Avatar size="large" icon={<UserOutlined />} /></Col>
                    <Col className='name' span={20}>Nnenna Jioke  <br/> <span className='timestamp'>8 May ’19, 4:30 PM</span>
                    <p className='notes_desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                    </Col>
                    </Row>
                    <Row className='notes_row'>
                    <Col span={2}><Avatar size="large" icon={<UserOutlined />} /></Col>
                    <Col className='name' span={20}>Nnenna Jioke  <br/> <span className='timestamp'>8 May ’19, 4:30 PM</span>
                    <p className='notes_desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                    </Col>
                    </Row>
              </div>
          </div>

      );
  }
}

export default Notes;