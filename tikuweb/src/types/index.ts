// 用户相关类型
export interface User {
  id: string;
  username: string;
  avatar?: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: string;
}

// 考试相关类型
export interface Exam {
  id: string;
  title: string;
  category: string;
  questionCount: number;
  duration: number;
  difficulty: 'easy' | 'medium' | 'hard';
  participants: number;
  rating: number;
  status: 'available' | 'unavailable' | 'coming-soon';
}

// 题目相关类型
export interface Question {
  id: string;
  examId: string;
  title: string;
  type: 'single' | 'multiple' | 'fill' | 'code';
  content: string;
  options?: Option[];
  answer: string | string[];
  score: number;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
}

export interface Option {
  id: string;
  content: string;
}

// API响应类型
export interface ApiResponse<T> {
  code: number;
  data: T;
  message: string;
}

// 分页参数
export interface PaginationParams {
  page: number;
  pageSize: number;
}

// 考试列表响应
export interface ExamListResponse {
  exams: Exam[];
  total: number;
}

// 错题记录
export interface WrongQuestion {
  questionId: string;
  wrongAnswer: string | string[];
  timestamp: number;
  note?: string;
} 