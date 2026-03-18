<template>
    <div>
        <div>
            <h1 class="text-lg font-medium">Tema</h1>
            <div class="flex items-center gap-2 mt-2">
                <ToggleSwitch v-model="isDark" />
                <span>{{ isDark ? 'Modo oscuro' : 'Modo claro' }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useDark } from '@vueuse/core'
import {
    ToggleSwitch
} from 'primevue';

const isDark = useDark()

</script>