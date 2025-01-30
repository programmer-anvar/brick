import React from 'react';
import { CgClose } from 'react-icons/cg';

interface PropsModal {
	modal: boolean;
	setModal: (open: boolean) => void;
}
const FilterRasxod: React.FC<PropsModal> = ({ setModal }) => {
	return (
		<div className="fixed w-full h-full left-0 top-0 flex justify-center items-center modal ">
			<div className="w-[500px]">
				<div className="bg-[#4D5773] flex justify-between items-center p-[10px] rounded-tl-[20px] rounded-tr-[20px]">
					<h2 className="text-[#fff] pl-2 text-[19px] font-semibold">
						Omborga qoshish
					</h2>
					<button
						onClick={() => setModal(false)} // Modalni yopish
						className="bg-[#fff] w-[30px] h-[30px] flex justify-center items-center rounded-full"
					>
						<CgClose />
					</button>
				</div>
				<form className="bg-[#fff] pt-[30px] pb-5 px-5 rounded-bl-[20px] rounded-br-[20px]">
					<div className="flex flex-col ">
						<label
							htmlFor="address"
							className="text-[14px] py-1 text-[#404040] font-semibold"
						>
							Element
						</label>
						<input
							type="text"
							name="address"
							id="address"
							// value={formData.address}
							// onChange={handleChange} // Inputni boshqarish
							className="bg-[#F1F5F8] border border-[#071A5033] p-2 text-[14px] outline-0 rounded-md"
						/>
					</div>

					<div className="pt-4">
						<label
							htmlFor="address"
							className="text-[14px] py-1 text-[#404040] font-semibold"
						>
							Turi
						</label>
						<select
							name=""
							id=""
							className="w-full  bg-[#F1F5F8] border border-[#071A5033] p-2 text-[14px] outline-0 rounded-md"
						>
							<option value="Kamunal">Kamunal</option>
							<option value="Kamunal">Kamunal</option>
							<option value="Kamunal">Kamunal</option>
							<option value="Kamunal">Kamunal</option>
							<option value="Kamunal">Kamunal</option>
						</select>
					</div>
					<div className="flex gap-3 pt-4">
						<div className="flex flex-col">
							<label
								htmlFor="name"
								className="text-[14px] py-1 text-[#404040] font-semibold"
							>
								Summasi dona
							</label>
							<input
								type="number"
								name="name"
								id="name"
								// value={formData.name}
								// onChange={handleChange} // Inputni boshqarish
								className="bg-[#F1F5F8] border border-[#071A5033] p-2 text-[14px] outline-0 rounded-md"
							/>
						</div>
						<div className="flex flex-col w-full">
							<label
								htmlFor="surname"
								className="text-[14px] py-1 text-[#404040] font-semibold"
							>
								Miqdori
							</label>
							<input
								type="number"
								name="surname"
								id="surname"
								// value={formData.lastName}
								// onChange={handleChange} // Inputni boshqarish
								className="bg-[#F1F5F8] border border-[#071A5033] p-2 text-[14px] outline-0 rounded-md"
							/>
						</div>
					</div>

					<div className="flex gap-3 pt-4">
						<div className="flex flex-col">
							<label
								htmlFor="name"
								className="text-[14px] py-1 text-[#404040] font-semibold"
							>
								Time
							</label>
							<input
								type="text"
								name="name"
								id="name"
								// value={formData.name}
								// onChange={handleChange} // Inputni boshqarish
								className="bg-[#F1F5F8] border border-[#071A5033] p-2 text-[14px] outline-0 rounded-md"
							/>
						</div>
						<div className="flex flex-col w-full">
							<label
								htmlFor="surname"
								className="text-[14px] py-1 text-[#404040] font-semibold"
							>
								Date
							</label>
							<input
								type="date"
								name="surname"
								id="surname"
								// value={formData.lastName}
								// onChange={handleChange} // Inputni boshqarish
								className="bg-[#F1F5F8]  border border-[#071A5033] p-2 text-[14px] outline-0 rounded-md"
							/>
						</div>
					</div>

					<div className="pt-16 flex justify-end">
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
								className="py-2.5 px-5 bg-[#00AB55] rounded text-[14px] text-[#fff] font-semibold"
							>
								Bekor qilish
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FilterRasxod;
