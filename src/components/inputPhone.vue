<template>
    <input type="number" name="phone" id="phone" placeholder="telefono" v-model="phone" /> 
</template>

<script>
import { defineComponent ,ref } from 'vue';

export default defineComponent({
   props:{
    numberPhone: String
   },
   setup(){
    return{
        phone: ref('')
    }
   },
   computed:{
    address(){
        return this.name + ' ' + this.lastName
    }
   },
   mounted(){
    this.phone = this.numberPhone
   },
   watch:{
    phone(newNumberPhone){
        this.$emit('update:numberPhone', newNumberPhone)
    }
   }
})
</script>