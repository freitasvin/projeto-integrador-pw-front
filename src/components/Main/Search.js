import DropMenu from '../DropMenu';
import SearchButton from './SearchButton';
import { SearchStyle } from '../../styles/SearchStyle';


function Search() {
    return(
        <SearchStyle>
            <DropMenu type="UF" />
            <DropMenu type="Cidade" />
            <DropMenu type="Bairro" />
            <SearchButton />
        </SearchStyle>
    )
}

export default Search;