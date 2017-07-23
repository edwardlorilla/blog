<template>
    <div class="col-xs-12 col-sm-6 col-md-3 rwrapper">
        <div class="rlisting">
            <div class="col-md-12 nopad">
                <img src="http://dummyimage.com/250x250" class="img-responsive">
            </div>
            <div class="col-md-12 nopad">
                <h1>{{fetchArray.title}}</h1>
                <h5>{{fetchArray.created_at}}</h5>
                <p>{{fetchArray.content}}</p>
                <div class="rfooter">
                    <i class="fa fa-phone-square"></i> +3000000
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .bg {
        background-color: #dfdfdf;
    }

    .rwrapper {
        padding: 5px;
    }

    .rlisting {
        background-color: #fff;
        overflow: hidden;
    }

    .rlisting img {
        width: 100%
    }

    .nopad {
        padding: 0;
    }

    .rfooter {
        background: #f1f3f5;
        border-top: 1px #ebebeb solid;
        width: 100%;
        padding: 10px 15px
    }

    .rlisting h5, .rlisting p {
        padding: 0 15px;
    }
</style>
<script>
    export default {
        props:['fetchArray'],
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
