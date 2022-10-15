import React from 'react';
import { Dashboard } from './components/dashboard/Dashboard';
import { Card } from './components/card/Card';
import { Event } from './components/event/Event';


function App() {
  return (
    <main>
      <div>
        {/* <Card 
            message="Baby's birth"
            imageSrc='family'
            orientation='bottom'
            alt='Family'/> */}

            {/* <Event
              icon='main-circle'
              message='You are Here'
            ></Event>

          <Event
              line='dotted'
              message='In 1 year and 9 months'
            ></Event>

          <Event
              icon='end-line'
              message='Ultimately'
            ></Event> */}

            <Dashboard></Dashboard>

      </div>
    </main>
  );
}

export default App;
