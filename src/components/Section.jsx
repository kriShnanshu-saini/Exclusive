const Section = ({ title, children }) => {
	return (
		<section className='container p-4 min-h-dvh mt-8 '>
			<h3 className='flex items-center gap-x-1 text-theme font-semibold'>
				<span className='block w-4 h-full rounded-sm bg-theme '>&nbsp;</span>
				{title}
			</h3>
			{children}
		</section>
	);
};

export default Section;
