export interface ExampleRule {
  japanese: string;
  chinese: string;
}

export interface QuizRule {
  question: string;
  options: string[];
  answer: string;
}

export interface GrammarRule {
  jid: string;
  episodeNumber: string;
  order: string;
  timestamp: number;
  grammarPattern: string;
  grammarSummary: string;
  chineseMeaning: string;
  chineseSummary: string;
  notes: string[];
  examples: ExampleRule[];
  referenceUrl: string;
  thumbnail: string;
  videoTitle: string;
  tags: string[];
  quizs: QuizRule[];
}

export interface BackObjRule {
  success: boolean;
  grammarsData: GrammarRule[];
  pagination: {
    totalItems: number;
    currentPage: number;
    totalPages: number;
    limit: number;
  };
}

export interface BackGrammarIdRule {
  success: boolean;
  grammar: GrammarRule | null;
}
