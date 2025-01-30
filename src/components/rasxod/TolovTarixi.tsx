import {
	DownloadIcon,
	FilterIcon,
	MoreIcon,
	PencilIcon,
	PlusIcon,
	SearchIcon,
	TrashIcon,
} from '@/assets/hodimlar/HodimlarSvg';
import { deleteSelected } from '@/store/slices/oylikSlice';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// import FilterRasxod from '../modals/FilterRasxod';

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

const TolovTarixi: React.FC = () => {
	const items = useSelector((state: RootState) => state.oylik.items);
	const [selectCategory, setSelectCategory] = useState<string>('Kamunal');

	const [category] = useState<string>('Oylik');
	const [dropdown, setDropdown] = useState<boolean>(false);
	const [search, setSearch] = useState<string>('');
	const [selectRows, setSelectRows] = useState<number[]>([]);
	const [selectData, setSelectData] = useState<Item[]>([]);

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

	// console.log(selectData);
	const handleClick = () => {
		setDropdown((prev) => !prev);
	};
	const handleDropDownClick = (text: string) => {
		setSelectCategory(text);
		setDropdown(false);
	};
	return (
		<div className="">
			<div className=" bg-[#fff] mt-[20px]">
				<div className="bg-[#fff] rounded-md shadow-md">
					<div className="flex justify-between items-center py-4 border-b border-[#1B2E4B] pl-5 pr-3 ">
						<h2 className="text-[24px] font-medium leading-[28px]">
							Rasxodlar
						</h2>
						<div className="flex items-center gap-4 ">
							<div className="bg-[#DFE8F1] flex p-4 h-[40px] border border-[#00000014] rounded-[5px] items-center gap-1">
								<input
									type="text"
									className="border-0 outline-none bg-transparent text-[12px]"
									placeholder="Search"
									value={search}
									onChange={(e) => setSearch(e.target.value)}
								/>
								<SearchIcon />
							</div>
							<div className="flex gap-4">
								<button
									className="px-5 text-[#fff] rounded-md bg-[#E7515A] flex items-center h-[38px] gap-2"
									onClick={handleDeleteSelected}
									disabled={selectRows.length === 0} // Disable if nothing is selected
								>
									<TrashIcon color="#fff" />
									<p className="font-semibold text-[14px] leading-[19px]">
										Delete
									</p>
								</button>
								<button className="px-5 text-[#fff] rounded-md bg-[#00AB55] flex items-center h-[38px] gap-2">
									<DownloadIcon color="#fff" />
									<p className="font-semibold text-[14px] leading-[19px]">
										Download
									</p>
								</button>
								<button className="px-5 text-[#fff] rounded-md bg-[#43EE69] flex items-center h-[38px] gap-2">
									<PencilIcon color="#fff" />
									<p className="font-semibold text-[14px] leading-[19px]">
										Parol yangilash
									</p>
								</button>{' '}
								<button className="px-5 text-[#fff] rounded-md bg-[#4361EE] flex items-center h-[38px] gap-2">
									<PlusIcon color="#fff" />
									<p className="font-semibold text-[14px] leading-[19px]">
										Add New
									</p>
								</button>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center pr-3">
						<div className="py-1 flex flex-[.5]  relative">
							<div
								onClick={handleClick}
								className=" border w-[350px] flex cursor-pointer items-center justify-between px-3 py-[10px] ml-[17px] my-2 text-[#4361EE] border-[#4361EE] rounded-md"
							>
								{selectCategory}{' '}
								{!dropdown ? <IoIosArrowDown /> : <IoIosArrowUp />}
							</div>
							{dropdown && (
								<div className="absolute  bg-[#fff] top-[60px] px-3 py-[10px]    my-2 text-[#4361EE] border-[#4361EE] rounded-md w-[350px] border ml-[17px] ">
									<div
										className="group w-full"
										onClick={() => handleDropDownClick('Ish Oyliklar')}
									>
										<p className="group-hover:bg-[#4361EE] group-hover:text-[#fff] cursor-pointer px-3 py-2 rounded-md text-[14px] font-bold">
											Ish Oyliklar
										</p>
									</div>
									<div
										className="group w-full "
										onClick={() => handleDropDownClick('Komunal')}
									>
										<p className="group-hover:bg-[#4361EE] cursor-pointer group-hover:text-[#fff] px-3 py-2 rounded-md text-[14px] font-bold">
											Komunal
										</p>
									</div>{' '}
									<div
										className="group w-full "
										onClick={() => handleDropDownClick('Homashyolar')}
									>
										<p className="group-hover:bg-[#4361EE] cursor-pointer group-hover:text-[#fff] px-3 py-2 rounded-md text-[14px] font-bold">
											Homashyolar
										</p>
									</div>{' '}
									<div
										className="group w-full "
										onClick={() => handleDropDownClick('Soliqlar')}
									>
										<p className="group-hover:bg-[#4361EE] cursor-pointer group-hover:text-[#fff] px-3 py-2 rounded-md text-[14px] font-bold">
											Soliqlar
										</p>
									</div>{' '}
									<div
										className="group w-full "
										onClick={() => handleDropDownClick('Boshqalar')}
									>
										<p className="group-hover:bg-[#4361EE] cursor-pointer group-hover:text-[#fff] px-3 py-2 rounded-md text-[14px] font-bold">
											Boshqalar
										</p>
									</div>{' '}
									<div
										className="group w-full"
										onClick={() => handleDropDownClick('Xammasi')}
									>
										<p className="group-hover:bg-[#4361EE] cursor-pointer group-hover:text-[#fff] px-3 py-2 rounded-md text-[14px] font-bold">
											Xammasi
										</p>
									</div>
								</div>
							)}

							{/* <button
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
							</button> */}
						</div>
						<div className="flex flex-[.5] w-full">
							<div className="bg-[#DFE8F1] flex p-4 h-[40px] border border-[#00000014] w-full rounded-[5px] items-center gap-1 ">
								<input
									type="text"
									className="border-0 outline-none bg-transparent w-full text-[12px]"
									placeholder="Search"
									value={search}
									onChange={(e) => setSearch(e.target.value)}
								/>
								<SearchIcon />
							</div>
							<button className="px-5 text-[#000] rounded-md bg-[#fff] w-[23%] flex items-center h-[38px] gap-3">
								<FilterIcon color="#000" />
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
							className="w-[15px] h-[20px]"
							checked={isAllSelected && filteredSearch.length > 0}
							onChange={handleSelectAll}
							disabled={filteredSearch.length === 0}
						/>
					</div>
					<div className="grid grid-cols-10 items-center  w-full ">
						<h2 className="text-[14px] font-semibold ">ID</h2>
						<h2 className="text-[14px] font-semibold">I.F.SH.</h2>
						<h3 className="text-[14px] font-semibold">Sana</h3>
						<h3 className="text-[14px] font-semibold">Nomer</h3>
						<h3 className="text-[14px] font-semibold">Ishchi status</h3>
						<h3 className="text-[14px] font-semibold">Avans</h3>
						<h3 className="text-[14px] font-semibold">Maosh</h3>
						<h3 className="text-[14px] font-semibold">Qolgan summa</h3>
						<h3 className="text-[14px] font-semibold">Statust</h3>
						<h3 className="text-[14px] font-semibold"></h3>
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
										className="w-[40px] h-[40px] cursor-pointer"
										alt=""
									/>
								</div>
								<div className="grid grid-cols-10 gap-3 items-center w-full ">
									<p className="text-[14px] font-semibold ">{item.invoice}</p>

									<h2 className="text-[14px] font-medium">{item.name}</h2>
									<h3 className="text-[14px] font-medium">{item.date}</h3>
									<h2 className="text-[14px] font-medium">
										{item.phoneNumber}
									</h2>
									<div className="">
										<button className="py-1 px-4 border  border-[#58BC2D] text-[#58BC2D] text-[14px] font-medium">
											{item.ishchiStatus}
										</button>
									</div>
									<h3 className="text-[14px] font-medium">{item.avans} so'm</h3>
									<h3 className="text-[14px] font-medium">{item.money} so'm</h3>
									<h3 className="text-[14px] font-medium">
										{item.money - item.avans} so'm
									</h3>
									<div className="">
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

export default TolovTarixi;
