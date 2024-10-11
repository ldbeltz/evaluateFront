<script setup>
import evaluateLogo from '../assets/icons/logo-evaluate.svg'
import userLogo from '../assets/icons/user-logo.svg'
</script>
<template>
    <header>
        <div class="text"><img class="logo" :src="evaluateLogo" alt="">EVALUATE</div>
        <nav>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Criar disciplina</a></li>
                <li><a href="#">Criar turma</a></li>
                <li><a href="#">Criar avaliação</a></li>
            </ul>
        </nav>
        <div class="text"><img class="logo" :src="userLogo" alt="">Usuário</div>
    </header>
</template>
<style scoped>
    li, a, button {
        font-size: 18px;
        color: #fff;
        text-decoration: none;
    }
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 30px;
        background-color: #202022;
        border-bottom: 1px solid var(--primary-color);
        font-family: var(--font-family); 
    }
    .text{
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
    }
    .logo{
        width: 30px;
        height: auto;
        padding: 0px 10px;
    }
    .nav-links {
        list-style: none;
    }
    .nav-links li{
        display: inline-block;
        padding: 0px 50px;
    }
    .nav-links li > a:hover {
        color: var(--primary-color);
    }
</style>