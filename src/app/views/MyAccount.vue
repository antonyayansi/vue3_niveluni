<template>
    <div class="min-h-screen bg-zinc-100 dark:bg-zinc-950 pb-6">

        <!-- Header / Profile -->
        <div class="flex flex-col items-center pt-10 pb-6 px-4">
            <div class="relative mb-3">
                <Avatar
                    :image="user?.avatar_url"
                    :label="!user?.avatar_url ? userInitials : undefined"
                    size="xlarge"
                    shape="circle"
                    class="w-24 h-24 text-2xl font-bold shadow-md"
                />
            </div>
            <h1 class="text-xl font-bold text-zinc-900 dark:text-white">{{ user?.name ?? 'Usuario' }}</h1>
            <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{{ user?.email ?? '' }}</p>
        </div>

        <div class="px-4 space-y-5">

            <!-- Section: Cuenta -->
            <div>
                <p class="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2 px-1">Cuenta</p>
                <div class="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm overflow-hidden divide-y divide-zinc-100 dark:divide-zinc-800">

                    <!-- Mis datos -->
                    <div class="flex items-center gap-3 px-4 py-3.5">
                        <span class="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 shrink-0">
                            <i class="pi pi-id-card text-zinc-500 dark:text-zinc-400 text-base"></i>
                        </span>
                        <span class="flex-1 text-sm font-medium text-zinc-800 dark:text-zinc-100">Mis datos</span>
                        <i class="pi pi-chevron-right text-zinc-400 text-xs"></i>
                    </div>

                    <!-- Mis cursos -->
                    <div class="flex items-center gap-3 px-4 py-3.5">
                        <span class="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 shrink-0">
                            <i class="pi pi-book text-zinc-500 dark:text-zinc-400 text-base"></i>
                        </span>
                        <span class="flex-1 text-sm font-medium text-zinc-800 dark:text-zinc-100">Mis cursos</span>
                        <i class="pi pi-chevron-right text-zinc-400 text-xs"></i>
                    </div>

                    <!-- Progreso -->
                    <div class="flex items-center gap-3 px-4 py-3.5">
                        <span class="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 shrink-0">
                            <i class="pi pi-chart-bar text-zinc-500 dark:text-zinc-400 text-base"></i>
                        </span>
                        <span class="flex-1 text-sm font-medium text-zinc-800 dark:text-zinc-100">Progreso</span>
                        <i class="pi pi-chevron-right text-zinc-400 text-xs"></i>
                    </div>

                    <!-- Certificados -->
                    <div class="flex items-center gap-3 px-4 py-3.5">
                        <span class="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 shrink-0">
                            <i class="pi pi-verified text-zinc-500 dark:text-zinc-400 text-base"></i>
                        </span>
                        <span class="flex-1 text-sm font-medium text-zinc-800 dark:text-zinc-100">Certificados</span>
                        <i class="pi pi-chevron-right text-zinc-400 text-xs"></i>
                    </div>
                </div>
            </div>

            <!-- Section: Preferencias -->
            <div>
                <p class="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2 px-1">Preferencias</p>
                <div class="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm overflow-hidden divide-y divide-zinc-100 dark:divide-zinc-800">

                    <!-- Notificaciones -->
                    <div class="flex items-center gap-3 px-4 py-3.5">
                        <span class="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 shrink-0">
                            <i class="pi pi-bell text-zinc-500 dark:text-zinc-400 text-base"></i>
                        </span>
                        <span class="flex-1 text-sm font-medium text-zinc-800 dark:text-zinc-100">Notificaciones</span>
                        <i class="pi pi-chevron-right text-zinc-400 text-xs"></i>
                    </div>

                    <!-- Modo oscuro -->
                    <div class="flex items-center gap-3 px-4 py-3.5">
                        <span class="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 shrink-0">
                            <i class="pi pi-moon text-zinc-500 dark:text-zinc-400 text-base"></i>
                        </span>
                        <span class="flex-1 text-sm font-medium text-zinc-800 dark:text-zinc-100">Modo oscuro</span>
                        <ToggleSwitch v-model="isDark" />
                    </div>

                    <!-- Descargar contenido -->
                    <div class="flex items-center gap-3 px-4 py-3.5">
                        <span class="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 shrink-0">
                            <i class="pi pi-download text-zinc-500 dark:text-zinc-400 text-base"></i>
                        </span>
                        <span class="flex-1 text-sm font-medium text-zinc-800 dark:text-zinc-100">Descargar contenido</span>
                        <ToggleSwitch v-model="downloadContent" />
                    </div>

                    <!-- Idioma -->
                    <div class="flex items-center gap-3 px-4 py-3.5">
                        <span class="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 shrink-0">
                            <i class="pi pi-globe text-zinc-500 dark:text-zinc-400 text-base"></i>
                        </span>
                        <span class="flex-1 text-sm font-medium text-zinc-800 dark:text-zinc-100">Idioma</span>
                        <i class="pi pi-chevron-right text-zinc-400 text-xs"></i>
                    </div>
                </div>
            </div>

            <!-- Section: Soporte -->
            <div>
                <p class="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2 px-1">Soporte</p>
                <div class="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm overflow-hidden divide-y divide-zinc-100 dark:divide-zinc-800">

                    <!-- Invitar amigo -->
                    <div class="flex items-center gap-3 px-4 py-3.5">
                        <span class="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 shrink-0">
                            <i class="pi pi-user-plus text-zinc-500 dark:text-zinc-400 text-base"></i>
                        </span>
                        <span class="flex-1 text-sm font-medium text-zinc-800 dark:text-zinc-100">Invitar un amigo</span>
                        <i class="pi pi-chevron-right text-zinc-400 text-xs"></i>
                    </div>

                    <!-- Centro de ayuda -->
                    <div class="flex items-center gap-3 px-4 py-3.5">
                        <span class="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 shrink-0">
                            <i class="pi pi-question-circle text-zinc-500 dark:text-zinc-400 text-base"></i>
                        </span>
                        <span class="flex-1 text-sm font-medium text-zinc-800 dark:text-zinc-100">Centro de ayuda</span>
                        <i class="pi pi-chevron-right text-zinc-400 text-xs"></i>
                    </div>

                    <!-- Cerrar sesión -->
                    <div 
                        @click="logout()"
                        class="flex items-center gap-3 px-4 py-3.5">
                        <span class="w-9 h-9 flex items-center justify-center rounded-xl bg-red-50 dark:bg-red-950 shrink-0">
                            <i class="pi pi-sign-out text-red-500 text-base"></i>
                        </span>
                        <span class="flex-1 text-sm font-medium text-red-500">Cerrar sesión</span>
                        <i class="pi pi-chevron-right text-red-300 text-xs"></i>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDark } from '@vueuse/core';
import useAuth from '../../auth/hooks/useAuth';
import { Avatar, ToggleSwitch } from 'primevue';

const { 
    user,
    logout
} = useAuth();
const isDark = useDark();
const downloadContent = ref(false);

const userInitials = computed(() => {
    if (!user.value?.name) return '?';
    return user.value.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
});
</script>
