import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

export default function Contact({ onNavigate }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        emailAddress: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Will do feedback As fast as we can!");
        setFormData({
            firstName: "",
            lastName: "",
            mobileNumber: "",
            emailAddress: "",
            message: ""
        });
    };

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
                            Contact cafe <br /> Regina
                        </h2>
                        <button
                            onClick={() => onNavigate?.('drinks')}
                            className="group flex items-center gap-4 mt-10 text-cafe-gold hover:text-white transition-colors duration-300"
                        >
                            <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-bold">
                                VIEW MENU
                            </span>
                            <div className="w-20 h-px bg-cafe-gold/60 group-hover:bg-white transition-colors" />
                            <div className="w-8 h-8 rounded-full border border-cafe-gold/60 flex items-center justify-center group-hover:border-white transition-colors">
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                        </button>
                    </ScrollReveal>

                    {/* Right — description */}
                    <ScrollReveal direction="right" className="lg:-ml-[250px] xl:-ml-[200px] 2xl:-ml-[200px]">
                        <p className="font-serif text-5xl text-sm lg:text-[16px] text-[#F3EFE9]/60 font-light leading-relaxed lg:pt-[120px]">
                            You will always have a good time at Café Regina in Zelzate ! You can enjoy an extensive drinks menu here , but you are also in the right place if you are hungry . You will also find some tasty weekend suggestions here ! So don't hesitate to contact us by telephone or email or just drop by.
                        </p>
                        <p className="font-serif text-5xl text-sm lg:text-[16px] text-[#F3EFE9]/60 font-light leading-relaxed lg:pt-[20px]">
                            You will also find many other things on this website. Here you will find nice atmospheric photos , a guestbook  with customer responses and a newsletter  so that you can stay informed of the latest news and special offers.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            {/* CONTACT FORM */}
            <div
                className="w-full bg-cover bg-center bg-no-repeat py-20 px-6 border-b border-white/5 relative z-10"
                style={{ backgroundImage: `url('/bg3.png')` }}
            >
                <ScrollReveal direction="up" className="max-w-4xl mx-auto border border-white/10 bg-[#0C0C0C]/80 backdrop-blur-md p-10 md:p-16 text-center shadow-2xl">
                    <h3 className="font-serif text-4xl md:text-5xl text-[#DCCA87] tracking-wide mb-3 font-normal">
                        Contact Us
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-[#F3EFE9]/60 font-light mb-10">
                        Will do feedback As fast as we can!
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl mx-auto w-full text-left">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="w-full px-6 py-4 bg-[#080808]/80 border border-white/10 text-white font-sans text-sm placeholder-white/30 focus:outline-none focus:border-cafe-gold transition-colors rounded-none"
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="w-full px-6 py-4 bg-[#080808]/80 border border-white/10 text-white font-sans text-sm placeholder-white/30 focus:outline-none focus:border-cafe-gold transition-colors rounded-none"
                                required
                            />
                        </div>

                        <input
                            type="text"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            placeholder="Mobile NUmber"
                            className="w-full px-6 py-4 bg-[#080808]/80 border border-white/10 text-white font-sans text-sm placeholder-white/30 focus:outline-none focus:border-cafe-gold transition-colors rounded-none"
                            required
                        />

                        <input
                            type="email"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="w-full px-6 py-4 bg-[#080808]/80 border border-white/10 text-white font-sans text-sm placeholder-white/30 focus:outline-none focus:border-cafe-gold transition-colors rounded-none"
                            required
                        />

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="w-full h-40 px-6 py-4 bg-[#080808]/80 border border-white/10 text-white font-sans text-sm placeholder-white/30 focus:outline-none focus:border-cafe-gold transition-colors rounded-none resize-none"
                            required
                        />

                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="px-12 py-4 bg-[#DCCA87] hover:bg-[#C5B37C] text-[#0C0C0C] font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 active:scale-95 rounded-none"
                            >
                                SEND
                            </button>
                        </div>
                    </form>
                </ScrollReveal>
            </div>
        </div>
    );
}