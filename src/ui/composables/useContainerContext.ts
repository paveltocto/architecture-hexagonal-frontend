import { inject } from 'vue';
import { Container } from '@/container';

export const useContainerContext = () => {
  const containerContext = inject<Container>('containerContext');
  if (!containerContext) {
    throw Error('You used useContainer outside a ContainerProvider');
  }

  return containerContext;
};
