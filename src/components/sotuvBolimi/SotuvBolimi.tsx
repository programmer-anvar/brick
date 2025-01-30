import React from 'react';
import { SearchIcon } from '../../assets/hodimlar/HodimlarSvg';
import Product from './Product';
import Order from './Order';

const SotuvBolimi: React.FC = () => {
	return (
		<div className="w-full h-full  overflow-hidden">
			<div className="bg-[#fff] flex justify-between p-4 items-center shadow-lg rounded-md shadow-[#0000000D]">
				<h2 className="text-[24px] font-medium">Sotuv bo’limi</h2>
				<div className="bg-[#DFE8F1] flex items-center py-2 px-4 rounded-[5px]">
					<input
						type="text"
						placeholder="Search"
						className="border-0 outline-none bg-transparent text-[12px] "
					/>
					<SearchIcon />
				</div>
			</div>
			<div className="flex mt-5 gap-5 h-full">
				<div className=" w-2/3 h-[60vh]   ">
					<div className="w-full p-5 bg-[#fff] flex flex-col gap-1 ">
						<h2>
							<span className="font-semibold">Menyu</span> Category
						</h2>
						<div className="">
							<button className="text-[#fff] bg-[#35529B] rounded border text-[14px] py-1 px-2">
								Hot dog
							</button>{' '}
							<button className="text-[#505780] opacity-50 bg-[#F1F5F8]  rounded border text-[14px] py-1 px-2">
								Drinks
							</button>{' '}
							<button className="text-[#505780] bg-[#F1F5F8]  rounded opacity-50 border text-[14px] py-1 px-2">
								Coffee
							</button>
						</div>
					</div>
					<div className="bg-[#fff] mt-5 p-5 h-full overflow-y-scroll ">
						<h2>Choose Order</h2>
						<div className=" grid grid-cols-5 gap-5 ">
							<Product />
							<Product />
							<Product />
							<Product />
							<Product />
							<Product />
							<Product />
							<Product />
							<Product />
							<Product />
							<Product />
							<Product />
							<Product />
						</div>
					</div>
				</div>
				<div className="bg-[#fff] w-1/3 h-[82%] p-5 flex flex-col justify-between">
					<div className="">
						<h3 className="border-b py-2">
							<span className="font-semibold">Order</span> Menu
						</h3>
						<div className="pt-5 flex flex-col gap-3 h-[43vh] overflow-y-scroll">
							<Order />
							<Order />
							<Order />
							<Order />
						</div>
						<div className="pt-6 ">
							<h2 className="border-t border-[#000000] py-3  text-[18px] text-[#3D599E] font-bold flex justify-end w-full">
								8,250,000
							</h2>
						</div>
					</div>
					<button className="bg-[#35529B] rounded-lg w-full py-3 text-[#fff] text-[16px]">
						К оплате
					</button>
				</div>
			</div>
		</div>
	);
};

export default SotuvBolimi;
