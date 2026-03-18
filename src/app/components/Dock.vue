<template>
    <div class="sticky bottom-0 backdrop-blur-lg border-t-lg border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 pb-safe">
        <div class="flex justify-around items-center py-2 px-4">
            <RouterLink
                v-for="item in dockItems"
                :key="item.label"
                :to="item.route"
                class="flex flex-col items-center gap-1 px-4 py-1 transition-colors"
                :class="isActive(item) ? 'text-primary-600 dark:text-primary-400' : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300'"
            >
                <i :class="[item.icon, 'text-2xl']"></i>
                <span class="text-xs font-medium">{{ item.label }}</span>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const dockItems = [
    { label: 'Home',    icon: 'pi pi-home',      route: { name: 'home' } },
    { label: 'Progreso', icon: 'pi pi-chart-bar', route: { name: 'progress-index' } },
    { label: 'Cursos',  icon: 'pi pi-book',   route: { name: 'courses-index' } },
    { label: 'Perfil',  icon: 'pi pi-user',       route: { name: 'my-account' } },
];

function isActive(item) {
    return route.name === item.route.name;
}
</script>