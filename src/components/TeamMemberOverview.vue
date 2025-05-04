<template>
    <v-container class="d-flex">
        <v-row>
            <v-col cols="12" sm="auto" class="d-flex justify-center">
                <div class="image-wrapper">
                    <img :src="getImage(member.image)" />
                </div>
            </v-col>
            <v-col>
                <v-card flat>
                    <v-card-text class="d-flex ga-5 flex-column">
                        <p class="font-weight-light" :class="{ 'text-truncate-2': isTruncated, 'font-medium': true }">{{
                            member.bio }}</p>
                        <div class="d-flex justify-space-between align-center">
                            <span @click="isTruncated = !isTruncated" class="redirect-btn cursor-pointer">
                                Expand To Read More
                                <v-icon class="ml-2" icon="ri-arrow-right-line" size="12" />
                            </span>
                            <div class="d-flex ga-4 justify-end">
                                <v-btn rounded="xl" :tile="smAndDown" :icon="smAndDown ? 'ri-github-fill' : null"
                                    text="Visit Github" :href="member.githubLink" class="btn-style" color="surface"
                                    append-icon="ri-github-line" flat>

                                </v-btn>
                                <v-btn rounded="xl" :tile="smAndDown" :icon="smAndDown ? 'ri-search-eye-line' : null"
                                    :href="member.cvLink" color="black" class="primary-btn-style" flat text="Preview CV"
                                    append-icon="ri-search-eye-line" />
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify/lib/composables/display';
const { smAndDown } = useDisplay()
const props = defineProps({
    member: { type: Object, required: true }
})
const getImage = (name) => {
    return new URL(`../assets/teamMembers/${name}`, import.meta.url).href
}

const isTruncated = ref(true)
</script>

<style lang="scss" scoped>
.font-medium {
    font-size: large;
}

.text-truncate-2 {
    line-clamp: 2;
    block-size: auto;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.image-wrapper {
    display: flex;
    overflow: hidden;
    height: 100px;
    width: 100px;
    border-radius: 999px;

}

.v-btn {
    text-transform: capitalize;
}

.primary-btn-style {
    transition: color 0.3s ease;
    color: rgba(var(--v-theme-on-surface), 1);

    &:hover {
        color: rgba(var(--v-theme-surface), 0.8) !important;
    }
}

.btn-style {
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 0px 0.2px rgba(var(--v-theme-on-surface), 0.8);
    background-color: transparent;

    &::after {
        content: '';
        border: 0;
        position: absolute;
        inset: -5px;
        transition: opacity 0.3s ease;
        background-color: rgba(255, 255, 255, 0.6); // Try a solid fallback for testing
        opacity: 0;
        pointer-events: none;
    }

    &:hover::after {
        opacity: 1;
    }
}
</style>