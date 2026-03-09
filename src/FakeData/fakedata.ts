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
  grammarPattern: string;
  grammarSummary: string;
  chineseMeaning: string;
  chineseSummary: string;
  notes: string[];
  examples: ExampleRule[];
  referenceUrl: string;
  quizs: QuizRule[];
}

export const grammarsData: GrammarRule[] = [
  {
    jid: "0101", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "1", // 集數
    grammarPattern: "( 名詞A )は( 名詞B )です ", // 日文文法公式
    grammarSummary: "は", // 日文文法(簡式)
    chineseMeaning: "A是B", // 中文
    chineseSummary: "是", // 中文(簡式)
    notes: ["です結尾表示禮貌的用法"],
    examples: [
      { japanese: "高橋[たかはし]さんは日本人[にほんじん]です", chinese: "" },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=3M1UOCKgVhs", // 網址
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0102", // 自製id
    episodeNumber: "1", // 集數
    grammarPattern: "( 名詞A )は( 名詞B ) + ではありません/じゃありません ", // 日文文法公式
    grammarSummary: "ではありません / じゃありません", // 日文文法(簡式)
    chineseMeaning: "A不是B", // 中文
    chineseSummary: "不是", // 中文(簡式)
    notes: [],
    examples: [
      {
        japanese: "田中[たなか]さんは台湾人[たいわんじん]じゃありません",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=3M1UOCKgVhs", // 網址
    quizs: [{ question: "", options: [], answer: "" }],
  },
];
