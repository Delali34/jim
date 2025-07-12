"use client";
import React, { useState, useEffect } from "react";

const WeddingOrderOfService = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    // Add custom animations styles only on client side
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideDown {
        from { opacity: 0; transform: translateY(-30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes slideLeft {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      
      @keyframes slideRight {
        from { opacity: 0; transform: translateX(50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-fadeIn {
        animation: fadeIn 1s ease-out;
      }
      
      .animate-slideDown {
        animation: slideDown 1s ease-out 0.2s both;
      }
      
      .animate-slideLeft {
        animation: slideLeft 1s ease-out 0.4s both;
      }
      
      .animate-slideRight {
        animation: slideRight 1s ease-out 0.6s both;
      }
      
      .animate-fadeInUp {
        animation: fadeInUp 1s ease-out 0.8s both;
      }
    `;
    document.head.appendChild(style);

    const timer1 = setTimeout(() => setAnimationStep(1), 500);
    const timer2 = setTimeout(() => setAnimationStep(2), 1500);
    const timer3 = setTimeout(() => setAnimationStep(3), 2500);
    const timer4 = setTimeout(() => setAnimationStep(4), 3500);
    const timer5 = setTimeout(() => setShowWelcome(false), 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      // Clean up style element
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  if (showWelcome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Floating petals */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-4 h-4 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-70 transition-all duration-[4000ms] ${
                animationStep >= 1 ? "animate-pulse" : ""
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                transform:
                  animationStep >= 1
                    ? `translateY(-${Math.random() * 100}px) rotate(${
                        Math.random() * 360
                      }deg)`
                    : "translateY(0) rotate(0)",
              }}
            />
          ))}

          {/* Sparkle effects */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`star-${i}`}
              className={`absolute text-yellow-200 transition-all duration-1000 ${
                animationStep >= 2
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-0"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                animationDelay: `${Math.random() * 1}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>

        {/* Welcome content */}
        <div className="text-center z-10 relative">
          {/* Hearts animation */}
          <div
            className={`text-8xl mb-8 transition-all duration-1000 ${
              animationStep >= 1
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-0 rotate-180"
            }`}
          >
            <span className="text-red-400 animate-pulse">💕</span>
          </div>

          {/* Welcome text */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              animationStep >= 2
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-6xl font-serif text-white mb-4 bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
              Welcome
            </h1>
            <p className="text-2xl text-yellow-100 mb-8 font-light">
              to the Wedding Celebration of
            </p>
          </div>

          {/* Couple names with special animation */}
          <div
            className={`transition-all duration-1000 delay-1000 ${
              animationStep >= 3
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-90"
            }`}
          >
            <div className="text-4xl font-serif text-white mb-2 bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent animate-pulse">
              Jim Hennam Odoi
            </div>
            <div className="text-3xl text-yellow-200 mb-2 font-light">&</div>
            <div className="text-4xl font-serif text-white mb-8 bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent animate-pulse">
              Mem Adabea Anah
            </div>
          </div>

          {/* Date and final message */}
          <div
            className={`transition-all duration-1000 delay-1500 ${
              animationStep >= 4
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-xl text-yellow-100 mb-4">
              Saturday, 12th July 2025
            </div>
            <div className="text-lg text-white opacity-80">
              Preparing your order of service...
            </div>

            {/* Loading animation */}
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-yellow-200 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Radial gradient overlay for dramatic effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-900/20 to-purple-900/60 pointer-events-none" />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slideDown">
          <h1 className="text-3xl font-serif mb-4 bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
            Jim Hennam Odoi & Mem Adabea Anah Wedding
          </h1>
          <div className="text-lg opacity-90 mb-4">Order of Service</div>
          <div className="text-base opacity-80">Saturday | 12 July | 2025</div>
          <div className="text-base opacity-80">
            MC: Miss Esther Asuming-Brempong
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Order of Service */}
          <div className="space-y-8 animate-slideLeft">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="text-3xl font-serif mb-8 text-center bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                Order of Service
              </h2>

              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="text-sm font-medium">
                    1. Arrival of Guests
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="text-sm font-medium">
                    2. Opening Prayer - Bro. Wisdom Amet
                  </span>
                  <span className="text-xs opacity-70">12:00pm - 12:03pm</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="text-sm font-medium">
                    3. Praise and Worship - Team Manuel
                  </span>
                  <span className="text-xs opacity-70">12:03pm - 12:18pm</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="text-sm font-medium">
                    4. Arrival of Bridal Party - Audio
                  </span>
                  <span className="text-xs opacity-70">12:18pm - 12:23pm</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="text-sm font-medium">
                    5. Declaration of Purpose - Mrs Patricia Tengey
                  </span>
                  <span className="text-xs opacity-70">12:23pm - 12:25pm</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="text-sm font-medium">
                    6. Song Ministration - Team Manuel
                  </span>
                  <span className="text-xs opacity-70">12:25pm - 12:30pm</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="text-sm font-medium">
                    7. Sermon - Aps. Prof. Asuming-Brempong
                  </span>
                  <span className="text-xs opacity-70">12:30pm - 12:50pm</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="text-sm font-medium">
                    8. First Offertory (For Church) Mc
                  </span>
                  <span className="text-xs opacity-70">12:50pm - 12:55pm</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="text-sm font-medium">
                    9. Exchange of Vows - Aps. Dr. K.E Hogan
                  </span>
                  <span className="text-xs opacity-70">12:55pm - 1:15pm</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="text-sm font-medium">
                    10. Prayer for Couple - Aps R.K Adanu
                  </span>
                  <span className="text-xs opacity-70">1:15pm - 1:20pm</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="text-sm font-medium">
                    11. Signing of Certificate - Parents
                  </span>
                  <span className="text-xs opacity-70">1:20pm - 1:25pm</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="text-sm font-medium">
                    12. Second Offertory (For Couple) Mc
                  </span>
                  <span className="text-xs opacity-70">1:25pm - 1:30pm</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="text-sm font-medium">
                    13. Presentation of Marriage Certificate - Mama Doris Adanu
                  </span>
                  <span className="text-xs opacity-70">1:35pm - 1:40pm</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="text-sm font-medium">
                    14. Champagne Pop/Toast
                  </span>
                  <span className="text-xs opacity-70">1:40pm - 1:45pm</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="text-sm font-medium">
                    15. Cutting of Cake - Mrs. Paulina Ansah
                  </span>
                  <span className="text-xs opacity-70">1:45pm - 1:50pm</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="text-sm font-medium">
                    16. Announcements - Mc
                  </span>
                  <span className="text-xs opacity-70">1:50pm - 1:55pm</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="text-sm font-medium">
                    17. Thanksgiving & Appreciation - Mr. Emmanuel Tsormey
                  </span>
                  <span className="text-xs opacity-70">1:55pm - 2:00pm</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    18. Blessing/Benediction - Aps. Dr. S.V. Ansah
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Photography Order & Officials */}
          <div className="space-y-8 animate-slideRight">
            {/* Photography Order */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="text-2xl font-serif mb-6 text-center bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                Photography Order
              </h2>
              <div className="text-center mb-6">
                <div className="text-lg font-medium">Time: 2pm</div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    1
                  </span>
                  <span>Officiating ministers with the couple</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    2
                  </span>
                  <span>Counsellors with the couple</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    3
                  </span>
                  <span>Ministers with couple</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    4
                  </span>
                  <span>Parents of the Bride with couple</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    5
                  </span>
                  <span>Parents of the Groom with couple</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    6
                  </span>
                  <span>Family of the Groom with couple</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    7
                  </span>
                  <span>Family of the Bride with couple</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    8
                  </span>
                  <span>Family of Groom and Bride</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    9
                  </span>
                  <span>Groom's Men & Bridal Team with couple</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    10
                  </span>
                  <span>Protocol Team with couple</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    11
                  </span>
                  <span>NAVAC Executives</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    12
                  </span>
                  <span>NACHEC</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    13
                  </span>
                  <span>Bride Assembly</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    14
                  </span>
                  <span>Triumphant Temple</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    15
                  </span>
                  <span>GCCI</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    16
                  </span>
                  <span>Friends of the Groom</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    17
                  </span>
                  <span>Friends of the Bride</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    18
                  </span>
                  <span>Staff of J.G. Knol Technical Institute</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    19
                  </span>
                  <span>Staff of Sparkling Stars International</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    20
                  </span>
                  <span>HTU Alumni</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    21
                  </span>
                  <span>Kpesec old students</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    22
                  </span>
                  <span>University of Ghana Alumni</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-yellow-200 text-purple-900 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    23
                  </span>
                  <span>Krobo Girls Alumni</span>
                </div>
              </div>
            </div>

            {/* Officials */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="text-2xl font-serif mb-6 text-center bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                Officiating Ministers
              </h2>

              <div className="space-y-3 text-sm">
                <div className="text-center font-medium">
                  Aps. Dr. K.E. Hagan
                </div>
                <div className="text-center font-medium">
                  Aps. Prof. Asumeng Brempong
                </div>
                <div className="text-center font-medium">Aps. R.K. Adanu</div>
                <div className="text-center font-medium">
                  Aps. Dr. S.V. Ansah
                </div>
                <div className="text-center font-medium">
                  Rev. Benson Ankody
                </div>
              </div>
            </div>

            {/* Counsellors */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="text-2xl font-serif mb-6 text-center bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                Counsellors
              </h2>

              <div className="space-y-3 text-sm">
                <div className="text-center font-medium">
                  Aps. Dr. K.E. Hagan
                </div>
                <div className="text-center font-medium">
                  Rev. Benson Ankody
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-lg font-serif bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent animate-fadeInUp">
          GOD BLESS YOU
        </div>
      </div>
    </div>
  );
};

export default WeddingOrderOfService;
