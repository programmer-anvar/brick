import { MoreIcon, PencilIcon, TrashIcon } from '@/assets/hodimlar/HodimlarSvg';
import React from 'react';

interface TableContentProps {
	id: number;
	name: string;
	rashod: string;
	rashodType: string;
	vaqt: string;
	invoice: string;
	sana: string;
	chiqim: string;
}

const TableContent: React.FC<TableContentProps> = ({
    id,
	name,
	rashod,
	rashodType,
	vaqt,
	sana,
	invoice,
	chiqim,
}) => {
	return (
		<div className="grid grid-cols-9 gap-6 items-center w-full ">
			<h2 className="text-[14px] font-medium">{id}</h2>
			<h2 className="text-[14px] font-medium">{name}</h2>
			<h2 className="text-[14px] font-medium">{rashod}</h2>
			<h3 className="text-[14px] font-medium">{rashodType}</h3>
			<h3 className="text-[14px] font-medium">${vaqt}</h3>
			<h3 className="text-[14px] font-medium">${sana}</h3>
			<h3 className="text-[14px] font-medium">${chiqim}</h3>
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
