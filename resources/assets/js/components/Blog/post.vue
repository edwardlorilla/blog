<template>
    <div class="col-md-8">
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
        methods: {

        }
    }
</script>
