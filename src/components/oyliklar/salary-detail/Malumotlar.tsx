import React, { useState } from 'react';
import img from '../../../assets/details.png';
import {
	DownloadIcon,
	FilterIcon,
	TasdiqlashTwo,
	TasqidlashOne,
} from '../../../assets/hodimlar/HodimlarSvg';
import FilterDetails from '@/components/modals/FilterDetails';
import Colapse from '@/components/oyliklar/salary-detail/Colapse';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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

const Malumotlar: React.FC = () => {
	const [filterModal, setFilterModal] = useState<boolean>(false);
	return (
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
