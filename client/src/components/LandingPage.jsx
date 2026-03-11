import React from 'react'
import { Movie, MovieEdit, Campaign, Public, PlayCircle } from '@mui/icons-material';
import { Stream, Favorite, CheckCircle, PlayArrow, Shield } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { useState } from 'react';



const LandingPage = () => {

    const getLocation = async () => {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        return data.country_name;
    };


    const navigate = useNavigate();

    const [role, setRole] = useState("user");
    const [email, setEmail] = useState("");

    const handleDemo = () => {
        navigate("accesspage", { replace: true });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const location = await getLocation();

        await fetch("https://noir-cinema-api.onrender.com/api/waitlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({ 
                email: email,
                role: role,
                location: location
             })
        });

        setEmail("");
    };

  return (
  <>
    <div class="film-grain"></div>
    {/* Top Navigation */}
    <nav className="sticky top-0 z-40 w-full bg-background-dark/80 backdrop-blur-md border-b border-primary/10 flex flex-col items-center">
        <div className="flex items-center p-4 justify-between max-w-lg mx-auto">
            <div className="flex items-center gap-2">
                {/* <span className="material-symbols-outlined text-primary text-2xl"><Movie /></span> */}
                <h2 className="text-white text-lg font-right leading-tight tracking-[0.5em] uppercase opacity-70">Noir Cinema</h2>
                {/* <h2 className='text-white text-xs md:text-sm font-light leading-tight tracking-[0.5em] uppercase opacity-70'>Noir Cinema</h2> */}
            </div>
            {/* <button class="flex items-center justify-center p-2 text-slate-100">
                <span class="material-symbols-outlined"><Menu /></span>
            </button> */}
        </div>
    </nav>
    {/* Hero Section */}
    <section class="relative px-6 py-16 flex flex-col items-center text-center gap-8 overflow-hidden">
        <div class="absolute inset-0 glow-accent -z-10"></div>

        {/* Spacer */}
        <div className="w-full flex-1 flex flex-col justify-end pb-12 relative z-10"></div>
        
        {/* Hero Text */}
        <div class="space-y-4">
            <h1 class="text-white text-4xl md:text-5xl font-extrabold tracking-tight">
                The Global Digital Cinema for <span class="text-primary italic">Nollywood._</span>
            </h1>
            <div className="w-full flex-1 flex flex-col justify-end pb-12 relative z-10"></div>

            <p class="text-white/90 text-base font-normal leading-relaxed max-w-md mx-auto">
                Experience premium African storytelling redefined through cinematic excellence and global accessibility.
            </p>
            {/* <p class="text-white/90 text-base font-normal leading-relaxed max-w-md mx-auto">
                Watch theatrical releases anywhere in the world — while they’re still in cinemas.
            </p> */}
            {/* <p class="text-white/90 text-sm font-normal leading-relaxed max-w-md mx-auto">
                A secure, time-limited digital cinema experience built for producers and global audiences.
            </p> */}

        </div>
        <div class="flex flex-col w-full gap-4 max-w-xs">
            <div onClick={handleDemo} class="block w-full bg-primary hover:primary/90 text-white font-medium py-4 rounded transition-color tracking-[0.2em] active:scale-95 shadow-lg shadow-primary/20'">
                Try the Demo Experience
            </div>
            {/* <div className='block w-full bg-primary hover:primary/90 text-white font-medium py-4 rounded transition-color uppercase tracking-[0.2em] text-xs shadow-lg shadow-primary/10 truncate uppercase w-full cursor-pointer flex items-center justify-center rounded h-14 bg-primary text-white text-sm font-bold tracking-[0.2em] transition-all hover:bg-primary/90 active:scale-95 shadow-lg shadow-primary/20'
                >
                 Validate Invite
            </div> */}
            <button  class="w-full border border-white/40 bg-transparent rounded h-14 text-base block hover:bg-white/40 text-white font-medium py-4 rounded transition-color tracking-[0.2em] active:scale-95 shadow-lg shadow-white/20">
                <a href="#access">Join Early Access</a> 
            </button>
        </div>
        <div class="mt-8 w-full aspect-video rounded-xl bg-white/20 border border-primary/20 relative overflow-hidden flex items-center justify-center" data-alt="Cinematic abstract visual representing premium film streaming">
            <div class="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
            <span class="material-symbols-outlined text-primary/40 text-6xl"><PlayCircle /></span>
        </div>
    </section>
    {/* <!-- Problem Section --> */}
    <section class="px-6 py-20 bg-primary/5">
        <div class="max-w-md mx-auto text-center space-y-6">
        <h2 class="text-slate-100 text-2xl font-bold leading-tight">Nollywood Has a Distribution Gap.</h2>
        <p class="text-slate-400 text-lg leading-relaxed">
            Despite being one of the largest film industries globally, reaching international audiences remains a challenge. We are building the bridge to bring high-quality Nollywood productions to every screen worldwide. <br/><br/>
            <span class="text-slate-100 font-bold italic">It's time for our stories to be seen as they were meant to be.</span>
        </p>
        </div>
    </section>

    {/* How It Works */}
    <section class="px-6 py-20 space-y-12 flex flex-col items-center">
        <div class="text-center">
            <h3 class="text-primary text-sm font-bold tracking-widest uppercase mb-2">The Process</h3>
            <h2 class="text-slate-100 text-3xl">How It Works</h2>
        </div>
        <div class="flex flex-col justify-center gap-8 lg:w-3/4">
            <div class="p-8 rounded-xl bg-slate-900/50 border border-slate-800 relative group overflow-hidden">
                <span class="text-primary/10 text-8xl font-black absolute -right-4 -top-4 italic font-serif">01</span>
                <div class="relative z-10">
                    <span class="material-symbols-outlined text-primary mb-4 text-3xl"><Movie /></span>
                    <h4 class="text-slate-100 text-xl font-bold mb-2 ">Release</h4>
                    <p class="text-slate-400 leading-relaxed">Films premiere in cinemas as usual.</p>
                </div>
            </div>
            <div class="p-8 rounded-xl bg-slate-900/50 border border-slate-800 relative group overflow-hidden">
                <span class="text-primary/10 text-8xl font-black absolute -right-4 -top-4 italic font-serif">02</span>
                <div class="relative z-10">
                    <span class="material-symbols-outlined text-primary mb-4 text-3xl"><Public /></span>
                    <h4 class="text-slate-100 text-xl font-bold mb-2">Extend</h4>
                    <p class="text-slate-400 leading-relaxed">Audiences purchase secure digital tickets where cinemas are unavailable.</p>
                </div>
            </div>
            <div class="p-8 rounded-xl bg-slate-900/50 border border-slate-800 relative group overflow-hidden">
                <span class="text-primary/10 text-8xl font-black absolute -right-4 -top-4 italic font-serif">03</span>
                <div class="relative z-10">
                    <span class="material-symbols-outlined text-primary mb-4 text-3xl"><Shield /></span>
                    <h4 class="text-slate-100 text-xl font-bold mb-2 ">Watch</h4>
                    <p class="text-slate-400 leading-relaxed">Time-limited access. Encrypted streaming. Individual watermark protection.</p>
                </div>
            </div>
            <p className='text-center text-white/90 text-4xl pt-16 text-bold italic leading-relaxed'>Noir Cinema is designed to protect theatrical value <span>--not replace it.</span></p>
        </div>
    </section>

    {/* For Producers Section  */}
    <section class="px-6 py-12 flex flex-col items-center">
        <div class="bg-gradient-to-br from-slate-900 to-background-dark border border-primary/20 rounded-2xl p-8 relative overflow-hidden lg:w-3/4">
            <div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px]"></div>
            <h2 class="text-slate-100 text-2xl font-serif font-bold mb-6">For Filmmakers &amp; Studios</h2>
            <ul class="space-y-4">
                <li class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-primary mt-1"><CheckCircle /></span>
                    <p class="text-slate-300">Global distribution without middleman hurdles.</p>
                </li>
                <li class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-primary mt-1"><CheckCircle /></span>
                    <p class="text-slate-300">Advanced DRM protection and pirate-prevention.</p>
                </li>
                <li class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-primary mt-1"><CheckCircle /></span>
                    <p class="text-slate-300">Transparent real-time revenue and viewership data.</p>
                </li>
            </ul>
        </div>
    </section>

    {/* For Audiences Section */}
    <section class="px-6 py-20 text-center">
        <div class="max-w-md mx-auto space-y-6">
            <h2 class="text-slate-100 text-3xl italic">Your Front Row Seat to Africa’s Heartbeat.</h2>
            <p class="text-slate-400 text-lg leading-relaxed">
                Whether you're in Lagos or London, experience the culture, the drama, and the rhythm of Nollywood exactly as the director intended. No compromises, just pure cinema.
            </p>
        </div>
    </section>

    {/* Demo Section */}
    <section class="px-6 py-12">
        <div class="relative rounded-2xl overflow-hidden aspect-video group">
            <div class="absolute inset-0 bg-slate-900" data-alt="A dark cinematic preview of a high-end film set">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark/90"></div>
                <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <button class="bg-primary/90 hover:bg-primary text-white p-4 rounded-full mb-4 shadow-xl">
                        <span class="material-symbols-outlined text-sm md-text-4xl"><PlayArrow /></span>
                    </button>
                    <h3 class="text-slate-100 text-xl font-bold mb-2">Sample the Experience</h3>
                    <button class="px-6 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-xs font-medium uppercase tracking-widest">
                        Enter Demo Screening
                    </button>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Early Access Form --> */}
    <section id='access' class="px-6 py-20 bg-slate-900/30">
        <div class="max-w-md mx-auto">
            <div class="text-center mb-10">
                <h2 class="text-slate-100 text-3xl font-bold mb-4">Be the First to Know</h2>
                <p class="text-slate-400">Join our exclusive early access list for the grand opening.</p>
            </div>
            <div class="bg-background-dark p-6 rounded-2xl border border-slate-800 space-y-6 shadow-2xl">
                
                <div className="toggle flex p-1 bg-slate-900 rounded-lg">
                    <button 
                        className={`flex-1 py-2 text-sm font-bold text-slate-400 ${role === "user" ? "active text-white bg-primary rounded shadow-sm" : ""}`}
                        onClick={() => setRole("user")}>I’m a Film Lover</button>
                    <button 
                        className={`flex-1 py-2 text-sm font-bold text-slate-400 ${role === "producer" ? "active text-white bg-primary rounded shadow-sm" : ""}`}
                         onClick={() => setRole("producer")}>I’m a Producer</button>
                </div>
                <div class="space-y-4">
                    <form onSubmit={handleSubmit}>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-900/50 border-slate-800 rounded-lg p-4 text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                        placeholder="Enter your email address"
                        required
                    />
                    <button type='submit' class="w-full bg-primary text-white h-14 rounded font-medium text-xs uppercase tracking-[0.2em] shadow-primary/20 transition-all hover:bg-primary/90 active:scale-95 shadow-lg">
                        Secure Access
                    </button>
                    </form> 
                    {/* <div className='block w-full bg-primary hover:primary/90 text-white font-medium py-4 rounded transition-color uppercase tracking-[0.2em] text-xs shadow-lg shadow-primary/10 truncate uppercase w-full cursor-pointer flex items-center justify-center rounded h-14 bg-primary text-white text-sm font-bold tracking-[0.2em]  shadow-primary/20'
                        >
                        Validate Invite
                    </div> */}
                </div>
                <p class="text-center text-[10px] text-slate-500 uppercase tracking-widest">Limited invites sent monthly.</p>
            </div>
        </div>
    </section> 

    {/* <!-- Footer -->  */}
    <footer class="p-10 border-t border-slate-900 text-center space-y-6">
        <div class="flex justify-center gap-2 items-center">
            {/* <span class="material-symbols-outlined text-primary text-xl"><Movie /></span> */}
            <span class="text-white font-right leading-tight tracking-[0.5em] uppercase opacity-70">Noir Cinema</span>
            {/* text-white text-lg font-right leading-tight tracking-[0.5em] uppercase opacity-70 */}
        </div>
        <div class="flex justify-center gap-6 text-slate-500 text-sm">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
        </div>
        <div class="flex justify-center gap-4 text-slate-400">
            <span class="material-symbols-outlined"><Public /></span>
            {/* <span class="material-symbols-outlined"><Globe /></span> */}
            <span class="material-symbols-outlined"><Campaign /></span>
            <span class="material-symbols-outlined"><MovieEdit /></span>
        </div>
        <p class="text-slate-600 text-[10px] tracking-widest uppercase">© 2026 Noir Cinema Distribution. <br />All rights reserved.</p>
    </footer>
</>
  )
}

export default LandingPage