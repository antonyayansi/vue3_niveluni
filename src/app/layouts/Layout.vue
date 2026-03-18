<template>
    <div class="h-screen overflow-y-auto dark:bg-zinc-950 flex flex-col justify-between">
        <div class="max-w-7xl mx-auto">
            <RouterView />
        </div>
        <Dock />
    </div>
</template>

<script setup>
import Dock from '../components/Dock.vue';


</script>