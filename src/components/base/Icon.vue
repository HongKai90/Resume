<script setup>
const props = defineProps({
    size: {
        type: String,
        default: '1.6rem',
    }
});
</script>

<template>
    <div class="icon" :style="'--size:' + props.size">
        <slot>emoticon</slot>
    </div>
</template>

<style lang="scss" scoped>
@import '@/styles/MaterialSymbols.scss';

.icon {
    --size: 1rem;

    @include material-symbols();
    line-height: var(--size);
    text-align: center;
    font-size: calc(var(--size) * 0.625);

    flex-grow: 0;
    flex-shrink: 0;
}
</style>