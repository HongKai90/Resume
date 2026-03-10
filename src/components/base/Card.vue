<script setup>
const props = defineProps({
    title: { type: String, default: "" }
});
</script>

<template>
    <div class="card">
        <div class="title" v-if="(props.title || '').length > 0">{{ props.title }}</div>
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.card {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--bs-gray-200);
    border: 1px solid var(--bs-gray-300);
    box-shadow: 0 0 10px rgba(var(--bs-black-100-rgb), 0.25);

    .title {
        line-height: 1;
        font-weight: 700;
        font-size: 1.2rem;
        text-align: center;

        z-index: 1;
        position: relative;
        margin-bottom: 1rem;

        &::before {
            left: 25%;
            z-index: -1;
            content: '';
            bottom: -0.25rem;
            position: absolute;

            width: 50%;
            height: 0.6rem;
            border-radius: 0.3rem;
            background-color: var(--bs-gray-450);
        }
    }
}

[data-bs-theme="dark"] .card {
    background-color: var(--bs-gray-800);
    border: 1px solid var(--bs-gray-700);
    box-shadow: 0 0 10px rgba(var(--bs-black-900-rgb), 0.25);

    .title {
        &::before {
            background-color: var(--bs-gray-700);
        }
    }
}
</style>