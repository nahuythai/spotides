import React, { useState } from 'react'
import { Songs } from '../Context'
import { useContext,useEffect } from 'react'

export default function ListSong() {
    const {DataSongs, song, handleSetSong} = useContext(Songs)
    const [idSong, setidSong] = useState(0)
    const handlePlaySong = (idSong) =>{
        setidSong(idSong)
        handleSetSong(idSong)
    }
    useEffect(() => {
        setidSong(song.id)
      }, [song])
  return (
    <div className='col-span-2 overflow-y-scroll'>
        <table className='table-auto w-full'>
            <thead className='text-white h-12'>
                <tr>
                    <th>#</th>
                    <th className='text-left'>Title</th>
                    <th className='w-[10%]'>Author</th>
                    <th className='w-[10%]'><i className="fa fa-download"></i></th>
                </tr>
            </thead>
            <tbody>
                { DataSongs.map((song, index) => (
                <tr key={index} className={`bg-violet-300 hover:bg-violet-600 h-12 ${idSong === song.id && 'text-violet-900'}`}
                onClick={() => handlePlaySong(song.id)}>
                    <td className='text-center'>{index + 1}</td>
                    <td>{song.name}</td>
                    <td className='text-center'>{song.author}</td>
                    <td className='text-center'><a href={song.url}><i className="fa fa-download"></i></a></td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
