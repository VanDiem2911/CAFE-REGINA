import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Home({ onNavigate, onSelectEvent }) {
    const eventsRef = useRef(null);
    const galleryRef = useRef(null);
    const galleryIdxRef = useRef(0);
    const eventsIdxRef = useRef(0);

    const scrollEvents = (direction) => {
        const container = eventsRef.current;
        if (!container) return;
        const children = Array.from(container.children);
        if (!children.length) return;
        const total = children.length;
        const next = Math.max(0, Math.min(total - 1, eventsIdxRef.current + direction));
        eventsIdxRef.current = next;
        container.scrollLeft = children[next].offsetLeft;
    };

    const scrollGallery = (direction) => {
        const container = galleryRef.current;
        if (!container) return;
        const children = Array.from(container.children);
        if (!children.length) return;
        const total = children.length;
        const step = window.innerWidth < 768 ? 2 : 1;
        const next = Math.max(0, Math.min(total - 1, galleryIdxRef.current + direction * step));
        galleryIdxRef.current = next;
        container.scrollLeft = children[next].offsetLeft;
    };

    return (
        <div className="flex min-h-screen flex-col justify-between overflow-x-hidden bg-black font-sans text-[#F3EFE9] selection:bg-cafe-gold selection:text-cafe-dark">
            <h1 className="sr-only">Cafe Regina | Grote Markt 15, 9060 Zelzate</h1>
            <main className="w-full flex-1">
                <section
                    className="w-full bg-cover bg-top bg-no-repeat"
                    style={{ backgroundImage: `linear-gradient(to bottom, rgba(11, 11, 11, 0) 70%, #0B0B0B 100%), url('/Group 8723.png')` }}
                >
                    <div className="mx-auto w-full max-w-[1200px] relative aspect-[375/560] sm:aspect-[640/800] md:aspect-[768/900] lg:aspect-[1440/1123] block px-0 pb-0 pt-0">

                        {/* Responsive Absolute Positioning System */}
                        <div className="block w-full h-full">

                            {/* LEFT COLUMN: Cafe Regina Title Block & Small Arch Drink (Frame 156) */}
                            <div className="absolute inset-0 block z-10 pointer-events-none">

                                {/* Elegant Header Title Block */}
                                <ScrollReveal direction="left" className="absolute top-[10%] sm:top-[7.5%] left-[6%] w-[88%] flex flex-col select-none lg:top-[17%] lg:left-0 lg:w-[350px] pointer-events-auto">
                                    <div className="flex items-center gap-2 sm:gap-4 w-full">
                                        <span className="text-lg sm:text-2xl lg:text-3xl tracking-[0.25em] uppercase font-light text-white font-serif">Cafe</span>
                                        <div className="flex-grow h-[1px] bg-[#F3EFE9]/20" />
                                    </div>
                                    <div className="flex items-start gap-2 sm:gap-4 mt-1 sm:mt-2">
                                        <span className="text-xl sm:text-3xl lg:text-5xl font-normal tracking-[0.05em] uppercase text-white font-serif leading-none">Regina</span>
                                        <div className="font-serif text-[6px] sm:text-[9px] lg:text-[16px] tracking-[0.15em] font-normal leading-tight pt-0.5 shrink-0 whitespace-nowrap">
                                            <div className="font-semibold text-white">GROTE MARKT 15,</div>
                                            <div className="font-semibold text-[#F3EFE9]/40">9060 ZELZATE</div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Small Arch Visual (Rectangle 16.png) */}
                                <ScrollReveal
                                    direction="left"
                                    delay={200}
                                    className="group absolute left-[12%] top-[45%] sm:top-[33.5%] w-[16%] h-auto cursor-pointer shadow-2xl transition-all duration-300 sm:w-[18%] md:w-[20%] lg:left-[6.94%] lg:top-[58%] lg:w-[17.78%] pointer-events-auto"
                                    onClick={() => onNavigate('drinks')}
                                    style={{ aspectRatio: '256/373' }}
                                >
                                    <img
                                        src="/Rectangle 16.png"
                                        alt="Lime beverage"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </ScrollReveal>

                            </div>

                            {/* CENTER COLUMN: Main Tall Hero Arch (Rectangle 15) & Slider Indicator */}
                            <div className="absolute inset-0 block z-20 pointer-events-none">

                                {/* Central Arch Banner containing text overlay */}
                                <ScrollReveal
                                    direction="up"
                                    duration={1000}
                                    className="absolute left-[30%] top-[18.7%] sm:top-[14%] w-[46%] h-auto select-none overflow-visible shadow-2xl animate-scale-up sm:left-[28%] sm:w-[45%] md:left-[27%] md:w-[46%] lg:left-[29.5%] lg:top-[12.2%] lg:w-[40.7%] flex pointer-events-auto"
                                    style={{ aspectRatio: '586/886' }}
                                >
                                    <img
                                        src="/Rectangle 15.png"
                                        alt="Geniet Van Een Gezellige Tijd Bij Cafe Regina"
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
                                    />

                                    {/* Image Typography Overlay from Figma (scaled to 130% of the arch to overlap slightly) */}
                                    <div className="pointer-events-none absolute inset-0 z-30 overflow-visible">
                                        <img
                                            src="/hero-title-masked.png"
                                            alt="Geniet Van Een Gezellige Tijd Bij Café Regina"
                                            className="absolute left-1/2 top-[56%] h-auto w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2 select-none object-contain sm:w-[145%] md:w-[155%] lg:top-[57%] lg:w-[160%]"
                                        />
                                    </div>
                                </ScrollReveal>

                                {/* Slide Navigation Indicator: 01 ──────────────── 02 03 04 05 */}
                                <div className="absolute top-[70%] sm:top-[52%] md:top-[52%] left-[20%] w-[60%] flex items-center justify-center gap-3 sm:gap-5 select-none font-sans text-[9px] sm:text-xs font-black tracking-widest sm:left-[24%] sm:w-[52%] md:left-[27%] md:w-[46%] lg:top-auto lg:bottom-[4.7%] lg:left-[29.5%] lg:w-[40.7%] pointer-events-auto">
                                    <button
                                        onClick={() => onNavigate('home')}
                                        className="text-white hover:text-cafe-gold transition-colors font-black"
                                    >
                                        01
                                    </button>
                                    <div className="flex-1 max-w-[150px] h-[1.5px] bg-cafe-gold" />
                                    <button
                                        onClick={() => onNavigate('drinks')}
                                        className="text-[#F3EFE9]/40 hover:text-white transition-colors"
                                    >
                                        02
                                    </button>
                                    <button
                                        onClick={() => onNavigate('small-hunger')}
                                        className="text-[#F3EFE9]/40 hover:text-white transition-colors"
                                    >
                                        03
                                    </button>
                                    <button
                                        onClick={() => onNavigate('suggestions')}
                                        className="text-[#F3EFE9]/40 hover:text-white transition-colors"
                                    >
                                        04
                                    </button>
                                    <button
                                        onClick={() => onNavigate('photos')}
                                        className="text-[#F3EFE9]/40 hover:text-white transition-colors"
                                    >
                                        05
                                    </button>
                                </div>

                            </div>

                            {/* RIGHT COLUMN: Medium Arch Wine (Rectangle 17), Description & Contact */}
                            <div className="absolute inset-0 block z-10 font-sans pointer-events-none">

                                {/* Medium Arch Visual (Rectangle 17.png) */}
                                <ScrollReveal
                                    direction="right"
                                    className="group absolute right-[6%] top-[24%] sm:top-[18%] w-[16%] h-auto cursor-pointer shadow-2xl transition-all duration-300 sm:w-[15%] md:w-[20%] lg:right-auto lg:left-[74.375%] lg:top-[12.29%] lg:w-[18.68%] pointer-events-auto"
                                    onClick={() => onNavigate('drinks')}
                                    style={{ aspectRatio: '269/402' }}
                                >
                                    <img
                                        src="/Rectangle 17.png"
                                        alt="Wine serving"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </ScrollReveal>

                                {/* Description Text */}
                                <ScrollReveal direction="right" delay={200} className="absolute left-[6%] top-[72.3%] sm:top-[54%] md:top-[54%] right-[6%] w-[88%] text-left lg:left-[76.5%] lg:top-[65.5%] lg:bottom-auto lg:w-[16.5%] pointer-events-auto">
                                    <p className="text-center lg:text-justify font-sans text-[9px] sm:text-xs font-light leading-relaxed text-[#F3EFE9]/70 md:text-sm">
                                        Café Regina is not only the oldest, but also the nicest café in Zelzate and the surrounding area.
                                        So be sure to come by and enjoy a good time!
                                    </p>

                                    {/* Styled Contact Button: CONTACT ─────> (circle) */}
                                    <div className="flex justify-center lg:justify-end mt-3 sm:mt-6">
                                        <button
                                            onClick={() => onNavigate('contact')}
                                            className="group flex items-center gap-4 text-cafe-gold hover:text-white transition-colors"
                                        >
                                            <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-cafe-gold group-hover:text-white transition-colors">
                                                Contact
                                            </span>
                                            <div className="w-16 h-[1.2px] bg-cafe-gold/40 group-hover:bg-white transition-all" />
                                            <div className="w-9 h-9 rounded-full border border-cafe-gold/40 flex items-center justify-center group-hover:border-white transition-all">
                                                <ArrowRight className="w-4 h-4 text-cafe-gold group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                                            </div>
                                        </button>
                                    </div>
                                </ScrollReveal>

                            </div>

                        </div>
                    </div>
                    <div
                        className="flex w-full flex-col justify-center bg-top bg-no-repeat px-6 pb-8 md:px-12"
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(11, 11, 11, 0) 70%, #0B0B0B 100%), url('/bg2.png')`,
                            backgroundSize: '100% 100%',
                        }}
                    >
                        {/* Extensive Drinks Section */}
                        <div className="relative z-10 mx-auto mt-16 w-full max-w-6xl lg:mt-20">
                            <div className="relative z-10 grid w-full grid-cols-[1fr_1.4fr_1fr] sm:grid-cols-[1fr_1.66fr_1fr] items-center gap-2 sm:gap-10 lg:gap-8">

                                {/* Left: Title & Description */}
                                <ScrollReveal direction="left" delay={100} className="flex flex-col items-start text-left">
                                    <h2 className="mb-1 sm:mb-3 font-serif text-[11px] sm:text-2xl font-light tracking-wide text-white md:text-3xl">
                                        Extensive Drinks
                                    </h2>
                                    <p className="max-w-[300px] font-sans text-[7px] sm:text-[10px] font-light leading-[1.5] sm:leading-[1.65] text-[#F3EFE9]/60 md:text-[11px]">
                                        At Café Regina you will always find something you would like to drink. They have a very extensive drinks menu, so there is something for everyone. So be sure to contact us via telephone number or email address or simply drop by the café for a pleasant time!
                                    </p>
                                </ScrollReveal>

                                {/* Center: Image splash inside a premium frame */}
                                <ScrollReveal direction="up" delay={300} className="flex justify-center">
                                    <div
                                        className="group relative aspect-[541/639] w-full max-w-[440px] lg:max-w-[650px] overflow-visible transition-all duration-300"
                                    >
                                        <img
                                            src="/drink-transparent.png"
                                            alt="Extensive Drinks Splash"
                                            className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </ScrollReveal>

                                {/* Right: Subcategories list and ALL MENU */}
                                <ScrollReveal direction="right" delay={500} className="flex h-full flex-col items-start justify-center text-left font-sans">
                                    <div className="flex w-full flex-col items-start gap-2 sm:gap-4">
                                        {[
                                            { name: 'BEERS BOTTLE', action: 'drinks' },
                                            { name: 'APERITIFS/DEGESTIVES', action: 'drinks' },
                                            { name: 'DRAFT BEERS', action: 'drinks' },
                                            { name: 'SOFT DRINKS', action: 'drinks' },
                                        ].map((item, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => onNavigate(item.action)}
                                                className="font-serif text-[7.5px] sm:text-base uppercase tracking-[0.08em] text-[#F3EFE9]/85 transition-all duration-300 transform origin-left hover:scale-105 hover:translate-x-1 hover:text-cafe-gold md:text-lg"
                                            >
                                                {item.name}
                                            </button>
                                        ))}

                                        {/* ALL MENU CTA */}
                                        <div className="mt-2 sm:mt-4 flex w-full justify-start">
                                            <button
                                                onClick={() => onNavigate('drinks')}
                                                className="group flex items-center gap-1.5 sm:gap-4 text-cafe-gold hover:text-white transition-colors"
                                            >
                                                <span className="font-sans text-[7px] sm:text-[10px] tracking-[0.2em] uppercase font-bold text-cafe-gold group-hover:text-white transition-colors">
                                                    ALL MENU
                                                </span>
                                                <div className="w-6 sm:w-16 h-[1px] sm:h-[1.2px] bg-cafe-gold/40 group-hover:bg-white transition-all" />
                                                <div className="w-5 h-5 sm:w-9 sm:h-9 rounded-full border border-cafe-gold/40 flex items-center justify-center group-hover:border-white transition-all">
                                                    <ArrowRight className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-cafe-gold group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </ScrollReveal>

                            </div>
                        </div>

                        {/* Small Hunger Section */}
                        <div className="relative z-10 mx-auto mt-12 w-full max-w-6xl lg:mt-14">
                            {/* Watermark Logo Background behind the text-image area on the right side */}
                            <div className="pointer-events-none absolute left-0 top-[-30%] z-0 h-[220px] w-[220px] select-none opacity-[0.04]">
                                <img src="/Logo.png" alt="Watermark" className="w-full h-full object-contain" />
                            </div>

                            <div className="relative z-10 grid w-full grid-cols-[1fr_1.4fr_1fr] sm:grid-cols-[1fr_1.66fr_1fr] items-center gap-2 sm:gap-10 lg:gap-8">

                                {/* Left: Title & Description */}
                                <ScrollReveal direction="left" delay={100} className="flex flex-col items-start text-left">
                                    <h2 className="mb-1 sm:mb-3 font-serif text-[11px] sm:text-2xl font-light tracking-wide text-white md:text-3xl">
                                        Small Hunger
                                    </h2>
                                    <p className="max-w-[285px] font-sans text-[7px] sm:text-[10px] font-light leading-[1.5] sm:leading-[1.6] text-[#F3EFE9]/60 md:text-[11px]">
                                        Also if you want to eat, you should go to Café Regina! For example, you can eat something here if you are feeling a little hungry. There is the farmer's board. The board is filled with a selection of artisan cheeses, cold cuts and crispy freshly baked bread. At the weekend you will find many tasty Flemish classics here, such as home-made stew and pork cheeks with abbey beer.
                                    </p>
                                </ScrollReveal>

                                {/* Center: Image splash inside a premium frame */}
                                <ScrollReveal direction="up" delay={300} className="flex justify-center">
                                    <div
                                        className="group relative aspect-[332/621] w-full max-w-[200px] lg:max-w-[340px] overflow-visible transition-all duration-300"
                                    >
                                        <img
                                            src="/chips-transparent.png"
                                            alt="Small Hunger Splash"
                                            className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </ScrollReveal>

                                {/* Right: Subcategories list and ALL MENU */}
                                <ScrollReveal direction="right" delay={500} className="flex h-full flex-col items-start justify-center text-left font-sans">
                                    <div className="flex w-full flex-col items-start gap-2 sm:gap-4">
                                        {[
                                            { name: 'REFRESHMENTS', action: 'small-hunger' },
                                            { name: 'PANCAKES / WAFFLES', action: 'small-hunger' },
                                            { name: 'SAVORY', action: 'small-hunger' },
                                            { name: 'LITTLE HUNGER', action: 'small-hunger' },
                                        ].map((item, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => onNavigate(item.action)}
                                                className="font-serif text-[7.5px] sm:text-base uppercase tracking-[0.08em] text-[#F3EFE9]/85 transition-all duration-300 transform origin-left hover:scale-105 hover:translate-x-1 hover:text-cafe-gold md:text-lg"
                                            >
                                                {item.name}
                                            </button>
                                        ))}

                                        {/* ALL MENU CTA */}
                                        <div className="mt-2 sm:mt-4 flex w-full justify-start">
                                            <button
                                                onClick={() => onNavigate('small-hunger')}
                                                className="group flex items-center gap-1.5 sm:gap-4 text-cafe-gold hover:text-white transition-colors"
                                            >
                                                <span className="font-sans text-[7px] sm:text-[10px] tracking-[0.2em] uppercase font-bold text-cafe-gold group-hover:text-white transition-colors">
                                                    ALL MENU
                                                </span>
                                                <div className="w-6 sm:w-16 h-[1px] sm:h-[1.2px] bg-cafe-gold/40 group-hover:bg-white transition-all" />
                                                <div className="w-5 h-5 sm:w-9 sm:h-9 rounded-full border border-cafe-gold/40 flex items-center justify-center group-hover:border-white transition-all">
                                                    <ArrowRight className="h-2.5 w-2.5 sm:h-4 sm:w-4 text-cafe-gold group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </ScrollReveal>

                            </div>
                        </div>

                        <section className="relative z-10 mx-auto mt-10 w-full max-w-[1250px] overflow-x-hidden bg-transparent lg:mt-12">
                            <ScrollReveal direction="fade" className="relative h-16">
                                <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
                                <img
                                    src="/Logo.png"
                                    alt="Cafe Regina"
                                    className="absolute left-1/2 top-1/2 z-20 h-16 w-16 -translate-x-1/2 -translate-y-1/2 object-contain opacity-90"
                                />
                            </ScrollReveal>

                            <ScrollReveal direction="up" className="relative z-20 mx-auto flex max-w-2xl flex-col items-center px-6 pt-5 text-center">
                                <h2 className="mb-3 font-serif text-2xl font-light tracking-wide text-white md:text-3xl">
                                    Weekend Suggestion
                                </h2>
                                <p className="mb-5 max-w-[610px] font-sans text-[14px] font-light leading-4 text-[#F3EFE9]/55 md:text-[14px]">
                                    During the weekend at Cafe Regina you can treat yourself to a delicious hot meal
                                    that is prepared with a lot of care and love. Our chef gets to work and conjures
                                    up traditional Flemish classics that will delight your taste buds. So be sure to
                                    drop by or contact this business!
                                </p>
                                <button
                                    type="button"
                                    onClick={() => onNavigate('suggestions')}
                                    className="group flex items-center gap-4 text-cafe-gold transition-colors hover:text-white"
                                >
                                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em]">
                                        Read More
                                    </span>
                                    <span className="h-px w-16 bg-cafe-gold/60 transition-colors group-hover:bg-white" />
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cafe-gold/60 transition-colors group-hover:border-white">
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                    </span>
                                </button>
                            </ScrollReveal>
                            <ScrollReveal direction="up" delay={200} className="w-full mt-2 sm:mt-4">
                                <div className="w-full flex justify-center pb-2 px-6">
                                    <img
                                        src="/Group 8731.png"
                                        alt="Weekend drinks and food selection"
                                        className="h-auto w-full max-w-[1050px] object-contain transition-transform duration-700 hover:scale-[1.03] cursor-pointer"
                                        onClick={() => onNavigate('suggestions')}
                                    />
                                </div>
                            </ScrollReveal>
                        </section>

                        <button
                            type="button"
                            onClick={() => onNavigate('suggestions')}
                            className="hidden"
                            aria-label="View Happy Hours suggestions"
                        >
                            <img
                                src="/Happy Hours.png"
                                alt="Happy Hours at Cafe Regina"
                                className="h-auto w-full object-contain"
                            />
                        </button>
                        <div className="relative flex h-16 items-center justify-center ">
                            <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
                            <button
                                type="button"
                                onClick={() => onNavigate('home')}
                                aria-label="Back to home"
                                className="relative z-10 h-16 w-16 rounded-full bg-black p-1 transition-transform hover:scale-105"
                            >
                                <img src="/Logo.png" alt="Cafe Regina" className="h-full w-full object-contain " />
                            </button>
                        </div>
                        <div className="hidden">
                            <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
                                <h2 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide mb-6">
                                    Weekend Suggestion
                                </h2>
                                <p className="font-sans text-xs md:text-sm text-[#F3EFE9]/70 font-light leading-relaxed max-w-[650px] mb-8">
                                    During the weekend at Café Regina you can treat yourself to a delicious hot meal that is prepared with a lot of care and love. Our chef gets to work and conjures up traditional Flemish classics that will delight your taste buds. So be sure to drop by or contact this business!
                                </p>

                                <button
                                    onClick={() => onNavigate('suggestions')}
                                    className="group flex items-center gap-4 text-cafe-gold hover:text-white transition-colors"
                                >
                                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-cafe-gold group-hover:text-white transition-colors">
                                        READ MORE
                                    </span>
                                    <div className="w-16 h-[1.2px] bg-cafe-gold/40 group-hover:bg-white transition-all" />
                                    <div className="w-9 h-9 rounded-full border border-cafe-gold/40 flex items-center justify-center group-hover:border-white transition-all">
                                        <ArrowRight className="w-4 h-4 text-cafe-gold group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                                    </div>
                                </button>
                            </div>

                            {/* Arched images wave */}
                            <div className="flex justify-center items-end gap-3 sm:gap-4 md:gap-6 mt-16 max-w-5xl mx-auto px-4 overflow-x-auto pb-8 scrollbar-none">
                                {[
                                    { src: '/Rectangle 16.png', alt: 'Drink 1', transform: 'translate-y-8 -rotate-6' },
                                    { src: '/Rectangle 17.png', alt: 'Drink 2', transform: 'translate-y-2 -rotate-3' },
                                    { src: '/pexels-vilnis-husko-8493274 1.png', alt: 'Drink 3', transform: '-translate-y-2 -rotate-1' },
                                    { src: '/pexels-vilnis-husko-8493274 2.png', alt: 'Food 1', transform: '-translate-y-2 rotate-1' },
                                    { src: '/Rectangle 15.png', alt: 'Food 2', transform: 'translate-y-2 rotate-3' },
                                    { src: '/Rectangle 16.png', alt: 'Food 3', transform: 'translate-y-8 rotate-6' },
                                ].map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-[120px] sm:w-[150px] md:w-[180px] aspect-[2/3] rounded-t-full overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:translate-y-0 hover:rotate-0 hover:z-20 border border-white/10 shrink-0 ${img.transform}`}
                                    >
                                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </section>

                <div className="w-full bg-[#0B0B0B] px-6 md:px-12">
                    {/* Events Section */}
                    <section className="relative mx-auto w-full max-w-6xl overflow-hidden">
                        <ScrollReveal direction="up" className="mx-auto mb-11 max-w-xl text-center">
                            <h2 className="mb-4 font-serif text-3xl font-light tracking-wide text-white md:text-4xl">
                                Events
                            </h2>
                            <p className="mx-auto max-w-[540px] font-sans text-[11px] font-light leading-5 text-[#F3EFE9]/55 md:text-xs">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                            </p>

                            <div className="mt-7 flex items-center justify-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => scrollEvents(-1)}
                                    aria-label="Previous events"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-cafe-gold transition-all hover:border-cafe-gold hover:bg-cafe-gold hover:text-black active:scale-95"
                                >
                                    <ArrowRight className="h-4 w-4 rotate-180" />
                                </button>
                                <span className="h-px w-10 bg-cafe-gold/80" />
                                <span className="h-px w-10 bg-cafe-gold/80" />
                                <button
                                    type="button"
                                    onClick={() => scrollEvents(1)}
                                    aria-label="Next events"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-cafe-gold transition-all hover:border-cafe-gold hover:bg-cafe-gold hover:text-black active:scale-95"
                                >
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </ScrollReveal>

                        <div
                            ref={eventsRef}
                            className="flex snap-x snap-mandatory gap-7 overflow-x-auto pb-8 no-scrollbar scroll-smooth"
                        >
                            {[
                                { id: 1, src: '/Rectangle 62.png', title: 'Lorem Ipsum Dolor' },
                                { id: 2, src: '/Rectangle 64.png', title: 'Lorem Ipsum Dolor' },
                                { id: 3, src: '/Rectangle 65.png', title: 'Lorem Ipsum Dolor' },
                                { id: 4, src: '/Rectangle 66.png', title: 'Lorem Ipsum Dolor' },
                                { id: 5, src: '/Rectangle 63.png', title: 'Lorem Ipsum Dolor' },
                            ].map((card, idx) => (
                                <ScrollReveal
                                    key={card.id}
                                    direction="up"
                                    delay={idx * 150}
                                    className="group flex w-[220px] shrink-0 snap-start select-none flex-col sm:w-[235px] cursor-pointer"
                                    onClick={() => {
                                        onSelectEvent?.(card.src);
                                        onNavigate?.('eventpage');
                                    }}
                                >
                                    <div className="relative aspect-square w-full overflow-hidden rounded-t-full">
                                        <img
                                            src={card.src}
                                            alt={card.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="mt-4 text-left">
                                        <span className="font-sans text-[14px] uppercase tracking-[0.2em] text-[#F3EFE9]/45">
                                            16 APR 2021
                                        </span>
                                        <h3 className="mt-2 font-serif text-lg text-white transition-colors duration-300 group-hover:text-cafe-gold">
                                            {card.title}
                                        </h3>
                                        <p className="mt-2 max-w-[210px] font-sans text-[12px] font-light leading-4 text-[#F3EFE9]/50">
                                            Lorem Ipsum is simply dummy text of the printing.
                                        </p>
                                        <span
                                            className="mt-4 block font-sans text-[14px] uppercase tracking-[0.28em] text-cafe-gold transition-colors group-hover:text-white"
                                        >
                                            READ MORE
                                        </span>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </section>

                    {/* Photo Gallery Section */}
                    <section className="relative z-10 w-full bg-transparent pt-24 lg:pt-28">
                        <div className="mx-auto w-full max-w-6xl">
                            <div className="h-px w-full bg-white/10" />

                            <div className="grid items-center overflow-hidden bg-transparent py-14 lg:grid-cols-[294px_minmax(0,1fr)] lg:py-16">
                                <ScrollReveal direction="left" className="relative z-20 flex flex-col items-start justify-center bg-transparent px-7 py-10 text-left lg:py-8 lg:pointer-events-none">
                                    <h2 className="mb-4 font-serif text-3xl font-light tracking-wide text-white lg:pointer-events-auto">
                                        Photo Gallery
                                    </h2>
                                    <p className="mb-6 max-w-[250px] font-sans text-[10px] font-light leading-[1.65] text-[#F3EFE9]/55 lg:pointer-events-auto">
                                        If you are looking for an authentic cafe in Zelzate, Cafe Regina is the
                                        right place for you! You can be inspired by the atmospheric photos on
                                        this page. This gives you a taste of what you can expect when you visit
                                        the cafe. So be sure to check out these photos!
                                    </p>

                                    <div className="relative z-30 flex items-center lg:pointer-events-auto">
                                        <button
                                            type="button"
                                            onClick={() => scrollGallery(-1)}
                                            aria-label="Previous gallery photos"
                                            className="flex h-10 w-10 lg:h-8 lg:w-8 items-center justify-center rounded-full border border-white/70 text-cafe-gold transition-all hover:border-cafe-gold hover:bg-cafe-gold hover:text-black active:scale-95"
                                        >
                                            <ArrowRight className="h-4 w-4 lg:h-3.5 lg:w-3.5 rotate-180" />
                                        </button>
                                        <span className="h-px w-12 bg-cafe-gold/80" />
                                        <span className="mx-3 h-px w-12 bg-cafe-gold/80" />
                                        <button
                                            type="button"
                                            onClick={() => scrollGallery(1)}
                                            aria-label="Next gallery photos"
                                            className="flex h-10 w-10 lg:h-8 lg:w-8 items-center justify-center rounded-full border border-white/70 text-cafe-gold transition-all hover:border-cafe-gold hover:bg-cafe-gold hover:text-black active:scale-95"
                                        >
                                            <ArrowRight className="h-4 w-4 lg:h-3.5 lg:w-3.5" />
                                        </button>
                                    </div>
                                </ScrollReveal>

                                <div
                                    ref={galleryRef}
                                    className="flex snap-x snap-mandatory gap-4 overflow-x-auto bg-transparent leading-none no-scrollbar scroll-smooth"
                                >
                                        {[
                                            { src: '/1.png', alt: 'Pancakes with syrup' },
                                            { src: '/2.png', alt: 'Fresh salad with orange juice' },
                                            { src: '/3.png', alt: 'Freshly baked pizza' },
                                            { src: '/4.png', alt: 'Raspberry cake' },
                                        ].map((image) => (
                                            <button
                                                type="button"
                                                key={image.src}
                                                onClick={() => onNavigate('photos')}
                                                className="group relative block h-[329px] w-[221px] shrink-0 snap-start overflow-hidden border-0 bg-transparent p-0"
                                            >
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="block h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </button>
                                        ))}
                                </div>

                            </div>

                            <div className="relative flex h-20 items-center justify-center">
                                <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
                                <button
                                    type="button"
                                    onClick={() => onNavigate('home')}
                                    aria-label="Back to home"
                                    className="relative z-10 h-20 w-20 rounded-full bg-black p-1 transition-transform hover:scale-105"
                                >
                                    <img src="/Logo.png" alt="Cafe Regina" className="h-full w-full object-contain" />
                                </button>
                            </div>
                        </div>
                    </section>

                    <div className="hidden">
                        <div className="lg:col-span-4 flex flex-col text-left items-start">
                            <h2 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide mb-6">
                                Photo Gallery
                            </h2>
                            <p className="font-sans text-xs md:text-sm text-[#F3EFE9]/70 font-light leading-relaxed max-w-[320px] mb-8">
                                If you are looking for an authentic café in Zelzate, Café Regina is the right place for you! You can be inspired by the atmospheric photos on this page. This gives you a taste of what you can expect when you visit the café. So be sure to check out these photos!
                            </p>

                            <div className="flex gap-4">
                                <button className="w-9 h-9 rounded-full border border-cafe-gold/40 flex items-center justify-center text-cafe-gold hover:text-white hover:border-white transition-all active:scale-95">
                                    <ArrowRight className="w-4 h-4 rotate-180" />
                                </button>
                                <button className="w-9 h-9 rounded-full border border-cafe-gold/40 flex items-center justify-center text-cafe-gold hover:text-white hover:border-white transition-all active:scale-95">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-8 flex gap-4 overflow-x-auto pb-6 scrollbar-thin w-full">
                            {[
                                { src: '/pexels-vilnis-husko-8493274 2.png', alt: 'Pancakes' },
                                { src: '/pexels-vilnis-husko-8493274 1.png', alt: 'Salad' },
                                { src: '/Rectangle 15.png', alt: 'Pizza' },
                                { src: '/Rectangle 17.png', alt: 'Cake' },
                            ].map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => onNavigate('photos')}
                                    className="w-[180px] sm:w-[220px] md:w-[250px] aspect-[3/4] relative group overflow-hidden border border-white/5 hover:border-cafe-gold/30 rounded-none shadow-2xl transition-all duration-300 cursor-pointer shrink-0"
                                >
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stay informed & Newsletter Section */}
                <div
                    className="relative z-10 w-full bg-cover bg-center bg-no-repeat px-6 py-20 "
                    style={{ backgroundImage: `url('/bg3.png')` }}
                >
                    <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
                        <h2 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide mb-6">
                            Stay informed
                        </h2>
                        <p className="font-sans text-xs md:text-sm text-[#F3EFE9]/70 font-light leading-relaxed max-w-[650px] mb-8">
                            Stay up to date with everything that happens at Café Regina! This business believes it is important to keep its valued guests informed of news, events and special offers. You can always find all the latest news in the newsletter, so be sure to take a look.
                        </p>
                    </ScrollReveal>

                    {/* Newsletter Box */}
                    <ScrollReveal direction="up" delay={200} className="max-w-4xl mx-auto w-full border border-white/10 bg-[#0C0C0C]/80 backdrop-blur-md p-10 md:p-16 rounded-none text-center relative z-10 shadow-2xl mb-12">
                        <span className="text-cafe-gold font-sans text-xs tracking-[0.25em] font-bold uppercase block mb-3">
                            NEWSLETTER
                        </span>
                        <h3 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-8 font-light">
                            Subscribe To Our Newsletter
                        </h3>
                        <p className="font-sans text-xs md:text-sm text-[#F3EFE9]/60 font-light mb-10">
                            And never miss latest Updates!
                        </p>

                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto w-full">
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

            </main>

        </div>
    );
}
