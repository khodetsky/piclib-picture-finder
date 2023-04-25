import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

interface IProps {
    picture: string,
    tags: string,
    onModalOpen: (e: React.MouseEvent<HTMLElement>) => void
}

export const ImageGalleryItem = (props: IProps) => {
    const {  picture, tags, onModalOpen } = props;
    return (
        <GalleryItem onClick={onModalOpen}>
            <GalleryItemImage src={picture} alt={tags} />
        </GalleryItem>
    );
}