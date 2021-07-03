import React from 'react';
import styled from 'styled-components';

const Button = (props) => {

    const {text, _onClick, color} = props

    const styles = {
        color:color
    }
    return (
        <React.Fragment>
            <ElButton {...styles} onClick={_onClick}>{text}</ElButton>
        </React.Fragment>
    )
}

Button.defaultProps = {
    text:"텍스트",
    _onClick:() => {},
    color:"white"
}

const ElButton = styled.button`
    width: 100%;
    background-color:#212121;
    color: ${(props) => props.color};
    padding: 12px 0px;
    box-sizing:border-box;
    border:none;
`

export default Button;