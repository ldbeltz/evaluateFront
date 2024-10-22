<script setup>
import { ref } from 'vue';
import BaseButtonComponent from './BaseButtonComponent.vue';
import BaseInputComponent from './BaseInputComponent.vue';
import key from '../assets/icons/key-icon.svg'
import letter from '../assets/icons/letter-icon.svg'
import axios from "../axios.js";
import router from "../router";


const props = defineProps({
    formType : {
        type:  String,
        required: true
    }
});

const content = ref({
    login: {
        tcTitle: "Olá! Seja bem vindo de volta",
        tcSubtitle: "Sistema para Avaliação de Projetos de Software",
        formTitle:"Entrar",
        formLink: "Primeiro acesso?"

    },
    register: {
        tcTitle: "Olá! Seja bem vindo",
        tcSubtitle: "Sistema para Avaliação de Projetos de Software",
        formTitle:"Cadastre-se",
        formLink:"Já está cadastrado?"

    }
});

const data = ref({
    email: '',
    password: ''
});

const send = () => {
    
    
    
    if (!data.value.email || !data.value.password) {
        console.error('Email or password is missing.');
        return;  // Prevent further actions if data is missing
    }
 
    if(props.formType == "login"){ 
        
        const body = {
        email: data.value.email,
        senha: data.value.password
        }; 
        
        axios.post('/login', body)
        .then(response => {
            console.log('Redirecting to teacherHome...');
            router.push('/teacherHome').catch(err => {
                console.error('Erro de rota: ', err);
            });
        })
        .catch(error => {
        if (error.response) {
            if (error.response.status === 401) {
            return;
            }
        }
        });
    } else {
        
        const body = {
        email: data.value.email,
        senha: data.value.password,
        nome: 'teste'
        }; 

        axios.post('/usuarios', body)
        .then(response => {

            // localStorage.setItem('email', response.data.email)
            // localStorage.setItem('nome', response.data.nome)
            // localStorage.setItem('idUsuario', response.data.id)
            // Cookies.set('Token', response.data.email, { expires: 3600 });
            // Cookies.set('nome', response.data.nome, { expires: 3600 });
            // Cookies.set('idUsuario', response.data.id, { expires: 3600 });
            router.push('/teacherHome').catch(err => {
                console.error('Erro de rota: ', err);
            });
        })
        .catch(error => {
        if (error.response) {
            if (error.response.status === 401) {
            
            //this.errorMessage = 'CPF ou senha incorretos.';
            return;
            }
        }
        //this.errorMessage = 'Sistema indisponivel no momento.';
        });
    }
};
</script>
<template>
    <div>
        <div class="row no-gap">
            <div class="transparent-card clearfix column row">
                <div class="logo">
                    <img src="../assets/logo-evaluate.svg">
                </div>
                    <div class="text-content">
                        <h1 class="tc-title">
                            {{ props.formType == "login" ? content.login.tcTitle : content.register.tcTitle}}
                        </h1>
                        <h2 class="tc-subtitle">
                            {{ props.formType == "login" ? content.login.tcSubtitle : content.register.tcSubtitle}}
                        </h2>
                    </div>
            </div>
            <div class="solid-card clearfix column">
               <div class="form row-reverse">
                    <h1 class="form-title column">
                        {{ props.formType == "login" ? content.login.formTitle : content.register.formTitle}}
                    </h1>
                    <form @submit.prevent="send">
                        <div class="form-fields column">
                            <base-input-component
                                type="text"
                                placeholder="E-mail"
                                :icon="letter"
                                v-model="data.email"
                            ></base-input-component>
                            <base-input-component
                                type="password"
                                placeholder="Senha"
                                :icon="key"
                                v-model="data.password"
                            ></base-input-component>
                            <base-input-component v-if="props.formType == 'register'"
                                type="password"
                                placeholder="Confirmar Senha"
                                :icon="key"
                            ></base-input-component>
                        </div>
                        <div class="form-button column">
                            <base-button-component
                            :name="props.formType == 'login' ? content.login.formTitle : content.register.formTitle"
                            type="primary"
                            ></base-button-component>
                        </div>
                    </form>
                    <div class="form-link column">
                        <span> {{ props.formType == "login" ? content.login.formLink : content.register.formLink}}</span>
                        <router-link v-if="props.formType == 'login'" to="/Register"> Cadastre-se</router-link>
                        <router-link v-if="props.formType == 'register'" to="/"> Login</router-link>
                    </div>
                    <div v-if="props.formType == 'login'" class="form-forgot-password column">
                        <router-link to='/'>Esqueci minha senha</router-link>
                    </div>
               </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.transparent-card, .solid-card {
    height: 450px;
    font-family: var(--font-family); 
    align-items: center;
    justify-content: center;
}

.form-fields > * {
    margin-bottom: 10px;
}

.form-fields {
    margin-bottom: 20px;
}

.solid-card {
    background-color: #FFFFFF;
}

.transparent-card {
    background-color: #FFFFFF66;
    position: relative;
}

h1.tc-title, h2.tc-subtitle, h1.form-title, .form-link, .form-forgot-password {
    text-align: center;
}

h1.tc-title, h1.form-title {
    font-weight: 300;
    color: var(--primary-color);
}
h1.form-title {
    margin-top: 76px;
}
h2.tc-subtitle {
    font-weight: 400;
    color: white;
}

.form-forgot-password > a, .form-link > a {
    text-decoration: none;
    color: var(--primary-color);
} 
.form-button {
    margin-bottom: 30px;
}
.logo {
    position: absolute;
    top: 0;
    left: 0;
    margin: 16px;
}
</style>