import React from 'react';
import "antd/dist/antd.css";
import {Button, Modal, Input, Select, Upload} from 'antd';
import './Documents.css';


const { Option } = Select;
const { Dragger } = Upload;

const DocModal = (props) =>{

    return (
      <div>
              <Modal
                title="Add Document"
                style={{width:'30%', height:'40%' }}
                visible={props.modalVisible}
                onCancel={props.handleCancel}
                footer={[
                  <Button key="add" onClick={props.handleCancel} style={{
                    color: "#fff" ,
                    background: "#2E5BFF" ,
                    borderRadius: "7px"
                  }}>
                    Add Document
                  </Button>,
                ]}
              >
                  <div className='modal_content'>
                    <div className='label-div'>
                        <h5 className='label'>Document name</h5>
                        <Input className='doc-input' placeholder="Enter Name" style={{ width: 400 }} />
                    </div>
                    <div className='label-div'>
                        <h5 className='label'>Document Type</h5>
                        <Input className='doc-input' placeholder="Enter Name" style={{ width: 400 }} />
                    </div>
                    <div className='label-div'>
                    <h5 className='label'>Added by</h5>
                        <Select
                            showSearch
                            style={{ width: 400}}
                            className='doc-input'
                            placeholder="Select team member"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </Select>
                      </div>
                      <div className='label-div'>
                          <h5 className='label'>Upload document</h5>
                          <Dragger className='doc-input' style={{ width: 400 }} >
                            <p className="ant-upload-text">Browse or Drag and Drop</p>
                          </Dragger>
                      </div>
                  </div>
              </Modal>
      </div>
      );
  }


export default DocModal;