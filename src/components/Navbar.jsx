import { useEffect, useState } from 'react';

export default function Navbar({ activePage, onNavigate, cartCount, onCartClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Drinks', id: 'drinks' },
    { name: 'Small Hunger', id: 'small-hunger' },
    { name: 'Suggestions', id: 'suggestions' },
    { name: 'Photos', id: 'photos' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent ${
      isScrolled ? 'py-3' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Custom CR Logo */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center text-[#F3EFE9] hover:opacity-85 transition-opacity"
        >
          <img src="/Logo.png" alt="Logo" className="w-24 h-24 object-contain" />
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-sans font-semibold text-[12px] tracking-[0.2em] uppercase transition-colors duration-250 relative group ${
                activePage === item.id 
                  ? 'text-white' 
                  : 'text-[#F3EFE9]/50 hover:text-white'
              }`}
            >
              {item.name}
              <span className={`absolute bottom-[-6px] left-0 h-[1px] bg-white transition-all duration-300 ${
                activePage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          ))}
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-end gap-1.5 w-[30px] h-[30px] z-50 relative"
          aria-label="Toggle Menu"
        >
          <span className={`w-[30px] h-[1.5px] bg-[#F3EFE9] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
          <span className={`w-[20px] h-[1.5px] bg-[#F3EFE9] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`w-[30px] h-[1.5px] bg-[#F3EFE9] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
        </button>
      
      </div>

      {/* Mobile Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full right-0 w-[30%] bg-[#0B0B0B]/95 border-l border-b border-white/5 backdrop-blur-lg animate-fade-in">
          <div className="flex flex-col py-4 px-6 gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-right py-2 font-sans font-medium text-xs tracking-wider uppercase border-b border-white/5 transition-colors ${
                  activePage === item.id ? 'text-white' : 'text-[#F3EFE9]/70'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
