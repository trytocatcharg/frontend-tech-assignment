import React from 'react';
import  '../../styles/Event.scss';

interface EventProps {
    message: string;
    isInitEvent?: boolean,
    icon?:  "circle" | "main-circle" | "end-line";
    line?: "solid" | "dotted";
    size?: 's' | 'm' | 'm2' | 'l' | 'xl';
}


export function Event(props: EventProps) {
const icon = props.icon || 'circle';
const line = props.line || 'solid';
const isInitEvent = props.isInitEvent || false;


   
    return (
        <div className={`event-container
        ${props.size ? 'event-container--size-'+ props.size : '' }`}>
             { icon === "circle" &&
                    <div className='event-container__dot'>
                        <div 
                            className={`event-container__line 
                                ${line === 'solid'
                                    ? 'event-container__line--solid'
                                    : 'event-container__line--dotted'}
                                    event-container__line--size-${props.size}`}
                                    ></div>
                    </div>
                }
            {   icon === "main-circle" &&
                <div className='event-container__main-circle'>
                    <div className='event-container__main-circle-outer'>
                        <div className='event-container__main-circle-inner'> </div>

                        { line === 'solid' &&
                        <div className='event-container__main-circle-inner--line'>

                        </div>
                        }
                    </div>
                    
                </div>
            }
            {   icon === "end-line" &&
                <div className='event-container__end-line'></div>
            }
            <div className={`event-container__message`}>
                <div className={`event-container__message-inner ${isInitEvent ? 'event-container__message--fix-padding' : '' }`} >{props.message }</div>
            </div>
            
        </div>
        )
}