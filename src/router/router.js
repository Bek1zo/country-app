import {createMemoryHistory, createRouter, createWebHashHistory} from 'vue-router'

import CountryList from '../views/CountryList.vue'
import Item from '../components/CountryList/Item.vue'
import Auth from '../views/Auth.vue'

const routes = [
    { path: '/', component: CountryList },
    { path: '/country/:countryId', component: Item },
    { path: '/auth', component: Auth },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router