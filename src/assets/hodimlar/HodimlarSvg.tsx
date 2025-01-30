import React from 'react';

interface propsColor {
	color: string;
}

export const TrashIcon: React.FC<propsColor> = ({ color }) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.5 5H4.16667H17.5"
				stroke={color}
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.8332 4.99999V16.6667C15.8332 17.1087 15.6576 17.5326 15.345 17.8452C15.0325 18.1577 14.6085 18.3333 14.1665 18.3333H5.83317C5.39114 18.3333 4.96722 18.1577 4.65466 17.8452C4.3421 17.5326 4.1665 17.1087 4.1665 16.6667V4.99999M6.6665 4.99999V3.33332C6.6665 2.8913 6.8421 2.46737 7.15466 2.15481C7.46722 1.84225 7.89114 1.66666 8.33317 1.66666H11.6665C12.1085 1.66666 12.5325 1.84225 12.845 2.15481C13.1576 2.46737 13.3332 2.8913 13.3332 3.33332V4.99999"
				stroke={color}
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.3335 9.16666V14.1667"
				stroke={color}
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11.6665 9.16666V14.1667"
				stroke={color}
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const MoreIcon: React.FC = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g opacity="0.6">
				<path
					d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
					stroke="black"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
					stroke="black"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
					stroke="black"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};
export const PencilIcon: React.FC<propsColor> = ({ color }) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.1665 3.33334H3.33317C2.89114 3.33334 2.46722 3.50894 2.15466 3.8215C1.8421 4.13406 1.6665 4.55798 1.6665 5.00001V16.6667C1.6665 17.1087 1.8421 17.5326 2.15466 17.8452C2.46722 18.1577 2.89114 18.3333 3.33317 18.3333H14.9998C15.4419 18.3333 15.8658 18.1577 16.1783 17.8452C16.4909 17.5326 16.6665 17.1087 16.6665 16.6667V10.8333"
				stroke={color}
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.4165 2.08332C15.748 1.7518 16.1977 1.56555 16.6665 1.56555C17.1353 1.56555 17.585 1.7518 17.9165 2.08332C18.248 2.41484 18.4343 2.86448 18.4343 3.33332C18.4343 3.80216 18.248 4.2518 17.9165 4.58332L9.99984 12.5L6.6665 13.3333L7.49984 9.99999L15.4165 2.08332Z"
				stroke={color}
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const PlusIcon: React.FC<propsColor> = ({ color }) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10 4.16666V15.8333"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.1665 10H15.8332"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const DownloadIcon: React.FC<propsColor> = ({ color }) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.8335 8.33334L10.0002 12.5L14.1668 8.33334"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10 12.5V2.5"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
export const SearchIcon: React.FC = () => {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g opacity="0.5">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M5.91314 10.8263C8.6266 10.8263 10.8263 8.6266 10.8263 5.91314C10.8263 3.19969 8.6266 1 5.91314 1C3.19969 1 1 3.19969 1 5.91314C1 8.6266 3.19969 10.8263 5.91314 10.8263Z"
					stroke="#627B87"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9.71937 9.71889L12.8075 12.807"
					stroke="#627B87"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

export const UserIcon: React.FC<propsColor> = ({ color }) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0653 12.8512 14.2174 12.5 13.3334 12.5H6.66671C5.78265 12.5 4.93481 12.8512 4.30968 13.4763C3.68456 14.1014 3.33337 14.9493 3.33337 15.8333V17.5"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.99996 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99996 2.5C8.15901 2.5 6.66663 3.99238 6.66663 5.83333C6.66663 7.67428 8.15901 9.16667 9.99996 9.16667Z"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const FilterIcon: React.FC<propsColor> = ({ color }) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_174_3004)">
				<path
					d="M10 5.00001C10 5.44204 10.1756 5.86596 10.4882 6.17852C10.8007 6.49108 11.2246 6.66668 11.6667 6.66668C12.1087 6.66668 12.5326 6.49108 12.8452 6.17852C13.1577 5.86596 13.3333 5.44204 13.3333 5.00001C13.3333 4.55798 13.1577 4.13406 12.8452 3.8215C12.5326 3.50894 12.1087 3.33334 11.6667 3.33334C11.2246 3.33334 10.8007 3.50894 10.4882 3.8215C10.1756 4.13406 10 4.55798 10 5.00001Z"
					stroke={color}
					strokeWidth="1.4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3.33325 5H9.99992"
					stroke={color}
					strokeWidth="1.4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M13.3333 5H16.6666"
					stroke={color}
					strokeWidth="1.4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5 10C5 10.442 5.17559 10.866 5.48816 11.1785C5.80072 11.4911 6.22464 11.6667 6.66667 11.6667C7.10869 11.6667 7.53262 11.4911 7.84518 11.1785C8.15774 10.866 8.33333 10.442 8.33333 10C8.33333 9.55798 8.15774 9.13406 7.84518 8.8215C7.53262 8.50894 7.10869 8.33334 6.66667 8.33334C6.22464 8.33334 5.80072 8.50894 5.48816 8.8215C5.17559 9.13406 5 9.55798 5 10Z"
					stroke={color}
					strokeWidth="1.4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3.33325 10H4.99992"
					stroke={color}
					strokeWidth="1.4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M8.33325 10H16.6666"
					stroke={color}
					strokeWidth="1.4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12.5 15C12.5 15.442 12.6756 15.866 12.9882 16.1785C13.3007 16.4911 13.7246 16.6667 14.1667 16.6667C14.6087 16.6667 15.0326 16.4911 15.3452 16.1785C15.6577 15.866 15.8333 15.442 15.8333 15C15.8333 14.558 15.6577 14.1341 15.3452 13.8215C15.0326 13.5089 14.6087 13.3333 14.1667 13.3333C13.7246 13.3333 13.3007 13.5089 12.9882 13.8215C12.6756 14.1341 12.5 14.558 12.5 15Z"
					stroke={color}
					strokeWidth="1.4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3.33325 15H12.4999"
					stroke={color}
					strokeWidth="1.4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15.8333 15H16.6666"
					stroke={color}
					strokeWidth="1.4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_174_3004">
					<rect width="20" height="20" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export const HomeIcon: React.FC<propsColor> = ({ color }) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.5 18.3333V10H12.5V18.3333"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
