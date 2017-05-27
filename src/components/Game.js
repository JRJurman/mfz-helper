import Vue from 'vue';

import '../elements/Control';

export default Vue.component('mfz-game', {
  template: `
    <div class="tc">
      <div class="f3 pb3"> Game </div>
      <div>
        <mfz-control text="Skirmish" side="left" />
        <mfz-control text="Battle" side="right" />
      </div>
      <div class="f4 pa3"> Players </div>
      <div>
        <mfz-control text="1" side="left" />
        <mfz-control text="2" />
        <mfz-control text="3" />
        <mfz-control text="4" />
        <mfz-control text="5" side="right" />
      </div>
    </div>
  `,
});
