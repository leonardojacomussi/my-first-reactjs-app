import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextIput } from '.';

describe('<TextIput />', () => {
    it('should have a value of searchValue', () => {
        const fn = jest.fn();
        render(<TextIput handleChange={fn} searchValue={'testando'} />);
        const input = screen.getByPlaceholderText(/type your search/i);
        expect(input.value).toBe('testando');
    });

    it('should call handleChange function on each key pressed', () => {
        const fn = jest.fn();
        render(<TextIput handleChange={fn} searchValue="um valor qualquer" />);

        const input = screen.getByPlaceholderText(/type your search/i);
        const value = 'o valor';

        userEvent.type(input, value);

        expect(input.value).toBe('um valor qualquer');
        expect(fn).toHaveBeenCalledTimes(value.length);
    });

    it('should match snapshot', () => {
        const fn = jest.fn();
        const { container } = render(<TextIput handleChange={fn} searchValue="" />);
        expect(container).toMatchSnapshot();
    });
});
