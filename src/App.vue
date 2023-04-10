<script lang="ts" setup>
import { container } from '@/container';

container.createEmployeeUseCase.execute({
  name: 'Pepe Lucho',
  email: 'pepelucho@gmail.com',
});
container.createEmployeeUseCase.execute({
  name: 'Pepe Lucho 2',
  email: 'pepelucho2@gmail.com',
});

console.log(container.getAllEmployeesUseCase.execute());
</script>

<template>
  <div></div>
</template>

<style scoped></style>
