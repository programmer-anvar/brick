import { addHodim } from '@/store/slices/hodimSlice';
import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { useDispatch } from 'react-redux';

interface PropsModal {
	modal: boolean;
	setModal: (open: boolean) => void;
}

const NewUser: React.FC<PropsModal> = ({ setModal }) => {
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		phoneNumber: 0,
		profile: '',
		amount: '',
		invoice: '',
		category: '',
		additionalInfo: '',
		name: '',
		lastName: '',
		position: '',
		address: '',
		salary: '',
		date: '',
		cardNumber: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const newHodim = {
			...formData,
			id: Date.now(), // Generate a unique ID (consider using a library for better uniqueness)
		};
		dispatch(addHodim(newHodim)); // Dispatch the action to add a new Hodim
		setModal(false); // Close the modal after submission
	};

	return (
		<div className="fixed w-full h-full left-0 top-0 flex justify-center items-center modal">
			<div className="w-[500px]">
				<div className="bg-[#4D5773] flex justify-between items-center p-[10px] rounded-tl-[20px] rounded-tr-[20px]">
					<h2 className="text-[#fff] pl-2 text-[19px] font-semibold">
						Xodim qo’shish
					</h2>
					<button
						onClick={() => setModal(false)} // Modalni yopish
						className="bg-[#fff] w-[30px] h-[30px] flex justify-center items-center rounded-full"
					>
						<CgClose />
					</button>
				</div>
				<form
					onSubmit={handleSubmit} // Formani yuborish funksiyasini chaqirish
					className="bg-[#fff] pt-[30px] pb-5 px-5 rounded-bl-[20px] rounded-br-[20px]"
				>
					<div className="">
						<div className="flex gap-3">
							<div className="flex flex-col">
								<label
									htmlFor="name"
									className="text-[14px] text-[#404040] font-semibold"
								>
									Ism
								</label>
								<input
									type="text"
									name="name"
									id="name"
									value={formData.name}
									onChange={handleChange} // Inputni boshqarish
									className="bg-[#F1F5F8] border border-[#071A5033] p-2 text-[14px] outline-0 rounded-md"
								/>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="surname"
									className="text-[14px] text-[#404040] font-semibold"
								>
									Familiya
								</label>
								<input
									type="text"
									name="surname"
									id="surname"
									value={formData.lastName}
									onChange={handleChange} // Inputni boshqarish
									className="bg-[#F1F5F8] border border-[#071A5033] p-2 text-[14px] outline-0 rounded-md"
								/>
							</div>
						</div>
						<div className="flex flex-col pt-5">
							<label
								htmlFor="position"
								className="text-[14px] text-[#404040] font-semibold"
							>
								Lavozim
							</label>
							<input
								type="text"
								name="position"
								id="position"
								value={formData.position}
								onChange={handleChange} // Inputni boshqarish
								className="bg-[#F1F5F8] border border-[#071A5033] p-2 text-[14px] outline-0 rounded-md"
							/>
						</div>
						<div className="flex flex-col pt-5">
							<label
								htmlFor="address"
								className="text-[14px] text-[#404040] font-semibold"
							>
								Manzil
							</label>
							<input
								type="text"
								name="address"
								id="address"
								value={formData.address}
								onChange={handleChange} // Inputni boshqarish
								className="bg-[#F1F5F8] border border-[#071A5033] p-2 text-[14px] outline-0 rounded-md"
							/>
						</div>
						<div className="grid grid-cols-2 gap-3 pt-5">
							<div>
								<label
									htmlFor="salary"
									className="text-[14px] text-[#404040] font-semibold"
								>
									Oylik
								</label>
								<input
									type="text"
									name="salary"
									id="salary"
									value={formData.salary}
									onChange={handleChange} // Inputni boshqarish
									className="bg-[#F1F5F8] border border-[#071A5033] p-2 text-[14px] outline-0 rounded-md"
								/>
							</div>
							<div>
								<label
									htmlFor="salary"
									className="text-[14px] text-[#404040] font-semibold"
								>
									Telefon raqam
								</label>
								<input
									type="number"
									name="salary"
									id="salary"
									value={formData.salary}
									onChange={handleChange} // Inputni boshqarish
									className="bg-[#F1F5F8] border border-[#071A5033] p-2 text-[14px] outline-0 rounded-md"
								/>
							</div>
						</div>
						<div className="flex flex-col pt-5">
							<label
								htmlFor="date"
								className="text-[14px] text-[#404040] font-semibold"
							>
								Sana
							</label>
							<input
								type="text"
								name="date"
								id="date"
								value={formData.date}
								onChange={handleChange} // Inputni boshqarish
								className="bg-[#F1F5F8] border border-[#071A5033] p-2 text-[14px] outline-0 rounded-md"
							/>
						</div>
						<div className="flex flex-col pt-5">
							<label
								htmlFor="cardNumber"
								className="text-[14px] text-[#404040] font-semibold"
							>
								Karta Raqam
							</label>
							<input
								type="text"
								name="cardNumber"
								id="cardNumber"
								value={formData.cardNumber}
								onChange={handleChange} // Inputni boshqarish
								className="bg-[#F1F5F8] border border-[#071A5033] p-2 text-[14px] outline-0 rounded-md"
							/>
						</div>
						<div className="pt-7 flex justify-end">
							<div className="flex gap-4">
								<button
									type="submit"
									className="py-2.5 px-5 bg-[#4361EE] rounded text-[14px] text-[#fff] font-semibold"
								>
									Saqlash
								</button>
								<button
									type="button"
									onClick={() => setModal(false)} // Modalni yopish
									className="py-2.5 px-5 bg-[#00AB55]  rounded text-[14px] text-[#fff] font-semibold"
								>
									Bekor qilish
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewUser;
