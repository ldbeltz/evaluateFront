<script setup>
import { ref } from 'vue';
import BaseButtonComponent from './BaseButtonComponent.vue';
const props = defineProps({
    formType : {
        type:  String,
        required: true
    }
})
const content = ref({
    login: {
        tcTitle: "Olá! Seja bem vindo de volta",
        tcSubtitle: "Sistema para Avaliação de Projetos de Software",
        formTitle:"Entrar"

    },
    register: {
        tcTitle: "Olá! Seja bem vindo",
        tcSubtitle: "Sistema para Avaliação de Projetos de Software",
        formTitle:"Cadastre-se"
    }
})
</script>
<template>
    <div>
        <div class="row">
            <div class="transparent-card column">
                <div class="logo"></div>
                <div class="text-content">
                    <h1 class="tc-title">
                        {{ props.formType == "login" ? content.login.tcTitle : content.register.tcTitle}}
                    </h1>
                    <h2 class="tc-subtitle">
                        {{ props.formType == "login" ? content.login.tcSubtitle : content.register.tcSubtitle}}
                    </h2>
                </div>
            </div>
            <div class="solid-card column">
               <div class="form row-reverse">
                    <h1 class="form-title column">
                        {{ props.formType == "login" ? content.login.formTitle : content.register.formTitle}}
                    </h1>
                    <div class="form-fields column"></div>
                    <div class="form-button column">
                        <base-button-component
                        :name="props.formType == 'login' ? content.login.formTitle : content.register.formTitle"
                        type="primary"
                        ></base-button-component>
                    </div>
                    <div class="form-link column"></div>
               </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.transparent-card, .solid-card {
    height: 650px;
}
</style>