import React from 'react';
import { Table} from 'antd';
import './Causelistrows.css';
import axios from 'axios';

class Causelistrows extends React.Component{


state = {
    cases: []
  }

componentDidMount() {
    axios.get(`https://5f495e418e271c001650c977.mockapi.io/cl/cases`)
      .then(res => {
        const cases = res.data.slice(0,50);
        this.setState({ cases });
      })
  }


render() {
    const { cases } = this.state;


const tabledata = cases.map(row => ({

    key: row.id  ,
    Case: row.CaseTitle,
    CaseCat:row.CaseCat,
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
    Advocates:row.RespondentLawyer,

    }))



const columns = [
  {
    title: 'Case',
    dataIndex: 'Case',
    render: (text, record) => (
      <div>
        <a  className='upper_text' onClick={()=>this.props.selectRecord(record.key)}>{record.Case}</a>
        <p className='lower_text'>{record.CaseCat}</p>
      </div>
    ),
  },
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
    title: 'Advocates',
    dataIndex: 'Advocates',
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

    return <div id='row_div'>
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

export default Causelistrows;
