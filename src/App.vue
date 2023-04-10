<script lang="ts" setup>
import { useEmployeeStore } from '@/ui/store/useEmployeeStore';
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
});
const employeeStore = useEmployeeStore();
const onSubmitEmployee = (e: Event) => {
  e.preventDefault();

  employeeStore.save(form.name, form.email);
};
</script>

<template>
  <form @submit="onSubmitEmployee">
    <div class="mb-3">
      <label class="form-label" for="txtNameEmployee">Name</label>
      <input id="txtNameEmployee" v-model="form.name" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label" for="txtEmailEmployee">Email</label>
      <input
        id="txtEmailEmployee"
        v-model="form.email"
        class="form-control"
        type="email"
      />
    </div>
    <button>Submit</button>
  </form>
  <br />
  <ul>
    <li v-for="employee in employeeStore.getAll" :key="employee.id">
      <span>{{ employee.name }}</span>
      <span>{{ employee.email.value }}</span>
    </li>
  </ul>
</template>

<style scoped></style>
