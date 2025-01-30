import { SearchIcon } from '@/assets/hodimlar/HodimlarSvg';
// import { deleteSelected } from '@/store/slices/hodimSlice';
import React, { useState } from 'react';
import { BsFilePdf } from 'react-icons/bs';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useSelector } from 'react-redux';
// import { toast } from 'react-toastify';

interface Item {
	id: number;
	name: string;
	date: string;
	phoneNumber: number;
	profile: string;
	amount: string;
	invoice: string;
	category: string;
	status: string;
	avans: number;
	money: number;
	ishchiStatus: string;
}

interface RootState {
	oylik: {
		items: Item[];
	};
}

const Haridorlar: React.FC = () => {
	const items = useSelector((state: RootState) => state.oylik.items);

	const [category, setCategory] = useState<string>('Oylik');
	const [search, setSearch] = useState<string>('');
	const [selectRows, setSelectRows] = useState<number[]>([]);
	const [selectData, setSelectData] = useState<Item[]>([]);

	// const dispatch = useDispatch();

	const filteredData = items.filter((f) => f.category === category);

	const filteredSearch = filteredData.filter((f) =>
		f.name.toLowerCase().includes(search.toLowerCase())
	);

	const handleCheckboxChange = (item: Item) => {
		const id = item.id;
		if (selectRows.includes(id)) {
			setSelectRows((prevSelectedRows) =>
				prevSelectedRows.filter((rowId) => rowId !== id)
			);
			setSelectData((prevSelectData) =>
				prevSelectData.filter((data) => data.id !== id)
			);
		} else {
			setSelectRows((prevSelectRows) => [...prevSelectRows, id]);
			setSelectData((prevSelectData) => [...prevSelectData, item]);
		}
	};

	const isRowSelected = (id: number) => selectRows.includes(id);

	const handleSelectAll = () => {
		if (isAllSelected) {
			setSelectRows([]);
			setSelectData([]);
		} else {
			const allRowsIds = filteredSearch.map((item) => item.id);
			setSelectRows(allRowsIds);
			setSelectData(filteredSearch);
		}
	};

	// const handleDeleteSelected = () => {
	// 	const selectIds = selectData.map((item) => item.id);
	// 	dispatch(deleteSelected(selectIds));
	// 	setSelectData([]);
	// 	setSelectRows([]);
	// 	toast.success("hodim o'chirildi");
	// 	alert(`Deleted items with IDs: ${selectIds.join(', ')}`); // Alert on deletion
	// };

	const isAllSelected = selectRows.length === filteredSearch.length;

	console.log(selectData);

	return (
		<div>
			<div className="bg-[#fff] flex justify-between p-4 items-center shadow-lg rounded-md shadow-[#0000000D]">
				<h2 className="text-[24px] font-medium">
					Sotuv bo’limi {'>'} haridorlar ro’yxati
				</h2>
				<div className="bg-[#DFE8F1] flex items-center px-4 py-2 rounded-[5px]">
					<input
						type="text"
						placeholder="Search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="border-0 outline-none bg-transparent text-[12px] "
					/>
					<SearchIcon />
				</div>
			</div>
			<div className="mt-[20px] bg-[#fff] p-5">
				<div className="flex justify-between items-center pr-3">
					<div className="py-1 flex">
						<button
							className={`flex items-center gap-2 py-4 px-5 ${category === 'Oylik' ? 'text-[#4361EE]' : 'text-[#888EA8]'}`}
							onClick={() => setCategory('Oylik')}
						>
							<p className="font-semibold text-[14px]">Oylik ishchilar</p>
						</button>
						<button
							className={`flex items-center gap-2 py-4 px-5 ${category === 'Ishbay' ? 'text-[#4361EE]' : 'text-[#888EA8]'}`}
							onClick={() => setCategory('Ishbay')}
						>
							<p className="font-semibold text-[14px]">Ishbay</p>
						</button>
						<button
							className={`flex items-center gap-2 py-4 px-5 ${category === 'Kunlik' ? 'text-[#4361EE]' : 'text-[#888EA8]'}`}
							onClick={() => setCategory('Kunlik')}
						>
							<p className="font-semibold text-[14px]">Kunlik ishchilar</p>
						</button>
					</div>
					<div>
						<button className="px-5 text-[#fff] rounded-md bg-[#4361ee] flex items-center h-[38px] gap-3">
							<p className="font-semibold text-[14px] leading-[19px]">
								Oylik To'lash
							</p>
						</button>
					</div>
				</div>
				<div className="bg-[#EFE6FF] w-full flex gap-[30px] items-center  p-[10px] text-[#212529] rounded-tl-[5px] rounded-tr-[5px]">
					<div className="w-[15px] h-[20px]">
						<input
							type="checkbox"
							className="w-[15px] h-[20px]"
							checked={isAllSelected && filteredSearch.length > 0}
							onChange={handleSelectAll}
							disabled={filteredSearch.length === 0}
						/>
					</div>
					<div className="grid grid-cols-7   items-center  w-full ">
						<h2 className="text-[14px] font-semibold   ">Document Name</h2>
						<h2 className="text-[14px] font-semibold">Type</h2>
						<h3 className="text-[14px] font-semibold">Author</h3>
						<h3 className="text-[14px] font-semibold">Version</h3>
						<h3 className="text-[14px] font-semibold"> Actions</h3>
						<h3 className="text-[14px] font-semibold">Avans</h3>

						<h3 className="text-[14px] font-semibold text-center">Arrow</h3>
					</div>
				</div>
				<div className="bg-[#fff]">
					<div className=" w-full   h-[600px] overflow-y-scroll flex flex-col gap-3 ">
						{filteredSearch.map((item: Item) => (
							<div
								key={item.id}
								className="flex items-center gap-[30px] py-2 bg-[#efe6ff33] p-[10px] "
							>
								<div className="flex items-center gap-[30px]">
									<input
										type="checkbox"
										className="w-[15px] h-[15px]"
										checked={isRowSelected(item.id)}
										onChange={() => handleCheckboxChange(item)}
									/>
								</div>
								<div className="grid grid-cols-7 gap-5 items-center w-full ">
									<div className=" flex gap-2 items-center  ">
										<BsFilePdf size={26} />

										<div className="">
											<h2 className="text-[14px] font-medium">
												Product Requirements
											</h2>
											<p className="text-[12px] text-[#6C757D] font-medium">
												Uploaded 29 Jul 2023
											</p>
										</div>
									</div>

									<h2 className="text-[14px] font-medium">PDF</h2>
									<div className="text-[14px] font-medium flex gap-2">
										<img
											src={item.profile}
											className="w-[26px] h-[26px] rounded-full"
											alt=""
										/>
										<h2>{item.name}</h2>
									</div>
									<h2 className="text-[14px] font-semibold">1</h2>
									<div className="">
										<button className="py-[.75px] px-[6px] bg-[#E1F4CB] rounded-[15px]  borde-r-[#58BC2D] text-[#62912C] text-[12px] font-medium">
											Active
										</button>
									</div>

									<div className="flex gap-2">
										<button
											className={`py-1 px-2 border  text-[14px] rounded-[3.2px] font-medium   border-[#9A55FF] text-[#9A55FF]`}
										>
											View
										</button>
										<button
											className={`py-1 px-2 border  text-[14px] font-medium rounded-[3.2px]   border-[#9A55FF] text-[#9A55FF]`}
										>
											Edit
										</button>
									</div>
									<div className="text-[14px] flex justify-center items-center gap-[20px] font-medium ">
										<button>
											<MdOutlineKeyboardArrowRight size={18} />
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Haridorlar;
