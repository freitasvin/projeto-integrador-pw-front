import { DropMenuStyle } from '../styles/DropMenuStyle';

function DropMenu(props) {
    return (
        <DropMenuStyle type={props.type} aria-label={`${props.type} Select`}>
            <option>{props.type}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </DropMenuStyle>
    );
}

export default DropMenu;