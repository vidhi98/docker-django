import React from 'react';
import "antd/dist/antd.css";
import './Details.css';
import { Button,Tabs,Row, Col} from 'antd';
import { ArrowLeftOutlined} from '@ant-design/icons';
import axios from 'axios';
import Detailicon from './../../../Assets/magazine.svg';


const { TabPane } = Tabs;


class Detail extends React.Component{
state = {
    isLoading: true,
    item:[]
  }

componentDidMount() {
    axios.get(`https://5f495e418e271c001650c977.mockapi.io/cl/cases`)
      .then(res => {
        const cases = res.data.slice(0,50);
        const caseid =  this.props.caseid;
        const items = cases.filter(it => it.id === caseid );
        this.setState({
            item: items,
            isLoading: false
            });
      })
  }



  render(){
console.log(this.props.caseid)
console.log(this.props.layoutt)
const item = this.state.item[0];
const lay = this.props.layoutt;
console.log(item);


    return (

          <div id='btns-div'>
              <a onClick={()=>this.props.showIA(this.props.layoutt)}><ArrowLeftOutlined /> Back</a>
              {!this.state.isLoading ? (
              <div className='detail-background'>
                <h3 className='detail_head'>{item.Party}</h3>
                <span className='detail_subhead'>{item.CANo}</span>
                <div className='Iadetail'>
                  <Tabs tabPosition='left'>
                      <TabPane tab=
                       <span>
                       <img src={Detailicon} className='iconimage' alt='icon'/>
                       Project Details
                       </span>
                       key="1">
                        <div className='hearing_content'>
                        <Row>
                          <Col span={6}>
                          <h5  className='fields'>Case no:</h5>
                          <h5 className='fields'>NDOH:</h5>
                          <h5 className='fields'>Advocates :</h5>
                          <h5 className='fields'>Sub-Category:</h5>
                          <h5 className='fields'>Diary Number:</h5>
                          <h5 className='fields'>Case Title:</h5>
                          <h5 className='fields'>Petitioner Lawyer:</h5>
                          <h5 className='fields'>Judgement by:</h5>
                          </Col>
                          <Col span={6}>
                          <h5  className='values'>{item.CANo}</h5>
                          <h5  className='values'>{item.LDH}</h5>
                          <h5  className='values'>{item.CANo}</h5>
                          <h5  className='values'>{item.CaseCat}</h5>
                          <h5  className='values'>{item.DiaryNO}</h5>
                          <h5  className='values'>{item.CaseTitle}</h5>
                          <h5  className='values'>{item.PetitionerLawyer}</h5>
                          <h5  className='values'>{item.JudgementBy}</h5>
                          </Col>
                          <Col span={6}>
                          <h5  className='fields'>LDOH:</h5>
                          <h5 className='fields'>Forum:</h5>
                          <h5 className='fields'>Matter Category:</h5>
                          <h5 className='fields'>Bench:</h5>
                          <h5 className='fields'>Room Number:</h5>
                          <h5 className='fields'>Last Hearing Result:</h5>
                          <h5 className='fields'>Next Date of Hearing:</h5>
                          <h5 className='fields'>Last Date of Hearing:</h5>
                          </Col>
                          <Col span={6}>
                          <h5  className='values'>{item.LDH}</h5>
                          <h5  className='values'>{item.Forum}</h5>
                          <h5  className='values'>{item.CaseCat}</h5>
                          <h5  className='values'>{item.Bench}</h5>
                          <h5  className='values'>{item.RoomNo}</h5>
                          <h5  className='values'>{item.Bench}</h5>
                          <h5  className='values'>{item.NDT}</h5>
                          <h5  className='values'>{item.LDH}</h5>
                          </Col>
                        </Row>
                        <Row>
                        <Col span={4}>
                          <h5  className='fields'>Description</h5>
                        </Col>
                        <Col span={18}>
                          <h5  className='values'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                          </h5>
                        </Col>
                        </Row>
                        </div>
                      </TabPane>
                  </Tabs>
                </div>
              </div>
              ) :(
                <h3>Loading...</h3>
              )}
          </div>

      );
  }
}

export default Detail;
