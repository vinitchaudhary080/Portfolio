// src/components/projectdetails/projectdummy/Impact.jsx
import React from "react";

export default function Impact() {
  const data = [
    {
      value: "40%",
      label: "Reduction in analysis time",
    },
    {
      value: "25%",
      label: "Decrease in manual data errors",
    },
    {
      value: "30%",
      label: "Increase in user adoption within 1 month",
    },
    {
      value: "2×",
      label: "Faster trade execution speed",
    },
    {
      value: "4.7/5",
      label: "Average user satisfaction rating",
    },
    {
      value: "90%",
      label: "Retention rate after onboarding",
    },
  ];

  return (
    <section className="bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-6">Impact</h2>
      <p className="text-gray-400 text-base sm:text-lg mb-16 max-w-4xl">
        Since launch, the RA Dashboard has delivered measurable improvements for our traders:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
        {data.map((item, index) => (
          <div key={index}>
            <h3 className="text-3xl sm:text-4xl font-semibold mb-2">
              {item.value}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
