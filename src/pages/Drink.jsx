import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

// ── Data ─────────────────────────────────────────────────────────────────────
const MENU_CATEGORIES = [
    {
        id: 'beers-bottle',
        label: 'Beers Bottle',
        items: [
            { name: 'Chapel Hill Shiraz', price: 56, info: 'AU | Bottle' },
            { name: 'Hoegaarden Rose', price: 59, info: 'AR | Bottle' },
            { name: 'Kruger Export', price: 44, info: 'FR | 750 ml' },
            { name: 'Rhino Pale Ale', price: 31, info: 'CA | 750 ml' },
            { name: 'Irish Guinness', price: 26, info: 'IE | 750 ml' },
            { name: 'Chapel Hill Shiraz', price: 56, info: 'AU | Bottle' },
            { name: 'Hoegaarden Rose', price: 59, info: 'AR | Bottle' },
            { name: 'Kruger Export', price: 44, info: 'FR | 750 ml' },
            { name: 'Rhino Pale Ale', price: 31, info: 'CA | 750 ml' },
            { name: 'Irish Guinness', price: 26, info: 'IE | 750 ml' },
            { name: 'Chapel Hill Shiraz', price: 56, info: 'AU | Bottle' },
            { name: 'Hoegaarden Rose', price: 59, info: 'AR | Bottle' },
            { name: 'Kruger Export', price: 44, info: 'FR | 750 ml' },
            { name: 'Rhino Pale Ale', price: 31, info: 'CA | 750 ml' },
            { name: 'Irish Guinness', price: 26, info: 'IE | 750 ml' },
            { name: 'Chapel Hill Shiraz', price: 56, info: 'AU | Bottle' },
            { name: 'Hoegaarden Rose', price: 59, info: 'AR | Bottle' },
            { name: 'Kruger Export', price: 44, info: 'FR | 750 ml' },
            { name: 'Rhino Pale Ale', price: 31, info: 'CA | 750 ml' },
            { name: 'Irish Guinness', price: 26, info: 'IE | 750 ml' },
        ],
    },
    {
        id: 'draft-beers',
        label: 'Draft Beers',
        items: [
            { name: 'Chapel Hill Shiraz', price: 56, info: 'AU | Bottle' },
            { name: 'Hoegaarden Rose', price: 59, info: 'AR | Bottle' },
            { name: 'Kruger Export', price: 44, info: 'FR | 750 ml' },
            { name: 'Rhino Pale Ale', price: 31, info: 'CA | 750 ml' },
            { name: 'Irish Guinness', price: 26, info: 'IE | 750 ml' },
        ],
    },
    {
        id: 'non-alcoholic-beers',
        label: 'Non-Alcoholic Beers',
        items: [
            { name: 'Chapel Hill Shiraz', price: 56, info: 'AU | Bottle' },
            { name: 'Hoegaarden Rose', price: 59, info: 'AR | Bottle' },
            { name: 'Kruger Export', price: 44, info: 'FR | 750 ml' },
            { name: 'Rhino Pale Ale', price: 31, info: 'CA | 750 ml' },
            { name: 'Irish Guinness', price: 26, info: 'IE | 750 ml' },
        ],
    },
    {
        id: 'non-alcoholic-cocktails',
        label: 'Non-Alcoholic Cocktails',
        items: [
            { name: 'Kruger Export', price: 44, info: 'FR | 750 ml' },
            { name: 'Chapel Hill Shiraz', price: 56, info: 'AU | Bottle' },
            { name: 'Hoegaarden Rose', price: 59, info: 'AR | Bottle' },
            { name: 'Rhino Pale Ale', price: 31, info: 'CA | 750 ml' },
            { name: 'Irish Guinness', price: 26, info: 'IE | 750 ml' },
        ],
    },
    {
        id: 'aperitifs',
        label: 'Aperitifs/Degestives',
        items: [
            { name: 'Chapel Hill Shiraz', price: 56, info: 'AU | Bottle' },
            { name: 'Hoegaarden Rose', price: 59, info: 'AR | Bottle' },
            { name: 'Kruger Export', price: 44, info: 'FR | 750 ml' },
            { name: 'Rhino Pale Ale', price: 31, info: 'CA | 750 ml' },
            { name: 'Irish Guinness', price: 26, info: 'IE | 750 ml' },
            { name: 'Chapel Hill Shiraz', price: 56, info: 'AU | Bottle' },
            { name: 'Hoegaarden Rose', price: 59, info: 'AR | Bottle' },
            { name: 'Kruger Export', price: 44, info: 'FR | 750 ml' },
            { name: 'Rhino Pale Ale', price: 31, info: 'CA | 750 ml' },
            { name: 'Irish Guinness', price: 26, info: 'IE | 750 ml' },
            { name: 'Chapel Hill Shiraz', price: 56, info: 'AU | Bottle' },
            { name: 'Hoegaarden Rose', price: 59, info: 'AR | Bottle' },
            { name: 'Kruger Export', price: 44, info: 'FR | 750 ml' },
            { name: 'Rhino Pale Ale', price: 31, info: 'CA | 750 ml' },
            { name: 'Irish Guinness', price: 26, info: 'IE | 750 ml' },
            { name: 'Chapel Hill Shiraz', price: 56, info: 'AU | Bottle' },

        ],
    },
    {
        id: 'wines',
        label: 'Wines',
        items: [
            { name: 'Chapel Hill Shiraz', price: 56, info: 'AU | Bottle' },
            { name: 'Hoegaarden Rose', price: 59, info: 'AR | Bottle' },
            { name: 'Kruger Export', price: 44, info: 'FR | 750 ml' },
            { name: 'Rhino Pale Ale', price: 31, info: 'CA | 750 ml' },
            { name: 'Irish Guinness', price: 26, info: 'IE | 750 ml' },
        ],
    },



    {
        id: 'warm-drinks',
        label: 'Warm Drinks',
        items: [
            { name: 'Chapel Hill Shiraz', price: 56, info: 'AU | Bottle' },
            { name: 'Hoegaarden Rose', price: 59, info: 'AR | Bottle' },
            { name: 'Kruger Export', price: 44, info: 'FR | 750 ml' },
            { name: 'Rhino Pale Ale', price: 31, info: 'CA | 750 ml' },
            { name: 'Irish Guinness', price: 26, info: 'IE | 750 ml' },
        ],
    },


    {
        id: 'soft-drinks',
        label: 'Soft Drinks',
        items: [
            { name: 'Chapel Hill Shiraz', price: 56, info: 'AU | Bottle' },
            { name: 'Hoegaarden Rose', price: 59, info: 'AR | Bottle' },
            { name: 'Kruger Export', price: 44, info: 'FR | 750 ml' },
            { name: 'Kruger Export', price: 44, info: 'FR | 750 ml' },
            { name: 'Rhino Pale Ale', price: 31, info: 'CA | 750 ml' },
            { name: 'Rhino Pale Ale', price: 31, info: 'CA | 750 ml' },
            { name: 'Irish Guinness', price: 26, info: 'IE | 750 ml' },
            { name: 'Irish Guinness', price: 26, info: 'IE | 750 ml' },
            { name: 'Irish Guinness', price: 26, info: 'IE | 750 ml' },
        ],
    },


];

