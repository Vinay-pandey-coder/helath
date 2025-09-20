import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Your Trusted Online Pharmacy
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Get authentic medicines delivered to your doorstep. Browse our wide
            range of products and take care of your health with ease.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
              Shop Medicines
            </button>
            <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/image/hero.jpg"
            alt="Medicine"
            className="w-[300px] h-[400px] rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-800">Fast Delivery</h2>
          <p className="text-gray-600 mt-2">
            Receive your medicines quickly and safely at your doorstep.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Certified Products
          </h2>
          <p className="text-gray-600 mt-2">
            All our medicines are authentic and approved by health authorities.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-800">24/7 Support</h2>
          <p className="text-gray-600 mt-2">
            Our team is always available to answer your health queries.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
