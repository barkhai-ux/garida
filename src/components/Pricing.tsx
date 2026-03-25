export default function Pricing() {
  const plans = [
    {
      name: "1 Month",
      price: "$3.99",
      period: "/month",
      features: [
        "Spotify Premium upgrade",
        "Ad-free listening",
        "Offline downloads",
        "Unlimited skips",
        "High quality audio",
      ],
      popular: false,
    },
    {
      name: "6 Months",
      price: "$2.49",
      period: "/month",
      features: [
        "Everything in 1 Month",
        "Priority support",
        "Instant activation",
        "Family plan available",
        "Save 37%",
      ],
      popular: true,
    },
    {
      name: "Lifetime",
      price: "$19.99",
      period: "one-time",
      features: [
        "Everything in 6 Months",
        "Lifetime access",
        "Free re-upgrades",
        "VIP support",
        "Best value",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose your plan
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Simple, transparent pricing. Pick the plan that works best for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card rounded-2xl p-8 relative transition-all duration-300 hover:shadow-lg ${
                plan.popular
                  ? "ring-2 ring-green-500 shadow-lg shadow-green-100"
                  : "hover:shadow-gray-200/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-500">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full text-sm font-medium transition-colors ${
                  plan.popular
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "bg-white/80 text-gray-900 border border-gray-200 hover:bg-white"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
