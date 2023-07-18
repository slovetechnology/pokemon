import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const SingleData = ({ attack, defense, hp, name, speed, image, total }) => {
    const width = `2rem`
    return (
        <div className='relative'>
            <div className="h-fit relative w-[4rem]">
                <div title="Total" className='bg-orange-400 shadow-xl rounded-tr-lg rounded-tl-lg' style={{ width: width, height: total }}></div>
                <div title="Attack" className='bg-teal-400 shadow-xl' style={{ width: width, height: attack }}></div>
                <div title="Defense" className='bg-red-400 shadow-xl' style={{ width: width, height: defense }}></div>
                <div title="HP" className='bg-yellow-400 shadow-xl' style={{ width: width, height: hp }}></div>
                <div title="Speed" className='bg-blue-400 shadow-xl rounded-br-lg rounded-bl-lg' style={{ width: width, height: speed }}></div>
                <div className=""> <LazyLoadImage effect="blur" src={image} alt="" style={{ width: '7rem' }} className="w-full object-contain" /> </div>
                <div className="bg-white break-words rounded-md text-xs font-semibold txt-slate-600 shadow-xl text-center px-2 py-1.5">{name}</div>
            </div>
            {/* <div className="text-xs uppercase text-slate-600 absolute z-10 -bottom-10 rotate-90 left-0"> {name} </div> */}
        </div>
    )
}

export default SingleData