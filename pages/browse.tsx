import Navbar from "@/components/Navbar";

export default function Browse() {
	return (
		<div className="min-h-screen bg-zinc-900">
			<Navbar />
			<div className="pt-20 px-4 md:px-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					{/* Movie grid items */}
					{Array(12).fill(0).map((_, i) => (
						<div key={i} className="group relative h-[12vw] min-h-[170px] bg-zinc-800 rounded-md overflow-hidden">
							<div className="absolute top-0 left-0 w-full h-full bg-zinc-800 animate-pulse" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}