import {useEffect, useState} from "react";
import {SearchIcon} from "lucide-react";

export default function Navbar() {

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={`fixed w-full z-50 transition-colors duration-300 ${
			isScrolled ? 'bg-zinc-900/95' : 'bg-transparent'
		}`}>
			<div className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-2 md:py-4">
				<div className="flex items-center space-x-8">
					<img
						src="/api/placeholder/92/24"
						alt="Netflix"
						className="h-5 md:h-7"
					/>
					<div className="hidden md:flex items-center space-x-6">
						<a href="#" className="text-sm text-white hover:text-gray-300">Home</a>
						<a href="#" className="text-sm text-white hover:text-gray-300">TV Shows</a>
						<a href="#" className="text-sm text-white hover:text-gray-300">Movies</a>
						<a href="#" className="text-sm text-white hover:text-gray-300">New & Popular</a>
					</div>
				</div>
				<div className="flex items-center space-x-4">
					<button className="text-white hover:text-gray-300">
						<SearchIcon className="w-6 h-6" />
					</button>
					<img
						src="/api/placeholder/32/32"
						alt="Profile"
						className="w-8 h-8 rounded"
					/>
				</div>
			</div>
		</nav>
	);
}