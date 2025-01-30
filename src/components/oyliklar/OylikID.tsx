import {
	HomeIcon,
	MoneyIcon,
	PlusIcon,
	UserIcon,
} from '@/assets/hodimlar/HodimlarSvg';
import { OylikData } from '@/data/OylikData';
 import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Malumotlar from './salary-detail/Malumotlar';

const OylikID: React.FC = () => {
	const [pageCount, setPageCount] = useState<number>(1);
	const { id } = useParams<{ id: string }>();
	const numbericId = Number(id);

	const findData = OylikData.filter((f) => f.id === numbericId);
	const handleClick = (num: number) => {
		setPageCount(num);
	};
	return (
		<div className="h-[100%]">
			<div className="bg-[#fff] rounded-md shadow-md">
				<div className="flex justify-between items-center py-4 border-b border-[#1B2E4B] pl-5 pr-[60px] ">
					<h2 className="text-[24px] font-medium leading-[28px]">
						Xodim: {findData[0].name}
					</h2>
					<div className="flex gap-4">
						<button className="px-5 text-[#fff] rounded-md bg-[#4361EE] flex items-center h-[38px] gap-3">
							<PlusIcon color="#fff" />
							<p className="font-semibold text-[14px] leading-[19px]">
								Add New
							</p>
						</button>
					</div>
				</div>
				<div className="flex justify-between items-center pr-3">
					<div className=" py-1 flex  ">
						<button
							className="flex items-center gap-2 py-4 px-5 border-b"
							onClick={() => handleClick(1)}
						>
							<HomeIcon color={pageCount == 1 ? '#4361EE' : '#888EA8'} />
							<p
								className={`font-semibold text-[14px] ${
									pageCount == 1 ? 'text-[#4361EE]' : 'text-[#888EA8]'
								}`}
							>
								Malunmotlar
							</p>
						</button>
						{/* <button
							className="flex items-center gap-2 py-4 px-5  "
							onClick={() => handleClick(2)}
						>
							<UserIcon color={pageCount == 2 ? '#4361EE' : '#888EA8'} />
							<p
								className={`font-semibold text-[14px] ${
									pageCount == 2 ? 'text-[#4361EE]' : 'text-[#888EA8]'
								}`}
							>
								Bajarilgan ishlar
							</p>
						</button>
						<button
							className="flex items-center gap-2 py-4 px-5  "
							onClick={() => handleClick(3)}
						>
							<MoneyIcon color={pageCount == 3 ? '#4361EE' : '#888EA8'} />
							<p
								className={`font-semibold text-[14px] ${
									pageCount == 3 ? 'text-[#4361EE]' : 'text-[#888EA8]'
								}`}
							>
								To’lov tarixi
							</p>
						</button>
						<button
							className="flex items-center gap-2 py-4 px-5  "
							onClick={() => handleClick(4)}
						>
							<MoneyIcon color={pageCount == 4 ? '#4361EE' : '#888EA8'} />
							<p
								className={`font-semibold text-[14px] ${
									pageCount == 4 ? 'text-[#4361EE]' : 'text-[#888EA8]'
								}`}
							>
								Oylik to’lash{' '}
							</p>
						</button> */}
					</div>
				</div>
			</div>
			<div className="bg-[#fff] h-auto mt-[20px] w-[full]">
				{pageCount === 1 && <Malumotlar/>}
			</div>
		</div>
	);
};

export default OylikID;
