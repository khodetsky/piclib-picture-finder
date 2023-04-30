import { Button, BtnContainer } from './LoadMoreBtn.styled';

interface IProps {
    onLoadMore: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export const LoadMoreBtn: React.FC<IProps> = ({onLoadMore}: IProps) => {
    return (
        <BtnContainer>
            <Button type="button" onClick={onLoadMore}>Load more</Button>
        </BtnContainer>
    )
}