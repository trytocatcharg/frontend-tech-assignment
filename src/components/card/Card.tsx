import React from 'react';
import  '../../styles/Card.scss';

interface CardProps {
    message: string;
    alt: string;
    imageSrc: string;
    orientation?:  "top" | "bottom";
    align?: "left" | "center" | "right";
    background?: "default" | "selected";
}


export function Card(props: CardProps) {
const orientation = props.orientation || 'bottom';
const align = props.orientation || 'center';
const background = props.background || 'default';

    return (
            <>
            <div className=
                {`card-container ${background === 'selected' ? 'card-container--selected': ''} ${orientation === "top" ? 'card-container--top': ''}`}>
                    {   orientation === "top" &&
                        <div className='card-border__top'>
                            <div className={`card-triangle-line ${background === 'selected' ? 'card-triangle-line--selected': ''}`} ></div>
                            <div className={`card-triangle ${background === 'selected' ? 'card-triangle--selected': ''}`}></div>
                        </div>
                    }
                            <img className='card-container__image' 
                                src={require(`../../images/${props.imageSrc}.svg`)} 
                                alt={props.alt} />
                            <p className='card-container__message'>{props.message}</p>
                        {   orientation === "bottom" &&
                            <div className='card-border__bottom'>
                                <div className='card-triangle'></div>
                                <div className='card-triangle-line'></div>
                            </div>
                        }
                </div>

            </>
        )
}

