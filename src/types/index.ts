export interface Scenario {
  id: string;
  title: string;
  description: string;
  specialty: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: number;
  tags: string[];
  completed?: boolean;
  score?: number;
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  feedback?: string;
  isCorrect?: boolean;
}

export interface SimulationSession {
  id: string;
  scenarioId: string;
  messages: Message[];
  startTime: Date;
  endTime?: Date;
  score?: number;
  feedback?: string[];
}

export interface UserProgress {
  totalScenarios: number;
  completedScenarios: number;
  averageScore: number;
  weakAreas: string[];
  strongAreas: string[];
}