export const MoneyIcon: React.FC<propsColor> = ({ color }) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10 0.833344V19.1667"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.1667 4.16666H7.91667C7.14312 4.16666 6.40125 4.47395 5.85427 5.02093C5.30729 5.56791 5 6.30978 5 7.08332C5 7.85687 5.30729 8.59874 5.85427 9.14572C6.40125 9.6927 7.14312 9.99999 7.91667 9.99999H12.0833C12.8569 9.99999 13.5987 10.3073 14.1457 10.8543C14.6927 11.4012 15 12.1431 15 12.9167C15 13.6902 14.6927 14.4321 14.1457 14.9791C13.5987 15.526 12.8569 15.8333 12.0833 15.8333H5"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const TasqidlashOne: React.FC = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_267_2006)">
				<path
					d="M17 3.34C18.5083 4.21085 19.7629 5.46053 20.6398 6.9653C21.5167 8.47007 21.9854 10.1778 21.9994 11.9193C22.0135 13.6609 21.5725 15.376 20.72 16.8947C19.8676 18.4134 18.6332 19.6832 17.1392 20.5783C15.6452 21.4734 13.9434 21.9628 12.2021 21.9981C10.4608 22.0333 8.74055 21.6132 7.21155 20.7792C5.68256 19.9453 4.39787 18.7265 3.48467 17.2435C2.57146 15.7605 2.06141 14.0647 2.005 12.324L2 12L2.005 11.676C2.061 9.94899 2.56355 8.26596 3.46364 6.79099C4.36373 5.31602 5.63065 4.09945 7.14089 3.25988C8.65113 2.42031 10.3531 1.9864 12.081 2.00044C13.8089 2.01448 15.5036 2.476 17 3.34ZM15.707 9.293C15.5348 9.12082 15.3057 9.01739 15.0627 9.00211C14.8197 8.98683 14.5794 9.06075 14.387 9.21L14.293 9.293L11 12.585L9.707 11.293L9.613 11.21C9.42058 11.0609 9.18037 10.987 8.9374 11.0024C8.69444 11.0177 8.46541 11.1211 8.29326 11.2933C8.12112 11.4654 8.01768 11.6944 8.00235 11.9374C7.98702 12.1804 8.06086 12.4206 8.21 12.613L8.293 12.707L10.293 14.707L10.387 14.79C10.5624 14.9261 10.778 14.9999 11 14.9999C11.222 14.9999 11.4376 14.9261 11.613 14.79L11.707 14.707L15.707 10.707L15.79 10.613C15.9393 10.4206 16.0132 10.1803 15.9979 9.93732C15.9826 9.69429 15.8792 9.46519 15.707 9.293Z"
					fill="#34C759"
				/>
			</g>
			<defs>
				<clipPath id="clip0_267_2006">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};
export const TasdiqlashTwo: React.FC = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_267_1999)">
				<path
					d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM15.6 7.2C15.4949 7.12121 15.3754 7.06388 15.2482 7.03129C15.121 6.99869 14.9886 6.99148 14.8586 7.01005C14.7286 7.02862 14.6035 7.07262 14.4905 7.13953C14.3775 7.20643 14.2788 7.29494 14.2 7.4L12 10.333L9.8 7.4C9.72121 7.29494 9.62249 7.20643 9.50949 7.13953C9.39649 7.07262 9.27142 7.02862 9.14142 7.01005C9.01142 6.99148 8.87903 6.99869 8.75182 7.03129C8.62461 7.06388 8.50506 7.12121 8.4 7.2C8.29494 7.27879 8.20643 7.37751 8.13953 7.49051C8.07262 7.60351 8.02862 7.72858 8.01005 7.85858C7.99148 7.98858 7.99869 8.12097 8.03129 8.24818C8.06388 8.37539 8.12121 8.49494 8.2 8.6L10.75 12L8.2 15.4C8.04087 15.6122 7.97254 15.8789 8.01005 16.1414C8.04756 16.404 8.18783 16.6409 8.4 16.8C8.61217 16.9591 8.87887 17.0275 9.14142 16.99C9.40397 16.9524 9.64087 16.8122 9.8 16.6L12 13.667L14.2 16.6C14.3591 16.8122 14.596 16.9524 14.8586 16.99C15.1211 17.0275 15.3878 16.9591 15.6 16.8C15.8122 16.6409 15.9524 16.404 15.9899 16.1414C16.0275 15.8789 15.9591 15.6122 15.8 15.4L13.25 12L15.8 8.6C15.8788 8.49494 15.9361 8.37539 15.9687 8.24818C16.0013 8.12097 16.0085 7.98858 15.9899 7.85858C15.9714 7.72858 15.9274 7.60351 15.8605 7.49051C15.7936 7.37751 15.7051 7.27879 15.6 7.2Z"
					fill="#FF3B30"
				/>
			</g>
			<defs>
				<clipPath id="clip0_267_1999">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};
