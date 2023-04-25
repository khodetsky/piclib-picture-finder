import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyles } from './ImageGallery.styled';

import { IImage } from "../../types";

interface IProps {
    images: IImage[],
    onModalOpen: (e: React.MouseEvent<HTMLElement>) => void
}

export const ImageGallery = (props: IProps) => {
    const { images, onModalOpen } = props;

    return (
        <>
            <ImageGalleryStyles>
                {images.map(({id, webformatURL, tags}) => (
                    <ImageGalleryItem key={id} picture={webformatURL} tags={tags} onModalOpen={onModalOpen} />
                ))}
            </ImageGalleryStyles>
        </>
    )
}