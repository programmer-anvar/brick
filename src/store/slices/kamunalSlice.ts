import { KamunalData } from '@/data/KamunalData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
	id: number;
	productName: string;
	rashod: string;
	rashodType: number;
	vaqt: string;
	sana: string;
	chiqim: string;
	img: string;
}

interface KamunalState {
	items: Item[];
}

// Initial state
const initialState: KamunalState = {
	items: KamunalData || [], // Ma'lumotlar Redux state'da saqlanadi
};

// Hodimlar uchun slice yaratish
const kamunalSlice = createSlice({
	name: 'kamunal',
	initialState,
	reducers: {
		// Hodim ma'lumotlarini tahrirlash yoki qo'shimcha ma'lumotlar qo'shish
		updateKamunal: (state, action: PayloadAction<Item>) => {
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
		addKamunal: (state, action: PayloadAction<Item>) => {
			state.items.push(action.payload);
		},
	},
});

// Action'larni eksport qilish
export const { updateKamunal, deleteSelected, addKamunal } = kamunalSlice.actions;

// Reducer'ni eksport qilish
export default kamunalSlice.reducer;
