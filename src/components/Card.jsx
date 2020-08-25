import React, { useState } from "react";

const Card = props => {
    const [isSelected, setSelect] = useState(false);
    const handleSelect = () => setSelect(!isSelected);
    const [isHover, setHover] = useState(false);
    const handleMouseOut = () => !props.disabled && setHover(!isHover);
    const handleMouseOver = () => !props.disabled && isHover && setHover(!isHover);
    const renderFooter = () => {
        const disabledText = props.footerDisabled.start + props.taste + props.footerDisabled.end;
        return <>
            {
                props.disabled ? disabledText :
                    isSelected ? props.footerSelected :
                        [props.footer, <button className="card__link">{props.footerLink}</button>]
            }
        </>
    }
    const wrapperClass = () => {
        return `wrapper ${isSelected ? 'selected' : ''} ${isHover ? 'defaultHover' : ' '} ${props.disabled ? 'disabled' : ''}`
    }
    return (
        <div className={wrapperClass()} onClick={handleSelect} onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}>
            <div className="card-border">
                <div className="card">
                    <div>
                        <p className="card__header">
                            {props.header}
                        </p>
                        <h2 className="card__title">
                            {props.title}
                            <span>{props.taste}</span>
                        </h2>
                        <p className="card__description">
                            {props.description}
                        </p>
                    </div>
                    <div className="card__weight">
                        <p>
                            {props.weight}
                        </p>
                        <p>
                            {props.weightMeasure}
                        </p>
                    </div>
                </div>
            </div>

            <div className="card__footer" onClick={handleSelect}>
                {renderFooter()}
            </div>
        </div >


    )
}

export default Card;