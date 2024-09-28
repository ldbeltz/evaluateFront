<script setup>
import LoginAndRegisterComponent from '../components/LoginAndRegisterComponent.vue';
</script>
<template>
    <div>
        <h1>
            Cadastro
        </h1>
        <login-and-register-component
        formType="register"
        ></login-and-register-component>
        <router-link to="/">Login</router-link>
    </div>
</template>