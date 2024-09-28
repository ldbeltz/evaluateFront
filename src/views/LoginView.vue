<script setup>
import LoginAndRegisterComponent from '../components/LoginAndRegisterComponent.vue';
</script>
<template>
    <div>
        <h1>
            Login
        </h1>
        <login-and-register-component
         formType="login"
        ></login-and-register-component>
        
        <router-link to="/register">cadastro</router-link>
    </div>
</template>