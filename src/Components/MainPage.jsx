

import SingleData from '../Components/SingleData';
import { Pokemons } from '../assets/PokeMon';
export default function MainPage() {
  const TableData = [
    {
      tag: 'Total',
      bg: 'bg-blue-500'
    },
    {
      tag: 'Attack',
      bg: 'bg-[#faf8bf]'
    },
    {
      tag: 'Defense',
      bg: 'bg-[#2d5f2e]'
    },
    {
      tag: 'HP',
      bg: 'bg-[#ab96db]'
    },
    {
      tag: 'Speed',
      bg: 'bg-[#ffa252]'
    },
    {
      tag: 'Sp Atk',
      bg: 'bg-cyan-400'
    },
    {
      tag: 'Sp Def',
      bg: 'bg-[#fc766a]'
    },
    {},
  ]


  return (
    <div className='data'>
      <div className="dataset bg-blue-100/60 h-screen overflow-y-auto backdrop-blur-lg">
        <div className="w-11/12 mx-auto">
          <div className="absolute top-4 z-20 bg-white/80 backdrop-blur-xl rounded-lg shadow-xl right-4 w-40">
            <table className='w-full'>
              <tbody>
                {TableData.map((item, i) => (
                  <tr className='rounded-lg border-b' key={i}>
                    <td className='text-xs p-1.5 text-slate-600'>{item.tag}</td>
                    <td className='p-1.5 flex items-center justify-end'> <div className={`h-4 rounded-md w-4 ${item.bg}`}></div> </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-center w-11/12 mx-auto justify-end h-screen">
          <div className="flex flex-col justify-end  h-[70vh] md:h-[95vh]">
            {TableData.map((item, i) => (
              <div className="h-[3.5rem] text-sm drop-shadow-sm" key={i}>{item.tag}</div>
            ))}
          </div>
          <div className="w-11/12 mx-auto border-l-2 border-b-2 px-4 overflow-x-auto border-zinc-400 h-[70vh] md:h-[95vh] scrollsdown">
            <div className="w-fit flex flex-row items-end gap-5 pl-2 relative h-full justify-center">
              {Pokemons.map((item, i) => (
                <SingleData
                  key={i}
                  attack={`${item.Attack}`}
                  defense={`${item.Defense}`}
                  hp={`${item.HP}`}
                  speed={`${item.Speed}`}
                  total={`${item.Total / 10}`}
                  spDef={`${item.SpDef}`}
                  spAtk={`${item.SpAtk}`}
                  image={item.image_url}
                  name={item.Names}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}