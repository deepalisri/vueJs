import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './registerServiceWorker';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faPhone, faAddressBook, faEnvelope, faUser, faGlobe } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faPhone, faAddressBook, faEnvelope, faUser, faGlobe)


createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
