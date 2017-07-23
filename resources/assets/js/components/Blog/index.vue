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
                       v-on:click="toggleValue = !toggleValue"

                    >
                        <span class="glyphicon "
                              :class="toggleValue ? 'glyphicon-th-list' : 'glyphicon-th' "
                              v-text="toggleValue ? ' List' : ' Grid'"
                        >

                    </span>

                    </a>

                </div>
            </div>
            <component :is="dynamicComponent" v-for="postFetch in dataView.dataFetch" :key="postFetch.id" :fetchArray="postFetch"></component>
        </div>
    </div>
</template>

<script>

    import defaultComponent from  './show.vue'
    import listsComponent from  './list.vue'
    import {STATE_VIEW} from  './../State/blogState'
    import BLOG_STATE from  './../State/blogState'
    export default {
        components: {
            defaultComponent,
            listsComponent
        },
        data() {
            return {
                toggleValue: STATE_VIEW,
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
                if (vm.toggleValue) {
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
