import { Formik, FormikHelpers} from "formik";
import { SearchbarStyled, SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.styled';
import { IValues } from "../../types";
import logoIcon from "../../images/logo.webp";

interface IProps {
    onSubmit: ({ searchValue }: IValues, { resetForm }: FormikHelpers<IValues>) => void
}

export const Searchbar: React.FC<IProps> = ({ onSubmit }) => {
    return (
        <SearchbarStyled>
            <a href='/' style={{position: 'absolute', top: '10', left: 50}}><img src={logoIcon} alt='логотип' width={160} /></a>
                <Formik initialValues={{searchValue: ''}} onSubmit={onSubmit}>
                <SearchForm>
                    <SearchFormButton type="submit">
                        Search
                        {/* <SearchFormButtonLabel></SearchFormButtonLabel> */}
                    </SearchFormButton>
                    <SearchFormInput
                        name="searchValue"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </Formik>
        </SearchbarStyled>
    );
}