import React, { useState } from 'react';
import img from '../../../assets/details.png';
import {
	DownloadIcon,
	FilterIcon,
	TasdiqlashTwo,
	TasqidlashOne,
} from '../../../assets/hodimlar/HodimlarSvg';
import FilterDetails from '@/components/modals/FilterDetails';

const Bajarilgan: React.FC = () => {
	const [filterModal, setFilterModal] = useState<boolean>(false);
	return (
		<div className="px-5">
			<div className="flex justify-between items-center py-5">
				<h3 className="text-[18px] text-[#404040] font-semibold  ">
					Саматов Рамазон Алимурадови
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
				<div className=" flex-[.2] flex justify-center">
					<img src={img} alt="" className="w-[128px] h-[128px]" />
				</div>
				<div className="flex-1 ">
					<div className="border">
						<div className="bg-[#4D5773] w-full  flex justify-between p-[10px] text-[#fff] rounded-tl-[5px] rounded-tr-[5px]">
							<div className="flex-[.33] grid grid-cols-3 w-full gap-[50px] ">
								<h2 className="text-center ">Sana</h2>
								<h2>Ish turi</h2>
								<h2>Ish haqida</h2>
							</div>
							<div className="flex-[.6] w-full grid grid-cols-4  pr-[20px] gap-5 ">
								<h3>Ishni boshlash vaqti</h3>
								<h3>Ishni tugallash vaqti</h3>
								<h3>Statust</h3>
								<h3>Tasdiqlash</h3>
							</div>
						</div>
						<div className=" w-full  flex justify-between p-[10px] border-t  ">
							<div className="flex-[.33] grid grid-cols-3 items-center w-full gap-[50px]">
								<div className="flex items-center  ">
									<input type="checkbox" />
									<p className="pl-6">2024.03.17</p>
								</div>
								<h2 className="">Kunlik</h2>
								<h2>fusdiofghfdughdlgfkn</h2>
							</div>
							<div className="flex-[.6] w-full grid grid-cols-4 items-center  pr-[20px] gap-5 ">
								<h3 className="">10:23:53</h3>
								<h3 className="">19:23:53</h3>
								<div className="">
									<button className="py-1 px-4 border  border-[#58BC2D] text-[#58BC2D]">
										Bajarilgan
									</button>
								</div>
								<div className="flex gap-3">
									<button>
										<TasdiqlashTwo />
									</button>
									<button>
										<TasqidlashOne />
									</button>
								</div>
							</div>
						</div>
						<div className=" w-full  flex justify-between p-[10px] border-t  ">
							<div className="flex-[.33] grid grid-cols-3 items-center w-full gap-[50px]">
								<div className="flex items-center  ">
									<input type="checkbox" />
									<p className="pl-6">2024.03.17</p>
								</div>
								<h2 className="">Kunlik</h2>
								<h2>fusdiofghfdughdlgfkn</h2>
							</div>
							<div className="flex-[.6] w-full grid grid-cols-4 items-center  pr-[20px] gap-5 ">
								<h3 className="">10:23:53</h3>
								<h3 className="">19:23:53</h3>
								<div className="">
									<button className="py-1 px-4 border  border-[#58BC2D] text-[#58BC2D]">
										Bajarilgan
									</button>
								</div>
								<div className="flex gap-3">
									<button>
										<TasdiqlashTwo />
									</button>
									<button>
										<TasqidlashOne />
									</button>
								</div>
							</div>
						</div>{' '}
						<div className=" w-full  flex justify-between p-[10px] border-t  ">
							<div className="flex-[.33] grid grid-cols-3 items-center w-full gap-[50px]">
								<div className="flex items-center  ">
									<input type="checkbox" />
									<p className="pl-6">2024.03.17</p>
								</div>
								<h2 className="">Kunlik</h2>
								<h2>fusdiofghfdughdlgfkn</h2>
							</div>
							<div className="flex-[.6] w-full grid grid-cols-4 items-center  pr-[20px] gap-5 ">
								<h3 className="">10:23:53</h3>
								<h3 className="">19:23:53</h3>
								<div className="">
									<button className="py-1 px-4 border  border-[#58BC2D] text-[#58BC2D]">
										Bajarilgan
									</button>
								</div>
								<div className="flex gap-3">
									<button>
										<TasdiqlashTwo />
									</button>
									<button>
										<TasqidlashOne />
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

export default Bajarilgan;
