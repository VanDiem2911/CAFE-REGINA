import { ArrowLeft } from 'lucide-react';

export default function EventPage({ image, onNavigate }) {
  const displayImage = image || '/Rectangle 62.png';

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F3EFE9] pt-32 pb-20 selection:bg-cafe-gold selection:text-cafe-dark">
      {/* Back to Home Button Section */}
      <div className="w-full border-t border-b border-white/10 py-8 mb-16 flex justify-center px-6">
        <button
          onClick={() => onNavigate('home')}
          className="group flex items-center gap-4 text-cafe-gold hover:text-white transition-colors duration-300"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cafe-gold/60 transition-colors group-hover:border-white">
            <ArrowLeft className="h-4 w-4" />
          </div>
          <span className="h-px w-16 bg-cafe-gold/60 transition-colors group-hover:bg-white" />
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] uppercase">
            BACK TO HOME
          </span>
        </button>
      </div>

      {/* Main Content: Two Columns */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-12 lg:gap-20 items-start">
          {/* Left Column: Arched Image */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="w-full max-w-[450px] aspect-[3/4] overflow-hidden rounded-t-full border border-white/5">
              <img
                src={displayImage}
                alt="Event Detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Description */}
          <div className="flex flex-col text-left pt-2 lg:pt-6">
            <span className="text-cafe-gold font-sans text-[11px] font-bold tracking-[0.25em] uppercase mb-4 block">
              16 APR 2021
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide leading-tight mb-8">
              Lorem Ipsum is simply dummy text
            </h2>
            <div className="flex flex-col gap-6 text-[#F3EFE9]/70 font-sans text-xs md:text-sm font-light leading-relaxed font-medium">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
