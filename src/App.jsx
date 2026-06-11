import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Drink from './pages/Drink';
import SmallHunger from './pages/Small_huger';
import Suggestions from './pages/Suggestions';
import Photos from './pages/Photos';
import Contact from './pages/Contact';
import Cart from './components/Cart';
import About from './pages/About';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import EventPage from './pages/EventPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [selectedEventImage, setSelectedEventImage] = useState('/Rectangle 62.png');

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return (
          <Home 
            onNavigate={handleNavigate} 
            onSelectEvent={(imgSrc) => setSelectedEventImage(imgSrc)} 
          />
        );
      case 'drinks':
        return <Drink onNavigate={handleNavigate} />;
      case 'small-hunger':
        return <SmallHunger onNavigate={handleNavigate} />;
      case 'suggestions':
        return <Suggestions onNavigate={handleNavigate} />;
      case 'photos':
        return <Photos onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate}/>;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'eventpage':
        return <EventPage image={selectedEventImage} onNavigate={handleNavigate} />;
      default:
        return (
          <Home 
            onNavigate={handleNavigate} 
            onSelectEvent={(imgSrc) => setSelectedEventImage(imgSrc)} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-between selection:bg-cafe-gold selection:text-cafe-dark">
      {/* Sticky Dark Navigation Header */}
      <Navbar 
        activePage={activePage} 
        onNavigate={handleNavigate} 
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Primary Section Content */}
      <main className="flex-1">
        {renderActivePage()}
      </main>
      <Footer />
    </div>
  );
}
