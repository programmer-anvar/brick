import { IoCloseOutline } from 'react-icons/io5';
import Select from 'react-select';
import { useState } from 'react';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import TimePicker from 'react-time-picker';
import DatePicker from 'react-datepicker';

interface InputExpenseModalProps {
	onCloseModal: () => void;
}

const options = [
	{ value: 'Soliq', label: 'Soliq' },
	{ value: 'Komunalka', label: 'Komunalka' },
	{ value: 'Ishchi oyliklari', label: 'Ishchi oyliklari' },
	{ value: 'Homashyolar', label: 'Homashyolar' },
];

const InputExpenseModal: React.FC<InputExpenseModalProps> = ({
	onCloseModal,
}) => {
	const [type, setType] = useState('');
	const [time, setTime] = useState<string | null>('00:00');
	const [startDate, setStartDate] = useState<Date | null>(new Date());

	return (
		<>
			<div className="flex items-center justify-between bg-[#4D5773] py-3 pl-4 pr-4">
				<p className="text-white font-normal">Chiqim kiritish</p>

				<button onClick={onCloseModal}>
					<IoCloseOutline className="w-[28px] h-[28px] bg-white rounded-full hover:opacity-85" />
				</button>
			</div>

			<div className="mx-4 flex flex-col gap-6 my-6">
				<div>
					<label
						htmlFor="Harajat_tavsifi"
						className="block mb-1 text-sm font-normal text-[#404040] "
					>
						Harajat tavsifi
					</label>
					<input
						type="text"
						id="Harajat_tavsifi"
						className="bg-gray-50 border border-gray-300 text-[#404040] font-light text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-3"
						placeholder="Batafsil"
						required
					/>
				</div>

				<div>
					<label
						htmlFor="tur"
						className="block mb-1 text-sm font-normal text-[#404040] "
					>
						Turini tanlang
					</label>
					<Select
						className="flex-1 text-sm"
						placeholder="Turni tanlang..."
						options={options}
						onChange={(e) => {
							if (e === null) {
								setType('');
							} else {
								setType(e.value);
								console.log(type);
							}
						}}
						isClearable
					/>
				</div>

				<div>
					<label
						htmlFor="Summasi"
						className="block mb-1 text-sm font-normal text-[#404040] "
					>
						Summasi
					</label>
					<input
						type="text"
						id="Summasi"
						className="bg-gray-50 border border-gray-300 text-[#404040] font-light text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-3"
						placeholder="00.00"
						required
					/>
				</div>

				<div className="flex justify-evenly gap-2">
					<div className="flex-1">
						<label
							htmlFor="time"
							className="block mb-1 text-sm font-normal text-[#404040] "
						>
							Time
						</label>
						<TimePicker
							onChange={setTime}
							format="HH:mm"
							disableClock={true}
							clearIcon={null}
							value={time}
							className="w-full p-1 border rounded-md text-md text-[#404040] bg-gray-100 focus:outline-none transition duration-300 ease-in-out timepicker-no-border"
						/>
					</div>
					<div className="flex-1 ">
						<label
							htmlFor="Date"
							className="block mb-1 text-sm font-normal text-[#404040] "
						>
							Date
						</label>
						<div className="bg-gray-100 flex justify-left items-center h-[36px] rounded-md border px-2">
							<DatePicker
								selected={startDate}
								onChange={(date) => setStartDate(date)}
								className="flex-1 bg-gray-100 w-full text-[#404040]"
							/>
						</div>
					</div>
				</div>
				<div className="flex justify-end mt-8">
					<div className="flex gap-1.5">
						<button
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
						>
							Save
						</button>
						<button
							type="button"
							onClick={onCloseModal}
							className="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
						>
							Отмена
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default InputExpenseModal;
