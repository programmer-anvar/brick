import { ChangeEvent, useEffect, useState } from 'react';
import loginImg from '../../assets/login/loginImg.png';
import { EyeIcon, SecretEye, UserIcon } from '../../assets/login/SvgIcons';
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import { login } from '@/services/networkServices/authService';
import { useMutation } from '@tanstack/react-query';

type passwordEyeState = boolean;

const Login = () => {
	const [name, setName] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [passwordEye, setPasswordEye] = useState<passwordEyeState>(true);
	const [nameError, setNameError] = useState<string>('');
	const [passwordError, setPasswordError] = useState<string>('');
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const mutation = useMutation({
		mutationFn: login,
		onSuccess: (data) => {
			if (data.success) {
				dispatch(signIn({ token: data.data.accessToken }));
				toast.success('You have successfully Signed In!');
				navigate('/');
			} else {
				toast.error(data.message);
			}
		},
		onError: (error) => {
			console.error('Login failed:', error.message);
			toast.error('Problem to Sign In, please try again!');
		},
	});

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
		if (e.target.value.length < 4) {
			setNameError('Name must be at least 4 characters long.');
		} else {
			setNameError('');
		}
	};

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
		if (e.target.value.length < 7) {
			setPasswordError('Password must be at least 7 characters long.');
		} else {
			setPasswordError('');
		}
	};

	const handleEyeClick = () => {
		setPasswordEye(!passwordEye);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (name.length < 3) {
			setNameError('Name must be at least 3 characters long.');
			return;
		}

		if (password.length < 6) {
			setPasswordError('Password must be at least 6 characters long.');
			return;
		}

		mutation.mutate({
			phoneNumber: name,
			password,
		});
	};

	useEffect(() => {
		navigate('/login');
	}, []);

	return (
		<div className="bg-white">
			<form
				onSubmit={handleSubmit}
				className="mx-auto max-w-[1400px] w-full h-[100vh] z-30 relative flex justify-start px-5 items-center"
			>
				<div className="w-[50%]">
					<div className="text-center">
						<h3 className="text-[32px] font-medium">
							Welcome to{' '}
							<span className="text-[#3367F6] italic">Admin Dashboard</span>
						</h3>
						<p className="text-[20px] text-[#9EA3B5] font-medium">
							Please enter your admin credentials
						</p>
					</div>
					<div className="mt-8">
						<div
							className={`w-full flex justify-between border rounded-[12px] p-4 ${name.length > 0 ? 'border-[#4361EE]' : ''}`}>
							<input
								type="text"
								value={name}
								onChange={handleNameChange}
								placeholder="Admin name"
								className="border-none w-full outline-none"
							/>
							<UserIcon color={name.length > 0 ? '#4361EE' : '#9EA3B5'} />
						</div>
						{nameError && (
							<p className="text-red-500 text-sm mt-2">{nameError}</p>
						)}
						<div
							className={`w-full mt-[20px] flex justify-between border rounded-[12px] p-4 ${password.length > 0 ? 'border-[#4361EE]' : ''}`}
						>
							<input
								type={passwordEye ? 'password' : 'text'}
								value={password}
								onChange={handlePasswordChange}
								placeholder="Admin password"
								className="border-none w-full outline-none"
							/>
							<div className="cursor-pointer" onClick={handleEyeClick}>
								{passwordEye ? (
									<EyeIcon
										color={password.length > 0 ? '#4361EE' : '#9EA3B5'}
									/>
								) : (
									<SecretEye
										color={password.length > 0 ? '#4361EE' : '#9EA3B5'}
									/>
								)}
							</div>
						</div>
						{passwordError && (
							<p className="text-red-500 text-sm mt-2">{passwordError}</p>
						)}
						{!mutation.isPending && (
							<button
								type="submit"
								className="w-full bg-[#4361EE] py-[13px] rounded-[12px] text-[#fff] font-semibold mt-[30px]"
							>
								Log in
							</button>
						)}
						{mutation.isPending && (
							<button
								disabled
								type="submit"
								className="w-full bg-[#4361EE] py-[10px] rounded-[12px] text-[#fff] font-semibold mt-[30px] flex items-center justify-center gap-2"
							>
								<span>Please wait a second</span>
								<ClipLoader
									color="white"
									cssOverride={{
										borderWidth: '3.5px',
									}}
									size={30}
									// speedMultiplier={0.9}
								/>
							</button>
						)}
					</div>
				</div>
			</form>
			<img
				src={loginImg}
				className="absolute bottom-0 h-[80%] w-[50%] right-0"
				alt="Login"
			/>
		</div>
	);
};

export default Login;
