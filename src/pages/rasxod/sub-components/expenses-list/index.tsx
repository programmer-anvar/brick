import { FiPlus } from 'react-icons/fi';
import percent from './../../icons/percent.svg';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import InputExpenseModal from '../input-expense-modal';
import ExpenseSectionModal from '../expense-section-modal';

const servicesList = [
	'Soliq',
	'Komunalka',
	'Ishchi oyliklari',
	'Homashyolar',
	'Soliq',
	'Komunalka',
	'Ishchi oyliklari',
	'Homashyolar',
	'Soliq',
	'Komunalka',
	'Ishchi oyliklari',
];

export default function ExpensesList() {
	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	const [open2, setOpen2] = useState(false);

	const onOpenModal2 = () => setOpen2(true);
	const onCloseModal2 = () => setOpen2(false);

	return (
		<div>
			<p className="m-5 text-2xl font-medium">Chiqimlar ro’yxati</p>
			<div className="bg-white rounded-md shadow mt-2 p-6">
				<div className="flex justify-between">
					<button
						onClick={onOpenModal}
						type="button"
						className="text-white flex gap-3 items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-normal rounded-lg text-sm px-5 py-3.5 me-2 mb-2"
					>
						<FiPlus className="w-[22px] h-[22px]" />
						Chiqim qo’shish
					</button>
					<input
						id="search-dropdownm"
						className="block h-full p-4 z-20 w-[300px] text-md text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md outline-none"
						placeholder="Search"
						required
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
					{servicesList.map((service, index) => (
						<div
							key={index}
							className="md:col-span-1 cursor-pointer gap-2 shadow-md flex items-center justify-center text-white rounded-md  p-5 bg-[#4D5773]  "
						>
							<img
								src={percent}
								className="w-[30px] h-[30px]"
								alt="percent icon"
							/>
							<span>{service}</span>
						</div>
					))}
					<div
						onClick={onOpenModal2}
						className="md:col-span-1 text-[100px] cursor-pointer shadow-md flex items-center justify-center text-white rounded-md bg-[#4361EEB5]"
					>
						<FaPlus className="w-[60px] h-[60px]" />
					</div>
				</div>
			</div>
			<Modal
				open={open}
				onClose={onCloseModal}
				showCloseIcon={false} // This removes the close button
				classNames={{
					overlay: 'blurOverlay', // Apply custom overlay class
					modal: 'adding-expense-modal',
					closeButton: 'close-button-addmin-expense-modal',
				}}
				center
			>
				<InputExpenseModal onCloseModal={onCloseModal} />
			</Modal>

			<Modal
				open={open2}
				onClose={onCloseModal2}
				showCloseIcon={false} // This removes the close button
				classNames={{
					overlay: 'blurOverlay', // Apply custom overlay class
					modal: 'adding-expense-modal',
					closeButton: 'close-button-addmin-expense-modal',
				}}
				center
			>
				<ExpenseSectionModal onCloseModal={onCloseModal2} />
			</Modal>
		</div>
	);
}
