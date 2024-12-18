import React, {useEffect, useState} from "react";
import reviewsData from "../data/reviews.json";

import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io";


const ReviewsSection = () => {
    const [reviews, setReviews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setReviews(reviewsData);
    }, []);

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    }

    return (
        <div className="bg-teal-900 text-white py-12 px-6 text-center min-h-[60vh] flex flex-col justify-between">
            <h2 className="text-4xl font-bold mb-8">Top Reviews</h2>
            {reviews.length > 0 && (
                <div className="flex flex-col items-center">
                    <div
                        className="bg-gradient-to-r from-pink-400 to-purple-400 p-6 rounded-md shadow-lg mb-8 max-w-3xl">
                        <p className="text-lg leading-relaxed mb-4">
                            &ldquo;{reviews[currentIndex].response}&rdquo;
                        </p>
                        <p className="font-semibold">
                            {reviews[currentIndex].name} <span
                            className="text-sm text-gray-300">({reviews[currentIndex].location})</span>
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <button
                            className="text-white text-2xl p-2 hover:scale-110 transition-transform"
                            onClick={prevReview}
                        >
                            <IoIosArrowDropleftCircle className="text-[3rem]"/>
                        </button>
                        <div className="flex space-x-4">
                            {reviews.map((review, index) => (
                                <img
                                    key={review.id}
                                    src={review.image}
                                    alt={review.name}
                                    className={`h-16 w-16 rounded-full border-2 cursor-pointer transition-transform duration-300 ${
                                        index === currentIndex
                                            ? "border-white scale-125"
                                            : "border-gray-500 opacity-60"
                                    }`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                        <button
                            className="text-white text-2xl p-2 hover:scale-110 transition-transform"
                            onClick={nextReview}
                        >
                            <IoIosArrowDroprightCircle className="text-[3rem]"/>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ReviewsSection