import React, { ReactNode } from 'react';
import { Sitebar } from './sitebar/Sitebar';

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<div className="bg-[#203674] h-[100vh] py-6  p-8 ">
				<div className="flex h-full bg-[#071A50] rounded-[22px] ">
					<Sitebar />
					<div className="w-full bg-[#F1F5F8] overflow-hidden rounded-[22px] px-8 py-[25px]">
						{children}
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
