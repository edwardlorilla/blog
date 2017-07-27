<template>
    <div class="container">
        <div class="row">
            <div v-if="!dataView.SELECTED"
                 class="col-md-8"
                 >
                <!--<transition-group

                >-->
                    <!-- Blog Sidebar Widgets Column -->
                    <transition-group
                            name="component-fade"
                            mode="out-in"
                    >
                    <component v-for="(postFetch, index) in filteredData"
                               v-bind:data-index="index"

                               :is="dynamicComponent"
                               :key="postFetch.id"
                               :fetchArray="postFetch"
                               @selectedPost="selectedPost"
                    >
                    </component>
                    </transition-group>
            </div>
                <!--</transition-group>-->
            <div v-else>
                <blog-post :selectedObject="dataView.selectData"></blog-post>
            </div>
            <div class="col-md-4">
                <div class="well well-sm">
                    <strong>Category Title</strong>
                    <div class="btn-group">
                        <!--<a class="btn btn-default btn-sm" v-on:click="toggleValue = false"><span class="glyphicon glyphicon-th-list">-->
                        <!--</span>List</a>-->
                        <!--<a v-on:click="toggleValue = true" class="btn btn-default btn-sm"><span-->
                        <!--class="glyphicon glyphicon-th"></span>Grid</a>-->
                        <a class="btn btn-default"
                           v-on:click="dataView.STATE_VIEW = !dataView.STATE_VIEW"

                        >
                            <span class="glyphicon "
                                  :class="dataView.STATE_VIEW ? 'glyphicon-th-list' : 'glyphicon-th' "
                                  v-text="dataView.STATE_VIEW ? ' List' : ' Grid'"
                            >

                                </span>

                        </a>

                    </div>
                </div>
                <!-- Blog Search Well -->
                <div class="well">
                    <h4>Blog Search</h4>
                    <div class="input-group">
                        <input type="text" v-model="searchValue" class="form-control">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button">
                                <span class="glyphicon glyphicon-search"></span>
                                </button>
                            </span>
                    </div>
                    <!-- /.input-group -->
                </div>
            </div>
        </div>

    </div>
</template>
<style scoped>
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active 在低于 2.1.8 版本中 */ {
        opacity: 0;
    }
</style>
<script>
    import BLOG_STATE from  './../State/blogState'
    import {defaultComponent} from  './../State/blogState'
    export default {
        components: {
            'default-component': defaultComponent
        },
        data() {
            return {
                searchValue: '',
                dataView: BLOG_STATE.data
            }
        },
        mounted() {
            var vm = this;
            vm.fetchData()
        },
        computed: {
            filteredData () {
                var data = this.dataView.dataFetch.filter(function (country) {
                    return country.title.toLowerCase().includes(this.searchValue.toLowerCase());
                }.bind(this))
                return data
            },
            dynamicComponent() {
                var vm = this
                if (vm.dataView.STATE_VIEW) {
                    return 'default-component';
                } else {
                    return 'lists-component';
                }
            }
        },
        methods: {
            selectedPost(index){
                BLOG_STATE.selectedPost(index);
            },
            fetchData(){
                var urlFetch = 'api/blog';
                BLOG_STATE.fetch(urlFetch);
            },
            beforeEnter: function (el) {
                el.style.opacity = 0
                el.style.height = 0
            },
            enter: function (el, done) {
                var delay = el.dataset.index * 100
                setTimeout(function () {
                    Velocity(
                            el,
                            { opacity: 1, height: '*=10em' },
                            { complete: done }
                    )
                }, delay)
            },
            leave: function (el, done) {
                var delay = el.dataset.index * 100
                setTimeout(function () {
                    Velocity(
                            el,
                            { opacity: 0, height: 0 },
                            { complete: done }
                    )
                }, delay)
            }
        }
    }
</script>
