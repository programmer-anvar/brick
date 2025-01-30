import React from 'react';
import { CgClose } from 'react-icons/cg';

interface PropsModal {
	modal: boolean;
	setModal: (open: boolean) => void;
}

const HodimlarFilter: React.FC<PropsModal> = ({ setModal }) => {
	return (
		<div className="fixed w-full h-full left-0 top-0 flex justify-center items-center modal ">
			<div className="w-[500px]">
				<div className="bg-[#4D5773] flex justify-between items-center p-[10px] rounded-tl-[20px] rounded-tr-[20px]">
					<h2 className="text-[#fff] pl-2 text-[19px] font-semibold">Filtr</h2>
					<button
						onClick={() => setModal(false)} // Modalni yopish
						className="bg-[#fff] w-[30px] h-[30px] flex justify-center items-center rounded-full"
					>
						<CgClose />
					</button>
				</div>
				<form className="bg-[#fff] pt-[30px] pb-5 px-5 rounded-bl-[20px] rounded-br-[20px]">
					<p className=" text-[14px] font-semibold pb-2">Sana</p>

					<div className="flex gap-3 justify-between">
						<div className="bg-[#F1F5F8] border w-full border-[#071A5033] p-2 text-[14px] outline-0 rounded-md flex justify-between items-center">
							<input type="date" />{' '}
							<p className="text-[14px] font-semibold">Dan</p>
						</div>
						<div className="bg-[#F1F5F8] w-full border border-[#071A5033] p-2 text-[14px] outline-0 rounded-md flex justify-between items-center">
							<input type="date" />{' '}
							<p className="text-[14px] font-semibold">Gacha</p>
						</div>
					</div>
					<p className="pt-5 text-[14px] font-semibold pb-2">Oylik</p>
					<div className="flex gap-3 justify-between ">
						<div className="bg-[#F1F5F8] border w-full border-[#071A5033] p-2 text-[14px] outline-0 rounded-md flex justify-between items-center">
							<input
								type="text"
								className="bg-transparent max-w-[100px] w-full border-0 outline-none"
							/>{' '}
							<p className="text-[14px] font-semibold">So’m dan</p>
						</div>
						<div className="bg-[#F1F5F8] w-full border border-[#071A5033] p-2 text-[14px] outline-0 rounded-md flex justify-between items-center">
							<input
								type="text"
								className=" bg-transparent max-w-[100px] w-full  border-0 outline-none"
							/>
							<p className="text-[14px] font-semibold">So’m gacha</p>
						</div>
					</div>
					<div className="pt-14 flex justify-end">
						<div className="flex gap-4">
							<button
								type="submit"
								className="py-2.5 px-5 bg-[#4361EE] rounded text-[14px] text-[#fff] font-semibold"
							>
								Qidirish
							</button>
							<button
								type="button"
								onClick={() => setModal(false)} // Modalni yopish
								className="py-2.5 px-5 bg-[#FF3B30] rounded text-[14px] text-[#fff] font-semibold"
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

export default HodimlarFilter;
