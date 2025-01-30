import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HodimlarData } from '@/data/Data';

interface Item {
	id: number;
	name: string;
	date: string;
	phoneNumber: number;
	profile: string;
	amount: string;
	invoice: string;
	category: string;
	additionalInfo?: string; // ixtiyoriy qo'shimcha ma'lumotlar
}

interface HodimState {
	items: Item[];
}

// Initial state
const initialState: HodimState = {
	items: HodimlarData, // Ma'lumotlar Redux state'da saqlanadi
};

// Hodimlar uchun slice yaratish
const hodimlarSlice = createSlice({
	name: 'hodim',
	initialState,
	reducers: {
		// Hodim ma'lumotlarini tahrirlash yoki qo'shimcha ma'lumotlar qo'shish
		updateHodim: (state, action: PayloadAction<Item>) => {
			const index = state.items.findIndex(
				(item) => item.id === action.payload.id
			);
			if (index !== -1) {
				state.items[index] = { ...state.items[index], ...action.payload };
			}
		},
		// Bir nechta elementni ID bo'yicha o'chirish
		deleteSelected: (state, action: PayloadAction<number[]>) => {
			state.items = state.items.filter(
				(item) => !action.payload.includes(item.id)
			);
		},
		// Yangi hodim qo'shish
		addHodim: (state, action: PayloadAction<Item>) => {
			state.items.push(action.payload);
		},
	},
});

// Action'larni eksport qilish
export const { updateHodim, deleteSelected, addHodim } = hodimlarSlice.actions;

// Reducer'ni eksport qilish
export default hodimlarSlice.reducer;
