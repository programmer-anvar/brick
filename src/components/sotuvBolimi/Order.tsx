import React from 'react';
import { LuTrash2 } from 'react-icons/lu';

const Order: React.FC = () => {
	return (
		<div className="bg-[red] rounded-lg group relative">
			<div className="absolute right-3 top-[40%] opacity-0 group-hover:opacity-100 transition-all">
				<button className="">
					<LuTrash2 size={30} color="#fff" />
				</button>
			</div>
			<div className="p-4 bg-[#fff] shadow-md w-[100%] transition-all duration-300 group-hover:w-[88%] rounded-md flex justify-between">
				<div className="flex gap-5">
					<img
						src=""
						className="w-[92px] h-[73px] rounded-md bg-[#EBF8F3]"
						alt=""
					/>
					<div className="flex flex-col justify-between">
						<div className="">
							<h2 className="text-[14px] font-extrabold text-[#132966]">
								Gisht dszcsdvxv
							</h2>
							<p className="text-[12px] opacity-45">Pishiq g’isht</p>
						</div>
						<p className="text-[14px] font-extrabold text-[#132966]">
							83 000 so’m
						</p>
					</div>
				</div>
				<div className="flex items-end">
					<div className="flex items-center gap-4">
						<button className="w-10 h-10 rounded-md bg-[#F7F7F7] font-semibold text-[#A9A9A9]">
							-
						</button>
						<p className="text-[14px] text-[#505050]">1</p>
						<button className="w-10 h-10 rounded-md bg-[#F7F7F7] font-semibold text-[#A9A9A9]">
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Order;
