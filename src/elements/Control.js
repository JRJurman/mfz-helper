import Vue from 'vue';
import hyperVue from 'hypervue';

const mfzControlClass = `
  ba br3 ph3 pv2 dib
`;

const mfzControlStyle = `
  transform-origin: left bottom;
  transform: skewX(-20deg);
`;

const border = (side) => {
  switch (side) {
    case 'left':
      return 'br--left';
    case 'right':
      return 'br--right';
    default:
      return 'br--left br--right';
  }
};

export default Vue.component('mfz-control', {
  props: {
    text: {
      type: String,
      required: true,
    },
    side: {
      type: String,
      required: false,
    },
  },
  render(createElement) {
    const html = hyperVue(createElement);
    return html`
      <div  class="${mfzControlClass} ${border(this.side)}"
            style="${mfzControlStyle}"
      >
        ${this.text}
      </div>
    `;
  },
});
