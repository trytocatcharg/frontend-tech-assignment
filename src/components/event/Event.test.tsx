import React, { Component } from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import {Event} from './Event';


describe('<Event/>', () => {
    interface EventProps {
        message: string;
        isInitEvent?: boolean,
        icon?:  "circle" | "main-circle" | "end-line";
        line?: "solid" | "dotted";
        size?: 's' | 'm' | 'm2' | 'l' | 'xl';
    }

    test('render component', () => {
        const eventProps: EventProps =  {
            message: 'test',
        }
    
        const sut = render(<Event 
                        message={eventProps.message} />);
    
        sut.getByText('test');
    })
    
    test('render component orientation top', () => {
        const eventProps: EventProps =  {
            message: 'test',
            icon: 'circle'
            
        }
    
        const sut = render(<Event 
                        message={eventProps.message}
                        icon={eventProps.icon} />);
    
        expect(sut.container.querySelector('.event-container__dot'))
    })

})