// ── Price row ─────────────────────────────────────────────────────────────────
function MenuRow({ name, price, info }) {
    return (
        <div className="py-3 group/row">
            <div className="flex items-center gap-4">
                {/* Name — flex-1 to keep layout aligned */}
                <span
                    className="font-cormorant font-semibold text-[22px] leading-snug whitespace-nowrap flex-1 truncate"
                    style={{ color: '#DCCA87', letterSpacing: '0.04em' }}
                >
                    {name}
                </span>
                {/* Separator is now a fixed length */}
                <span className="w-40 shrink-0 h-[2px] bg-white/40" aria-hidden />
                {/* Price — fixed width so all prices align vertically */}
                <span className="font-sans text-[17px] font-bold text-white w-14 text-right shrink-0">
                    ${price}
                </span>
            </div>
            {/* Country / size */}
            <p className="font-bold text-[11px] tracking-wider text-white uppercase mt-0.5">
                {info}
            </p>
        </div>
    );
}

// ── Category block ────────────────────────────────────────────────────────────
function CategoryBlock({ label, items }) {
    return (
        <div>
            {/* Cinzel (≈ Athina Regular) — size 40 → text-[32px] on screen, tracking 4% */}
            <h3
                className="font-cinzel text-[28px] md:text-[32px] uppercase text-white font-normal mb-8"
                style={{ letterSpacing: '0.04em' }}
            >
                {label}
            </h3>
            <div className="divide-y divide-white/5">
                {items.map((item, i) => (
                    <MenuRow key={i} {...item} />
                ))}
            </div>
        </div>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Drink({ onNavigate }) {

    return (
        <div
            className="text-[#F3EFE9] min-h-screen font-sans bg-cover bg-fixed bg-center overflow-x-hidden"
            style={{ backgroundImage: `url('/Group 8723.png')` }}
        >
            <h1 className="sr-only">Drinks Menu – Café Regina</h1>

            {/* ── HERO ────────────────────────────────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-8 md:px-14 pt-40 pb-20 border-b border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr]  items-start ">

                    {/* Left — big title */}
                    <ScrollReveal direction="left">
                        <h2 className="font-serif text-5xl md:text-6xl lg:text-[90px] font-normal text-white  tracking-tight">
                            View The Extensive<br />Drinks Menu
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
                    <ScrollReveal direction="right" className="lg:-ml-40">
                        <p className="font-serif text-5xl lg:text-[16px] text-sm text-[#F3EFE9]/60 font-light leading-relaxed lg:pt-[110px]">
                            Would you like to enjoy an extensive drinks menu in Zelzate and the surrounding area?
                            Then look no further, because Café Regina is the place to be! You will find many
                            different drinks here, so you will certainly find something you will like.
                            So be sure to visit the store or contact us!
                        </p>
                    </ScrollReveal>
                </div>
            </div>
            {/* ── WEEKEND SUGGESTION ──────────────────────────────────────────────── */}
            <ScrollReveal direction="up" className="py-16 text-center border-b border-white/5">
                <div className="max-w-2xl mx-auto px-8">
                    <h3 className="font-serif text-3xl md:text-4xl font-light text-white tracking-wide mb-4">
                        Weekend Suggestion
                    </h3>
                    <p className="font-sans text-sm text-[#F3EFE9]/55 font-light leading-relaxed">
                        During the weekend at Café Regina you can treat yourself to a delicious hot meal that is
                        prepared with a lot of care and love. Our chef gets to work and conjures up traditional
                        Flemish classics that will delight your taste buds. So be sure to drop by or contact
                        this business!
                    </p>
                </div>
            </ScrollReveal>
            {/* ── MENU — CSS columns: categories flow continuously into 2 columns ── */}
            <div className="max-w-7xl mx-auto px-8 md:px-14 py-20">
                <div className="columns-1 md:columns-2 gap-8 md:gap-28">
                    {MENU_CATEGORIES.map((cat) => (
                        <ScrollReveal key={cat.id} direction="up" className="mb-14" style={{ breakInside: 'avoid' }}>
                            <CategoryBlock label={cat.label} items={cat.items} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
            <div className="relative flex h-20 items-center justify-center ">
                <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
                <button
                    type="button"
                    onClick={() => onNavigate('home')}
                    aria-label="Back to home"
                    className="relative z-10 h-20 w-20 rounded-full bg-black p-1 transition-transform hover:scale-105"
                >
                    <img src="/Logo.png" alt="Cafe Regina" className="h-full w-full object-contain " />
                </button>
            </div>
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
                    <h3 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-2 font-normal">
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

        </div>
    );
}
