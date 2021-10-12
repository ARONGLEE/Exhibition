import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
    const {shape, src, size} = props;

    const styles = {
        src: src,
        size: size
    }

    if(shape === "circle"){
        return (
            <ImageCircle {...styles}>

            </ImageCircle>
        )
    }

    if(shape === "rectangle"){
        return (
            <AspectOutter>
                <AspectInner {...styles}>

                </AspectInner>
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
    src: "https://mblogthumb-phinf.pstatic.net/20160316_188/machsz_1458108041064UOBNl_JPEG/22.jpg?type=w2",
    size: 100
};

const AspectOutter = styled.div`
    width: 100%;
    min-width: 100px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 100%;
    overflow: hidden;
    background-image: url("${(props) => props.src}"); 
    background-size: cover;
    
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

export default Image;