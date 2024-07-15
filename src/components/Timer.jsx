import Countdown from 'react-countdown';

const Completionist = () => <span>Sale over!</span>;

const CountdownComponent = ({countdown}) => {
	const formatNumber = val => String(val).padStart(2, '0');
	// Renderer callback with condition
	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a complete state
			return <Completionist />;
		} else {
			// Render a countdown
			return (
				// <div className='grid grid-cols-4 gap-x-2 lg:gap-x-8 '>
				// 	<div className='countdown'>
				// 		<p className='countdown-label'>Days</p>
				// 		<span className='countdown-timer'>{formatNumber(days)}</span>
				// 	</div>
				// 	<div className='countdown'>
				// 		<p className='countdown-label'>Hours</p>
				// 		<span className='countdown-timer'>{formatNumber(hours)}</span>
				// 	</div>
				// 	<div className='countdown'>
				// 		<p className='countdown-label'>Minutes</p>
				// 		<span className='countdown-timer'>{formatNumber(minutes)}</span>
				// 	</div>
				// 	<div className='countdown'>
				// 		<p className='countdown-label'>Seconds</p>
				// 		<span className='countdown-timer'>{formatNumber(seconds)}</span>
				// 	</div>
				// </div>
				<div className='grid grid-rows-[max-content_auto] grid-cols-4 gap-x-2 lg:gap-x-4 gap-y-1 place-items-center '>
					{['Days', 'Hours', 'Minutes', 'Seconds'].map((el, idx) => (
						<p
							key={el}
							className={`col-start-${idx + 1} countdown-label `}>
							{el}
						</p>
					))}
					<div className='flex justify-evenly items-center row-start-2 col-span-4 w-full'>
						{[days, hours, minutes, seconds].map((el, idx) => (
							<>
								<p
									key={idx}
									className={`countdown-timer`}>
									{formatNumber(el)}
								</p>
								<span className='countdown-colon'>:</span>
							</>
						))}
					</div>
				</div>
			);
		}
	};

	return (
		<Countdown
			date={Date.now() + countdown * 24 * 60 * 60 * 1000}
			renderer={renderer}
		/>
	);
};

const Timer = ({daysOfSale}) => {
	return (
		<div className='max-w-fit'>
			<CountdownComponent countdown={daysOfSale} />
		</div>
	);
};

export default Timer;
