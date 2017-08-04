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
                    <fade>
                        <blog-post :selectedObject="dataView.selectData"></blog-post>
                    </fade>
                </div>
                <div class="col-md-4">
                    <category :state_view="dataView.STATE_VIEW" @state_change="dataView.STATE_VIEW = $event"></category>
                    <search @search_button="unSelected()" v-model="searchValue"></search>
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
            filteredData() {
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
            unSelected(){
                BLOG_STATE.unSelected()
            }

        }
    }
</script>
