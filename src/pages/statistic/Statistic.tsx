import React from 'react';
import Header from './sub-components/header';
import ReactApexChart from 'react-apexcharts';
import { LuDownload } from 'react-icons/lu';
import { FilterIcon } from '@/assets/hodimlar/HodimlarSvg';

interface SalesByCategory {
	series: number[];
	options?: ApexCharts.ApexOptions;
}

interface RevenueChart {
	series: {
		name?: string;
		data: number[];
	}[];
	options?: ApexCharts.ApexOptions;
}

const salesByCategory: SalesByCategory = {
	series: [985, 737, 270],
	options: {
		chart: {
			type: 'donut',
			height: 460,
			fontFamily: 'Nunito, sans-serif',
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 25,
		},

		legend: {
			position: 'bottom',
			horizontalAlign: 'center',
			fontSize: '14px',
			height: 50,
			offsetY: 20,
		},
		plotOptions: {
			pie: {
				donut: {
					size: '65%',
					background: 'transparent',
					labels: {
						show: true,
						name: {
							show: true,
							fontSize: '29px',
							offsetY: -10,
						},
						value: {
							show: true,
							fontSize: '26px',
							offsetY: 16,
						},
						total: {
							show: true,
							label: 'Total',
							color: '#888ea8',
							fontSize: '29px',
						},
					},
				},
			},
		},
		labels: ['Apparel', 'Sports', 'Others'],
		states: {
			hover: {
				filter: {
					type: 'none',
					value: 0.15,
				},
			},
			active: {
				filter: {
					type: 'none',
					value: 0.15,
				},
			},
		},
	},
};

const revenueChart: RevenueChart = {
	series: [
		{
			name: 'Income',
			data: [
				16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000,
				14000, 17000,
			],
		},
		{
			name: 'Expenses',
			data: [
				16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000,
				18000, 19000,
			],
		},
	],
	options: {
		chart: {
			height: 325,
			type: 'area',
			fontFamily: 'Nunito, sans-serif',
			zoom: {
				enabled: false,
			},
			toolbar: {
				show: false,
			},
		},

		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			curve: 'smooth',
			width: 2,
			lineCap: 'square',
		},
		markers: {
			discrete: [
				{
					seriesIndex: 0,
					dataPointIndex: 6,
					fillColor: '#1B55E2',
					strokeColor: 'transparent',
					size: 7,
				},
				{
					seriesIndex: 1,
					dataPointIndex: 5,
					fillColor: '#E7515A',
					strokeColor: 'transparent',
					size: 7,
				},
			],
		},
		labels: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		xaxis: {
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			crosshairs: {
				show: true,
			},
			labels: {
				offsetY: 5,
				style: {
					fontSize: '12px',
					cssClass: 'apexcharts-xaxis-title',
				},
			},
		},
		yaxis: {
			tickAmount: 7,
			labels: {
				formatter: (value: number) => {
					return value / 1000 + 'K';
				},
				offsetY: 0,
				style: {
					fontSize: '12px',
					cssClass: 'apexcharts-yaxis-title',
				},
			},
		},
		grid: {
			strokeDashArray: 5,
			xaxis: {
				lines: {
					show: true,
				},
			},
			yaxis: {
				lines: {
					show: false,
				},
			},
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
			},
		},
		legend: {
			position: 'top',
			horizontalAlign: 'right',
			fontSize: '16px',
			itemMargin: {
				horizontal: 10,
				vertical: 5,
			},
		},
		tooltip: {
			marker: {
				show: true,
			},
			x: {
				show: false,
			},
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				inverseColors: !1,
				opacityTo: 0.05,
			},
		},
	},
};

