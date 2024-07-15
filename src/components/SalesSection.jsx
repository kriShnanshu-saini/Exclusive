import { ProductCard, Section, Timer } from '@/components';
import { Button } from '@/components/ui/button';
import { saleProducts } from '@/constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SalesSection = () => {
	return (
		<Section title="Today's">
			<div className='mt-2 lg:flex justify-between items-center'>
				<div className='flex items-end justify-between flex-wrap gap-x-2 lg:w-fit lg:gap-x-24 '>
					<h2 className='font-bold text-2xl lg:text-3xl '>Flash Sales</h2>
					<Timer daysOfSale={4} />
				</div>
				<div className='hidden lg:flex gap-x-2'>
					<Button className='rounded-full p-2  '>
						<ArrowLeft className='stroke-black' />
					</Button>
					<Button className='rounded-full p-2  '>
						<ArrowRight className='stroke-black' />
					</Button>
				</div>
			</div>
			<div className='mt-4 flex gap-x-2 overflow-x-scroll'>
				{saleProducts?.map((product, idx) => (
					<ProductCard
						product={product}
						key={idx}
					/>
				))}
			</div>
		</Section>
	);
};

export default SalesSection;
