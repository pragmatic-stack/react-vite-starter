import { BaseEntity } from '@/types';

type TodoEntity = {
  completed: boolean;
} & BaseEntity;

export type { TodoEntity };
