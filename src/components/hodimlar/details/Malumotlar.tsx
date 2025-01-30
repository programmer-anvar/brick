import React, { useState } from 'react';
import img from '../../../assets/details.png';
import { useDispatch } from 'react-redux';
import { updateHodim } from '@/store/slices/hodimSlice';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import Colapse from '../Collapse';
import { DownloadIcon, FilterIcon } from '@/assets/hodimlar/HodimlarSvg';
import FilterDetails from '@/components/modals/FilterDetails';
const items: CollapseProps['items'] = [
	{
		key: '1',
		label: <Colapse />,
		children: (
			<div className="">
				<div className="flex">
					<div className="flex-1 ">
						<div className="border">
							<div className="bg-[#4d57738a] w-full  flex justify-between p-[px] text-[#fff] rounded-tl-[5px] rounded-tr-[5px]">
								<div className="flex-[.33] grid grid-cols-3 w-full gap-[400px] ">
									<h2 className="text-center w-[200px]">Berilgan summa</h2>
									<h2 className="w-[300px] pl-5">nega berilgani</h2>
									<h2 className="w-[300px] pl-5">Sana</h2>
								</div>
							</div>
							<div className=" w-full  flex justify-between p-[10px]   ">
								<div className="flex-[.33] grid grid-cols-3 w-full gap-[400px] items-center">
									<div className="flex items-center  ml-[25px]">
										<p className="pl-6">1500</p>
									</div>
									<h2 className="w-[400px] ">telefon olmoqchi</h2>
									<h2>10.01.2025</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		),
	},
];

interface findData {
	id: number;
	name: string;
	date: string;
	phoneNumber: number;
	profile: string;
	amount: string;
	invoice: string;
	ishchiStatus?: string;
	manzil?: string;
	brithday?: string;
	email: string;
	category: string;
	cardNumber?: number;
	oylik?: number;
	additionalInfo?: string; // Qo'shimcha ma'lumotlar maydoni
}

interface MalumotlarProps {
	hodim: findData;
}

