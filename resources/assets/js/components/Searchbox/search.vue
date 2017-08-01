<template>
    <div class="well">
        <h4>Blog Search</h4>
        <div class="input-group">
            <input :value="search_prop" @input="searchValue($event.target.value)" type="text"  class="form-control">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button">
                                <span class="glyphicon glyphicon-search"></span>
                                </button>
                            </span>
        </div>
    </div>
</template>

<script>
    export default {
        model:{
            prop:'search_prop',
            event:'search_event'
        },

        props:['search_prop'],

        methods:{
            searchValue(event){
                this.$emit('search_event', event)
            }
        }
    }
</script>
