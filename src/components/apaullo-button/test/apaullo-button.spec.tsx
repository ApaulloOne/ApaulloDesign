import { newSpecPage } from '@stencil/core/testing';
import { ApaulloButton } from '../apaullo-button';

describe('apaullo-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApaulloButton],
      html: `<apaullo-button></apaullo-button>`,
    });
    expect(page.root).toEqualHtml(`
      <apaullo-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </apaullo-button>
    `);
  });
});
