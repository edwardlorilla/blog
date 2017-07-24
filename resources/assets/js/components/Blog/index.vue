<template>
    <div class="container">

        <div class="row">
            <div class="well well-sm">
                <strong>Category Title</strong>
                <div class="btn-group">
                    <!--<a class="btn btn-default btn-sm" v-on:click="toggleValue = false"><span class="glyphicon glyphicon-th-list">-->
                    <!--</span>List</a>-->
                    <!--<a v-on:click="toggleValue = true" class="btn btn-default btn-sm"><span-->
                    <!--class="glyphicon glyphicon-th"></span>Grid</a>-->
                    <a class="btn btn-default"
                       v-on:click="dataFetch.STATE_VIEW = !dataFetch.STATE_VIEW"

                    >
                        <span class="glyphicon "
                              :class="dataFetch.STATE_VIEW ? 'glyphicon-th-list' : 'glyphicon-th' "
                              v-text="dataFetch.STATE_VIEW ? ' List' : ' Grid'"
                        >

                    </span>

                    </a>

                </div>
            </div>
            <component :is="dynamicComponent" v-for="postFetch in dataFetch.dataFetch" :key="postFetch.id" :fetchArray="postFetch"></component>
        </div>
    </div>
</template>

<script>

    import defaultComponent from  './grid.vue'
    import listsComponent from  './list.vue'
    import BLOG_STATE from  './../State/blogState'

    export default {
        components: {
            defaultComponent,
            listsComponent
        },
        data() {
            return {
                dataFetch: BLOG_STATE.data
            }
        },
        mounted() {
            var vm = this;
            vm.fetchData()
        },
        computed: {
            dynamicComponent() {
                var vm = this
                if (vm.dataFetch.STATE_VIEW) {
                    return 'default-component';
                } else {
                    return 'lists-component';
                }
            }
        },
        methods: {
            fetchData(){
                var urlFetch = 'api/blog';
                BLOG_STATE.fetch(urlFetch);
            }
        }
    }
</script>
