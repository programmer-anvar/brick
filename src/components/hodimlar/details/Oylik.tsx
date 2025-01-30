import React from 'react';
import img from '../../../assets/details.png';

const Oylik: React.FC = () => {
	return (
		<div className="px-5">
			<div className="">
				<h3 className="text-[18px] text-[#404040] font-semibold  py-5">
					Саматов Рамазон Алимурадови
				</h3>
			</div>
			<div className="flex">
				<div className="flex-1 ">
					<div className="border">
						<div className="bg-[#4D5773] w-full flex gap-[30px] items-center  p-[10px] text-[#fff] rounded-tl-[5px] rounded-tr-[5px]">
							<div className=" w-[20px] h-[20px]"></div>
							<div className="grid grid-cols-7 items-center gap-6 w-full ">
								<h2 className="text-[14px] font-semibold">Sana</h2>
								<h2 className="text-[14px] font-semibold">
									Belgilangan oylik miqdori
								</h2>
								<h3 className="text-[14px] font-semibold">Avans</h3>
								<h3 className="text-[14px] font-semibold">Ushlab qolingan</h3>
								<h3 className="text-[14px] font-semibold">
									Beriladigan oylik miqdori
								</h3>
								<h3 className="text-[14px] font-semibold">Bonus</h3>
								<h3 className="text-[14px] font-semibold">Statust</h3>
							</div>
						</div>
						<div className=" w-full flex items-center gap-[30px] border-t p-[10px]  ">
							<div className="w-[20px] h-[20px]">
								<input type="checkbox" />
							</div>
							<div className="grid grid-cols-7 gap-6 items-center w-full ">
								<p className="text-[14px] font-medium">2024.03.17</p>

								<h2 className="text-[14px] font-medium">18 000 000 So’m</h2>
								<h2 className="text-[14px] font-medium">0 so’m</h2>
								<h3 className="text-[#FF1D1D] text-[14px] font-medium">
									-2 000 000 so’m
								</h3>
								<h3 className="text-[14px] font-medium">18 000 000 So’m</h3>
								<h3 className="text-[14px] font-medium">800 000 So’m</h3>
								<div className="">
									<button className="py-1 px-4 border  border-[#4361EE] text-[#4361EE] text-[14px] font-medium">
										Tolash kerak
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Oylik;
