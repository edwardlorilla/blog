<template>
    <div class="container">
        <div class="row">
            <div v-if="!dataView.SELECTED"
                 class="col-md-8"
            >
                <transition-group
                        name="staggered-fade"
                        v-bind:css="false"
                        v-on:before-enter="beforeEnter"
                        v-on:enter="enter"
                        v-on:leave="leave"
                >
                    <!-- Blog Sidebar Widgets Column -->
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
                <transition
                        name="staggered-fade"
                        v-bind:css="false"
                        v-on:before-enter="beforeEnter"
                        v-on:enter="enter"
                        v-on:leave="leave"
                >
                    <blog-post :selectedObject="dataView.selectData"></blog-post>
                </transition>

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
                            {opacity: 1, height: '100%'},
                            {complete: done}
                    )
                }, delay)
            },
            leave: function (el, done) {
                var delay = el.dataset.index * 100
                setTimeout(function () {
                    Velocity(
                            el,
                            {opacity: 0, height: 0},
                            {complete: done}
                    )
                }, delay)
            }
        }
    }
</script>
