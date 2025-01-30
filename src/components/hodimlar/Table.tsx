import React, { useState } from 'react';
import TableContent from './TableContent';
import { useDispatch, useSelector } from 'react-redux';
import {
	DownloadIcon,
	FilterIcon,
	PencilIcon,
	PlusIcon,
	SearchIcon,
	TrashIcon,
	UserIcon,
} from '@/assets/hodimlar/HodimlarSvg';
import { deleteSelected } from '@/store/slices/kamunalSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import NewUser from '../modals/NewUser';
import HodimlarFilter from '../modals/HodimlarFilter';
interface Item {
	id: number;
	name: string;
	date: string;
	phoneNumber: number;
	profile: string;
	amount: string;
	invoice: string;
	category: string;
}
interface RootState {
	hodim: {
		items: Item[];
	};
}

const Table: React.FC = () => {
	const items = useSelector((state: RootState) => state.hodim.items);
	const [modal, setModal] = useState<boolean>(false);
	const [filterModal, setFilterModal] = useState<boolean>(false);
	const [category, setCategory] = useState<string>('Oylik');
	const [search, setSearch] = useState<string>('');
	const [selectRows, setSelectRows] = useState<number[]>([]);
	const [selectData, setSelectData] = useState<Item[]>([]);

	const filteredData = items.filter((f) => f.category === category);
	const dispatch = useDispatch();
	const navigate = useNavigate();

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

	return (
		<div className="bg-[#fff] mt-[20px]">
			<div className="bg-[#fff] rounded-md shadow-md">
				<div className="flex justify-between items-center py-4 border-b border-[#1B2E4B] pl-5 pr-3">
					<h2 className="text-[24px] font-medium leading-[28px]">
						Xodimlar ro’yxati
					</h2>
					<div className="flex items-center gap-4">
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
							<button className="px-5 text-[#fff] rounded-md bg-[#00AB55] flex items-center h-[38px] gap-3">
								<DownloadIcon color="#fff" />
								<p className="font-semibold text-[14px] leading-[19px]">
									Download
								</p>
							</button>
							<button
								onClick={() => setModal(true)}
								className="px-5 text-[#fff] rounded-md bg-[#4361EE] flex items-center h-[38px] gap-3"
							>
								<PlusIcon color="#fff" />
								<p className="font-semibold text-[14px] leading-[19px]">
									Add New
								</p>
							</button>
						</div>
					</div>
					{modal && <NewUser modal={modal} setModal={setModal} />}
				</div>
				<div className="flex justify-between items-center pr-3">
					<div className="py-1 flex">
						<button
							className={`flex items-center gap-2 py-4 px-5 ${category === 'Oylik' ? 'text-[#4361EE]' : 'text-[#888EA8]'}`}
							onClick={() => setCategory('Oylik')}
						>
							<UserIcon color={category === 'Oylik' ? '#4361EE' : '#888EA8'} />
							<p className="font-semibold text-[14px]">Oylik ishchilar</p>
						</button>
						<button
							className={`flex items-center gap-2 py-4 px-5 ${category === 'Ishbay' ? 'text-[#4361EE]' : 'text-[#888EA8]'}`}
							onClick={() => setCategory('Ishbay')}
						>
							<UserIcon color={category === 'Ishbay' ? '#4361EE' : '#888EA8'} />
							<p className="font-semibold text-[14px]">Ishbay</p>
						</button>
						<button
							className={`flex items-center gap-2 py-4 px-5 ${category === 'Kunlik' ? 'text-[#4361EE]' : 'text-[#888EA8]'}`}
							onClick={() => setCategory('Kunlik')}
						>
							<UserIcon color={category === 'Kunlik' ? '#4361EE' : '#888EA8'} />
							<p className="font-semibold text-[14px]">Kunlik ishchilar</p>
						</button>
					</div>
					<div>
						<button
							onClick={() => setFilterModal(true)}
							className="px-5 text-[#fff] rounded-md bg-[#203674] flex items-center h-[38px] gap-3"
						>
							<FilterIcon />
							<p className="font-semibold text-[14px] leading-[19px]">Filtr</p>
						</button>
						{filterModal && (
							<HodimlarFilter modal={filterModal} setModal={setFilterModal} />
						)}
					</div>
				</div>
			</div>
			<div className="border mt-[20px]">
				<div className="bg-[#4D5773] w-full flex gap-[30px] items-center p-[10px] text-[#fff] rounded-tl-[5px] rounded-tr-[5px]">
					<div className="w-[90px] h-[20px]">
						<input
							type="checkbox"
							className="w-[15px] h-[20px]"
							checked={isAllSelected && filteredSearch.length > 0}
							onChange={handleSelectAll}
							disabled={filteredSearch.length === 0}
						/>
					</div>
					<div className="grid grid-cols-7 items-center gap-2 w-full">
						<h2 className="text-[14px] font-semibold">ID</h2>
						<h2 className="text-[14px] font-semibold">I.F.SH.</h2>
						<h3 className="text-[14px] font-semibold">Nomer</h3>
						<h3 className="text-[14px] font-semibold">Sana</h3>
						{/* <h3 className="text-[14px] font-semibold">Maosh</h3> */}
						<h3 className="text-[14px] font-semibold">Status</h3>
						<h3 className="text-[14px] font-semibold"></h3>
					</div>
				</div>
				<div className="w-full px-[10px] h-[600px] overflow-y-scroll">
					{filteredSearch.length > 0 ? (
						filteredSearch.map((item) => (
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
										onClick={() => navigate(`/details/${item.id}`)}
										className="w-[40px] h-[40px] cursor-pointer"
										alt=""
									/>
								</div>
								<TableContent
									id={item.id}
									name={item.name}
									phoneNumber={item.phoneNumber}
									date={item.date}
									// amount={item.amount}
									profile={item.profile}
									invoice={item.invoice}
								/>
							</div>
						))
					) : (
						<div className="flex justify-center items-center h-full">
							<p className="text-center text-gray-500 text-lg font-semibold">
								Malumot yo'q
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Table;
