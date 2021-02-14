import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'apaullo-button',
  styleUrl: 'apaullo-button.css',
  shadow: true,
})
export class ApaulloButton {
  @Prop() text: string;
  @Prop() appearance: string;

  render() {
    return (
      <button class={`btn ${this.appearance}`} type="button">
        {this.text}
      </button>
    );
  }

}
