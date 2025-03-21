import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Exam, ApiResponse } from '../types';

// 模拟API调用
const mockFetchExams = (): Promise<ApiResponse<Exam[]>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: [
          {
            id: '1',
            title: '字节跳动前端实习笔试题',
            category: 'frontend',
            questionCount: 20,
            duration: 90,
            difficulty: 'medium',
            participants: 3245,
            rating: 4.7,
            status: 'available',
          },
          {
            id: '2',
            title: '腾讯后端开发实习生笔试',
            category: 'backend',
            questionCount: 15,
            duration: 120,
            difficulty: 'hard',
            participants: 2871,
            rating: 4.5,
            status: 'available',
          },
          {
            id: '3',
            title: '阿里巴巴算法工程师实习笔试',
            category: 'algorithm',
            questionCount: 10,
            duration: 150,
            difficulty: 'hard',
            participants: 1892,
            rating: 4.8,
            status: 'available',
          },
          {
            id: '4',
            title: '美团前端开发实习生在线测试',
            category: 'frontend',
            questionCount: 18,
            duration: 75,
            difficulty: 'medium',
            participants: 2156,
            rating: 4.4,
            status: 'available',
          },
          {
            id: '5',
            title: '百度后端实习生编程题',
            category: 'backend',
            questionCount: 12,
            duration: 90,
            difficulty: 'medium',
            participants: 1756,
            rating: 4.3,
            status: 'available',
          },
        ],
        message: '获取成功',
      });
    }, 1000);
  });
};

// 异步thunk
export const fetchExams = createAsyncThunk('exam/fetchExams', async () => {
  const response = await mockFetchExams();
  return response.data;
});

// State 类型
interface ExamState {
  items: Exam[];
  filteredItems: Exam[];
  activeCategory: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// 初始状态
const initialState: ExamState = {
  items: [],
  filteredItems: [],
  activeCategory: 'all',
  status: 'idle',
  error: null,
};

const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
      if (action.payload === 'all') {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(
          (exam) => exam.category === action.payload
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExams.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExams.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchExams.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || '获取考试列表失败';
      });
  },
});

export const { setActiveCategory } = examSlice.actions;
export default examSlice.reducer; 