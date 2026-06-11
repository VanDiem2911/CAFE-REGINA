import { ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const GALLERY_IMAGES = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/8.png",
    "/9.png",
    "/10.png",
    "/11.png",
    "/12.png",
    "/13.png",
];


function AtmosphericPhotos() {
    return (
        <section className="bg-[#050505] py-14 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-8 md:px-14">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-6">
                    {GALLERY_IMAGES.map((src, index) => (
                        <ScrollReveal
                            key={index}
                            direction="up"
                            delay={(index % 5) * 100}
                            className="aspect-[4/5] overflow-hidden bg-white/5"
                        >
                            <img
                                src={src}
                                alt={`Cafe Regina gallery ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </ScrollReveal>
                    ))}
                </div>

                <div className="flex items-center justify-between mt-10">
                    <button className="w-8 h-8 rounded-full border border-cafe-gold/60 text-cafe-gold flex items-center justify-center hover:border-white hover:text-white transition">
                        ←
                    </button>

                    <div className="hidden md:flex items-center gap-4 text-[11px] font-sans text-white/35 tracking-widest">
                        <span className="text-white font-bold">01</span>
                        <div className="w-40 h-px bg-white/40" />
                        <span>02</span>
                        <span>03</span>
                        <span>04</span>
                        <span>05</span>
                        <span>06</span>
                        <span>07</span>
                        <span>08</span>
                        <span>09</span>
                        <span>10</span>
                    </div>

                    <button className="w-8 h-8 rounded-full border border-cafe-gold/60 text-cafe-gold flex items-center justify-center hover:border-white hover:text-white transition">
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}

export default function Photos({ onNavigate }) {
    return (
        <div
            className="text-[#F3EFE9] min-h-screen font-sans bg-cover bg-fixed bg-center"
            style={{ backgroundImage: `url('/Group 8723.png')` }}
        >

            {/* HERO */}
            <div className="max-w-7xl mx-auto px-8 md:px-14 pt-40 pb-20 border-b border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] lg:gap-16 items-start ">

                    {/* Left — big title */}
                    <ScrollReveal direction="left">
                        <h2 className="font-serif text-5xl md:text-6xl lg:text-[90px] font-normal text-white  tracking-tight">
                            Enjoy The Atmospheric <br /> Photos!
                        </h2>
                        <button
                            onClick={() => onNavigate?.('contact')}
                            className="group flex items-center gap-4 mt-10 text-cafe-gold hover:text-white transition-colors duration-300"
                        >
                            <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-bold">
                                Contact Us
                            </span>
                            <div className="w-20 h-px bg-cafe-gold/60 group-hover:bg-white transition-colors" />
                            <div className="w-8 h-8 rounded-full border border-cafe-gold/60 flex items-center justify-center group-hover:border-white transition-colors">
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                        </button>
                    </ScrollReveal>

                    {/* Right — description */}
                    <ScrollReveal direction="right" className="lg:-ml-[250px] xl:-ml-[600px] 2xl:-ml-[600px]">
                        <p className="font-serif text-5xl text-sm lg:text-[16px] text-[#F3EFE9]/60 font-light leading-relaxed lg:pt-[120px]">
                            If you are looking for an authentic café in Zelzate, Café Regina is the right place for you! You can be inspired by the atmospheric photos on this page. This gives you a taste of what you can expect when you visit the café. So be sure to check out these photos!
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            {/* GALLERY */}
            <AtmosphericPhotos />

            {/* LOGO DIVIDER */}
            <div className="relative flex h-20 items-center justify-center">
                <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />

                <button
                    type="button"
                    onClick={() => onNavigate?.("home")}
                    aria-label="Back to home"
                    className="relative z-10 h-20 w-20 rounded-full bg-black p-1 transition-transform hover:scale-105"
                >
                    <img
                        src="/Logo.png"
                        alt="Cafe Regina"
                        className="h-full w-full object-contain"
                    />
                </button>
            </div>

            {/* NEWSLETTER */}
            <div
                className="relative z-10 w-full bg-cover bg-center bg-no-repeat px-6 py-20"
                style={{ backgroundImage: `url('/bg3.png')` }}
            >
                <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
                    <h2 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide mb-6">
                        Stay informed
                    </h2>

                    <p className="font-sans text-xs md:text-sm text-[#F3EFE9]/70 font-light leading-relaxed max-w-[650px] mb-8">
                        Stay up to date with everything that happens at Café Regina! This
                        business believes it is important to keep its valued guests informed
                        of news, events and special offers. You can always find all the
                        latest news in the newsletter, so be sure to take a look.
                    </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={200} className="max-w-4xl mx-auto w-full border border-white/10 bg-[#0C0C0C]/80 backdrop-blur-md p-10 md:p-16 text-center relative z-10 shadow-2xl mb-12">
                    <span className="text-cafe-gold font-sans text-xs tracking-[0.25em] font-bold uppercase block mb-3">
                        NEWSLETTER
                    </span>

                    <h3 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-2 font-normal">
                        Subscribe To Our Newsletter
                    </h3>

                    <p className="font-sans text-xs md:text-sm text-[#F3EFE9]/60 font-light mb-10">
                        And never miss latest Updates!
                    </p>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto w-full"
                    >
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-1 px-6 py-4 bg-[#141414] border border-white/10 text-white font-sans text-sm placeholder-white/30 focus:outline-none focus:border-cafe-gold transition-colors rounded-none"
                            required
                        />

                        <button
                            type="submit"
                            className="px-8 py-4 bg-cafe-gold hover:bg-cafe-goldHover text-cafe-dark font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 active:scale-95 rounded-none"
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                </ScrollReveal>
            </div>
        </div>
    );
}