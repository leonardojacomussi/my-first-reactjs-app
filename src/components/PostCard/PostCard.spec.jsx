import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
    // Verifica se o card foi renderizado corretamente
    it('should render PostCard correctly', () => {
        render(<PostCard {...props} />);
        const image = screen.getByRole('img', { name: /title 1/i });
        expect(image).toHaveAttribute('src', 'img/img.png');
        const heading = screen.getByRole('heading', { name: 'title 1' });
        expect(heading).toBeInTheDocument();
        const paragrafo = screen.getByText('body 1');
        expect(paragrafo).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { container } = render(<PostCard {...props} />);
        expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="post"
      >
        <img
          alt="title 1"
          src="img/img.png"
        />
        <div
          class="post-content"
        >
          <h2>
            title 1
          </h2>
          <p>
            body 1
          </p>
        </div>
      </div>
    `);
    });
});
