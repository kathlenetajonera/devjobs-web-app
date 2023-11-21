<script setup lang="ts">
import { ref } from 'vue';
import Container from '../components/Layout/Container.vue';
import SearchBar from '../components/SearchBar/SearchBar.vue';
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';
import data from '../assets/data.json';

const jobs = ref(data);
</script>

<template>
    <div class="bg-light-gray min-h-screen pb-20">
        <Container>
            <SearchBar :jobs="jobs" />

            <div class="grid grid-cols-cards gap-6 gap-y-14 my-14 lg:gap-x-3 md:gap-y-12">
                <Card
                    v-for="job in jobs"
                    :key="job.id"
                    :logo="job.logo"
                    :logoBackground="job.logoBackground"
                    :postedAt="job.postedAt"
                    :contract="job.contract"
                    :position="job.position"
                    :company="job.company"
                    :location="job.location"
                />
            </div>

            <div class="text-center">
                <Button label="Load more" />
            </div>
        </Container>
    </div>
</template>
