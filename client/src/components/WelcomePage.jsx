import React from 'react'
import { Link, useParams } from 'react-router'
import LockIcon from '@mui/icons-material/LockOutline';
import ShareIcon from '@mui/icons-material/Share';
import { PlayArrow } from '@mui/icons-material';
import { Add } from '@mui/icons-material';
import MovieFilter from '@mui/icons-material/MovieFilter';
import { Info } from '@mui/icons-material';

import MoviePoster from '../assets/MoviePoster.png'

const WelcomePage = () => {
    const { name } = useParams();
  return (
    <>
        <div className='relative flex flex-col h-screen w-full overflow-hidden'>
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${MoviePoster})` }}>
                </div>
            </div>
            {/* Return to add Bottom fade for legibility */}
            <div className="absolute inset-0 hero-gradient"></div>
            {/* Top Navigation */}
            <div className="relative z-10 flex items-center p-4 justify-between bg-gradient-to-b from-black/60 to-transparent" >
                <div className="flex size-12 shrink-0 items-center justify-center">
                    <span className="material-symbols-outlined text-white text-2xl"><LockIcon /></span>
                </div>

                <div className="flex flex-col items-center">
                    <p className='text-[10px] tracking-[0.3em] uppercase text-primary font-bold'>Member Exclusive</p>
                    <p className='text-white text-xs font-medium leading-tight tracking-[0.1em] uppercase'>Premiere Screening</p>
                </div>

                <div className="flex w-12 items-center justify-end">
                    <button className="flex cursor-pointer items-center justify-center rounded-full h-10 w-10 bg-black/20 backdrop-blur-md text-white border border-white/10">
                        <span className='material-symbols-outlined text-xl'><ShareIcon /></span>
                    </button>
                </div>
            </div>

            {/* Spacer */}
            <div className="flex-1 flex flex-col justify-end pb-12 relative z-10">
            
                {/* Movie Title */}
                <div className="px-6 text-center mb-2">
                    <h1 className='text-white tracking-tight text-5xl md:text-6xl font-bold italic leadIng-tight drop-shadow-2xl'>
                        THE VELVET SILENCE
                    </h1>
                </div>
                {/* Movie Metadata */}
                <div className="px-6 text-center mb-8">
                    <p className='text-white/70 text-sm font-light tracking-widest uppercase flex items-center justify-center gap-2'>
                        <span>2H 14M</span>
                        <span className="size-1 rounded-full bg-primary"></span>
                        <span>Psychological Thriller</span>
                        <span className="size-1 rounded-full bg-primary"></span>
                        <span className="border border-white/30 px-2 py-1.5 items-center rounded text-[10px]">R</span>
                    </p>
                </div>
                
                {/* CTA */}
                <div className="flex flex-col items-center px-6 gap-6">
                    <Link 
                    className='block text-base font-bold tracking-widest w-full uppercase tracking-[0.2em] text-sm flex min-w-[240px] w-full max-w-[320px] cursor-pointer items-center justify-center overflow-hidden rounded h-14 px-8 bg-primary text-white gap-3 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-[0.98]'
                    to="/cinema">
                        <span className="material-symbols-outlined fill-1"><PlayArrow /></span>
                        <span>
                            Watch Film
                        </span>
                    </Link>
                
                    {/* Secondary Action */}
                    <div className="flex gap-8">
                        <button className="flex flex-col items-center gap-2 group">
                            <div className="size-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/5 group-active:bg-white/10">
                                <span className="material-symbols-outlined text-white"><Add /></span>
                            </div>
                            <span className="text-[10px] uppercase tracking-tighter text-white/60">Watchlist</span>
                        </button>
                        <button class="flex flex-col items-center gap-2 group">
                            <div class="size-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/5 group-active:bg-white/10">
                                <span className="material-symbols-outlined text-white"><MovieFilter /></span>
                            </div>
                            <span class="text-[10px] uppercase tracking-tighter text-white/60">Trailer</span>
                        </button>
                        <button class="flex flex-col items-center gap-2 group">
                            <div class="size-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/5 group-active:bg-white/10">
                                <span class="material-symbols-outlined text-white"><Info /></span>
                            </div>
                            <span class="text-[10px] uppercase tracking-tighter text-white/60">Details</span>
                        </button>

                    </div>
                </div>
                
                {/* Footer */}
                <div className="mt-12 px-6 text-center">
                    <p className='text-[10px] text-white/30 tracking-widest uppercase'>Exclusive for verified invitations • © 2026 Studio Premiere</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default WelcomePage;