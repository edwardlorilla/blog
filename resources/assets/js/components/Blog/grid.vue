<template>
    <div>
        <h1 class="page-header">
            Page Heading
            <small>Secondary Text</small>
        </h1>

        <!-- First Blog Post -->
        <h2>
            <a href="#">{{fetchArray.title}}</a>
        </h2>
        <p class="lead">
            by <a >Start Bootstrap</a>
        </p>
        <p><span class="glyphicon glyphicon-time"></span> Posted on {{fetchArray.created_at}}</p>
        <hr>
        <img class="img-responsive" src="http://placehold.it/900x300" alt="">
        <hr>
        <p>{{fetchArray.content}}</p>
        <a class="btn btn-primary" @click="$emit('selectedPost', fetchArray)">Read More <span
                class="glyphicon glyphicon-chevron-right"></span></a>

        <hr>
    </div>
</template>

<script>
    export default {
        props:['fetchArray']
    }
</script>
