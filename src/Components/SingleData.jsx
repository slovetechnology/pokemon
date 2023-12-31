
import { LazyLoadImage } from 'react-lazy-load-image-component'
import DataComponent from './DataComponent'

// eslint-disable-next-line
const SingleData = ({ attack, defense, hp, name, speed, image, total, spAtk, spDef }) => {
    const calc = (val) => {
        return `${parseInt(val) / 3}vh`
    }
    const height=`3.5rem`
    return (
        <div className='relative'>
            <div className="h-fit relative w-[3.5rem] flex items-center justify-center flex-col">
                <div className="bg-white break-words rounded-md text-xs min-w-[5rem] font-semibold txt-slate-600 shadow-xl text-center px-2 py-1.5">{name}</div>
                <DataComponent title='Total' color='bg-blue-500' height={calc(total)} data={total * 10} tag='first' />
                <DataComponent title='Attack' color='bg-[#faf8bf]' height={height} data={attack} tag='' />
                <DataComponent title='Defense' color='bg-[#2d5f2e]' height={height} tag='' data={defense} />
                <DataComponent title='HP' color='bg-[#ab96db]' height={height} tag='' data={hp} />
                <DataComponent title='Speed' color='bg-[#ffa252]' height={height} tag='' data={speed} />
                <DataComponent title='Sp Attack' color='bg-cyan-400' height={height} tag='' data={spAtk} />
                <DataComponent title='Sp Defense' color='bg-[#fc766a]' height={height} data={spDef} tag='last' />
                
                <div className=""> <LazyLoadImage effect="blur" src={image} alt="" style={{ width: '7rem' }} className="w-full object-contain" /> </div>
            </div>
            {/* <div className="text-xs uppercase text-slate-600 absolute z-10 -bottom-10 rotate-90 left-0"> {name} </div> */}
        </div>
    )
}

export default SingleData