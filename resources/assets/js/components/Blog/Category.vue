<template>
    <div class="well well-sm">
        <strong>Category Title</strong>
        <div class="btn-group">
            <!--<a class="btn btn-default btn-sm" v-on:click="toggleValue = false"><span class="glyphicon glyphicon-th-list">-->
            <!--</span>List</a>-->
            <!--<a v-on:click="toggleValue = true" class="btn btn-default btn-sm"><span-->
            <!--class="glyphicon glyphicon-th"></span>Grid</a>-->
            <a class="btn btn-default"
               v-on:click="state_change"

            >
                            <span class="glyphicon "
                                  :class="state_view ? 'glyphicon-th-list' : 'glyphicon-th' "
                                  v-text="state_view ? ' List' : ' Grid'"
                            >

                                </span>

            </a>

        </div>
    </div>
</template>

<script>
    export default {
        props:['state_view'],
        methods:{
            state_change(){
                var STATE = (this.state_view = !this.state_view)
                this.$emit('state_change', STATE)
            }
        }
    }
</script>
