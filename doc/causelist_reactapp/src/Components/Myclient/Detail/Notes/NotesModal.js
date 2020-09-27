import React from 'react';
import "antd/dist/antd.css";
import {Button, Modal, Input} from 'antd';
import './Notes.css';

const { TextArea } = Input;

const NotesModal = (props) =>{

    return (
      <div>
              <Modal
                title="Add Notes"
                style={{width:'30%', height:'40%' }}
                visible={props.modalVisible}
                onCancel={props.handleCancel}
                footer={[
                  <Button key="add" onClick={props.handleCancel} style={{
                    color: "#fff" ,
                    background: "#2E5BFF" ,
                    width: "100px",
                    borderRadius: "7px"
                  }}>
                    Add
                  </Button>,
                ]}
              >
                  <div className='modal_content'>
                    <span className='note'>Notes</span>
                    <TextArea rows={4} placeholder="Start typing ..." className='notes_input'/>
                  </div>
              </Modal>
      </div>
      );
  }


export default NotesModal;