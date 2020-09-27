import React from 'react';
import { Table} from 'antd';
import './HearingList.css';

class HearingList extends React.Component{

render() {
    const row = this.props.item;
console.log(row);
console.log(row.id);
const tabledata = [{

    key: row.id,
    Forum: row.Forum,
    City:row.City,
    Bench: row.Bench,
    RoomNo:row.RoomNo,
    Date: row.Date,
    LDH:row.LDH,
    Respondent: row.RespondentLawyer,
    Petitioner: row.PetitionerLawyer,
    CA: row.CANo,
    Diary: row.DiaryNO,

    }];



const columns = [

  {
    title: 'Forum',
    dataIndex: 'Forum',
    render: (text, record) => (
      <div>
        <p className='upper_text'>{record.Forum}</p>
        <p className='lower_text'>{record.City}</p>
      </div>
    ),
  },
  {
    title: 'Bench',
    dataIndex: 'Bench',
    render: (text, record) => (
      <div>
        <p className='upper_text'>{record.Bench}</p>
        <p className='lower_text'>{record.RoomNo}</p>
      </div>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'Date',
    render: (text, record) => (
      <div>
        <p className='upper_text'>{record.Date}</p>
        <p className='lower_text'>{record.LDH}</p>
      </div>
    ),
  },
  {
    title: 'Petitioner Lawyer',
    dataIndex: 'Petitioner',
  },
  {
    title: 'Respondent Lawyer',
    dataIndex: 'Respondent',
  },
  {
    title: 'CA No.',
    dataIndex: 'CA',
  },
  {
    title: 'Diary No.',
    dataIndex: 'Diary',
  },
];

    return <div className='row_div'>
        <Table
            style={{ whiteSpace: 'pre'}}
            columns={columns}
            dataSource={tabledata}
            size="middle"
            pagination={{ pageSize: 8}}
            rowKey={record => record.id}
//            onRow={(record, rowIndex) => {
//                        return {
//                            onClick: {props.detail}
//                        }
//                    }}
        />

    </div>;
}
}

export default HearingList;
