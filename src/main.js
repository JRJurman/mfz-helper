// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'tachyons/css/tachyons.css';

import './styles.css';
import './elements/Header';
import './elements/Border';
import './components/Game';
import './components/Frames';
import './components/Score';

Vue.config.productionTip = false;

const panelClass = 'fl w-100 w-third-ns';
const panelStyle = 'min-width: 300px;';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `
    <div id="app" class="sans-serif b gold bg-dark-gray">
      <mfz-header/>
      <mfz-border/>
      <div class="w-100-ns">
        <div class="${panelClass}" style="${panelStyle}">
          <mfz-game/>
        </div>
        <div class="${panelClass}" style="${panelStyle}">
          <mfz-frames/>
        </div>
        <div class="${panelClass}" style="${panelStyle}">
          <mfz-score/>
        </div>
      </div>
    </div>
  `,
});
