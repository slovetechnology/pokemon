
import Papa from 'papaparse'
import { useCallback, useEffect, useState } from 'react';
import SingleData from '../Components/SingleData';


export default function MainPage() {
  const [pokes, setPokes] = useState([])
  const commonConfig = { delimiter: "," }

  const fetchPokemons = useCallback(() => {
    Papa.parse(
      "../src/assets/pokemon.csv",
      {
        ...commonConfig,
        header: true,
        download: true,
        complete: (result) => {
          return setPokes(result.data);
        }
      }
    );
  }, [])


  const TableData = [
    {
      tag: 'Total',
      bg: 'bg-orange-400'
    },
    {
      tag: 'Attack',
      bg: 'bg-teal-400'
    },
    {
      tag: 'Defanse',
      bg: 'bg-red-400'
    },
    {
      tag: 'HP',
      bg: 'bg-yellow-400'
    },
    {
      tag: 'Speed',
      bg: 'bg-blue-400'
    },
  ]

  useEffect(() => { fetchPokemons() }, [fetchPokemons])
  return (
    <div className='data'>
      <div className="dataset bg-blue-100/60 h-screen overflow-y-auto backdrop-blur-lg">
        <div className="w-11/12 mx-auto">
          <div className="absolute top-4 z-20 bg-white/80 backdrop-blur-xl rounded-lg shadow-xl right-4 w-40">
            <table className='w-full'>
              <tbody>
                {TableData.map((item, i) => (
                  <tr className='rounded-lg border-b' key={i}>
                    <td className='text-xs p-2 text-slate-600'>{item.tag}</td>
                    <td className='p-2 flex items-center justify-end'> <div className={`h-4 rounded-md w-4 ${item.bg}`}></div> </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-11/12 mx-auto border-l-2 px-4 overflow-x-auto mt-5 border-zinc-400 h-[75vh] scrollsdown">
          <div className="w-fit flex flex-row items-end gap-5 px-2 pb-10 relative h-full justify-center">
            {pokes.map((item, i) => (
              <SingleData
                key={i}
                attack={`${item.Attack}px`}
                defense={`${item.Defense}px`}
                hp={`${item.HP}px`}
                speed={`${item.Speed}px`}
                total={`${item.Total / 10}px`}
                image={item.image_url}
                name={item.Names}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}