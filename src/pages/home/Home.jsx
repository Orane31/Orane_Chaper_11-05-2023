import './home.scss'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import HousesList from '../../components/houses-list/HouseList'
import Footer from '../../components/footer/Footer'

export default function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner />
			<HousesList />
			<Footer />
		</div>
	)
}