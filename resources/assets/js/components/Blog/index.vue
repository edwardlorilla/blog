<template>
    <div class="container">

        <div v-if="!dataView.SELECTED" class="row">
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
            <component :is="dynamicComponent" v-for="(postFetch, index) in dataView.dataFetch"
                       :key="postFetch.id"
                       :fetchArray="postFetch"
                        @selectedPost = "selectedPost"
            >

            </component>

        </div>
        <div v-else class="row">
            <blog-post></blog-post>
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
                dataView: BLOG_STATE.data
            }
        },
        mounted() {
            var vm = this;
            vm.fetchData()
        },
        computed: {
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
