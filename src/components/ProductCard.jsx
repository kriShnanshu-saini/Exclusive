import { Chair, Controller, Monitor, RGBKeyboard } from '@/assets';
import { Button } from '@/components/ui/button';
import { Eye, Heart, ShoppingCart, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
	const { id, name, image, discount, discountPrice, originalPrice, rating, numOfRatings } = product;
	return (
		<div
			className='card'
			data-productId={id}>
			<div className='card-header relative'>
				<p className='bg-theme text-white w-fit px-2 py-1 rounded-md text-sm '>-{discount}%</p>
				<div className='flex flex-col gap-y-2 absolute top-2 right-2 z-50'>
					<label htmlFor={`${id}-wishlist`}>
						<input
							type='checkbox'
							name='wishlist'
							id={`${id}-wishlist`}
							className='hidden peer'
						/>
						<Heart className='bg-white p-2 rounded-full size-10 peer-checked:fill-red-500 peer-checked:stroke-red-600 ' />
					</label>
					<Button className='bg-white p-2 rounded-full '>
						<Eye className='stroke-black' />
					</Button>
				</div>
				<div className='w-full flex-1 h-4/5 mt-2'>
					<img
						src={image}
						className='mix-blend-darken object-scale-down w-full h-full '
						alt={name}
					/>
				</div>
				<div className='flex justify-center items-center gap-x-2 bg-black text-white text-base py-2  '>
					<Button>
						<ShoppingCart /> Add to Cart
					</Button>
				</div>
			</div>
			<div className='card-body'>
				<h3 className='font-semibold text-sm'>{name}</h3>
				<div className='flex gap-x-4 font-semibold'>
					<p className='text-theme'>${discountPrice}</p>
					<s className='text-gray-400'>${originalPrice}</s>
				</div>
				<div className='flex items-center'>
					{Array(5)
						.fill(null)
						.map((_, index) => (
							<Star
								key={index}
								className={`stroke-1 size-5 fill-gray-100 stroke-gray-300 ${index < Math.ceil(rating) && 'stroke-yellow-500 fill-yellow-400'} `}
							/>
						))}
					<span className='text-gray-500 text-sm ml-2'>({numOfRatings})</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
