import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import Vector from "../../image/works/Vector.png"
const testimonials = [
    {
        id: 1,
        name: "Jhon Stokes",
        role: "",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
        rating: 5,
        text: "I have been taking gym and fitness training here since a long time and I found here so much easy, comfort and flexibility. The mentors are so good and they train me very well."
    },
    {
        id: 2,
        name: "Jane Doe",
        role: "Client of SEO at ABC Agency",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
        rating: 5,
        text: "I have been taking gym and fitness training here since a long time and I found here so much easy, comfort and flexibility. The mentors are so good and they train me very well."
    },
    {
        id: 3,
        name: "Mike Johnson",
        role: "Marketing Director",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
        rating: 5,
        text: "Amazing experience with this team! They provided excellent service and support throughout the entire process. Highly recommended for anyone looking for quality results."
    },
    {
        id: 4,
        name: "Sarah Wilson",
        role: "Business Owner",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
        rating: 5,
        text: "Professional, reliable, and results-driven. I couldn't be happier with the outcomes. The team exceeded my expectations in every way possible."
    }
];


export default function Marketers() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);


    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star color="#1C9876" size={20} />
        ));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        // Resume auto-play after 5 seconds
        setTimeout(() => setIsAutoPlaying(true), 7000);
    };

    // const nextSlide = () => {
    //     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    //     setIsAutoPlaying(false);
    //     setTimeout(() => setIsAutoPlaying(true), 5000);
    // };

    // const prevSlide = () => {
    //     setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    //     setIsAutoPlaying(false);
    //     setTimeout(() => setIsAutoPlaying(true), 5000);
    // };

    // Calculate which testimonials to show based on screen size and current slide
    // const getVisibleTestimonials = () => {
    //     const items = [];
    //     for (let i = 0; i < 2; i++) {
    //         const index = (currentSlide + i) % testimonials.length;
    //         items.push(testimonials[index]);
    //     }
    //     return items;
    // };



    return (
        <div className='bg-gradient-to-b from-white to-white dark:from-darkColorMode dark:to-darkColorMode py-80'>
            <div className="w-full container mx-auto px-4 py-12 ">
                <div className="text-center mb-12">
                    <h2 className="text-xl md:text-2xl font-bold text-heading dark:text-white mb-2">
                        Loved By SEOs And Marketers
                    </h2>
                </div>
                <div className="relative">

                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentSlide * (100 / testimonials.length)}%)`
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id} className="w-full md:w-1/2 flex-shrink-0 px-4 pb-24">
                                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-md  h-full mx-2">
                                        {/* Stars */}
                                        <div className="flex items-center gap-1 mb-7">
                                            {renderStars(testimonial.rating)}
                                        </div>

                                        {/* Quote */}
                                        <div className="">
                                            <p className="text-paragraph dark:text-gray-300 text-sm leading-relaxed font-sans font-medium">
                                                "{testimonial.text}"
                                            </p>
                                        </div>

                                        <div className='flex justify-end'>
                                            <img src={Vector} alt="Vector" />
                                        </div>

                                    </div>

                                    <div className="flex items-center pt-10">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                        />
                                        <div>
                                            <h4 className="font-semibold text-base text-heading dark:text-white  font-sans">
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
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-8 h-[6px] transition-all duration-300 ${index === currentSlide
                                    ? 'bg-primary scale-110'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}


{/* Author */ }
