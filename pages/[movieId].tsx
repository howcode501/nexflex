import Navbar from "@/components/Navbar";

export default function MoviePage({ params }) {
	return (
		<div className="min-h-screen bg-zinc-900">
			<Navbar />
			<div className="relative pt-20">
				<div className="h-[56.25vw] bg-zinc-800">
					{/* Video Player would go here */}
				</div>
				<div className="px-4 md:px-16 mt-4">
					<h1 className="text-white text-4xl font-bold">Movie Title</h1>
					<div className="flex items-center mt-4 gap-4">
						<button className="bg-white text-black px-8 py-2 rounded-md hover:bg-opacity-80">
							Play
						</button>
						<button className="bg-zinc-700 text-white px-8 py-2 rounded-md hover:bg-opacity-80">
							More Info
						</button>
					</div>
					<p className="text-white mt-8">Movie description would go here...</p>
				</div>
			</div>
		</div>
	);
}