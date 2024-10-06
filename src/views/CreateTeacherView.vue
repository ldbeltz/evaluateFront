<script setup>
import NavbarComponent from '../components/NavbarComponent.vue';
import InfosUserComponent from '../components/InfosUserComponent.vue';
import TitlePageComponent from '../components/TitlePageComponent.vue';
import FormInputComponent from '../components/FormInputComponent.vue';
import BaseButtonComponent from '../components/BaseButtonComponent.vue';
import plusIcon from '../assets/icons/plus-icon.svg';
</script>
<template>
    <div class="create-teacher-container">
        <navbar-component></navbar-component>
        <div class="row content">
            <div class="column is-four-fifths">
                <title-page-component text="Cadastro de Professores"></title-page-component>
                <div class="teacher-form">
                    <div class="row justify-center">
                        <div class="column clearfix is-half">
                            <form-input-component 
                                typeInput="text" 
                                labelText="E-mail do Professor"
                                placeholder="E-mail"
                                name="email"
                                ></form-input-component>
                        </div>
                        <div class="column no-grow add-teacher">
                            <base-button-component
                            type="icon"
                            :icon="plusIcon"
                            ></base-button-component>
                        </div>
                    </div>
                    <div class="form-buttons justify-center row">
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
.create-teacher-container {
        width: 100vw;
        height: 100vh;
        background-color: #202022;
        font-family: var(--font-family); 
    }
.content {
    padding: 60px 30px;
}
.teacher-form {
    width: 100%;
    border-top: solid var(--primary-color) 2px;
    border-bottom: solid var(--primary-color) 2px;
    border-radius: 5px;
    padding: 10px;
}
.no-grow {
    flex: 0;
}
.justify-center {
    justify-content: center;
}
.add-teacher {
    display: flex;
    align-items: end;
}
.form-buttons {
 margin-top: 32px;
 justify-content: center;
}
</style>