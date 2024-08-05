import React from 'react';
import { Card, Col, Row } from 'reactstrap';
import greenIcon from "../../assets/images/green-chev.png";
import targetIcon from "../../assets/images/target1.png";
import burgerIcon from "../../assets/images/burger1.png";
import menuIcon from "../../assets/images/menu1.png";
import rightChev from "../../assets/images/right.png";
import { cardItems } from '../../mockData';
import BarChart2 from '../../components/bar-chart2';
import RecentOrders from '../../components/recent-orders';
import Feedback from '../../components/feedback';

import { BarChart } from '@mui/x-charts/BarChart'
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const sData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const rData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const iData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

// circle chart setting
const settings = {
  width: 110,
  height: 110,
  value: 70,
};

function Dashboard({ sidebarOpen }) {
  return (
    <main className='dashboard'>
      <h1>Dashboard</h1>
      <Row className='mb-4'>
        <Col lg={8} xl={8}>
          <Row className='h-100'>
            {cardItems.map((card, index) => {
              return (
                <Col sm={6} md={6} lg={3} xl={3} className='mb-3 mb-lg-0'>
                  <Card>
                    <div className={`card-icon card-icon-${index}`}>
                      <img src={card.icon} className='img-fluid' alt="" />
                    </div>
                    <p>{card.title}</p>
                    <div className='data'>
                      <h2>{card.number}</h2>
                      <h5 className={index === 1 || index === 3 ? 'red' : ''}><img src={card.icon2} className='img-fluid' alt="" /> {card.percent}</h5>
                    </div>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Col>
        <Col lg={4} xl={4}>
          <div className='profit'>
            <p><strong>Net Profit</strong></p>
            <div className='profit-flex'>
              <h2 className='total'>$6759.25</h2>
              <Gauge
                {...settings}
                cornerRadius="50%"
                sx={(theme) => ({
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 40,
                    color: '#f00'
                  },
                  [`& .${gaugeClasses.valueArc}`]: {
                    fill: '#698ff8',
                  },
                  [`& .${gaugeClasses.referenceArc}`]: {
                    fill: theme.palette.text.disabled,
                  },
                })}
              />
            </div>
            <h5 className='green'><img src={greenIcon} className='img-fluid' alt="" /> 3%</h5>
          </div>
        </Col>
      </Row>
      <div className='activity mb-4'>
        <Row>
          <Col lg={8} xl={8}>
            <div className='bar-chart'>
              <h2>Activity</h2>
              <BarChart
                sx={{ width: '100%', height: '200px' }}
                height={185}
                series={[
                  { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
                  { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
                  { data: sData, label: 'sv', id: 'svId', stack: 'total' },
                  { data: rData, label: 'rv', id: 'rvId', stack: 'total' },
                  { data: iData, label: 'iv', id: 'ivId', stack: 'total' },
                ]}
                xAxis={[{ data: xLabels, scaleType: 'band' }]}
              />
            </div>

          </Col>
          <Col lg={4} xl={4}>
            <div className='right-menu'>
              <div className='right-menu__flex'>
                <div className='icon-flex'>
                  <div className='circle'>
                    <img src={targetIcon} className='img-fluid' alt="" />
                  </div>
                  <p>Goals</p>
                </div>
                <div className='right-chev'>
                  <img src={rightChev} className='img-fluid' alt="" />
                </div>
              </div>
              <div className='right-menu__flex'>
                <div className='icon-flex'>
                  <div className='circle circle2'>
                    <img src={burgerIcon} className='img-fluid' alt="" />
                  </div>
                  <p>Goals</p>
                </div>
                <div className='right-chev'>
                  <img src={rightChev} className='img-fluid' alt="" />
                </div>
              </div>
              <div className='right-menu__flex'>
                <div className='icon-flex'>
                  <div className='circle circle3'>
                    <img src={menuIcon} className='img-fluid' alt="" />
                  </div>
                  <p>Goals</p>
                </div>
                <div className='right-chev'>
                  <img src={rightChev} className='img-fluid' alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col lg={8} xl={8}>
          <RecentOrders />
        </Col>
        <Col lg={4} xl={4}>
          <Feedback />
        </Col>
      </Row>
    </main>
  );
}

export default Dashboard;
