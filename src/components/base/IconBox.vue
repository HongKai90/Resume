<script setup>
import Icon from './Icon.vue';

const props = defineProps({
    size: {
        type: String,
        default: '2rem',
    }
});

</script>

<template>
    <div class="icon-box" :style="'--size:' + props.size">
        <Icon :size="props.size">
            <slot>emoticon</slot>
        </Icon>
    </div>
</template>

<style lang="scss" scoped>
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/variables';

.icon-box {
    --size: 2rem;
    width: var(--size);
    height: var(--size);

    padding: 0;
    overflow: hidden;

    border: unset;
    border-radius: 0.5rem;
    color: var(--bs-gray-600);
    background-color: var(--bs-gray-200);

    transition: background-color 0.2s;

    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    @each $color,
    $value in $colors {
        &.#{$color} {
            color: var(--bs-#{$color}-500);
            background-color: var(--bs-#{$color}-100);
        }
    }
}
</style>