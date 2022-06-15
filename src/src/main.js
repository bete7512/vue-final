import App from './App.vue'
import './apollo.js'
import router from './router'
import './index.css'


import { apolloClient } from './apollo.js';
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
});

app.use(router).mount('#app');