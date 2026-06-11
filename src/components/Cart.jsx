import { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle, Ticket } from 'lucide-react';

export default function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const handleCheckout = () => {
    const randomNum = Math.floor(100 + Math.random() * 900);
    setTicketNumber(`REGINA-${randomNum}`);
    setCheckoutSuccess(true);
  };

  const handleCloseSuccess = () => {
    setCheckoutSuccess(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={checkoutSuccess ? handleCloseSuccess : onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        {/* Drawer Panel */}
        <div className="w-screen max-w-md bg-[#0F0F0F] text-white shadow-2xl flex flex-col justify-between border-l border-white/5 transform transition-transform duration-300 animate-slide-left">
          
          {checkoutSuccess ? (
            /* Success State */
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#0B0B0B]">
              <div className="p-4 bg-cafe-gold text-cafe-dark rounded-full mb-6 animate-scale-up">
                <CheckCircle className="w-12 h-12 stroke-[2.2]" />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-cafe-gold to-white">
                Order Received!
              </h3>
              <p className="font-sans text-sm text-[#F3EFE9]/70 max-w-xs mb-8 leading-relaxed">
                Your order has been transmitted directly to our barista. It will be ready at the counter in 5-10 minutes.
              </p>
              
              {/* Receipt Ticket Box */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full max-w-xs mb-10">
                <div className="flex items-center justify-center gap-2 text-cafe-gold mb-2">
                  <Ticket className="w-5 h-5" />
                  <span className="font-sans text-xs font-semibold tracking-widest uppercase">Order Ticket</span>
                </div>
                <div className="font-sans text-2xl font-black tracking-widest text-white mb-2">
                  {ticketNumber}
                </div>
                <div className="w-full border-t border-dashed border-white/10 my-4" />
                <div className="flex justify-between font-sans text-xs text-[#F3EFE9]/50">
                  <span>Regina Bar Counter</span>
                  <span>Est: 5-10 mins</span>
                </div>
              </div>

              <button
                onClick={handleCloseSuccess}
                className="w-full max-w-xs py-4 bg-cafe-gold hover:bg-cafe-goldHover text-cafe-dark font-sans font-semibold text-sm tracking-wider uppercase rounded-full shadow-lg transition-colors duration-300"
              >
                Done
              </button>
            </div>
          ) : (
            /* Cart Items / Main Drawer */
            <>
              {/* Header */}
              <div className="px-6 py-6 border-b border-white/5 flex items-center justify-between bg-black">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-5 h-5 text-cafe-gold" />
                  <h3 className="font-serif text-xl font-bold">Your Order Tray</h3>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/5 text-white hover:text-cafe-gold rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto py-6 px-6 space-y-6">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex gap-4 p-4 bg-[#161616] rounded-xl border border-white/5 hover:border-cafe-gold/20 shadow-sm transition-all"
                    >
                      {/* Detail Column */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="font-serif font-bold text-white text-base leading-tight">
                              {item.name}
                            </h4>
                            <span className="font-sans font-semibold text-cafe-gold text-sm ml-2">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                          <p className="font-sans text-xs text-[#F3EFE9]/50 mt-0.5">
                            ${item.price.toFixed(2)} each
                          </p>
                        </div>

                        {/* Controls Row */}
                        <div className="flex justify-between items-center mt-3">
                          {/* Quantity selector */}
                          <div className="flex items-center border border-white/10 rounded-md overflow-hidden bg-[#1E1E1E]">
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 hover:bg-white/5 text-[#F3EFE9]/70 hover:text-white transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 py-1 font-sans text-xs font-bold text-white bg-black">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 hover:bg-white/5 text-[#F3EFE9]/70 hover:text-white transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Trash button */}
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="p-1.5 text-white/40 hover:text-red-500 rounded hover:bg-white/5 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-60 py-12">
                    <ShoppingBag className="w-16 h-16 text-cafe-gold/50 stroke-[1.2] mb-4" />
                    <p className="font-serif text-lg font-bold text-white mb-1">Your tray is empty</p>
                    <p className="font-sans text-xs text-[#F3EFE9]/60 max-w-xs">
                      Add some items from our menu pages (Drinks or Small Hunger) to your tray.
                    </p>
                  </div>
                )}
              </div>

              {/* Summary Bottom Panel */}
              {cartItems.length > 0 && (
                <div className="px-6 py-6 border-t border-white/5 bg-black space-y-4">
                  <div className="space-y-2.5 font-sans text-sm text-[#F3EFE9]/70">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-medium text-white">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Tax (8%)</span>
                      <span className="font-medium text-white">${tax.toFixed(2)}</span>
                    </div>
                    <div className="w-full border-t border-white/10 my-1" />
                    <div className="flex justify-between text-base font-bold text-white">
                      <span>Total Order</span>
                      <span className="text-cafe-gold font-serif">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full py-4 bg-cafe-gold hover:bg-cafe-goldHover text-cafe-dark font-sans font-semibold text-sm tracking-wider uppercase rounded-full shadow-lg transition-all duration-300"
                  >
                    Place Order
                  </button>
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}
