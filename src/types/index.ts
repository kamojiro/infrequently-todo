export interface Task {
  id: string;
  title: string;
  description: string | null;
  interest_score: number;
  created_at: string;
  updated_at: string;
}

export interface Progress {
  id: string;
  task_id: string;
  note: string | null;
  created_at: string;
}
