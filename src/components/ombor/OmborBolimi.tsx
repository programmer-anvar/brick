import { PlusIcon, SearchIcon } from '@/assets/hodimlar/HodimlarSvg';
import { OmborData } from '@/data/OmborData';
import React, { useState } from 'react';
import FilterRasxod from '../modals/FilterRasxod';

const OmborBolimi: React.FC = () => {
	const [search, setSearch] = useState<string>('');
	const [modal, setModal] = useState<boolean>(false);
	return (
		<div>
			<div className="shadow-md flex rounded-md justify-between items-center py-4  pl-5 pr-3 ">
				<h2 className="text-[24px] font-medium leading-[28px]">
					Ombor bo’limi
				</h2>
				<div className="flex items-center gap-4 ">
					<div className="bg-[#DFE8F1] flex p-4 h-[40px] border border-[#00000014] rounded-[5px] items-center gap-1">
						<input
							type="text"
							className="border-0 outline-none bg-transparent text-[12px]"
							placeholder="Search"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<SearchIcon />
					</div>
					<div className="flex gap-4">
						<button
							className="px-5 text-[#fff] rounded-md bg-[#E7515A] flex items-center h-[38px] gap-2"
							// onClick={handleDeleteSelected}
							// disabled={selectRows.length === 0} // Disable if nothing is selected
						>
							<PlusIcon color="#fff" />
							<p className="font-semibold text-[14px] leading-[19px]">
								Qo’shimcha daromat kiritish
							</p>
						</button>
						<button className="px-5 text-[#fff] rounded-md bg-[#00AB55] flex items-center h-[38px] gap-2">
							<PlusIcon color="#fff" />
							<p className="font-semibold text-[14px] leading-[19px]">
								Xaridorlar ro’yhati
							</p>
						</button>
						<button className="px-5 text-[#fff] rounded-md bg-[#4361EE] flex items-center h-[38px] gap-2">
							<PlusIcon color="#fff" />
							<p className="font-semibold text-[14px] leading-[19px]">
								Mahsulot sotish
							</p>
						</button>
					</div>
				</div>
			</div>
			{modal && <FilterRasxod setModal={setModal} modal={modal} />}

			<div className="bg-[#fff] py-5 px-3 mt-5">
				<h2 className="py-2 font-semibold text-[14px]">Ombor set</h2>
				<div className="bg-[#EFE6FF]  pl-5 py-1 ">
					<div className="grid  grid-cols-6 w-[70%] gap-[50px]">
						<h2 className="border ">Product Name</h2>
						<h2 className="border ">Kirgan sana</h2>
						<h2 className="border ">Miqdor</h2>
						<h2 className="border ">Summasi</h2>
						<h2 className="border  text-center">Hozirgi miqdori</h2>
						<h2 className="border text-center ">Foida</h2>
					</div>
				</div>
				{OmborData.map((item) => (
					<div className="pl-5 my-2 cursor-pointer " key={item.id}>
						<div className="grid group  grid-cols-6 items-center w-[70%] gap-[50px] py-1">
							<div className=" flex  items-center gap-1">
								<img src={item.img} className="w-[27px] h-[27px]" alt="" />
								<div className="">
									<h2 className="text-[12px]  text-[#47178E] font-semibold">
										{item.productName}
									</h2>
									<p className="text-[#6C757D] group-hover:text-[red] text-[12px]">
										{item.category}
									</p>
								</div>{' '}
							</div>
							<div className=" ">
								<h2 className="text-[12px] text-[#212529]">{item.time}</h2>
								<h2 className="text-[#6C757D] group-hover:text-[red] text-[12px]">
									{item.date}
								</h2>
							</div>
							<h2 className=" text-[12px] text-[#00000096] font-bold ">
								{item.miqdor}k
							</h2>
							<h2 className=" text-[12px] text-[#888EA8] font-medium ">
								${item.summa}
							</h2>
							<h2 className=" text-center text-[12px] text-[#203674] font-bold ">
								{item.hozirMiqdor > 0 ? item.hozirMiqdor + 'k' : 0}
							</h2>
							<h2 className=" text-center text-[12px] text-[#58BC2D] font-medium">
								${item.foyda}
							</h2>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OmborBolimi;
