<template>
    <div class="h-screen overflow-y-auto dark:bg-zinc-950 flex flex-col justify-between">
        <!-- Top safe area blocker (status bar / notch) -->
        <div class="pt-safe shrink-0 bg-zinc-100 dark:bg-zinc-950"></div>
        <div class="flex-1 overflow-y-auto">
            <RouterView />
        </div>
        <Dock />
    </div>
</template>

<script setup>
import Dock from '../components/Dock.vue';


</script>