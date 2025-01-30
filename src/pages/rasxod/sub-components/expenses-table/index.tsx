import { IoIosArrowForward } from 'react-icons/io';

export default function ExpensesTable() {
	return (
		<div className="md:col-span-1 bg-white p-5 rounded-md shadow">
			<div className="flex justify-between">
				<p className="text-[#40434E] text-2xl">Ro’yxatdan tashqari to’lovlar</p>
				<button
					type="button"
					className="text-white flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-normal rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
				>
					Ro’yxatdan tashqari
					<IoIosArrowForward className="w-[22px] h-[22px] ml-4" />
				</button>
			</div>
			<div className="relative overflow-x-auto mt-4">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-lg">
					<thead className="  text-white text-md">
						<tr className="bg-[#4D5773]">
							<th scope="col" className="px-6 py-3  rounded-l-lg">
								<span className="font-normal">ID</span>
							</th>
							<th scope="col" className="px-6 py-3">
								<span className="font-normal">DATE</span>
							</th>
							<th scope="col" className="px-6 py-3">
								<span className="font-normal">Firma nomi</span>
							</th>
							<th scope="col" className="px-6 py-3">
								<span className="font-normal">Mablag’ qiymati</span>
							</th>
							<th scope="col" className="px-6 py-3 rounded-r-lg">
								<span className="font-normal">Status</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{[0, 1, 2, 3, 4, 5].map((i) => (
							<tr key={i} className="bg-white border-b border-[#191E3A]">
								<td scope="row" className="px-6 py-1.5 text-[#40434E] ">
									#01
								</td>
								<td className="px-6 py-1.5">Oct 08, 2021</td>
								<td className="px-6 py-1.5">Murat building.mchj</td>
								<td className="px-6 py-1.5">$1,358.75</td>
								<td className="px-6 py-1.5">
									<div
										className={`${i === 0 ? 'text-[#5D5DEF] border-[#5D5DEF]' : 'text-red-500 border-red-500'} font-medium  flex items-center justify-center border-[1.5px] py-2 px-4`}
									>
										{i === 0 ? 'Completed' : 'In Process'}
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
