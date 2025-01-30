import React, { useState } from 'react';
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
import { deleteSelected } from '@/store/slices/hodimSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import NewUser from '../modals/NewUser';
import HodimlarFilter from '../modals/HodimlarFilter';
import TableContent from './TableContent';
import { Select } from 'antd';
interface Item {
	category: string;
	id: number;
	name: string;
	rashod: string;
	rashodType: string;
	vaqt: string;
	sana: string;
	chiqim: string;
	img: string;
}
interface RootState {
	kamunal: {
		items: Item[];
	};
}

const Kamunal: React.FC = () => {
	const items = useSelector((state: RootState) => {
		console.log(state.kamunal);
		return state.kamunal?.items || [];
	});
	const [modal, setModal] = useState<boolean>(false);
	const [filterModal, setFilterModal] = useState<boolean>(false);
	const [category, setCategory] = useState<number>(0);
	const [search, setSearch] = useState<string>('');
	const [selectRows, setSelectRows] = useState<number[]>([]);
	const [selectData, setSelectData] = useState<Item[]>([]);
	console.log(items);
	const filteredData = items.filter((f) => f.rashod !== category);
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
	console.log(filteredSearch);
	return (
		<div className="bg-[#fff] mt-[20px]">
			<div className="bg-[#fff] rounded-md shadow-md">
				<div className="flex justify-between items-center py-4 border-b border-[#1B2E4B] pl-5 pr-3">
					<h2 className="text-[24px] font-medium leading-[28px]">Kamunal</h2>
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
			</div>
			<div className="flex items-center justify-between px-5">
				<Select
					showSearch
					style={{ width: 300, marginTop: '11px' }}
					placeholder="Search to Select"
					optionFilterProp="label"
					filterSort={(optionA, optionB) =>
						(optionA?.label ?? '')
							.toLowerCase()
							.localeCompare((optionB?.label ?? '').toLowerCase())
					}
					options={[
						{
							value: '1',
							label: 'Not Identified',
						},
						{
							value: '2',
							label: 'Closed',
						},
						{
							value: '3',
							label: 'Communicated',
						},
						{
							value: '4',
							label: 'Identified',
						},
						{
							value: '5',
							label: 'Resolved',
						},
						{
							value: '6',
							label: 'Cancelled',
						},
					]}
				/>

				<div className="flex items-center gap-[14px] mt-4">
					<h3>2 000 000 </h3>
					<h3>Iyul Dekabr</h3>
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
					<div className="grid grid-cols-10 items-center gap-2 w-full">
						<h2 className="text-[14px] font-semibold -ml-[60px]">Img</h2>
						<h2 className="text-[14px] font-semibold -ml-[120px]">ID</h2>
						<h2 className="text-[14px] font-semibold -ml-[120px]">Kirituvchi shaxs</h2>
						<h3 className="text-[14px] font-semibold -ml-[100px]">Rashod Bolimi</h3>
						<h3 className="text-[14px] font-semibold -ml-[90px]">Rashod Turi</h3>
						<h3 className="text-[14px] font-semibold -ml-[70px]">vaqt</h3>
						<h3 className="text-[14px] font-semibold -ml-[40px]">Sana</h3>
						<h3 className="text-[14px] font-semibold -ml-[30px]">Chiqim</h3>
						<h3 className="text-[14px] font-semibold">Chiqim</h3>
						<h3 className="text-[14px] font-semibold">delete</h3>
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
										src={item.img}
										onClick={() => navigate(`/details/${item.id}`)}
										className="w-[40px] h-[40px] cursor-pointer"
										alt=""
									/>
								</div>
								<TableContent
									id={item.id}
									name={item.name}
									rashod={item.rashod}
									rashodType={item.rashodType}
									vaqt={item.vaqt}
									sana={item.sana}
									chiqim={item.chiqim}
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

export default Kamunal;
