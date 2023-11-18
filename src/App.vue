<script setup lang="ts">
import Button from './components/Button.vue';
import Card from './components/Card.vue';
import Header from './components/Header.vue';
import Container from './components/Layout/Container.vue';
import SearchBar from './components/SearchBar.vue';
</script>

<template>
    <div class="bg-light-gray min-h-screen pb-20">
        <Header />
        <Container>
            <SearchBar />

            <div class="grid grid-cols-cards gap-6 gap-y-12 my-14">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <div class="text-center">
                <Button />
            </div>
        </Container>
    </div>
</template>
