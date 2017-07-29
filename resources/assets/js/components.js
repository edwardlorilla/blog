/**
 * Created by Lorilla on 30/07/2017.
 */
import blogPost from  './components/Blog/post.vue'
import listsComponent from  './components/Blog/list.vue'

Vue.component('lists-component', function (resolve, reject) {
    setTimeout(function () {
        resolve(listsComponent)
    }, 600)
});
Vue.component('blog-post', function (resolve, reject) {
    setTimeout(function () {
        resolve(blogPost)
    }, 600)
});
