import { newE2EPage } from '@stencil/core/testing';

describe('apaullo-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<apaullo-button></apaullo-button>');

    const element = await page.find('apaullo-button');
    expect(element).toHaveClass('hydrated');
  });
});
