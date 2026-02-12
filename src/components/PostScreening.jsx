import React from 'react'
import { Link, useParams } from 'react-router'
import CloseIcon from '@mui/icons-material/Close';
import Star from '@mui/icons-material/Star';
import StarOutline from '@mui/icons-material/StarBorderOutlined';
import MovieFilter from '@mui/icons-material/Movie';


const PostScreening = () => {
    const { name } = useParams();
  return (
    <>
        <div className=' relative flex w-full flex-col items-center overflow-x-hidden'>        
            <div className="flex items-center w-full bg-transparent justify-between">
                <div className="text-white/60 flex size-10 shrink-0 items-center justify-center cursor-pointer">
                    <span class="material-symbols-outlined text-2xl"><CloseIcon /></span>
                </div>
                <h2 className='text-white/40 text-xs font-bold uppercase leading-tight tracking-[0.2em] flex-1 text-center pr-10'>Exclusive Access</h2>
            
            </div>
            <div className="flex flex-col items-center px-8 pt-12 pb-8">
                
                <h2 className='text-white tracking-tight text-[40px] flex-1 text-center pb-4 font-medium leading-tight'>An Honor to Have <br/> You With Us</h2>
                
                {/* Red dash accross */}
                <div className="w-12 h-[1px] bg-primary/60 mb-6"></div>

                <h3 className='text-white/70 text-lg font-light leading-relaxed text-center max-w-xs italic'>Thank you for joining this private screening. Your perspective is invaluable to us.</h3>
            </div> 

            {/* Rating Section   */}
            <div className="flex flex-col items-center py-8">
                <h2 className='text-primary text-[10px] font-bold leading-normal tracking-[0.3em] uppercase mb-6'>Rate the Experience</h2>
                
                <div className="flex gap-4 px-4">
                    <div className="flex items-center justify-center transition-all duration-300">
                        <span className="material-symbols-outlined text-primary text-4xl cursor-pointer"><Star /></span>
                    </div>

                    <div className="flex items-center justify-center transition-all duration-300">
                        <span className="material-symbols-outlined text-primary text-4xl cursor-pointer"><Star /></span>
                    </div>
                
                    <div className="flex items-center justify-center transition-all duration-300">
                        <span className="material-symbols-outlined text-primary text-4xl cursor-pointer"><Star /></span>
                    </div>
                
                    <div className="flex items-center justify-center transition-all duration-300">
                        <span className="material-symbols-outlined text-primary text-4xl cursor-pointer"><Star /></span>
                    </div>
                
                    <div className="flex items-center justify-center transition-all duration-300">
                        <span className="material-symbols-outlined star-outline text-primary/30 text-4xl cursor-pointer"><StarOutline /></span>
                    </div>
                </div>
            </div>

            {/* Feedback Section */}
            <div className="px-8 pb-12 flex flex-col space-y-6 max-w-[380px]">
                <div className="space-y-3 ">

                    <label className='text-white/40 text-xs font-bold uppercase leading-tight tracking-[0.2em] flex-1 text-center my-6'>Private Remarks</label>
                    <textarea className='w-full bg-white/5 border border-white/10 rounded-lg p-5 text-white placeholder:text-white/20 focus:ring-1 focus:ring-primary/40 focus:border-primary/40 focus:outline-none text-base resize-none font-light italic leading-relaxed' 
                    placeholder='Share your thoughts with the filmmakers...' 
                    rows='5' 
                    id="">
                    </textarea>
                
                </div>
                
                <div className='w-full bg-primary flex hover:primary/90 text-white font-medium py-4 rounded transition-color uppercase tracking-[0.2em] text-xs shadow-lg shadow-primary/10 items-center justify-center'>
                    <Link to="/">
                        <div>Submit Feedback</div>
                    </Link>
                </div>

                <p className='text-white/30 text-[10px] italic font-light'>Your Feedback is private and shared exclusively with the production team.</p>
            </div> 

            {/* Footer */}
            <div className="h-32 w-full relative overflow-hidden flex items-end justify-center pb-8 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
                <span className="material-symbols-outlined text-6xl text-white/10"><MovieFilter /></span>
            </div>
        </div>
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden opacity-30">
            <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[5%] -right-[5%] w-[40%] h-[40%] bg-primary/5 blur-[100px] rounded-full"></div>
        </div>
    </>
  )
}

export default PostScreening