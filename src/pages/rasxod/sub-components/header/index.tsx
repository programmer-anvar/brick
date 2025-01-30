import { LuDownload } from 'react-icons/lu';
import { RiDeleteBinLine } from 'react-icons/ri';

export default function Header() {
	return (
		<div className="flex flex-col gap-[2px]">
			<div className="flex justify-between bg-white rounded-md items-center p-4">
				<div>
					<p className="font-medium text-xl ml-4">Rasxodlar</p>
				</div>
				<div className="flex gap-4">
					<form className="relative h-10 w-[240px]">
						<input
							id="search-dropdownm"
							className="block h-full p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md outline-none"
							placeholder="Search"
							required
						/>
						<button
							type="submit"
							className=" absolute top-0 end-0 px-2 text-sm font-medium h-full text-gray-300  focus:ring-4 focus:outline-none  "
						>
							<svg
								className="w-4 h-4"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
							<span className="sr-only">Search</span>
						</button>
					</form>

					<button
						type="button"
						className="focus:outline-none flex justify-center items-center gap-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 h-10 "
					>
						<RiDeleteBinLine className="w-[20px] h-[20px]" />
						<span>Delete</span>
					</button>
					<button
						type="button"
						className="flex justify-center items-center gap-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 h-10 "
					>
						<LuDownload className="w-[20px] h-[20px]" />
						<span>Download</span>
					</button>
				</div>
			</div>
		</div>
	);
}
