<script setup>
const props = defineProps({
    typeInput: {
        type: String,
        required: true
    },
    labelText: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    options: {
        type: [],
        required: false
    },
    rows: {
        type:String,
        required: false
    }

})
</script>
<template>
    <div class="form-input-container">
        <label :for="props.name">
            {{ props.labelText }}
        </label>
        <input 
            v-if="props.typeInput === 'text'" 
            type="text" class="input-form" 
            :placeholder="props.placeholder"
            :name="props.name"
        />
        <select v-else-if="props.typeInput === 'select'" class="input-form">
            <option   
                v-for="option in props.options"
                :key="option.id"
                :value="option.id"  
                :name="props.name">{{ option.name }}</option>
        </select>
        <textarea 
            v-else-if="props.typeInput === 'textArea'"  
            :name="props.name" 
            :rows="props.rows"
            :placeholder="props.placeholder"
            class="input-form"></textarea>
        
    </div>
</template>
<style scoped>
.form-input-container{
    display: flex;
    flex-direction: column;
}
.form-input-container > label {
color: #ffffff;
margin-bottom: 4px;
}
.input-form {
    background: none;
    padding: 6px 10px;
    border: 1px solid #272727;
    border-radius: 8px;
    color: #ffffff;
}
.input-form::placeholder {
   color:#A6A6A6; 
}
input:focus-visible, textarea:focus-visible {
  outline: 2px solid var(--primary-color);
}
select option {
    background-color: #272727; 
    color: #ffffff; 
}
select:focus {
    border: 2px solid var(--primary-color);
    background-color: #272727;
}
</style>