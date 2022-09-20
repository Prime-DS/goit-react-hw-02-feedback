import PropTypes from 'prop-types';
import { El } from "./Element.styled";

export const Element = ({ label, percentage }) => {
    return (
        <El>
            <span >{label}</span>
            <span >{percentage}</span>
        </El>
    );
};

Element.propTepes = {
    label:PropTypes.string.isRequired,
    percentage:PropTypes.string.isRequired,
}