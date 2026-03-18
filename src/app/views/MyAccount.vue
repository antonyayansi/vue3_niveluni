<template>
    <div class="grid grid-cols-4 gap-4 mt-4">
        <div class="border hidden md:block bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 border-zinc-200 dark:border-zinc-700">
            <ul class="space-y-2">
                <li v-for="menu in menus" :key="menu.name" class="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700"
                    :class="menuSelected === menu.id ? 'bg-zinc-200 dark:bg-zinc-700' : ''"
                    @click="menuSelected = menu.id"
                >
                    <i :class="menu.icon"></i>
                    {{ menu.name }}
                </li>
            </ul>
        </div>
        <div class="p-4">
            <Preferences v-if="menuSelected === 2"/>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Preferences from '../modules/account/Preferences.vue';

const menuSelected = ref(1);
const menus = [
    {
        id: 1,
        name: 'Mi cuenta',
        icon: 'pi pi-user',
    },
    {
        id: 2,
        name: 'Preferencias',
        icon: 'pi pi-cog',
    }
]

</script>   