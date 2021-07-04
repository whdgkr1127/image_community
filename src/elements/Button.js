import React from 'react';
import styled from 'styled-components';

const Button = (props) => {

    const {text, _onClick, color, is_float, children} = props

    const styles = {
        color:color
    }
    if(is_float){
        return (
            <React.Fragment>
                <PlusBtn {...styles} onClick={_onClick}>{text? text:children}</PlusBtn>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <ElButton {...styles} onClick={_onClick}>{text? text:children}</ElButton>
        </React.Fragment>
    )
}

Button.defaultProps = {
    children:null,
    text: false,
    _onClick:() => {},
    color:"white",
    is_float:false
}

const ElButton = styled.button`
    width: 100%;
    background-color:#212121;
    color: ${(props) => props.color};
    padding: 12px 0px;
    box-sizing:border-box;
    border:none;
`
const PlusBtn = styled.div`
    background-color: ${(props) =>props.color};
   width:50px;
   height:50px;
   display: flex;
   justify-content:center;
   align-items:center;
   border-radius: 50%;
   position: absolute;
   right: 30px;
   top: 380px;
`
export default Button;