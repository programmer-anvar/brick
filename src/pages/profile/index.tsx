import { signOut } from '@/store/authSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Profile: React.FC = () => {
	const dispatch = useDispatch();
	return (
		<>
			<h2 className="font-bold text-2xl text-center">
				Welcome To Profile Page
			</h2>

			<button
				onClick={() => {
					dispatch(signOut());
					toast.success('You have successfully signed out!');
				}}
				type="button"
				className="focus:outline-none mt-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
			>
				Tizimdan Chiqish
			</button>
		</>
	);
};

export default Profile;
