import ReactApexChart from 'react-apexcharts';
import { useNavigate } from 'react-router-dom';
interface RevenueChart {
	series: {
		name?: string;
		data: number[];
	}[];
	options?: ApexCharts.ApexOptions;
}

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

export default function ExpensesLineChart() {
	const navigate = useNavigate();

	return (
		<div className="md:col-span-1 bg-white p-6 rounded-md shadow">
			<div className="flex justify-between">
				<div className="flex flex-col gap-1">
					<span className="text-[#40434E] text-2xl">Rasxodlar</span>
					<span className="text-[#E7515A] text-sm">
						Must be paid before July 27, 2022
					</span>
				</div>
				<div className="flex flex-col gap-1">
					<span className="text-[#4361EE] font-light">Umumiy</span>
					<div className="flex items-end gap-2">
						<span className="text-3xl text-red-500">$50,000.00</span>
						<span className="mb-[2px]">this week</span>
						<svg
							className="mb-[4px]"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.3333 4L9 10.3333L5.66667 7L0.666668 12"
								stroke="#E95F2B"
								strokeWidth="1.2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M11.3333 4H15.3333V8"
								stroke="#E95F2B"
								strokeWidth="1.2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
			</div>

			<ReactApexChart
				onClick={() => navigate('/kamunal')}
				series={revenueChart2.series}
				options={revenueChart2.options}
				type="area"
				height={310}
			/>
		</div>
	);
}
