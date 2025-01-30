import {
	DownloadIcon,
	MoreIcon,
	PencilIcon,
	SearchIcon,
	TrashIcon,
	UserIcon,
} from '@/assets/hodimlar/HodimlarSvg';
import { deleteSelected } from '@/store/slices/oylikSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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

const OyliklatTable = () => {
	const items = useSelector((state: RootState) => state.oylik.items);

	const [category, setCategory] = useState<string>('Oylik');
	const [search, setSearch] = useState<string>('');
	const [selectRows, setSelectRows] = useState<number[]>([]);
	const [selectData, setSelectData] = useState<Item[]>([]);
	const navigate = useNavigate();

	const dispatch = useDispatch();

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

	const handleDeleteSelected = () => {
		const selectIds = selectData.map((item) => item.id);
		dispatch(deleteSelected(selectIds));
		setSelectData([]);
		setSelectRows([]);
		toast.success("hodim o'chirildi");
		alert(`Deleted items with IDs: ${selectIds.join(', ')}`); // Alert on deletion
	};

	const isAllSelected = selectRows.length === filteredSearch.length;

	console.log(selectData);

	return (
		<div className="">
			<div className=" bg-[#fff] mt-[20px]">
				<div className="bg-[#fff] rounded-md shadow-md">
					<div className="flex justify-between items-center py-4 border-b border-[#1B2E4B] pl-5 pr-3 ">
						<div className="">
							<h2 className="text-[24px] font-medium leading-[28px]">
								Oyliklar
							</h2>
							<p className="text-[#4361EE] text-[16px] font-medium">
								Jami oyliklar: 2 262 296 001 065 so’m
							</p>
						</div>
						<div className="flex items-center gap-4 ">
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
							<div className="flex gap-4">
								<button
									className="px-5 text-[#fff] rounded-md bg-[#E7515A] flex items-center h-[38px] gap-3"
									onClick={handleDeleteSelected}
									disabled={selectRows.length === 0} // Disable if nothing is selected
								>
									<TrashIcon color="#fff" />
									<p className="font-semibold text-[14px] leading-[19px]">
										Delete
									</p>
								</button>
								<button className="px-5 text-[#fff] rounded-md bg-[#00AB55] flex items-center h-[38px] gap-3">
									<DownloadIcon color="#fff" />
									<p className="font-semibold text-[14px] leading-[19px]">
										Download
									</p>
								</button>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center pr-3">
						<div className="py-1 flex">
							<button
								className={`flex items-center gap-2 py-4 px-5 ${category === 'Oylik' ? 'text-[#4361EE]' : 'text-[#888EA8]'}`}
								onClick={() => setCategory('Oylik')}
							>
								<UserIcon
									color={category === 'Oylik' ? '#4361EE' : '#888EA8'}
								/>
								<p className="font-semibold text-[14px]">Oylik ishchilar</p>
							</button>
							<button
								className={`flex items-center gap-2 py-4 px-5 ${category === 'Ishbay' ? 'text-[#4361EE]' : 'text-[#888EA8]'}`}
								onClick={() => setCategory('Ishbay')}
							>
								<UserIcon
									color={category === 'Ishbay' ? '#4361EE' : '#888EA8'}
								/>
								<p className="font-semibold text-[14px]">Ishbay</p>
							</button>
							<button
								className={`flex items-center gap-2 py-4 px-5 ${category === 'Kunlik' ? 'text-[#4361EE]' : 'text-[#888EA8]'}`}
								onClick={() => setCategory('Kunlik')}
							>
								<UserIcon
									color={category === 'Kunlik' ? '#4361EE' : '#888EA8'}
								/>
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
				</div>
			</div>
			<div className="mt-[20px]">
				<div className="bg-[#4D5773] w-full flex gap-[30px] items-center  p-[10px] text-[#fff] rounded-tl-[5px] rounded-tr-[5px]">
					<div className="w-[90px] h-[20px]">
						<input
							type="checkbox"
							className="w-[15px] h-[20px] "
							checked={isAllSelected && filteredSearch.length > 0}
							onChange={handleSelectAll}
							disabled={filteredSearch.length === 0}
						/>
					</div>
					<div className="flex items-center justify-between   w-full ">
						<h2 className="text-[14px] font-semibold w-[30px]">I.F.SH.</h2>
						<h3 className="text-[14px] font-semibold">Nomer</h3>
						<h3 className="text-[14px] font-semibold">Ishchi status</h3>
						<h3 className="text-[14px] font-semibold">Maosh</h3>
						<h3 className="text-[14px] font-semibold">Statust</h3>
						<h3 className="text-[14px] font-semibold pr-5">Someting</h3>
					</div>
				</div>
				<div className="bg-[#fff]">
					<div className=" w-full  pl-[10px] h-[600px] overflow-y-scroll ">
						{filteredSearch.map((item: Item) => (
							<div
								key={item.id}
								className="flex items-center gap-[30px] py-2 border-t border-[#071A5033]"
							>
								<div className="flex items-center gap-[30px]">
									<input
										type="checkbox"
										className="w-[20px] h-[20px]"
										checked={isRowSelected(item.id)}
										onChange={() => handleCheckboxChange(item)}
									/>
									<img
										src={item.profile}
										onClick={() => navigate(`/salary-detail/${item.id}`)}
										className="w-[40px] h-[40px] cursor-pointer"
										alt=""
									/>
								</div>
								<div className="flex items-center justify-between  w-full ">
									<h2 className="text-[14px] font-medium w-[100px]">{item.name}</h2>
									<h2 className="text-[14px] font-medium ">
										{item.phoneNumber}
									</h2>
									<div className=" ">
										<button className="py-1 px-4 border  border-[#58BC2D] text-[#58BC2D] text-[14px] font-medium">
											{item.ishchiStatus}
										</button>
									</div>
									<h3 className="text-[14px] font-medium ">{item.avans} so'm</h3>
									<div className=" ">
										<button
											className={`py-1 px-4 border  text-[14px] font-medium ${item.status == 'Tolandi' ? ' border-[#5D5FEF] text-[#5D5FEF]' : ' border-[#FF3B30] text-[#FF3B30]'}`}
										>
											{item.status}
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
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OyliklatTable;
