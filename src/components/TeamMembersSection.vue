<template>
    <div class="d-flex flex-column ga-8">
        <h1 class="section__header">Who Are We?</h1>
        <TeamMemberOverview v-for="member in teamMembers" :member="member">
        </TeamMemberOverview>
    </div>
</template>

<script setup>
import TeamMemberOverview from './TeamMemberOverview.vue';
import { teamMembers } from '../composables/teamMembers'
</script>

<style lang="scss"></style>