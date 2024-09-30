<script setup>
import LoginAndRegisterComponent from '../components/LoginAndRegisterComponent.vue';
</script>
<template>
    <div class="login-container">
        <login-and-register-component
        formType="login"
        ></login-and-register-component>
    </div>
</template>
<style scoped>
    .login-container{
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: radial-gradient(circle, rgba(0,156,99,1) 0%, rgba(9,179,140,1) 60%, rgba(8,139,168,1) 95%);;
    }
</style>