import React from 'react';
import styled from 'styled-components'
const PlusButton = (props) => {
    const {color} = props;

    const styles = {
        color:color
    }
    return(
        <React.Fragment>
            <PlusBtn {...styles}><div>+</div></PlusBtn>
        </React.Fragment>
    )
}

PlusButton.defaultProps ={
    color: "yellow"
}

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

export default PlusButton;