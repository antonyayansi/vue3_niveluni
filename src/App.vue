<template>
  <div :class="isDark ? 'dark' : ''">
    <RouterView />
  </div>
</template>

<script setup>
import { useDark } from '@vueuse/core';
import useAuth from './auth/hooks/useAuth';

const isDark = useDark()

const {
  checkAuth
} = useAuth()

checkAuth()
</script>