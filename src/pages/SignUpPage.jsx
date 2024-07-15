import { SignUpSvg } from '@/assets';
import { Navbar, Notice } from '@/components';
import { SignIn } from '@clerk/clerk-react';

const SignUpPage = () => {
	return (
		<>
			<Notice />
			<Navbar />
			<main className='container grid grid-cols-1 grid-rows-1 lg:grid-cols-2 my-2 mt-16 lg:my-2 '>
				<div className='hidden lg:block'>
					<img
						src={SignUpSvg}
						alt=''
					/>
				</div>
				<div className='flex items-center justify-center h-full  '>
					<SignIn
						appearance={{
							elements: {
                'cardRoot': 'rounded-none',
								'cardBox': 'shadow-none rounded-none',
                'footer': 'bg-none',
                'internal-180wb59': 'hidden'
							},
						}}
            signUpFallbackRedirectUrl='/' // redirect to '/' on successful sign in
					/>
				</div>
			</main>
		</>
	);
};

export default SignUpPage;
