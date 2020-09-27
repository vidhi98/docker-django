import React from 'react';
import "antd/dist/antd.css";
import {Button, Modal, Tabs, Input, Radio} from 'antd';
import { SearchOutlined} from '@ant-design/icons';
import './FilterModal.css';
const { TabPane } = Tabs;

const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

const FilterModal = (props) =>{

    return (
      <div>
              <Modal
                title="Apply Filters"
                style={{width:'30%', height:'60%' }}
                visible={props.modalVisible}
                onCancel={props.handleCancel}
                footer={[
                  <Button key="add" onClick={props.handleCancel} style={{
                    color: "#fff" ,
                    background: "#096dd9" ,
                    width: "100px",
                    borderRadius: "7px"
                  }}>
                    Apply
                  </Button>,
                ]}
              >
                  <Tabs defaultActiveKey="1" tabPosition='left' >
                    <TabPane tab="City" key="1">
                      <Input id='search-city'
                        placeholder= "Search " prefix={<SearchOutlined style={{opacity: '0.3'}} />}
                      />
                    </TabPane>
                    <TabPane tab="Client" key="2">
                      <Input id='search-client'
                        placeholder= "Search " prefix={<SearchOutlined style={{opacity: '0.3'}} />}
                      />
                    </TabPane>
                    <TabPane tab="Forum" key="3">
                        <Radio.Group >
                        <Radio style={radioStyle} value={"high court"}>
                          High Court
                        </Radio>
                        <Radio style={radioStyle} value={"supreme court"}>
                          Supreme Court
                        </Radio>
                      </Radio.Group>
                    </TabPane>

                  </Tabs>
              </Modal>
      </div>
      );
  }


export default FilterModal;
