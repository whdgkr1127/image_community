import styled from 'styled-components'
import React from 'react'

const Image = (props) =>{
    const {shape, src, size} = props;

    const styles = {
        src:src,
        size:size
    }

    if(shape === "circle"){
        return(
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle"){
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }

    return(
        <React.Fragment>

        </React.Fragment>
    )
}

Image.defaultProps = {
    shape: "circle",
    src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MThfMTUz%2FMDAxNjE4NzQwOTUxMjA1.DuFAjU5RnYZ4sWZgzbtTwDZbuYGQiYWgacB2Zyiicr8g.ZhofIlad0ekxVXbD9UYhrVDYUm_PQolitqKbHsYtpyog.JPEG.wjdthdus712%2FIMG_8727.jpg&type=sc960_832",
    size: 36,
}

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) =>props.src}");
    background-size: cover;
`

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`
//css에서도 변수를 사용 할 수 있다. --변수명  -> 사용 할 때는 var(--변수명) 
export default Image;