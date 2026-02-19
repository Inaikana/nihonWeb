export interface GrammarRule {
  jid: string;
  episodeNumber: string;
  grammarPattern: string;
  grammarSummary: string;
  chineseMeaning: string;
  chineseSummary: string;
  note1: string;
  note2: string;
  note3: string;
  example1: string;
  exampleTW1: string;
  example2: string;
  exampleTW2: string;
  example3: string;
  exampleTW3: string;
  referenceUrl: string;
  quizQuestion: string;
  quizAnswer: string;
}

export const grammarsData: GrammarRule[] = [
  {
    jid: "1_1", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "1", // 集數
    grammarPattern: "( 名詞A )は( 名詞B )です ", // 日文文法公式
    grammarSummary: "", // 日文文法(簡式)
    chineseMeaning: "A是B", // 中文
    chineseSummary: "", // 中文(簡式)
    note1: "です結尾表示禮貌的用法", // 備註1
    note2: "", // 備註2
    note3: "", // 備註3
    example1: "高橋さんは日本人です", // 例句1
    exampleTW1: "", // 例句1(中文)
    example2: "", // 例句2
    exampleTW2: "", // 例句2(中文)
    example3: "", // 例句3
    exampleTW3: "", // 例句3(中文)
    referenceUrl: "https://www.youtube.com/watch?v=3M1UOCKgVhs", // 網址
    quizQuestion: "", // 題目
    quizAnswer: "", // 題目解答
  },
  {
    jid: "1_2", // 自製id
    episodeNumber: "1", // 集數
    grammarPattern: "( 名詞A )は( 名詞B ) + ではありません/じゃありません ", // 日文文法公式
    grammarSummary: "", // 日文文法(簡式)
    chineseMeaning: "A不是B", // 中文
    chineseSummary: "", // 中文(簡式)
    note1: "", // 備註1
    note2: "", // 備註2
    note3: "", // 備註3
    example1: "田中さんは台湾人じゃありません", // 例句1
    exampleTW1: "", // 例句1(中文)
    example2: "", // 例句2
    exampleTW2: "", // 例句2(中文)
    example3: "", // 例句3
    exampleTW3: "", // 例句3(中文)
    referenceUrl: "https://www.youtube.com/watch?v=3M1UOCKgVhs", // 網址
    quizQuestion: "", // 題目
    quizAnswer: "", // 題目解答
  },
];
