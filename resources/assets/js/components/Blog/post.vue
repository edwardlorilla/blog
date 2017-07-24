<template>
    <div class="col-lg-8">
        <!-- Blog Post -->

        <!-- Title -->
        <h1>{{selectedObject.title}}</h1>

        <!-- Author -->
        <p class="lead">
            by <a href="#">Start Bootstrap</a>
        </p>

        <hr>

        <!-- Date/Time -->
        <p><span class="glyphicon glyphicon-time"></span> Posted on {{selectedObject.created_at}}</p>

        <hr>

        <!-- Preview Image -->
        <img class="img-responsive" src="http://placehold.it/900x300" alt="">

        <hr>

        <!-- Post Content -->
        <p class="lead">
            {{selectedObject.content}}
        </p>

        <hr>
    </div>
</template>

<script>
    export default {
        props: ['selectedObject'],
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
