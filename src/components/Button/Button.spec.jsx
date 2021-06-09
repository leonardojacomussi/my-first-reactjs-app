import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
    // Verifica se há um botão com texto Load more na tela
    it('should render the button with the text "Load More"', () => {
        const fn = jest.fn();
        render(<Button text="Load more" disabled={false} onClick={fn} />);
        // Mais utilizado em testes assíncronos
        expect.assertions(1);
        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    });
    // Verifica se uma função e chamada ao clicar no botão e quantas vezes é chamada
    it('should call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="Load more" disabled={false} onClick={fn} />);
        const button = screen.getByRole('button', { name: /load more/i });
        fireEvent.click(button);
        userEvent.click(button);
        expect(fn).toHaveBeenCalledTimes(2);
    });
    // Verifica se o botão é desabilitado ao passar o argumento disabled=true
    it('should be disabled when disabled is true', () => {
        const fn = jest.fn();
        render(<Button text="Load more" disabled={true} onClick={fn} />);
        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeDisabled();
    });
    // Verifica se o botão é habilitado ao passar o argumento disabled=false
    it('should be enabled when disabled is false', () => {
        const fn = jest.fn();
        render(<Button text="Load more" disabled={false} onClick={fn} />);
        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeEnabled();
    });
    // Snapshot
    it('should match snapshot', () => {
        const fn = jest.fn();
        const { container } = render(<Button text="Load more" disabled={false} onClick={fn} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
