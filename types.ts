export interface ConversationMetric {
  id: number;
  author: 'Bryan' | 'Claude';
  textSnippet: string;
  typos: number;
  caps: number;
  concepts: string[];
  entropy: number;
  coherence: number;
}

export interface ChatMessage {
  id: string;
  author: 'Bryan' | 'Claude';
  content: string;
  type: 'text' | 'document' | 'artifact';
  title?: string; // For documents
  timestamp?: string;
}
