import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieRow from "@/components/MovieRow";
import {useEffect, useState} from 'react';
import {fetchNetflixOriginals, fetchTrending} from '../utils/tmdb';

export default function Home() {

	const [trending, setTrending] = useState([]);
	const [originals, setOriginals] = useState([]);
	const [featured, setFeatured] = useState(null);

	useEffect(() => {
		const loadData = async () => {
			try {
				const [trendingData, originalsData] = await Promise.all([
					fetchTrending(),
					fetchNetflixOriginals()
				]);

				setTrending(trendingData.results);
				setOriginals(originalsData.results);
				setFeatured(originalsData.results[0]);
			} catch (error) {
				console.error('Error loading data:', error);
			}
		};

		loadData();
	}, []);

	return (
		<main className="relative min-h-screen bg-zinc-900">
			<Navbar />
			<section className="relative">
				<Billboard movie={featured} />
				{/* Add negative margin to pull content up into billboard gradient */}
				<div className="relative z-10 mt-[-150px] md:mt-[-200px] space-y-8 md:space-y-16 pb-20">
					<MovieRow title="Netflix Originals" movies={originals} large />
					<MovieRow title="Trending Now" movies={trending} />
					<MovieRow title="Popular Movies" movies={trending?.slice(5)} />
					<MovieRow title="Continue Watching" movies={originals?.slice(5)} />
				</div>
			</section>
		</main>
	);
}