const revenueChart2: RevenueChart = {
	series: [
		{
			name: 'Income',
			data: [
				16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000,
				14000, 17000,
			],
		},
		{
			name: 'Expenses',
			data: [
				16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000,
				18000, 19000,
			],
		},
	],
	options: {
		chart: {
			height: 325,
			type: 'area',
			fontFamily: 'Nunito, sans-serif',
			zoom: {
				enabled: false,
			},
			toolbar: {
				show: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			curve: 'smooth',
			width: 2,
			lineCap: 'square',
		},
		markers: {
			discrete: [
				{
					seriesIndex: 0,
					dataPointIndex: 6,
					fillColor: '#1B55E2',
					strokeColor: 'transparent',
					size: 7,
				},
				{
					seriesIndex: 1,
					dataPointIndex: 5,
					fillColor: '#E7515A',
					strokeColor: 'transparent',
					size: 7,
				},
			],
		},
		labels: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		xaxis: {
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			crosshairs: {
				show: true,
			},
			labels: {
				offsetY: 5,
				style: {
					fontSize: '12px',
					cssClass: 'apexcharts-xaxis-title',
				},
			},
		},
		yaxis: {
			tickAmount: 7,
			labels: {
				formatter: (value: number) => {
					return value / 1000 + 'K';
				},
				offsetY: 0,
				style: {
					fontSize: '12px',
					cssClass: 'apexcharts-yaxis-title',
				},
			},
		},
		grid: {
			strokeDashArray: 5,
			xaxis: {
				lines: {
					show: true,
				},
			},
			yaxis: {
				lines: {
					show: false,
				},
			},
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
			},
		},
		legend: {
			show: false,
			position: 'top',
			horizontalAlign: 'right',
			fontSize: '16px',
			itemMargin: {
				horizontal: 10,
				vertical: 5,
			},
		},
		tooltip: {
			marker: {
				show: true,
			},
			x: {
				show: false,
			},
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				inverseColors: false,
				opacityTo: 0.05,
			},
		},
	},
};

const Statistic: React.FC = () => {
	return (
		<div className="">
			<Header />

			<div className="max-h-[calc(100vh-200px)] overflow-y-scroll mt-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
					<div className="md:col-span-2 bg-white p-5 rounded-md shadow">
						<div className="flex justify-between">
							<p className="text-lg">Revenue</p>
							<div className="flex gap-3">
								<button className="flex justify-center items-center gap-2 focus:outline-none text-white bg-[#203674] hover:bg-[#142d71] focus:ring-4  font-medium rounded-lg text-sm px-5 h-10 ">
									<FilterIcon />
									<p className="font-semibold text-[14px] leading-[19px]">
										Filtr
									</p>
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
						<div className="flex gap-10">
							<p>
								<span className="text-lg">Kirim summa</span>{' '}
								<span className="text-[#4361EE]">$10,840</span>
							</p>
							<p>
								<span className="text-lg">Chiqim summa</span>{' '}
								<span className="text-[#4361EE]">$10,840</span>
							</p>
						</div>
						<ReactApexChart
							series={revenueChart.series}
							options={revenueChart.options}
							type="area"
							height={360}
						/>
					</div>
					<div className="md:col-span-1 bg-white p-5 rounded-md shadow">
						<div className="flex justify-between">
							<p className="text-lg">Sales by Category</p>
							<div className="flex gap-4 text-base">
								<span className="text-[#4361EE] underline cursor-pointer">
									Income
								</span>
								<span className="text-[#00AB55] cursor-pointer">Outcome</span>
							</div>
						</div>
						<ReactApexChart
							series={salesByCategory.series}
							options={salesByCategory.options}
							type="donut"
							height={460}
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
					<div className="md:col-span-1 bg-white p-6 rounded-md shadow">
						<div className="flex justify-between">
							<div className="flex flex-col gap-1">
								<span className="text-[#40434E] text-2xl">Rasxodlar</span>
								<span className="text-[#E7515A] text-sm">
									Must be paid before July 27, 2022
								</span>
							</div>
							<div className="flex flex-col gap-1">
								<span className="text-[#4361EE]">Rasxodlar</span>
								<span className="text-3xl">$50,000.00</span>
							</div>
						</div>

						<ReactApexChart
							series={revenueChart2.series}
							options={revenueChart2.options}
							type="area"
							height={300}
						/>
					</div>
					<div className="md:col-span-1 bg-white p-5 rounded-md shadow">
						<p className="text-[#40434E] text-2xl">
							Ro’yxatdan tashqari to’lovlar
						</p>
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
										<th scope="col" className="px-6 py-3 rounded-r-lg">
											<span className="font-normal">Mablag’ qiymati</span>
										</th>
									</tr>
								</thead>
								<tbody>
									{[0, 1, 2, 3, 4, 5].map((i) => (
										<tr key={i} className="bg-white border-b border-[#191E3A]">
											<td scope="row" className="px-6 py-4 text-[#40434E] ">
												#01
											</td>
											<td className="px-6 py-4">Oct 08, 2021</td>
											<td className="px-6 py-4">Murat building.mchj</td>
											<td className="px-6 py-4">$1,358.75</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistic;
