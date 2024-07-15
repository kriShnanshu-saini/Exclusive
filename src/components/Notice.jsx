import { Link } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Notice = () => {
	return (
		<div className='bg-black text-white text-center text-[7px] lg:text-xs py-2 '>
			<div className='container flex items-center justify-center relative '>
				<div className='flex items-center justify-center gap-2 text-nowrap  '>
					<p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
					<Link
						to='/'
						className='font-bold underline'>
						{' '}
						Shop Now{' '}
					</Link>
				</div>
				<div className='absolute right-0 hidden lg:block'>
					<Select>
						<SelectTrigger className='max-w-fit bg-black text-white '>
							<SelectValue placeholder='English	' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem selected value='en'>English</SelectItem>
							<SelectItem value='fr'>French</SelectItem>
							<SelectItem value='system'>System</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	);
};

export default Notice;
