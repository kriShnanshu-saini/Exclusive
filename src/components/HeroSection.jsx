import { categories } from '@/constants';
import { ChevronRight } from 'lucide-react';
import { HeroSvg } from '@/assets';
import { Link } from 'react-router-dom';

const HeroSection = () => {
	return (
		<div className='container max-lg:p-2 grid lg:grid-cols-[210px_1fr] '>
			<div className='overflow-hidden lg:pr-3 lg:border-r lg:pt-6'>
				<ul className='flex text-nowrap gap-x-2 gap-y-1 overflow-x-scroll lg:flex-col lg:overflow-x-auto '>
					{categories?.map(category => (
						<li key={category.label}>
							<Link
								to='/'
								className='flex items-center justify-between gap-1 max-lg:border max-lg:rounded-full  max-lg:px-3 py-1 max-lg:hover:bg-slate-50 hover:border-black focus:border-black lg:rounded-sm lg:hover:bg-none lg:hover:font-semibold transition-all '>
								{category.label} {'subcategories' in category && <ChevronRight className='size-4 rotate-90 lg:rotate-0' />}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className='mt-4 mx-auto lg:pt-6'>
				<Link to='/'>
					<img
						src={HeroSvg}
						alt='iphone'
					/>
				</Link>
			</div>
		</div>
	);
};

export default HeroSection;
