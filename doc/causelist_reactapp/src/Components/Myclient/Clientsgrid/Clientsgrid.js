import React from 'react';
import { Row, Col, Card, Avatar} from 'antd';
import './Clientsgrid.css';
import axios from 'axios';
import Forumicon from './../../../Assets/Group 12.svg';
import Lawyericon from './../../../Assets/Group 15.svg';


class Clientsgrid extends React.Component{


state = {
    cases: []
  }

componentDidMount() {
    axios.get(`https://5f495e418e271c001650c977.mockapi.io/cl/cases`)
      .then(res => {
        const cases = res.data.slice(0,15);
        this.setState({cases});
      })
  }


render() {
    const { cases } = this.state;

console.log(Object.keys(cases).length);
    return <div className='grid_div'>
                <Row gutter={24}>
                  {cases.map(row => {
                    return (
                        <Col span={6}>
                            <Card bordered={false}>
                              <h4 className='font12'>{row.Date}</h4>
                              <h4 className='font20' onClick={()=>this.props.selectRecord(row.id)}>{row.CaseTitle}</h4>
                              <h4 className='font12'><span>#{row.CANo} &#8226; {row.CaseCat}</span> </h4>
                              <Row className='font14'>
                              <Col span={4}><Avatar src = {Forumicon} /></Col>
                              <Col span={20}><h4 className='forum_text'> {row.Forum}, {row.City}</h4></Col>
                              </Row>
                              <Row>
                              <Col span={4}><Avatar src = {Lawyericon} /></Col>
                              <Col span={20}><h4 className='forum_text'>{row.PetitionerLawyer}</h4></Col>
                              </Row>
                            </Card>
                          </Col>
                    )
                  })}

                </Row>


          </div>;
    }
}

export default Clientsgrid;
