import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const YEARS = ["1927", "1940", "1957", "1965", "1979", "1990", "1999", "2010", "2024"];

const TIMELINE_DATA = {
    title: "Lorem Ipsum is simply dummy text",
    paragraphs: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    ]
};

export default function About({ onNavigate }) {
    const [activeYear, setActiveYear] = useState("1927");
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
                             Know about cafe <br /> Regina
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
                    <ScrollReveal direction="right" className="lg:-ml-[250px] xl:-ml-[360px] 2xl:-ml-[360px]">
                        <p className="font-serif text-5xl text-sm lg:text-[16px] text-[#F3EFE9]/60 font-light leading-relaxed lg:pt-[120px]">
                           Are you curious about the oldest café in Zelzate ? Then look no further, because Café Regina is the place to be. This is not only the oldest, but also the nicest café in Zelzate and the surrounding area. So be sure to come by and enjoy a good time! 
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            {/* TIMELINE SECTION */}
            <div className="w-full bg-[#0B0B0B] py-20 px-8 border-b border-white/5 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Years Selector */}
                    <ScrollReveal direction="up">
                        <div className="grid grid-cols-9 text-center mb-6">
                            {YEARS.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setActiveYear(year)}
                                   className={`font-serif text-[16px] md:text-[22px] transition-all duration-300 mx-auto ${
                                        activeYear === year
                                            ? "text-cafe-gold font-bold scale-110"
                                            : "text-white/40 hover:text-white"
                                    }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>

                        {/* Timeline Line with Indicator */}
                        <div className="relative w-full h-[1px] bg-white/10 mb-16">
                            <div
                                className="absolute top-0 h-3 w-3 bg-[#0B0B0B] border-t border-l border-white/10 rotate-45 -translate-y-1/2 -translate-x-1/2 transition-all duration-300"
                                style={{
                                    left: `${
                                        ((YEARS.indexOf(activeYear) + 0.5) / YEARS.length) * 100
                                    }%`,
                                }}
                            />
                        </div>
                    </ScrollReveal>

                    {/* Timeline Text Content */}
                    <ScrollReveal direction="up" delay={200} className="text-left animate-fade-in">
                        <h3 className="font-serif text-[32px] md:text-[42px] font-normal text-white mb-8 tracking-wide leading-tight">
                            {TIMELINE_DATA.title}
                        </h3>
                        <div className="space-y-6">
                            {TIMELINE_DATA.paragraphs.map((p, idx) => (
                                <p
                                    key={idx}
                                    className="font-sans text-sm md:text-[14.5px] text-[#F3EFE9]/60 font-light leading-relaxed"
                                >
                                    {p}
                                </p>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>

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