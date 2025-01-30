import { TasdiqlashTwo, TasqidlashOne } from '@/assets/hodimlar/HodimlarSvg';
import React, { useState } from 'react';

const Colapse = () => {
	return (
		<div className=" w-full  flex justify-between p-[10px]">
			<div className="flex-[.33] grid grid-cols-3 items-center w-full gap-[50px]">
				<div className="flex items-center  ">
					{/* <input type="checkbox" /> */}
					<p className="">Yanvar</p>
				</div>
				<h2 className="">150000</h2>
				<h2>20000</h2>
			</div>
			<div className="flex-[.6] w-full grid grid-cols-4 items-center  pr-[20px] gap-5 ">
				<h3 className="">150000</h3>
				<h3 className="">-555</h3>
				<div className="flex gap-3">
					<button>
						<TasdiqlashTwo />
					</button>
					<button>
						<TasqidlashOne />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Colapse;