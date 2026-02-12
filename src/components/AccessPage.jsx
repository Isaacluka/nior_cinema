import React from 'react';
import { Link, useParams} from 'react-router';
import LockIcon from '@mui/icons-material/Lock';
import CloseIcon from '@mui/icons-material/Close';

const AccessPage = () => {
    const { name } = useParams();
  return (
    <div className='bg-background-light dark:bg-background-dark font-display selection:bg-primary/30'>
        <div className="film-grain"></div>
        <div className="relative flex h-screen w-full flex-col items-center justify-between overflow-hidden px-6 py-12 md:py-24">
            
            {/* TOPBAR */}
            <div className="w-full max-w-md animate-in fade-in duration-1000">

                <div className="flex items-center justify-center p-4">
                    <h2 className='text-white text-xs md:text-sm font-light leading-tight tracking-[0.5em] uppercase opacity-70'>A NOIR CINEMA COLLECTIVE PRESENTATION</h2>
                </div>

                <div className="mt-8 flex justify-center">
                    <h1 className='text-white text-3xl md:text-5xl font-extrabold italic tracking-tighter text-center'>THE VELVET SILENCE</h1>
                </div>

            </div>

            {/* MAIN SECTION */}
            <div className="flex flex-col items-center w-full max-w-[380px] space-y-8 mb-20">

                <div className="space-y-2 text-center">
                    <h3 className='text-white/90 text-xl font-medium tracking-tight'>ENTER ACCESS KEY</h3>
                    <p className='text-white/40 text-sm font-normal leading-relaxed px-8'>Strictly Confidential. Your Unique cinematic is required for entry.</p>
                </div>

                {/* Textfield */}
                <div className="w-full px-4 group">
                    <label htmlFor="" className="flex flex-col items-center w-full">
                        <input 
                            type="text" 
                            className='form-input text-center w-full bg-transparent border-0 border-b-1 border-white/10 text-white focus:border-primary focus:ring-0 h-16 text-2xl font-light tracking-[0.3em] transition-all duration-500 placeholder:text-white/10 uppercase'
                            placeholder='••••-••••'
                            maxLength='12' />  
                    </label>
                </div>
                
                {/* CTA Button */}
                <div className='w-full px-4 pt-4'> 
                    <Link to="welcome"
                        className='block w-full bg-primary hover:primary/90 text-white font-medium py-4 rounded transition-color uppercase tracking-[0.2em] text-xs shadow-lg shadow-primary/10 truncate uppercase w-full cursor-pointer flex items-center justify-center rounded h-14 bg-primary text-white text-sm font-bold tracking-[0.2em] transition-all hover:bg-primary/90 active:scale-95 shadow-lg shadow-primary/20'
                        >
                        Validate Invite
                    </Link>
                </div>
                <div className='flex items-center gap-2 text-white/20 text-[10px] tracking-widest pt-4 uppercase'>
                    <span className=' material-symbols-outlined text-[6px]'>{<LockIcon />}</span><p>Secure Environment</p>
                </div>
            </div>

            {/* FOOTER */}
            <div className="w-full max-w-md flex flex-col items-center gap-4 opacity-30">
                <div className="h-[1px] w-12 bg-white/50"></div>
                    <p className="text-[9px] text-white tracking-[0.3em] uppercase">
                        Premiere 2026 Noir Cinema Collective
                    </p>
            </div>
        </div>
        <div className="fixed inset-0 pointer-events-none z-[-1]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(212,17,50,0.03)_0%,transparent_70%)]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark"></div>
        </div>
    </div>
  )
}

export default AccessPage;