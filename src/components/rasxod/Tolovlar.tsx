import { PlusIcon, SearchIcon } from '@/assets/hodimlar/HodimlarSvg';
import React, { useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import img from '../../assets/image.png';
import { FaPlus } from 'react-icons/fa6';
const Tolovlar: React.FC = () => {
	const [search, setSearch] = useState<string>('');
	return (
		<div>
			<div className="border w-full shadow-md rounded-[5px] flex justify-between py-3 pr-3 pl-2">
				<div className="flex items-center gap-3">
					<button className="w-[40px] h-[40px] flex justify-center items-center border rounded-lg ">
						<MdKeyboardArrowLeft size={25} />
					</button>
					<p className="text-[24px] font-medium">Rasxodlar</p>
				</div>
				<div className="bg-[#DFE8F1] flex p-4 h-[40px] border border-[#00000014] rounded-[5px] items-center gap-1">
					<input
						type="text"
						className="border-0 outline-none bg-transparent"
						placeholder="Search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<SearchIcon />
				</div>
			</div>
			<div className="border w-full shadow-md rounded-[5px] pt-7 h-[70vh] px-5">
				<div className="flex justify-between items-center px-2">
					<p className="text-[24px] font-semibold">Kamunal tolovlar</p>
					<button className=" py-[11px] px-[15px] rounded-md bg-[#4361EE] flex items-center gap-2 text-[#fff] text-[12px] font-semibold">
						<PlusIcon color="#fff" /> Chiqim qo’shish
					</button>
				</div>
				<div className="flex flex-wrap gap-4">
					<div className="w-[220px] h-[130px] rounded-md">
						<img src={img} alt="kamunal" className="w-full" />
					</div>

					<div className="w-[220px] h-[130px] rounded-md">
						<img src={img} alt="kamunal" className="w-full" />
					</div>
					<div className="w-[220px] h-[130px] rounded-md">
						<img src={img} alt="kamunal" className="w-full" />
					</div>
					<div className="w-[220px] h-[130px] bg-[#7A8FF3] rounded-md flex justify-center items-center">
						<FaPlus color="#fff" size={60} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tolovlar;
