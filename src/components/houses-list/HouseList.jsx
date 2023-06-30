import './houses-list.scss'
import datas from '../../data/houses.json'
import Card from '../cards/Card'

export default function HousesList() {

    return (
        <main className='houses_list'>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}