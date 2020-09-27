import React from 'react';
import "antd/dist/antd.css";
import './Documents.css';
import {Table} from 'antd';
import { PlusCircleFilled ,VerticalAlignBottomOutlined } from '@ant-design/icons';
import DocModal from './DocModal';


class Documents extends React.Component{

  state={
    modalVisible: true,
    modalcomponent:null,
  }

setdocModal(modalVisible) {
  this.setState({
    modalcomponent:<DocModal modalVisible={this.state.modalVisible} handleCancel={()=>this.handlecancel(false)} />,
   });
  }
handlecancel(modalVisible){
  this.setState({
    modalcomponent:null,
  });
  }


  render(){


const tabledata = [
  {
    key: '1',
    name: 'Doc Name 1',
    type: 'Doc type 1',
    Date: '29/02/20',
    Case: 'Amazon',
    by: 'Vidhi',
    download: <VerticalAlignBottomOutlined />,
  },
  {
    key: '2',
    name: 'Doc Name 2 ',
    type: 'Doc type',
    Date: '29/02/20',
    Case: 'Amazon',
    by: 'Vidhi',
    download: <VerticalAlignBottomOutlined />,
  }
    ];



const columns = [

  {
    title: 'Document name',
    dataIndex: 'name',
  },
  {
    title: 'Document type',
    dataIndex: 'type',
  },
  {
    title: 'Date',
    dataIndex: 'Date',
    render: (text, record) => (
      <div>
        <p className='upper_text'>{record.Case}</p>
        <p className='lower_text'>{record.Date}</p>
      </div>
    ),
  },
  {
    title: 'Added by',
    dataIndex: 'by',
  },
  {
    title: '',
    dataIndex: 'download',
  },
];

    return (
          <div>
              <div className='doc_head'>
                  <span className='doc_title'>Documents(2)</span>
                  <span style={{float:'right',display:'flex'}}>
                    <a className='doc-btn' onClick={() => this.setdocModal(true)}>
                    <PlusCircleFilled /> Add Document </a>
                  </span>
                  {this.state.modalcomponent}
              </div>
              <div className='doc_div'>
                    <Table
                        style={{ whiteSpace: 'pre'}}
                        columns={columns}
                        dataSource={tabledata}
                        size="middle"
                        rowKey={record => record.id}
            //            onRow={(record, rowIndex) => {
            //                        return {
            //                            onClick: {props.detail}
            //                        }
            //                    }}
                    />
              </div>
          </div>

      );
  }
}

export default Documents;