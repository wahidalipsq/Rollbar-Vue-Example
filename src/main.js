import Vue from 'vue'
import App from './App'
import router from './router'
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
var Rollbar = require('vue-rollbar');
Vue.config.productionTip = false

/*Raven.config('https://f98a92322464438a8ad643cc27f80965@sentry.io/1236768')
    .addPlugin(RavenVue, Vue)
    .install();*/
  
    Vue.use(Rollbar, {
      accessToken: 'da15d7f183f44701ae91244b38f5501d',
      captureUncaught: true,
      captureUnhandledRejections: true,
      enabled: true,
      source_map_enabled: true,
      environment: 'production',
      payload: {
        server: {
             branch: 'master',
             root: 'webpack:///./'
        },
        client: {
             javascript: {
                code_version: '1.0'
             }
        }
      }
    });
    
    /*Vue.config.errorHandler= err => {
      console.log('handling error calling:')
      Vue.rollbar.debug(err);
    }*/
    
    /*window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
      /*if (errorMsg.indexOf('Script error.') > -1) {
          return;
      }
      console.log('on error calling:')
      Vue.rollbar.error(errorObj);
    }*/

new Vue({
  el: '#app',
  router,
  render: h => h(App,Vue.config.errorHandler= err => {
   // console.log('handling error calling:')
    Vue.rollbar.debug(err);
  })
})


