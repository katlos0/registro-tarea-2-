<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';  
import InputPhone from '../components/InputPhone.vue';

export default defineComponent({
  components: {
    InputPhone
  },
  setup() {
    const router = useRouter(); 
    const name = ref('');
    const lastName = ref('');
    const email = ref('');
    const year = ref('');
    const phone = ref('');
    const address = ref('');
    const errorAddress = ref(false);
    const errorYear = ref(false);
    const errorName = ref(false);
    const errorLastName = ref(false);
    const errorEmail = ref(false);
    const errorPhone = ref(false);
    const users = ref([]);

    const validateData = () => {
      let isValid = true;
      if (name.value === '') {
        isValid = false;
        errorName.value = true;
      }
      if (lastName.value === '') {
        isValid = false;
        errorLastName.value = true;
      }
      if (email.value === '') {
        isValid = false;
        errorEmail.value = true;
      }
      if (year.value === '') {
        isValid = false;
        errorYear.value = true;
      }
      if (phone.value === '') {
        isValid = false;
        errorPhone.value = true;
      }
      if (address.value === '') {
        isValid = false;
        errorAddress.value = true;
      }
      return isValid;
    };

    const register = () => {
      if (validateData()) {
        const user = {
          name: name.value,
          lastName: lastName.value,
          year: year.value,
          phone: phone.value,
          address: address.value,
          email: email.value,
        };
        users.value.push(user);
        localStorage.setItem('users', JSON.stringify(users.value));
        clear();
        router.push({ path: '/' }); 
      }
    };

    const clear = () => {
      name.value = '';
      lastName.value = '';
      email.value = '';
      year.value = '';
      phone.value = '';
      address.value = '';
      errorName.value = false;
      errorLastName.value = false;
      errorEmail.value = false;
      errorYear.value = false;
      errorPhone.value = false;
      errorAddress.value = false;
    };

    return {
      name,
      lastName,
      email,
      year,
      phone,
      address,
      errorAddress,
      errorYear,
      errorName,
      errorLastName,
      errorEmail,
      errorPhone,
      users,
      register,
    };
  }
});
</script>
<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Registro de Usuario</div>
      <div class="card-body">
        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" v-model="name" id="name" class="form-control" :class="{ 'is-invalid': errorName }" />
            <div class="invalid-feedback" v-if="errorName">El nombre es requerido.</div>
          </div>

          <div class="mb-3">
            <label for="lastName" class="form-label">Apellido</label>
            <input type="text" v-model="lastName" id="lastName" class="form-control" :class="{ 'is-invalid': errorLastName }" />
            <div class="invalid-feedback" v-if="errorLastName">El apellido es requerido.</div>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" v-model="email" id="email" class="form-control" :class="{ 'is-invalid': errorEmail }" />
            <div class="invalid-feedback" v-if="errorEmail">El email es requerido.</div>
          </div>

          <div class="mb-3">
            <label for="year" class="form-label">Año</label>
            <input type="text" v-model="year" id="year" class="form-control" :class="{ 'is-invalid': errorYear }" />
            <div class="invalid-feedback" v-if="errorYear">El año es requerido.</div>
          </div>

          <div class="mb-3">
            <label for="phone" class="form-label">Teléfono</label>
            <input-phone v-model="phone" id="phone" class="form-control" :class="{ 'is-invalid': errorPhone }" />
            <div class="invalid-feedback" v-if="errorPhone">El teléfono es requerido.</div>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">Dirección</label>
            <input type="text" v-model="address" id="address" class="form-control" :class="{ 'is-invalid': errorAddress }" />
            <div class="invalid-feedback" v-if="errorAddress">La dirección es requerida.</div>
          </div>

          <button type="submit" class="btn btn-primary">Registrar</button>
        </form>
      </div>
    </div>

    <div class="card mt-4">
      <div class="card-header">Usuarios Registrados</div>
      <ul class="list-group list-group-flush">
        <li v-for="user in users" :key="user.email" class="list-group-item">
          {{ user.name }} {{ user.lastName }} - {{ user.email }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 700px;
  padding: 30px;
}

.card {
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-header {
  font-size: 1.75rem;
}

.form-control {
  border-radius: 0.25rem;
}

.btn {
  background-color: #007bff;
  border: none;
}

.list-group-item {
  font-size: 1rem;
  border-radius: 0.25rem;
}

h2 {
  font-weight: 500;
  margin-top: 30px;
}
</style>