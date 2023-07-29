import { createRouter, createWebHistory } from "vue-router";
import HomePage from './views/HomePage.vue'
import ProductPage from './views/ProductPage.vue'

// Creating Router and setting up the paths inside createRouter method
export const router = createRouter({
history:createWebHistory(),
    routes: [
        {//route for homepage
            path:"/",
            component: HomePage
        },
        {
            path:'/product/:productid',
            name:"Product",
            component:ProductPage,
            props:true
        }
    ]

})