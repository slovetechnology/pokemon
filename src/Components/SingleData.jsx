import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import DataComponent from './DataComponent'

const SingleData = ({ attack, defense, hp, name, speed, image, total, spAtk, spDef }) => {
    const width = `2.5rem`
    const calc = (val) => {
        return `${parseInt(val) /10}vh`
    }
    return (
        <div className='relative'>
            <div className="h-fit relative w-[3.5rem] flex items-center justify-center flex-col">
                <div className="bg-white break-words rounded-md text-xs min-w-[5rem] font-semibold txt-slate-600 shadow-xl text-center px-2 py-1.5">{name}</div>
                <DataComponent title='Total' color='bg-[#1e2762]' height={calc(total)} tag='first' />
                <DataComponent title='Attack' color='bg-[#faf8bf]' height={calc(attack)} tag='' />
                <DataComponent title='Defense' color='bg-[#2d5f2e]' height={calc(defense)} tag='' />
                <DataComponent title='HP' color='bg-[#ab96db]' height={calc(hp)} tag='' />
                <DataComponent title='Speed' color='bg-[#ffa252]' height={calc(speed)} tag='' />
                <DataComponent title='Sp Attack' color='bg-cyan-400' height={calc(spAtk)} tag='' />
                <DataComponent title='Sp Defense' color='bg-[#fc766a]' height={calc(spDef)} tag='last' />
                
                {/* <div title="Attack" className='bg-[#] shadow-xl' style={{ width: width, height: calc(attack) }}></div> */}
                {/* <div title="Defense" className='bg-[#2d5f2e] shadow-xl' style={{ width: width, height: calc(defense) }}></div> */}
                {/* <div title="HP" className='bg-[#ab96db] shadow-xl' style={{ width: width, height: calc(hp) }}></div> */}
                {/* <div title="Speed" className='bg-[#ffa252] shadow-xl' style={{ width: width, height: calc(speed) }}></div> */}
                {/* <div title="Sp Attack" className='bg-cyan-400 shadow-xl' style={{ width: width, height: calc(spAtk) }}></div> */}
                {/* <div title="Sp Defense" className='bg-[#fc766a] shadow-xl ' style={{ width: width, height: calc(spDef) }}></div> */}
                <div className=""> <LazyLoadImage effect="blur" src={image} alt="" style={{ width: '7rem' }} className="w-full object-contain" /> </div>
            </div>
            {/* <div className="text-xs uppercase text-slate-600 absolute z-10 -bottom-10 rotate-90 left-0"> {name} </div> */}
        </div>
    )
}

export default SingleData