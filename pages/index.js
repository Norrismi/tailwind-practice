import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14  place-items-center m-screen '>
<div >

      <img className='h-60 align-middle' src="https://2omb.finance/static/media/t_2OMB-02.e17dca52.png" alt="" />
</div>
      <div className="w-auto h-auto  p-7 rounded-md bg-slate-50 bg-opacity-50 border-2 border-black">

        <h1 className='text-2xl'>
          Welcome to 2omb!
        </h1>

        <h3 className='mt-5'>
          Pegged to the price of 1 FTM via seigniorage.
        </h3>
        <h3 className='mt-5'>
          <span>Stake</span> your 2omb-FTM LP tokes to earn 2SHARE seigniorage rewards.
        </h3>
        <h3 className='mt-5'>
          To maximize profits, stake your harvested 2SHAREs in the <span>Boardroom</span> to earn more 2OMB!
        </h3>

      </div>


    </div>
  )
}
