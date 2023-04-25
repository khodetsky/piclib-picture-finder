import { Formik, FormikHelpers} from "formik";
import { SearchbarStyles, SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.styled';
import { IValues } from "../../types"

interface IProps {
    onSubmit: ({ searchValue }: IValues, { resetForm }: FormikHelpers<IValues>) => void
}

export const Searchbar: React.FC<IProps> = ({ onSubmit }) => {
    return (
        <SearchbarStyles>
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
        </SearchbarStyles>
    );
}