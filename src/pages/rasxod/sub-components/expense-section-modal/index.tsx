import { IoCloseOutline, IoCloudUploadOutline } from 'react-icons/io5';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

interface InputExpenseModalProps {
	onCloseModal: () => void;
}

const ExpenseSectionModal: React.FC<InputExpenseModalProps> = ({
	onCloseModal,
}) => {
	const [images, setImages] = useState<ImageListType>([]);

	const onChange = (imageList: ImageListType) => {
		setImages(imageList);
	};

	return (
		<>
			<div className="flex items-center justify-between bg-[#4D5773] py-3 pl-4 pr-4">
				<p className="text-white font-normal">Chiqim Bo'lim yaratish</p>

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
						Chiqim Bo'limini nomi
					</label>
					<input
						type="text"
						id="Harajat_tavsifi"
						className="bg-gray-50 border border-gray-300 text-[#404040] font-light text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-3"
						placeholder="Chiqim Bo'limini nomini kiriting..."
						required
					/>
				</div>

				<div>
					<label
						htmlFor="Summasi"
						className="block mb-1 text-sm font-normal text-[#404040] "
					>
						Qisqartma Nomi
					</label>
					<input
						type="text"
						id="Summasi"
						className="bg-gray-50 border border-gray-300 text-[#404040] font-light text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-3"
						placeholder="Qisqartma Nomi Kiriting..."
						required
					/>
				</div>

				<div>
					<label
						htmlFor="Summasi2"
						className="block mb-1 text-sm font-normal text-[#404040] "
					>
						Rashod Rasmi
					</label>
					<ImageUploading
						value={images}
						onChange={onChange}
						dataURLKey="data_url"
					>
						{({
							imageList,
							onImageUpload,
							onImageRemove,
							isDragging,
							dragProps,
						}) => (
							<div className="upload__image-wrapper">
								<div className=" flex items-center justify-center">
									{imageList.map((image, index) => (
										<div key={index} className="image-item group relative">
											<img src={image['data_url']} alt="" width="300" />

											<button
												className="group-hover:flex group-hover:bg-opacity-70 group-hover:bg-gray-200   hidden absolute left-0 bottom-0 right-0 top-0 items-center justify-center"
												onClick={() => onImageRemove(index)}
											>
												<IoIosCloseCircleOutline className="w-[80px] h-[80px] rounded-full  text-red-500" />
											</button>
										</div>
									))}
								</div>
								{imageList.length == 0 && (
									<button
										style={isDragging ? { color: 'red' } : undefined}
										onClick={onImageUpload}
										{...dragProps}
										className="bg-gray-50 cursor-pointer border flex items-center justify-center border-gray-300 text-[#404040] font-light text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-6 px-3"
									>
										<IoCloudUploadOutline className="w-[50px] h-[50px]" />
									</button>
								)}
								&nbsp;
							</div>
						)}
					</ImageUploading>
				</div>

				<div className="flex justify-end mt-2">
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

export default ExpenseSectionModal;
