import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { navLinks } from '@/constants';
import { UserButton, useUser } from '@clerk/clerk-react';
import { ChevronRight, Heart, Search, ShoppingCartIcon, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [links, setLinks] = useState(navLinks);
	const { user, isSignedIn } = useUser();
	const location = useLocation();
	const currentRoute = location.pathname;

	useEffect(() => {
		console.log('🚀 ~ useEffect ~ currentRoute:', currentRoute);
		if (isSignedIn) {
			const temp = navLinks?.filter(link => link.label !== 'sign up');
			setLinks(temp);
		}
	}, [currentRoute, user, isSignedIn]);

	return (
		<>
			{/* left nav section */}
			<nav className='flex items-center justify-between relative px-2 py-2 max-w-screen-xl mx-auto lg:mt-8 '>
				<div className='flex items-center gap-1'>
					<Button
						variant='outline'
						onClick={() => setShowMenu(true)}
						className='p-2 border-0 outline-none lg:hidden'>
						<FiMenu className='size-6' />
					</Button>
					<a
						href='/'
						id='logo'
						className='font-bold text-xl lg:text-2xl  '>
						Exclusive
					</a>
				</div>

				{/* center nav section */}
				<div className='hidden lg:block'>
					<ul className='flex items-center gap-8'>
						{links?.slice(0, -2)?.map(link => (
							<li key={link.label}>
								<Link
									to={link.url}
									className={`capitalize font-semibold ${currentRoute === link.url && 'border-b-2 pb-0.5 border-b-black '} `}>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* right nav section */}
				<div className='flex items-center gap-2 lg:gap-4'>
					<div className='flex items-center justify-between px-2 lg:border lg:rounded-md  lg:bg-bg-primary  '>
						<Input
							className='border-none outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 py-1 bg-transparent hidden lg:block w-full pr-6 text-sm  '
							placeholder='What are you looking for?'
						/>
						<Search />
					</div>
					<button>
						<Heart />
					</button>
					<button>
						<ShoppingCartIcon />
					</button>
				</div>

				{/* mobile nav menu */}
				{showMenu && (
					<>
						<div
							className='overlay'
							onClick={() => setShowMenu(false)}></div>
						<div className='absolute top-0 left-0 w-4/5 h-dvh bg-white z-50 '>
							<button className='mt-4 ml-auto mr-2 block '>
								<X
									className='size-6 stroke-2'
									onClick={() => setShowMenu(false)}
								/>
							</button>
							<ul className='p-2'>
								<div className='flex items-center justify-start gap-3 ml-3 mb-4'>
									{user?.imageUrl ? (
										<UserButton
											appearance={{
												elements: {
													avatarBox: {
														width: '3rem',
														height: '3rem',
													},
												},
											}}
										/>
									) : (
										<div className={`w-12 h-12 rounded-full flex items-center justify-center bg-blue-50 px-5 py-1`}>
											<p className='text-2xl text-blue-700 '>{user?.fullName?.charAt(0)}</p>
										</div>
									)}
									<div className='w-full'>
										<div className='flex flex-col justify-start items-start truncate'>
											<h2 className='whitespace-nowrap text-ellipsis'> {user?.fullName || 'User'} </h2>
											<Link
												to='https://evolving-fawn-68.accounts.dev/user'
												className='flex items-center gap-1 font-semibold  '>
												Profile <ChevronRight className='size-4' />
											</Link>
										</div>
									</div>
								</div>
								{links?.map(link => (
									<li
										key={link.label}
										className=''>
										<Link
											to={link?.url}
											onClick={() => setShowMenu(false)}
											className='w-full py-2 px-4 inline-block hover:bg-slate-100 capitalize rounded-md mb-0.5 text-lg '>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</>
				)}
			</nav>
			<Separator />
		</>
	);
};

export default Navbar;
