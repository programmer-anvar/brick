import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Hodimlar from '../pages/hodimlar/Hodimlar';
import Rasxod from '../pages/rasxod/Rasxod';
import Oylik from '../pages/oylik/Oylik';
import Sotuv from '../pages/sotuv/Sotuv';
import IshlabChiqarish from '../pages/ishlabChoqarish/IshlabChiqarish';
import Ombor from '../pages/ombor/Ombor';
import Login from '../pages/login/Login';
import Statistic from '../pages/statistic/Statistic';
import Settings from '../pages/settings/Settings';
import HodimDetails from '../components/hodimlar/HodimDetails';
import Profile from '@/pages/profile';
import OylikDetail from '@/components/oyliklar/OylikID';
import Kamunal from '@/components/rasxod/Kamunal';
import RashodHodimlar from '@/components/rasxod/RashodHodimlar';
import KamunalTolovlar from '@/components/rasxod/KamunalTolovlar';


export const protectedRouter = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<Hodimlar />
			</Layout>
		),
	},
	{
		path: '/details/:id',
		element: (
			<Layout>
				<HodimDetails />
			</Layout>
		),
	},
	{
		path: '/statistika',
		element: (
			<Layout>
				<Statistic />
			</Layout>
		),
	},
	{
		path: '/rasxodlar',
		element: (
			<Layout>
				<Rasxod />
			</Layout>
		),
	},
	{
		path: '/kamunal',
		element: (
			<Layout>
				<Kamunal />
			</Layout>
		),
	},
	{
		path: '/rashodhodimlar',
		element: (
			<Layout>
				<RashodHodimlar />
			</Layout>
		),
	},
	{
		path: '/kamunaltolovlar',
		element: (
			<Layout>
				<KamunalTolovlar />
			</Layout>
		),
	},
	{
		path: '/oyliklar',
		element: (
			<Layout>
				<Oylik />
			</Layout>
		),
	},
	{
		path: '/salary-detail/:id',
		element: (
			<Layout>
				<OylikDetail />
			</Layout>
		),
	},
	{
		path: '/sotuv',
		element: (
			<Layout>
				<Sotuv />
			</Layout>
		),
	},
	{
		path: '/ishlabchiqarish',
		element: (
			<Layout>
				<IshlabChiqarish />
			</Layout>
		),
	},
	{
		path: '/ombor',
		element: (
			<Layout>
				<Ombor />
			</Layout>
		),
	},
	{
		path: '/sozlamalar',
		element: (
			<Layout>
				<Settings />
			</Layout>
		),
	},
	{
		path: '/profile',
		element: (
			<Layout>
				<Profile />
			</Layout>
		),
	},
]);

export const publicRouter = createBrowserRouter([
	{ path: '*', element: <Login /> },
]);
