import { Button, BtnContainer } from './LoadMoreBtn.styled';

interface IProps {
    onLoadMore: () => void,
}

export const LoadMoreBtn = ({onLoadMore}: IProps) => {
    return (
        <BtnContainer>
            <Button type="button" onClick={onLoadMore}>Load more</Button>
        </BtnContainer>
    )
}