import styled from 'styled-components';

export const GalleryContainer = styled.div`
    width: 1000px;
    height: 470px;

    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    position: relative;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
`

export const Text = styled.p`
    margin-bottom: 35px;
    margin-left: 70px;

    font-family: inherit;
    font-size: 60px;
    line-height: 50px;
    font-style: normal;
    font-weight: 500;
`

// images

export const Img1 = styled.img`
    width: 150px;
    height: auto;
    border-radius: 15px;
`

export const Img2 = styled.img`
    width: 120px;
    height: auto;
    border-radius: 15px;
`
export const Img3 = styled.img`
    width: 175px;
    height: auto;
    border-radius: 15px;
`
export const Img4 = styled.img`
    width: 220px;
    height: auto;
    border-radius: 15px;
`
export const Img5 = styled.img`
    width: 140px;
    height: auto;
    border-radius: 15px;
`
export const Img6 = styled.img`
    width: 200px;
    height: auto;
    border-radius: 15px;
`
export const Img7 = styled.img`
    width: 150px;
    height: auto;
    border-radius: 15px;
`
export const Img8 = styled.img`
    width: 175px;
    height: auto;
    border-radius: 15px;
`

// List items

export const Item1 = styled.li`
    position: absolute;
    top: 75px;
    left: 20px;
    transition: all 300ms linear;

    :hover {
        transform: scale(1.7);
    }
`
export const Item2 = styled.li`
    position: absolute;
    top: 220px;
    left: 105px;
    transition: all 300ms linear;

    :hover {
        transform: scale(2.2);
        top: 200px;
    }
    ${Item1}:has(+ &:hover) {
        top: 20px;
    }
    ${Item1}:hover ~ & {
        top: 250px;
    }
`

export const Item3 = styled.li`
    position: absolute;
    top: 30px;
    left: 240px;
    transition: all 300ms linear;

    :hover {
        transform: scale(1.7);
        top: 40px;
    }
    ${Item1}:has(~ &:hover) {
        left: 15px;
    }
    ${Item1}:hover ~ & {
        left: 250px;
    }
    ${Item2}:hover ~ & {
        top: 20px;
    }
`

export const Item4 = styled.li`
    position: absolute;
    top: 190px;
    left: 320px;
    transition: all 300ms linear;

    :hover {
        transform: scale(1.5);
    }
    ${Item3}:has(+ &:hover) {
        top: 20px;
    }
    ${Item3}:hover ~ & {
        top: 210px;
    }
`
export const Item5 = styled.li`
    position: absolute;
    top: 15px;
    left: 490px;
    transition: all 300ms linear;

    :hover {
        transform: scale(2);
        top: 45px;
    }
    ${Item3}:has(~ &:hover) {
        left: 230px;
    }
    ${Item4}:has(~ &:hover) {
        top: 200px;
    }
`
export const Item6 = styled.li`
    position: absolute;
    top: 140px;
    left: 590px;
    transition: all 300ms linear;

    :hover {
        transform: scale(1.5);
    }
    ${Item4}:has(~ &:hover) {
        left: 305px;
    }
    ${Item5}:has(~ &:hover) {
        top: 0px;
    }
    ${Item4}:hover ~ & {
        left: 610px;
    }
    ${Item5}:hover ~ & {
        top: 190px;
        transform: scale(0.8);
    }
`
export const Item7 = styled.li`
    position: absolute;
    top: 80px;
    left: 825px;
    transition: all 300ms linear;

    :hover {
        transform: scale(2);
    }
    ${Item6}:has(~ &:hover) {
        left: 550px;
        transform: scale(0.8);
    }
    ${Item6}:hover ~ & {
        left: 855px;
    }
`
export const Item8 = styled.li`
    position: absolute;
    top: 320px;
    left: 765px;
    transition: all 300ms linear;

    :hover {
        transform: scale(1.7);
        top: 310px;
    }
    ${Item6}:has(~ &:hover) {
        top: 120px;
    }
`