import {getImageUrl} from "@/utils/tmdb";
import {ChevronDown, Play, PlayIcon, Plus, PlusIcon, ThumbsUp} from 'lucide-react';
import {useState} from "react";

export default function MovieRow({ title, movies = [], large = false }) {
	const [isHovered, setIsHovered] = useState(false);

	if (!movies.length) return null;

	return (
		<div className="px-4 md:px-8 lg:px-12 space-y-4">
			{/* Title with more prominence */}
			<h2 className="text-xl md:text-2xl text-white font-semibold">{title}</h2>

			{/* Row Container */}
			<div className="group relative">
				{/* Movie list with improved spacing */}
				<div className="-ml-4 flex space-x-4 overflow-x-scroll scrollbar-hide pl-4">
					{movies.map((movie) => (
						<div
							key={movie.id}
							className={`flex-none relative transition duration-200 ease-out hover:scale-105 ${
								large
									? 'w-[45vw] md:w-[30vw] lg:w-[20vw]'
									: 'w-[40vw] md:w-[25vw] lg:w-[15vw]'
							}`}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							<div className="relative aspect-[2/3] rounded-md overflow-hidden">
								<img
									src={getImageUrl(movie.poster_path, 'w500')}
									alt={movie.title || movie.name}
									className="w-full h-full object-cover"
								/>

								{/* Hover overlay with better spacing and larger touch targets */}
								{isHovered && (
									<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
										<div className="absolute bottom-0 left-0 right-0 p-4">
											<div className="flex items-center space-x-3">
												<button className="p-2 bg-white rounded-full hover:bg-white/90">
													<Play className="w-4 h-4 text-black" fill="black" />
												</button>
												<button className="p-2 border border-white rounded-full hover:bg-white/10">
													<Plus className="w-4 h-4 text-white" />
												</button>
												<button className="p-2 border border-white rounded-full hover:bg-white/10">
													<ThumbsUp className="w-4 h-4 text-white" />
												</button>
												<button className="p-2 border border-white rounded-full hover:bg-white/10 ml-auto">
													<ChevronDown className="w-4 h-4 text-white" />
												</button>
											</div>

											{/* Movie info with better spacing */}
											<div className="mt-3">
												<h3 className="text-white font-medium text-sm">
													{movie.title || movie.name}
												</h3>
												<span className="text-green-400 text-xs mt-1 block">
                          {Math.round(movie.vote_average * 10)}% Match
                        </span>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}