<template>

</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import useAuth from '../auth/hooks/useAuth';

const route = useRoute()

const {
    onLoginCallback
} = useAuth()

onMounted(async () => {
    const token = route.query.token
    const user = JSON.parse(route.query.user)
    await onLoginCallback(token, user)
})
</script>