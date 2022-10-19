import React from 'react';
import { Event } from '../event/Event';
import '../../styles/Dashboard.scss';
import { Card } from '../card/Card';


export function Dashboard() {

    return (
        <>
        <div className='dashboard-container'>
            <div className='dashboard-container__up'>
              <div className="dashboard-container__up--family">
                <Card
                  alt='family'
                  imageSrc='family'
                  message="Baby's birth"
                ></Card>
              </div>

              <div className="dashboard-container__up--holiday">
                <Card
                  alt='going-holiday'
                  imageSrc='going-holiday'
                  message="Holyday"
                ></Card>
              </div>
              <div className="dashboard-container__up--retire">
                  <Card
                      alt='retire'
                      imageSrc='retire'
                      message="Retire"
                  ></Card>
            </div>
            </div>
            <div className='dashboard-container__story-line'>
              <div className='dashboard-container__story-line-event'>
              <Event
                icon='main-circle'
                line='solid'
                size='s'
                isInitEvent={true}
                message='You are here'
              ></Event>

              <Event
                message='In 1 year and 9 months'
                size='m'
              ></Event>

              <Event
                message='In 3 years and 2 months'
                size='m2'
              ></Event>

              <Event
                message='In 4 years and 9 months'
                size='l'
              ></Event>

              <Event
                message='In 8 years and 11 months'
                line='dotted'
                size='xl'
              ></Event>

                <Event
                message='Ultimately'
                icon='end-line'
                
              ></Event>
              </div>
            </div>
            <div className='dashboard-container__down'>
            <div className="dashboard-container__down--new-home">
                  <Card
                      alt='new-home'
                      orientation='top'
                      imageSrc='home'
                      message="New home"
                  ></Card>
            </div>
            <div className="dashboard-container__down--emergency">
                  <Card
                      alt='emergency'
                      orientation='top'
                      imageSrc='em-fund'
                      message="Emergency fund"
                  ></Card>
            </div>
            <div className="dashboard-container__down--goodbye-banks">
                  <Card
                      alt='debt'
                      orientation='top'
                      imageSrc='debt'
                      message="Debt free"
                  ></Card>
            </div>

            <div className="dashboard-container__down--philantropy">
                  <Card
                      alt='contribution'
                      orientation='top'
                      imageSrc='contribution'
                      background='selected'
                      message="Make a contribution to my community through philantrophy"
                  ></Card>
            </div>
                
            </div>
        </div>
        </>
    )

}