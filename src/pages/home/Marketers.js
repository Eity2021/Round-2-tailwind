import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import Vector from "../../image/works/Vector.png";

const testimonials = [
    { id: 1, name: "Jhon Stokes", role: "", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face", rating: 5, text: "I have been taking gym and fitness training here..." },
    { id: 2, name: "Jane Doe", role: "Client of SEO at ABC Agency", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face", rating: 5, text: "The mentors are so good and they train me very well." },
    { id: 3, name: "Mike Johnson", role: "Marketing Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face", rating: 5, text: "Amazing experience with this team! Highly recommended." },
    { id: 4, name: "Sarah Wilson", role: "Business Owner", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face", rating: 5, text: "Professional, reliable, and results-driven. Love it!" },
    { id: 5, name: "Jhon Stokes", role: "", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face", rating: 5, text: "I have been taking gym and fitness training here..." },
    { id: 6, name: "Jane Doe", role: "Client of SEO at ABC Agency", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face", rating: 5, text: "The mentors are so good and they train me very well." },

];

export default function Marketers() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [itemsPerView, setItemsPerView] = useState(1); // default mobile = 1

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerView(2); // desktop → 2 items
            } else {
                setItemsPerView(1); // mobile/tablet → 1 item
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Auto play
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                (prev + 1) % Math.ceil(testimonials.length / itemsPerView)
            );
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, itemsPerView]);

    const renderStars = (rating) =>
        Array.from({ length: 5 }, (_, i) => <Star key={i} color="#1C9876" size={20} />);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 7000);
    };

    return (
        <div className="bg-gradient-to-b from-white to-white dark:from-darkColorMode dark:to-darkColorMode py-20">
            <div className="w-full container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-[28px] sm:text-2xl  font-bold text-heading dark:text-white mb-2">
                        Loved By SEOs And Marketers
                    </h2>
                </div>

                {/* Slider wrapper */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`,
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className={`${itemsPerView === 2 ? "w-1/2" : "w-full"
                                    } flex-shrink-0  pb-8`}
                            >
                                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-md mx-2">
                                    {/* Stars */}
                                    <div className="flex items-center gap-1 mb-7">
                                        {renderStars(testimonial.rating)}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-paragraph dark:text-gray-300 text-sm leading-relaxed font-sans font-medium">
                                        "{testimonial.text}"
                                    </p>

                                    <div className="flex justify-end mt-4">
                                        <img src={Vector} alt="Vector" />
                                    </div>
                                </div>

                                {/* Author */}
                                <div className="flex items-center pt-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-base text-heading dark:text-white font-sans">
                                            {testimonial.name}
                                        </h4>
                                        {testimonial.role && (
                                            <p className="text-paragraph dark:text-gray-300 text-sm font-sans">
                                                {testimonial.role}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from(
                        { length: Math.ceil(testimonials.length / itemsPerView) },
                        (_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-8 h-[6px] rounded-full transition-all duration-300 ${index === currentSlide
                                    ? "bg-primary scale-110"
                                    : "bg-[#0BBE6461] hover:bg-gray-400"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
