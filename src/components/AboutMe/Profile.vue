<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useLangStore } from '@store/lang';

import Card from '@cp/base/Card.vue';

const langStore = useLangStore();
const { lang } = storeToRefs(langStore);

const isFlipped = ref(false);

const text = {
    name: {
        en: "Hong-Kai Chen",
        tw: "陳虹凱"
    },
    work: {
        en: "Software / Web Engineer",
        tw: "軟體 / 網頁工程師"
    }
}
</script>

<template>
    <Card>
        <div class="profile" :class="{ 'flipped': isFlipped }" @mouseenter="isFlipped = true"
            @mouseleave="isFlipped = false">
            <div class="profile-img front">
                <img src="/src/assets/head1.jpg" style="object-position: 0 0px;">
            </div>
            <div class="profile-img back">
                <img src="/src/assets/head2.jpg">
            </div>
        </div>

        <div class="name">
            {{ text.name[lang] }}
        </div>

        <div class="work">
            {{ text.work[lang] }}
        </div>
    </Card>
</template>

<style lang="scss" scoped>
.profile {
    width: 100%;
    aspect-ratio: 0.85;
    max-width: 150px;

    margin: auto;
    position: relative;

    .profile-img {
        width: 100%;
        height: 100%;

        top: 0;
        left: 0;
        z-index: 0;
        position: absolute;

        overflow: hidden;
        border-radius: 0.5rem;
        box-shadow: 0 0 10px rgba(var(--bs-black-100-rgb), 0.5);

        backface-visibility: hidden;
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            overflow: hidden;
        }

        &.front {
            transform: perspective(600px) rotateY(0deg);
        }

        &.back {
            transform: perspective(600px) rotateY(180deg);
        }
    }

    &.flipped .profile-img.front {
        transform: perspective(600px) rotateY(-180deg);
    }

    &.flipped .profile-img.back {
        transform: perspective(600px) rotateY(0deg);
    }
}

.name {
    font-size: 1rem;
    font-weight: 700;
    text-align: center;

    margin-top: 0.5rem;
}

.work {
    font-size: 0.8rem;
    font-weight: 500;
    text-align: center;

    margin-top: 0.25rem;
    color: var(--bs-gray-600);
}


[data-bs-theme="dark"] {
    .work {
        color: var(--bs-gray-500);
    }

    .profile {
        .profile-img {
            box-shadow: 0 0 10px rgba(var(--bs-black-900-rgb), 0.3);
        }
    }
}
</style>