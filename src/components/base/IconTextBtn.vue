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
    <button class="icon-text-btn" :style="'--size:' + props.size">
        <Icon :size="props.size">
            <slot name="icon">emoticon</slot>
        </Icon>
        <div class="text">
            <slot name="text">emoticon</slot>
        </div>
    </button>
</template>

<style lang="scss" scoped>
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/variables';

.icon-text-btn {
    --size: 2rem;
    width: auto;
    height: var(--size);

    padding: 0 0.5rem;
    cursor: pointer;
    overflow: hidden;
    text-decoration: none;

    border: unset;
    border-radius: 0.5rem;
    color: var(--bs-gray-600);
    background-color: var(--bs-gray-200);

    transition: background-color 0.2s;

    gap: 0.25rem;
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    &:not(:disabled):hover {
        color: var(--bs-gray-700);
        background-color: var(--bs-gray-300);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    @each $color,
    $value in $colors {
        &.#{$color} {
            color: var(--bs-#{$color}-500);
            background-color: var(--bs-#{$color}-100);

            &:not(:disabled):hover {
                color: var(--bs-#{$color}-700);
                background-color: var(--bs-#{$color}-200);
            }
        }
    }

    .text {
        line-height: 1;
        font-size: 0.85rem;
        user-select: none;
    }
}
</style>