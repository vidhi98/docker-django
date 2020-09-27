import React from 'react';
import "antd/dist/antd.css";
import './Detail.css';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import HearingList from './Hearinglist/HearingList';
import Documents from './Documents/Documents';
import Notes from'./Notes/Notes';
import { Button,Tabs,Row, Col} from 'antd';
import { ArrowLeftOutlined} from '@ant-design/icons';
import axios from 'axios';
import Detailicon from './../../../Assets/magazine.svg';
import Hearingicon from './../../../Assets/croquet.svg';
import Notesicon from './../../../Assets/Group 1861.svg';
import Docicon from './../../../Assets/pages.svg';


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
const item = this.state.item[0];

    return (

          <div id='btns-div'>
              <a onClick={this.props.showMC}><ArrowLeftOutlined /> Back</a>
              {!this.state.isLoading ? (
              <div className='detail-background'>
                <h3 className='detail_head'>{item.Party}</h3>
                <span className='detail_subhead'>{item.CANo}</span>
                <div className='Cldetail'>
                  <Tabs tabPosition='left'>
                      <TabPane tab=
                       <span>
                       <img src={Detailicon} className='iconimage' alt='icon' />
                       Project Details
                       </span>
                       key="1" >
                            <ProjectDetails item= {item}/>
                      </TabPane>
                      <TabPane tab=
                       <span>
                       <img src={Hearingicon} className='iconimage' alt='icon' />
                       Hearings List
                       </span>
                       key="2">
                            <div >
                            <HearingList item={item} />
                            </div>
                       </TabPane>
                       <TabPane tab=
                       <span>
                       <img src={Notesicon} className='iconimage' alt='icon' />
                       Notes
                       </span>
                       key="3">
                            <Notes />
                       </TabPane>
                       <TabPane tab=
                       <span>
                       <img src={Docicon} className='iconimage' alt='icon' />
                       Documents
                       </span>
                       key="4">
                            <Documents />
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