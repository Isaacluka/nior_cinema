import React from 'react'
import { Movie, MovieEdit, Campaign, Public, PlayCircle } from '@mui/icons-material';
import { Stream, Favorite, CheckCircle, PlayArrow, Shield, Message,  } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import MoviePoster from '../assets/MoviePoster.png'
import HeroSection from './HeroSection';


const LandingPage = () => {

    const navigate = useNavigate();

    const [role, setRole] = useState("user");
    const [email, setEmail] = useState("");

    const handleDemo = () => {
        navigate("accesspage", { replace: true });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // let location = "Unknown";

        // try {
        //     const res = await fetch("https://ipapi.co/json/");
        //     const data = await res.json();
        //     location = data.country_name || "Unkown";
        // } catch(err) {
        //     console.log("Could not get location, defaulting to Unknown");
        // }

        const response = await fetch(
            "https://noir-cinema-api.onrender.com/api/waitlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                Email: email,
                Role: role,
                // DateJoined: new Date()
            })
        });

        const data = await response.json();

        alert(data.message)

        setEmail("");
    };

    // Email Variables
    const recipientEmail = 'lukaisaacabdulkarim@gmail.com';
    const subject = 'Regarding Noir Cinema';
    const body = 'Hello, I would like to discuss...';

    // Encode the subject and body for proper URL formatting
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Scroll Animation

    const Ref1 = useRef(null);
    const Ref2= useRef(null);
    const Ref3 = useRef(null);
    const Ref4 = useRef(null);

    // Track scroll of each card
    const { scrollYProgress: progress1 } = useScroll({
        target: Ref1,
        offset: ["start end", "end end"], 
        // "start end" = when top of div hits bottom of viewport
        // "end start" = when bottom of div hits top of viewport
    });
    
    const { scrollYProgress: progress2 } = useScroll({
        target: Ref2,
        offset: ["start end", "end end"], 
        // "start end" = when top of div hits bottom of viewport
        // "end start" = when bottom of div hits top of viewport
    });
    
    const { scrollYProgress: progress3 } = useScroll({
        target: Ref3,
        offset: ["start end", "end end"], 
        // "start end" = when top of div hits bottom of viewport
        // "end start" = when bottom of div hits top of viewport
    });
    const { scrollYProgress: progress4 } = useScroll({
        target: Ref4,
        offset: ["start end", "end end"], 
        // "start end" = when top of div hits bottom of viewport
        // "end start" = when bottom of div hits top of viewport
    });

    // Map scroll to scale (1 → 1.2)
    const scale1 = useTransform(progress1, [0, 1], [1.2, 1]);
    const scale2 = useTransform(progress2, [0, 1], [.8, 1]);
    const scale3 = useTransform(progress3, [0, 1], [.8, 1]);
    const scale4 = useTransform(progress4, [0, 1], [.8, 1]);

    // Scroll 
    const accessRef = useRef(null);

    const scrollToSection = () => {
        accessRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        });
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

    <HeroSection />

    {/* Hero Section */}
    {/* <section class="relative px-6 py-16 flex flex-col items-center text-center gap-8 z-10  border overflow-hidden"> */}
        {/* Background Graphics
        <div className="absolute inset-0 z-0">
            <div className="w-full h-1/3 bg-center bg-cover"
                style={{ backgroundImage: `url(${MoviePoster})` }}>
            </div>
        </div> */}


        {/* <div class="absolute inset-0 glow-accent -z-10"></div> */}

        {/* Contact Button */}
        {/* <a
            href={mailtoLink}
            className="fixed top-30 right-6 bg-primary w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
            >
            💬
        </a>
                 */}
        {/* Spacer */}
        {/* <div className="w-full flex-1 flex flex-col justify-end pb-32 md:pb-36 relative z-10"></div> */}
        
        {/* Hero Text */}
        {/* <div className="space-y-4 relative">
            <motion.h1 
            style={{overflow: "hidden"}}
                    initial={{y: 30,opacity:0}}
                    animate={{y: 0, opacity:1}}
                    transition={{ duration: 2, ease: "easeInOut"}}
                    class="text-white text-4xl md:text-7xl font-extrabold uppercase font-special tracking-tight">
                <span>Reach your <br/><span className='text-primary italic'>global</span><br /> audience.</span><br /> */}
                {/* <motion.span 
                    style={{overflow: "hidden", whiteSpace: "nowrap", display: "inline-block"}}
                    initial={{ clipPath: "inset(0 100% 0 0)", filter: "blur(3px)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)", filter: "blur(0px)" }}
                    transition={{ duration: 2, ease: "easeInOut"}}
                    className="text-primary italic">{"  "}Nollywood.
                    <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        >
                        |
                    </motion.span>
                </motion.span> */}
            {/* </motion.h1> */}

            {/* Spacer */}
            {/* <div className="w-full flex-1 flex flex-col justify-end pb-12 relative z-10"></div> */}

            {/* <p class="text-white/90 text-base lg:text-xl font-normal leading-relaxed max-w-md mx-auto">
                After your theatrical release, bring your film to diaspora audiences worldwide through secure online premieres.
            </p> */}
            {/* <p class="text-white/90 text-base font-normal leading-relaxed max-w-md mx-auto">
                Watch theatrical releases anywhere in the world — while they’re still in cinemas.
            </p> */}
            {/* <p class="text-white/90 text-sm font-normal leading-relaxed max-w-md mx-auto">
                A secure, time-limited digital cinema experience built for producers and global audiences.
            </p> */}

        {/* </div>
        <div class="flex flex-col w-full gap-4 relative max-w-xs">
            <div onClick={handleDemo} class="block w-full bg-primary hover:primary/90 text-white font-medium py-4 rounded transition-color tracking-[0.2em] active:scale-95 shadow-lg shadow-primary/20'">
                Try the Demo Experience
            </div> */}
            {/* <div className='block w-full bg-primary hover:primary/90 text-white font-medium py-4 rounded transition-color uppercase tracking-[0.2em] text-xs shadow-lg shadow-primary/10 truncate uppercase w-full cursor-pointer flex items-center justify-center rounded h-14 bg-primary text-white text-sm font-bold tracking-[0.2em] transition-all hover:bg-primary/90 active:scale-95 shadow-lg shadow-primary/20'
                >
                 Validate Invite
            </div> */}
            {/* <button onClick={scrollToSection} class="w-full border border-white/40 bg-transparent rounded h-14 text-base block hover:bg-white/40 text-white font-medium py-4 rounded transition-color tracking-[0.2em] active:scale-95 shadow-lg shadow-white/20">
                Join Early Access
            </button>
        </div> */}
        {/* <div class="mt-8 w-full aspect-video rounded-xl bg-white/20 border border-primary/20 relative overflow-hidden flex items-center justify-center" data-alt="Cinematic abstract visual representing premium film streaming">
            <div class="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
            <span class="material-symbols-outlined text-primary/40 text-6xl"><PlayCircle /></span>
        </div> */}
    {/* </section> */}

    <section className='flex flex-col -mt-6 items-center'>
        <div className="w-24 h-[1px] text-center bg-primary/60 m-6"></div>
    </section>

    {/* Context Strip */}
    <section className='flex justify-center'>
        <div className="w-9/10 rounded-lg p-8 m-0 text-primary text-center flex justify-center items-center font-special text-xl lg:text-2xl tracking-[0.2em] border bg-white-400">Built for filmmakers who want to extend their reach beyond local cinema releases.</div>
    </section>

    <section className='flex flex-col items-center'>
        <div className="w-24 h-[1px] text-center bg-primary/60 m-6 mb-0"></div>
    </section>
    {/* <!-- Problem Section --> */}
    <section class="px-6 py-20 bg-primary/5">
        <div class="max-w-md mx-auto text-center space-y-6">
        {/* <h2 class="text-slate-100 text-4xl  font-bold leading-tight">Nollywood Has a Distribution Gap.</h2> */}
        <h2 class="text-slate-100 text-4xl font-special font-bold leading-tight">Your audience is bigger than your cinema reach.</h2>
        <p class="text-slate-400 text-lg text-left leading-relaxed">
            {/* Despite being one of the largest film industries globally, reaching international audiences remains a challenge. We are building the bridge to bring high-quality Nollywood productions to every screen worldwide. <br/><br/> */}
            {/* <span class="text-slate-100 font-bold italic">We help filmmakers reach global audiences—and get paid directly</span> */}
           Thousands of viewers across the world want to watch your film—but never get access.
        <p />
        <br />
        <p>Limited international distribution means:</p>
            <ul className='list-disc pl-5'>
                <li>Missed revenue</li>
                <li>Piracy</li>
                <li>Lost audience connection</li>
            </ul>
            <br />
        </p>
           <span class="text-slate-100 font-bold text-center italic">Noir Cinema helps you reach them.</span> 
        
        </div>
    </section>

    {/* How It Works */}
    <section class="px-6 py-20 space-y-12 flex flex-col items-center">
        <div class="text-center">
            <h3 class="text-primary text-sm font-bold tracking-widest uppercase mb-2">The Process</h3>
            <h2 class="text-slate-100 text-3xl">How It Works</h2>
        </div>
        <div class="flex flex-col md:flex-row justify-center gap-8 lg:w-3/4">

            {/* <motion.div 
                ref={Ref1}
                style={{scale: scale1}}
                class="relative p-8 rounded-xl bg-slate-900/50 border border-slate-800 relative group overflow-hidden hover:scale-110 transition-transform duration-300">
                <span class="text-primary/10 text-8xl font-black absolute -right-4 -top-4 italic font-serif">01</span>
                <div class="relative z-10">
                    <span class="material-symbols-outlined text-primary mb-4 text-3xl"><Movie /></span>
                    <h4 class="text-slate-100 text-xl font-bold mb-2 ">Release in Cinema</h4>
                    <p class="text-slate-400 leading-relaxed">Your film launches locally as usual.</p>
                </div>
            </motion.div>

            <motion.div
                ref={Ref2}
                style={{scale: scale2}} 
                class="p-8 rounded-xl bg-slate-900/50 border border-slate-800 relative group overflow-hidden hover:scale-110 transition-transform duration-300">
                <span class="text-primary/10 text-8xl font-black absolute -right-4 -top-4 italic font-serif">02</span>
                <div class="relative z-10">
                    <span class="material-symbols-outlined text-primary mb-4 text-3xl"><Public /></span>
                    <h4 class="text-slate-100 text-xl font-bold mb-2">Open Global access</h4>

                    <p class="text-slate-400 leading-relaxed">Offer digital tickets to audiences abroad.</p>
                </div>
            </motion.div>
            <motion.div 
                ref={Ref3}
                style={{scale: scale3}}
                class="relative p-8 rounded-xl bg-slate-900/50 border border-slate-800 relative group overflow-hidden hover:scale-110 transition-transform duration-300">
                    
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,120,0,0.15),transparent_40%)]" />
                <span class="text-primary/10 text-8xl font-black absolute -right-4 -top-4 italic font-serif">03</span>
                <div class="relative z-10">
                    <span class="material-symbols-outlined text-primary mb-4 text-3xl"><Shield /></span>
                    <h4 class="text-slate-100 text-xl font-bold mb-2 ">Monetize worldwide</h4>
                    // <p class="text-slate-400 leading-relaxed">Fan watch securely from anywhere <span className='text-primary italic'>and you earn directly.</span></p>
                </div>
            </motion.div> */}
            <motion.div
                ref={Ref1}
                style={{ scale: scale1 }}
                className="relative p-8 flex-1 rounded-2xl overflow-hidden group bg-gradient-to-b from-[#0a0a0a] to-[#120603] shadow-[0_0_30px_rgba(212,17,50,0.05)]  hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500">

                {/*Top glow overlay */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(212,17,50,0.15),transparent_10%)]" />

                {/* Big background number */}
                <span className="text-primary/10 text-8xl font-black absolute -right-4 -top-4 italic font-serif">
                    01
                </span>

                {/* Content */}
                <div className="relative z-10">
                    <div className="text-primary mb-4 text-3xl">
                    <Movie />
                    </div>

                    <h4 className="text-white text-xl font-bold mb-2">
                    Release in Cinema
                    </h4>

                    <p className="text-gray-400 leading-relaxed">
                    Your film launches locally as usual.
                    </p>
                </div>
            </motion.div>
            <motion.div
                ref={Ref1}
                style={{ scale: scale1 }}
                className="relative p-8 flex-1 rounded-2xl overflow-hidden group bg-gradient-to-b from-[#0a0a0a] to-[#120603]  shadow-[0_0_30px_rgba(212,17,50,0.05)]  hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500">

                {/*Top glow overlay */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(212,17,50,0.15),transparent_20%)]" />

                {/* Big background number */}
                <span className="text-primary/10 text-8xl font-black absolute -right-4 -top-4 italic font-serif">
                    02
                </span>

                {/* Content */}
                <div className="relative z-10">
                    <div className="text-primary mb-4 text-3xl">
                    <Public />
                    </div>

                    <h4 className="text-white text-xl font-bold mb-2">
                    Open Global access
                    </h4>

                    <p className="text-gray-400 leading-relaxed">
                    Offer digital tickets to audiences abroad.
                    </p>
                </div>
            </motion.div>
            <motion.div
                ref={Ref1}
                style={{ scale: scale1 }}
                className="relative p-8 flex-1 rounded-2xl overflow-hidden group bg-gradient-to-b from-[#0a0a0a] to-[#120603] shadow-[0_0_30px_rgba(212,17,50,0.05)]  hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500">

                {/*Top glow overlay */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(212,17,50,0.15),transparent_10%)]" />

                {/* Big background number */}
                <span className="text-primary/10 text-8xl font-black absolute -right-4 -top-4 italic font-serif">
                    03
                </span>

                {/* Content */}
                <div className="relative z-10">
                    <div className="text-primary mb-4 text-3xl">
                    <Shield />
                    </div>

                    <h4 className="text-white text-xl font-bold mb-2">
                        Monetize Worldwide
                    </h4>

                    <p className="text-gray-400 leading-relaxed">
                        Fans watch securely from anywhere <span className='text-primary italic'>and you earn directly.</span>

                    </p>
                </div>
            </motion.div>
        
            {/* <p className='text-center text-white/90 text-4xl pt-16 text-bold italic leading-relaxed'>Noir Cinema is designed to protect theatrical value <br /><span>-- not replace it.</span></p> */}
        </div>
    </section>
    
    {/* Red Dash */}
    <section className='flex flex-col items-center'>
        <div className="w-24 h-[1px] text-center bg-primary/60 mb-6"></div>
    </section>
    

    {/* For Producers Section  */}
    <section class="px-6 py-12 flex flex-col items-center">
        <div class="text-center">
            <h3 class="text-primary text-sm font-bold tracking-widest uppercase mb-2">Product Features</h3>
            <h2 class="text-slate-100 text-3xl">Why You Need Noir Cinema</h2>
        </div>
        
        <div class="bg-gradient-to-br mt-8 from-slate-900 to-background-dark border border-primary/20 rounded-2xl p-8 relative overflow-hidden lg:w-3/4 hover:scale-110 transition-transform duration-300">
            <div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] "></div>
            {/* <h2 class="text-slate-100 text-2xl font-serif font-bold mb-6">For Filmmakers &amp; Studios</h2> */}
            <ul class="flex flex-col md:flex-row space-y-4">
                <li class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-primary mt-1"><CheckCircle /></span>
                    <p class="text-slate-300 mt-1">Global distribution without middleman hurdles.</p>
                </li>
                <li class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-primary mt-1"><CheckCircle /></span>
                    <p class="text-slate-300 mt-1">Advanced DRM protection and pirate-prevention.</p>
                </li>
                <li class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-primary mt-1"><CheckCircle /></span>
                    <p class="text-slate-300 mt-1">Transparent real-time revenue and viewership data.</p>
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
    {/* <section class="px-6 py-12">
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
    </section> */}
    {/* <!-- Early Access Form --> */}
    <section ref={accessRef} class="px-6 py-20 bg-slate-900/30">
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
                    <form className="space-y-4"onSubmit={handleSubmit}>
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