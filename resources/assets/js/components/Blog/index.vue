<template>
    <fade>
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
                    <fade >
                        <blog-post :selectedObject="dataView.selectData"></blog-post>
                    </fade>
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
                    <search v-model="searchValue"></search>
                </div>
            </div>
        </div>
    </fade>
</template>
<script>
    import BLOG_STATE from  './../State/blogState'
    import {defaultComponent} from  './../State/blogState'
    export default {
        components: {
            'default-component': defaultComponent,
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
        }
    }
</script>
