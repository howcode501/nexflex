import {InfoIcon, Play} from 'lucide-react';
import {getImageUrl} from "@/utils/tmdb";

export default function Billboard({movie}) {
	if (!movie) return null;


	return (
		<div className="relative h-[80vh] lg:h-[95vh]">
			{/* Background Image */}
			<img
				src={getImageUrl(movie.backdrop_path)}
				alt={movie.title || movie.name}
				className="w-full h-full object-cover"
			/>

			{/* Gradient Overlay - Extended gradient area */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/80 to-zinc-900"/>

			{/* Content - Positioned higher up */}
			<div className="absolute w-full top-[40%] lg:top-[50%] px-4 md:px-8 lg:px-12">
				<div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
					{/* Title */}
					<h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white">
						{movie.title || movie.name}
					</h1>

					{/* Description */}
					<p className="mt-3 md:mt-4 lg:mt-6 text-white text-sm sm:text-base md:text-lg line-clamp-2 md:line-clamp-none opacity-90">
						{movie.overview}
					</p>

					{/* Buttons */}
					<div className="flex items-center gap-3 mt-4 md:mt-6">
						<button
							className="flex items-center justify-center gap-2 px-4 md:px-6 lg:px-8 py-1.5 md:py-2 bg-white hover:bg-white/90 text-black rounded">
							<Play className="w-5 h-5 md:w-6 md:h-6" fill="black"/>
							<span className="text-sm md:text-base font-medium">Play</span>
						</button>

						<button
							className="flex items-center justify-center gap-2 px-4 md:px-6 lg:px-8 py-1.5 md:py-2 bg-zinc-500/70 hover:bg-zinc-500/50 text-white rounded">
							<InfoIcon className="w-5 h-5 md:w-6 md:h-6"/>
							<span className="text-sm md:text-base font-medium">More Info</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}