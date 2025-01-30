import { MoreIcon, PencilIcon, TrashIcon } from '@/assets/hodimlar/HodimlarSvg';
import React from 'react';

interface TableContentProps {
	id: number;
	name: string;
	phoneNumber: number;
	date: string;
	amount: string;
	profile: string;
	invoice: string;
}

const TableContent: React.FC<TableContentProps> = ({
	name,
	phoneNumber,
	date,
	amount,
	invoice,
}) => {
	return (
		<div className="grid grid-cols-7 gap-6 items-center w-full ">
			<p className="text-[14px] font-semibold ">{invoice}</p>
			<h2 className="text-[14px] font-medium">{name}</h2>
			<h2 className="text-[14px] font-medium">{phoneNumber}</h2>
			<h3 className="text-[14px] font-medium">{date}</h3>
			{/* <h3 className="text-[14px] font-medium">${amount}</h3> */}
			<div>
				<button className="py-1 px-4 border border-[#58BC2D] text-[#58BC2D] text-[14px] font-medium">
					Активный
				</button>
			</div>
			<div className="text-[14px] flex justify-end items-center gap-[20px] font-medium pr-5">
				<button>
					<PencilIcon color="#666666" />
				</button>
				<button>
					<TrashIcon color="#666666" />
				</button>
				<button>
					<MoreIcon />
				</button>
			</div>
		</div>
	);
};

export default TableContent;
