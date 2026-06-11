export default function Footer() {
  return (
    <>
    <footer className="py-16 px-10 border-t border-white/5 bg-[#070707] text-[#F3EFE9] font-sans relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-start pb-12 border-b border-white/5">

        {/* Column 1: Contact Us */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-2xl text-white font-light tracking-wide text-center">
            Contact Us
          </h4>
          <div className="text-center text-[#F3EFE9]/60 font-light leading-relaxed flex flex-col gap-2">
            <p>Grote Markt 15 9060 Zelzate</p>
            <p>(East Flanders) Belgium</p>
            <p className="mt-2">+0468 06 80 91</p>
            <p>info@caferegina.be</p>
            <p className="mt-2">VAT BE 0768.703.620</p>
          </div>
        </div>

        {/* Column 2: Brand / Socials */}
        <div className="flex flex-col items-center gap-6">
          <h4 className="font-serif text-5xl text-cafe-gold tracking-[0.1em] uppercase font-bold">
            CAFE REGINA
          </h4>
          <p className="text-xs text-white font-light leading-relaxed text-center max-w-[280px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="w-16 h-[2px] bg-cafe-gold" />

          {/* Social Icons */}
          <div className="flex gap-6 text-[#F3EFE9]/60">
            <a href="#facebook" className="hover:text-cafe-gold transition-colors font-sans text-xs font-bold tracking-widest"><img src="/fb.png" alt="" /></a>
            <a href="#twitter"  className="hover:text-cafe-gold transition-colors font-sans text-xs font-bold tracking-widest"><img src="/tw.png" alt="" /></a>
            <a href="#instagram" className="hover:text-cafe-gold transition-colors font-sans text-xs font-bold tracking-widest"><img src="/ins.png" alt="" /></a>
          </div>
        </div>

        {/* Column 3: Opening Hours */}
        <div className="flex flex-col gap-4 items-center ">
          <h4 className="font-serif text-2xl text-white font-light tracking-wide ">
            Opening Hours
          </h4>
          <div className="text-center text-white/60 font-light leading-relaxed flex flex-col gap-3 font-medium text-xs">
            <div>
              <p className="text-white/60 uppercase tracking-wider">Monday–Friday:</p>
              <p className="text-white/60 mt-1 text-sm font-semibold">08:00 am – 12:00 am</p>
            </div>
            <div>
              <p className="text-white/60 uppercase tracking-wider ">Saturday–Sunday:</p>
              <p className="text-white/60 mt-1 text-sm font-semibold">07:00 am – 11:00 pm</p>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 flex justify-center text-[10px] tracking-widest uppercase text-[#F3EFE9]/30">
        <p>2024 Cafe Regina. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}
