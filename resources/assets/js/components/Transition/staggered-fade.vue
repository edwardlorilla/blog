<template>
    <transition-group
            name="staggered-fade"
            v-bind:css="false"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
    >
        <slot></slot>
    </transition-group>
</template>

<script>
    export default {
        methods:{
            beforeEnter: function (el) {
                el.style.opacity = 0
                el.style.height = 0
            },
            enter: function (el, done) {
                var delay = el.dataset.index * 100
                setTimeout(function () {
                    Velocity(
                            el,
                            {opacity: 1, height: '100%'},
                            {complete: done}
                    )
                }, delay)
            },
            leave: function (el, done) {
                var delay = el.dataset.index * 100
                setTimeout(function () {
                    Velocity(
                            el,
                            {opacity: 0, height: 0},
                            {complete: done}
                    )
                }, delay)
            }
        }
    }
</script>
