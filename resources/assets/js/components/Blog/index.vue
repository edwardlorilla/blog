<template>
    <div class="container">
        <div class="row">
            <div v-if="!dataView.SELECTED"
                 class="col-md-8"
            >
                <staggered-fade>
                    <component v-for="(postFetch, index) in filteredData"
                               v-bind:data-index="index"

                               :is="dynamicComponent"
                               :key="postFetch.id"
                               :fetchArray="postFetch"
                               @selectedPost="selectedPost"
                    >
                    </component>
                </staggered-fade>
            </div>
            <!--</transition-group>-->
            <div v-else>
                <staggered-fade>
                    <blog-post :selectedObject="dataView.selectData"></blog-post>
                </staggered-fade>
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
    import staggeredFade from  './../Transition/staggered-fade'
    export default {
        components: {
            'default-component': defaultComponent,
            staggeredFade
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
            }
        }
    }
</script>
