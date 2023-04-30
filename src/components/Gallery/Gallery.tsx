import animalImg from "../../images/animal.webp";
import architectureImg from "../../images/architecture.webp";
import compassImg from "../../images/compass.webp";
import housesImg from "../../images/houses.webp";
import mountainsImg from "../../images/mountains.webp";
import platterImg from "../../images/platter.webp";
import skateboardImg from "../../images/skateboard.webp";
import wheatImg  from "../../images/wheat.webp";

import {
    GalleryContainer, Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8,
Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8, Text} from "./Gallery.styled"



export const Gallery: React.FC = () => {

    return (
        <GalleryContainer>
            <Text>
                <span style={{color: "rgb(63, 81, 181)"}}>Find</span> <br/>&nbsp;&nbsp;&nbsp; any image you need
            </Text>
            <ul>
                <Item1>
                    <Img1 src={animalImg} alt="animal"/>
                </Item1>
                <Item2>
                    <Img2 src={architectureImg} alt="architecture"/>
                </Item2>
                <Item3>
                    <Img3 src={compassImg} alt="compass"/>
                </Item3>
                <Item4>
                    <Img4 src={wheatImg} alt="wheat"/>
                </Item4>
                <Item5>
                    <Img5 src={platterImg} alt="platter"/>
                </Item5>
                <Item6>
                    <Img6 src={mountainsImg} alt="mountains"/>
                </Item6>
                <Item7>
                    <Img7 src={skateboardImg} alt="skateboard"/>
                </Item7>
                <Item8>
                    <Img8 src={housesImg} alt="houses"/>
                </Item8>
            </ul>
            
        </GalleryContainer>
    )
}