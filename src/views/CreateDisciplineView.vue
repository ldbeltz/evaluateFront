<script setup>
import NavbarComponent from '../components/NavbarComponent.vue';
import TitlePageComponent from '../components/TitlePageComponent.vue';
import InfosUserComponent from '../components/InfosUserComponent.vue';
import FormInputComponent from '../components/FormInputComponent.vue';
import BaseButtonComponent from '../components/BaseButtonComponent.vue';
</script>
<template>
    <div class="create-discipline-container">
        <navbar-component></navbar-component>
        <div class="row content">
            <div class="column is-four-fifths">
                <title-page-component text="Cadastro de Disciplina"></title-page-component>
                <div class="discipline-form">
                    <div class="row margin-botton-large">
                        <div class="column is-two-thirds">
                            <form-input-component 
                                typeInput="text" 
                                labelText="Nome da disciplina"
                                placeholder="digite o nome aqui"
                                name="name"
                                ></form-input-component>
                        </div>
                        <div class="column is-one-third">
                            <form-input-component 
                                typeInput="text" 
                                labelText="Sigla da disciplina (opcional)"
                                placeholder="máx: 2 caracteres"
                                name="sigla"
                            ></form-input-component>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <form-input-component 
                                    typeInput="textArea" 
                                    labelText="Descrição da disciplina (opcional)"
                                    placeholder="descrição geral sobre do que se trata a disciplina a ser cadastrada"
                                    name="descriçao"
                                    rows="6"
                                ></form-input-component>
                        </div>
                    </div>
                    <div class="form-buttons row">
                        <div class="column is-one-third">
                            <base-button-component
                                name="Cadastrar" type="primary"
                            ></base-button-component>
                        </div>
                        <div class="column is-one-third">
                            <base-button-component
                                name="Cancelar" type="secondary"
                            ></base-button-component>
                        </div>
                    </div>
                </div>
            </div>
            <infos-user-component></infos-user-component>
        </div>
    </div>
</template>
<style scoped>
.content {
    padding: 60px 30px;
}
.discipline-form {
    width: 100%;
    border-top: solid var(--primary-color) 2px;
    border-bottom: solid var(--primary-color) 2px;
    border-radius: 5px;
    padding: 10px;
}
.margin-botton-large{
    margin-bottom: 32px;
}
.form-buttons {
 margin-top: 32px;
 justify-content: center;
}
</style>