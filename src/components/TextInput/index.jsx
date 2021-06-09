import P from 'prop-types';
import './styles.css';

export const TextIput = ({ searchValue, handleChange }) => {
    return (
        <input
            className="text-input"
            onChange={handleChange}
            value={searchValue}
            type="search"
            placeholder="Type your search"
        />
    );
};

TextIput.propTypes = {
    searchValue: P.string.isRequired,
    handleChange: P.func.isRequired,
};
