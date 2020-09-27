import React from 'react';
import { Row, Col} from 'antd';

class ProjectDetails extends React.Component{

render() {
    const item = this.props.item;

    return <div className='hearing_content'>
                            <Row>
                              <Col span={6}>
                              <h5  className='fields'>Case no:</h5>
                              <h5 className='fields'>NDOH:</h5>
                              <h5 className='fields'>Advocates:</h5>
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
                            </div>;
}
}

export default ProjectDetails;
