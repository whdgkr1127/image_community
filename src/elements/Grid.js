import React from 'react';
import styled from 'styled-components'
const Grid = (props) => {
    //const {}안에있는 변수를 props의 값들로 초기화 시켜준다.
    const {is_flex, width, margin, padding, bg, children} = props;

    //전달받은 props를 별도의 변수에 저장한다.
    const styles = {
        is_flex:is_flex,
        width:width,
        margin:margin,
        padding:padding,
        bg:bg
    }

    return(
        <React.Fragment>
            <GridBox {...styles}>
            {children}
            </GridBox>
        </React.Fragment>//children은  부모 컴포넌트에 Grid로 감싸진 태그들을 불러온다.
    )
}
//props의 기본값을 지정해 둔다.
Grid.defaultProps = {
    children: null,
    is_flex: false,
    width: "100%",
    padding: false,
    margin: false,
    bg: false
}

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: 100%;
    box-sizing: border-box;
    ${(props) => props.padding? `padding: ${props.padding};`: ''}
    ${(props) => props.margin? `margin: ${props.margin};`: ''}
    ${(props) => props.bg? `background-color: ${props.bg};`: ''}
    ${(props) => props.is_flex? `display:flex; align-items:center; justify-content: space-between;`:""}
`
export default Grid;