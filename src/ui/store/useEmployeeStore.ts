import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import Employee from '@/modules/employee/domain/entity/Employee';
import { useContainerContext } from '@/ui/composables/useContainerContext';

export const useEmployeeStore = defineStore('employee', () => {
  const useContext = useContainerContext();
  const { createEmployeeUseCase } = useContext;
  const employees = ref<Employee[]>([]);

  const save = (name: string, email: string) => {
    const employee = createEmployeeUseCase.execute({ name, email });

    employees.value.push(employee);
  };

  const getAll = computed(() => {
    return employees.value;
  });

  return {
    save,
    getAll,
  };
});
