interface TaskProps {
  id: string;
  title: string;
  description: string;
  dueDate: string | null;
  Assignees : string[];
  isDone: boolean;
  doneAt: string | null;
}
export type { TaskProps }

interface TaskItemProps {
  tasks: TaskProps[];
  setTasks: (tasks: TaskProps[]) => void;
  addTask: (
    title: string,
    description: string,
    dueDate: string | null,
    Assignees: string[]
  ) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
}
export type { TaskItemProps }

interface TaskFormState {
  title: string,
  description: string,
  dueDate: string | null,
   Assignees: string[] 
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setDueDate: (dueDate: string | null) => void;
  resetForm: () => void;
  setAssignees :( Assignees:string[]  )=> void;
}
export type { TaskFormState }