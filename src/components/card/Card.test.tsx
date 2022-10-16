import React, { Component } from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import { Card } from "./Card";


describe('<Card/>', () => {
    interface CardProps {
        message: string;
        alt: string;
        imageSrc: string;
        orientation?:  "top" | "bottom";
        background?: "default" | "selected";
    }

    test('render component', () => {
        const cardProps =  {
            message: 'test',
            alt: 'test',
            imageSrc: 'family'
        }
    
        const sut = render(<Card 
                        alt={cardProps.alt} 
                        message={cardProps.message}
                        imageSrc={cardProps.imageSrc} />);
    
        sut.getByText('test');
    })
    
    test('render component orientation top', () => {
        const cardProps: CardProps =  {
            message: 'test',
            alt: 'test',
            imageSrc: 'family',
            orientation: 'top'
        }
    
        const sut = render(<Card 
                        orientation={cardProps.orientation}
                        alt={cardProps.alt} 
                        message={cardProps.message}
                        imageSrc={cardProps.imageSrc} />);
    
        expect(sut.container.querySelector('.card-border__top'))
    })

    test('render component orientation bottom', () => {
        const cardProps: CardProps =  {
            message: 'test',
            alt: 'test',
            imageSrc: 'family'
        }
    
        const sut = render(<Card 
                        orientation={cardProps.orientation}
                        alt={cardProps.alt} 
                        message={cardProps.message}
                        imageSrc={cardProps.imageSrc} />);
    
        expect(sut.container.querySelector('.card-border__bottom'))
    })
})
