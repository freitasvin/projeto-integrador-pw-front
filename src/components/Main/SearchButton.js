import { SearchButtonStyle } from '../../styles/SearchButtonStyle';
import SearchIcon from '../../Images/Icons/Lupa.png';

function SearchButton() {
    return (
        <>
            <SearchButtonStyle>
                <img src={SearchIcon} alt="SearchIcon"/>
            </SearchButtonStyle>
        </>
    );
}

export default SearchButton;