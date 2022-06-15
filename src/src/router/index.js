import { createRouter, createWebHistory } from "vue-router"
import Addpage from '../components/Addpage.vue'
import deletepage from '../components/deletepage.vue'
import Pagelist from '../components/Pagelist.vue'
import detail from '../components/detail.vue'
import editPage from '../components/editpage.vue'
import Post from '../components/post.vue'
import home from '../components/home.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
    },
    {
        path: '/Addpage',
        name: 'Addpage',
        component: Addpage,
    },
    {
        path: '/Pagelist/:slug',
        name: 'Pagelist',
        component: Pagelist,
        children:
            [
                {
                    path: '/:slug',
                    component: detail,
                    name: 'detail',
                },
                 
            {
                path: '/:slug',
                component: deletepage,
                name: 'deletepage',
            },
            {
                path: '/:slug',
                component: editPage,
                name: 'editPage',
            },
            {
                path: '/:slug',
                component: Post,
                name: 'Post',

            }


            ]
    },


]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router 
