import React from 'react';

const Product: React.FC = () => {
	return (
		<div className=" p-2" style={{ boxShadow: '2px 5px 145px 0px #0000000F' }}>
			<img src="" className="w-[185px] h-[95px] bg-[#00A76F14]" alt="" />
			<h2 className="text-[14px] font-extrabold mt-2">Gisht dszcsdvxv</h2>
			<p className="text-[#000000] opacity-45 text-[12px]">Pishiq g’isht</p>

			<button className="mt-2 bg-[#E4ECF7] p-2 w-full rounded-lg text-[10px]">
				32 000 so’m
			</button>
		</div>
	);
};

export default Product;
