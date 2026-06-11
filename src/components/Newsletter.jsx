import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      className="relative w-full bg-cover bg-center bg-fixed text-[#F3EFE9] font-sans"
      style={{ backgroundImage: `url('/Group 8723.png')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20">

        {/* Stay informed heading */}
        <h2 className="font-serif text-4xl md:text-5xl font-light italic text-white mb-5 tracking-wide">
          Stay informed
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-sm text-[#F3EFE9]/65 font-light leading-relaxed mb-14">
          Stay up to date with everything that happens at Café Regina! This business believes it is
          important to keep its valued guests informed of news, events and special offers. You can
          always find all the latest news in the newsletter, so be sure to take a look.
        </p>

        {/* Newsletter card */}
        <div className="w-full max-w-3xl border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm px-8 md:px-16 py-12">
          {/* Label */}
          <p
            className="font-cinzel text-[11px] tracking-[0.3em] uppercase text-cafe-gold mb-4"
          >
            Newsletter
          </p>

          {/* Big heading */}
          <h3 className="font-cormorant text-4xl md:text-5xl text-white font-normal mb-3 leading-tight">
            Subscribe To Our Newsletter
          </h3>

          <p className="font-sans text-xs text-[#F3EFE9]/55 mb-8 tracking-wide">
            And never miss latest Updates!
          </p>

          {/* Form */}
          {submitted ? (
            <p className="font-sans text-sm text-cafe-gold tracking-wide py-4">
              ✓ Thank you for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="flex-1 bg-transparent border border-white/25 px-5 py-3.5 text-sm text-white placeholder-white/35 font-sans focus:outline-none focus:border-cafe-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-cafe-gold text-cafe-dark font-sans text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-white transition-colors duration-300 shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
