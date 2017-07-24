/**
 * Created by Lorilla on 21/07/2017.
 */
const Home= resolve => require(['./components/Blog/index.vue'], resolve);
const blogShow= resolve => require(['./components/Blog/grid.vue'], resolve);
export default [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/show/:id',
        component: blogShow,
        name: 'show'
    }
]