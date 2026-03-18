<template>
    <div class="h-screen flex flex-col bg-white dark:bg-zinc-950 overflow-y-auto">
        <!-- Header area with logo -->
        <div class="flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-8">
            <img src="/img/logo.jpg" alt="Nivel U Logo" class="w-24 h-24 rounded-full mb-4 shadow-lg" />
            <h1 class="mt-4 text-3xl font-bold text-white tracking-widest">Nivel U</h1>
            <p class="mt-1 text-white/70 text-sm">Bienvenido</p>
        </div>

        <!-- Form card -->
        <div class="bg-white dark:bg-zinc-900 rounded-t-3xl px-6 pt-8 pb-10 shadow-2xl">
            <h2 class="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-6">Iniciar sesión</h2>

            <div class="space-y-4">
                <div>
                    <label for="email" class="block mb-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        Correo electrónico
                    </label>
                    <InputText
                        v-model="userLogin.email"
                        id="email"
                        type="email"
                        placeholder=""
                        fluid
                        class="text-base"
                    />
                </div>

                <div>
                    <label for="password" class="block mb-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        Contraseña
                    </label>
                    <InputText
                        v-model="userLogin.password"
                        id="password"
                        type="password"
                        placeholder=""
                        fluid
                        class="text-base"
                        @keypress.enter="onLogin(userLogin)"
                    />
                </div>

                <Message severity="error" v-if="error">{{ error }}</Message>

                <Button
                    label="Ingresar"
                    :loading="isLoading"
                    @click="onLogin(userLogin)"
                    fluid
                    class="py-3! text-base! font-semibold"
                />

                <Divider>
                    <span class="text-sm text-zinc-400">O</span>
                </Divider>

                <Button
                    @click="onLoginWithGoogle"
                    label="Continuar con Google"
                    outlined
                    severity="warn"
                    fluid
                    icon="pi pi-google"
                    class="py-3! text-base!"
                />
            </div>

            <p class="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
                ¿No tienes cuenta?
                <RouterLink to="/register" class="font-semibold text-primary-600 dark:text-primary-300 hover:underline">
                    Regístrate
                </RouterLink>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button, InputText, Divider, Message } from 'primevue';
import useAuth from '../hooks/useAuth';

const userLogin = ref({ email: '', password: '' });

const { onLogin, isLoading, error, onLoginWithGoogle } = useAuth();
</script>