import { Plus } from 'phosphor-react'
import LogoImage from '../assets/Group 2.svg'

export function Header(){
      
      return (
      <div className='w-full max-w-3xl mx-auto flex items-center justify-between mb-14'>
      <img src={LogoImage} alt="Habits" />
      <button 
      type='button'
      className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300'
      > <Plus size={20} className="text-violet-500"/>  New Habit</button>
      </div>
      )
      
}