const Malumotlar: React.FC<MalumotlarProps> = ({ hodim }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedHodim, setEditedHodim] = useState(hodim);
	const dispatch = useDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setEditedHodim((prev) => ({
			...prev,
			[id]: value,
		}));
	};

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleSave = () => {
		dispatch(updateHodim(editedHodim)); // Redux store'da yangilash
		setIsEditing(false);
	};
	const [filterModal, setFilterModal] = useState<boolean>(false);

	return (
		// <div className="px-5">
		// 	<h3 className="text-[18px] text-[#404040] font-semibold py-5">
		// 		{editedHodim.name}
		// 	</h3>
		// 	<div className="flex">
		// 		<div className="flex-[.2] flex justify-center">
		// 			<img src={img} alt="" className="w-[128px] h-[128px]" />
		// 		</div>
		// 		<div className="flex-1 ">
		// 			<form className="grid grid-cols-2 gap-5">
		// 				{/* Ism */}
		// 				<div className="flex flex-col">
		// 					<label
		// 						htmlFor="name"
		// 						className="text-[14px] text-[#404040] font-semibold"
		// 					>
		// 						Ism
		// 					</label>
		// 					<input
		// 						type="text"
		// 						id="name"
		// 						value={editedHodim.name}
		// 						onChange={handleChange}
		// 						disabled={!isEditing}
		// 						className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
		// 					/>
		// 				</div>
		// 				{/* Familiya */}
		// 				<div className="flex flex-col">
		// 					<label
		// 						htmlFor="family"
		// 						className="text-[14px] text-[#404040] font-semibold"
		// 					>
		// 						Familiya
		// 					</label>
		// 					<input
		// 						type="text"
		// 						id="family"
		// 						value={editedHodim.name} // Bu maydonni haqiqiy o'zgaruvchilar bilan moslang
		// 						onChange={handleChange}
		// 						disabled={!isEditing}
		// 						className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
		// 					/>
		// 				</div>
		// 				{/* Lavozim */}
		// 				<div className="flex flex-col">
		// 					<label
		// 						htmlFor="ishchiStatus"
		// 						className="text-[14px] text-[#404040] font-semibold"
		// 					>
		// 						Lavozim
		// 					</label>
		// 					<input
		// 						type="text"
		// 						id="ishchiStatus"
		// 						value={editedHodim.ishchiStatus}
		// 						onChange={handleChange}
		// 						disabled={!isEditing}
		// 						className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
		// 					/>
		// 				</div>
		// 				{/* Manzil */}
		// 				<div className="flex flex-col">
		// 					<label
		// 						htmlFor="manzil"
		// 						className="text-[14px] text-[#404040] font-semibold"
		// 					>
		// 						Manzil
		// 					</label>
		// 					<input
		// 						type="text"
		// 						id="manzil"
		// 						value={editedHodim.manzil}
		// 						onChange={handleChange}
		// 						disabled={!isEditing}
		// 						className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
		// 					/>
		// 				</div>
		// 				{/* Tug'ilgan sana */}
		// 				<div className="flex flex-col">
		// 					<label
		// 						htmlFor="brithday"
		// 						className="text-[14px] text-[#404040] font-semibold"
		// 					>
		// 						Tug'ilgan sana
		// 					</label>
		// 					<input
		// 						type="text"
		// 						id="brithday"
		// 						value={editedHodim.brithday}
		// 						onChange={handleChange}
		// 						disabled={!isEditing}
		// 						className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
		// 					/>
		// 				</div>
		// 				<div className="flex flex-col">
		// 					<label
		// 						htmlFor="phoneNumber"
		// 						className="text-[14px] text-[#404040] font-semibold"
		// 					>
		// 						Telefon raqam
		// 					</label>
		// 					<input
		// 						type="text"
		// 						id="phoneNumber"
		// 						value={editedHodim.phoneNumber}
		// 						onChange={handleChange}
		// 						disabled={!isEditing}
		// 						className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
		// 					/>
		// 				</div>
		// 				<div className="flex flex-col">
		// 					<label
		// 						htmlFor="cardNumber"
		// 						className="text-[14px] text-[#404040] font-semibold"
		// 					>
		// 						Karta raqam
		// 					</label>
		// 					<input
		// 						type="text"
		// 						id="cardNumber"
		// 						value={editedHodim.cardNumber}
		// 						onChange={handleChange}
		// 						disabled={!isEditing}
		// 						className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
		// 					/>
		// 				</div>
		// 				{/* Oylik */}
		// 				<div className="flex flex-col">
		// 					<label
		// 						htmlFor="oylik"
		// 						className="text-[14px] text-[#404040] font-semibold"
		// 					>
		// 						Oylik
		// 					</label>
		// 					<input
		// 						type="text"
		// 						id="oylik"
		// 						value={editedHodim.oylik}
		// 						onChange={handleChange}
		// 						disabled={!isEditing}
		// 						className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
		// 					/>
		// 				</div>
		// 				{/* Qo'shimcha ma'lumotlar */}
		// 				<div className="flex flex-col">
		// 					<label
		// 						htmlFor="additionalInfo"
		// 						className="text-[14px] text-[#404040] font-semibold"
		// 					>
		// 						Qo'shimcha ma'lumotlar
		// 					</label>
		// 					<input
		// 						type="text"
		// 						id="additionalInfo"
		// 						value={editedHodim.additionalInfo || ''} // Qo'shimcha ma'lumotlarni ko'rsatish
		// 						onChange={handleChange}
		// 						disabled={!isEditing}
		// 						className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
		// 					/>
		// 				</div>
		// 			</form>
		// 			<div className="flex gap-2 pt-3 pb-6">
		// 				{/* Save Button */}
		// 				{isEditing ? (
		// 					<button
		// 						onClick={handleSave}
		// 						className="px-5 text-[#fff] rounded-md bg-[#4361EE] flex items-center h-[38px] gap-3"
		// 					>
		// 						<p className="font-semibold text-[14px] leading-[19px]">
		// 							Saqlash
		// 						</p>
		// 					</button>
		// 				) : (
		// 					<button
		// 						onClick={handleEdit}
		// 						className="px-5 text-[#fff] rounded-md bg-[#00AB55] flex items-center h-[38px] gap-3"
		// 					>
		// 						<p className="font-semibold text-[14px] leading-[19px]">
		// 							Tahrirlash
		// 						</p>
		// 					</button>
		// 				)}
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>

		<div className="px-5">
			<div className="flex justify-between items-center py-5">
				<h3 className="text-[18px] text-[#404040] font-semibold  ">
					Jami summa: 15500
				</h3>
				<div className="flex gap-4">
					<button
						onClick={() => setFilterModal(true)}
						type="submit"
						className="py-2.5 px-5 bg-[#203674] rounded text-[14px] text-[#fff] font-semibold flex items-center gap-2"
					>
						<FilterIcon />
						Filter
					</button>
					<button
						type="button"
						className="py-2.5 px-5 bg-[#00AB55]  rounded text-[14px] text-[#fff] font-semibold flex items-center gap-2"
					>
						<DownloadIcon color="#fff" />
						Download
					</button>
					{filterModal && (
						<FilterDetails modal={filterModal} setModal={setFilterModal} />
					)}
				</div>
			</div>
			<div className="flex">
				<div className="flex-1 ">
					<div className="border">
						<div className="bg-[#4D5773] w-full  flex justify-between p-[10px] text-[#fff] rounded-tl-[5px] rounded-tr-[5px]">
							<div className="flex-[.33] grid grid-cols-3 w-full gap-[50px] ">
								<h2 className="text-center ">Oy</h2>
								<h2 className="text-center">Avans</h2>
								<h2 className="text-center">Oylik</h2>
							</div>
							<div className="flex-[.6] w-full grid grid-cols-4  pr-[20px] gap-5 ">
								<h3 className="pl-3">Bonus</h3>
								<h3>Qarz</h3>
								<h3>Tasdiqlash</h3>
							</div>
						</div>
						  <Collapse accordion items={items} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Malumotlar;
