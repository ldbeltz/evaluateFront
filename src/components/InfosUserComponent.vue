<script setup>
import userLogo from '../assets/icons/user-logo.svg';
</script>
<template>
<div class="column is-one-fifth">
                <div class="row-reverse teacher-data ">
                    <div class="row title-text">
                        <img class="logo" :src="userLogo" alt="">
                        <div class="">Usuário Nome completo</div>
                    </div>
                    <div class="row-reverse content-text">
                        <div>Universidade Federal de Sergipe</div>
                        <div>12 Disciplinas</div>
                        <div>24 Turmas</div>
                    </div>
                </div>
            </div>
    
</template>
<style scoped>
    .teacher-data {
        display: flex;
        justify-content: center;
        padding: 10px;
        border-bottom: 2px solid var(--primary-color);
        border-radius: 5px;
        border-top: 2px solid var(--primary-color);
    }
    .title-text{
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
    }
    .content-text {
        color: #fff;
        font-size: 14px;
        padding-top: 40px;
    }
    .logo{
        width: 40px;
        height: auto;
        padding: 0px 10px;
    }
</style>