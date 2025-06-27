import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "month",
      description: "Perfect for homeowners and small projects",
      features: [
        "10 AI-generated designs per month",
        "Basic 3D visualization", 
        "Standard resolution downloads",
        "Email support",
        "Commercial license"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "month", 
      description: "Ideal for interior designers and architects",
      features: [
        "50 AI-generated designs per month",
        "Advanced 3D visualization",
        "High-resolution downloads",
        "Priority support",
        "Commercial license",
        "Custom style training",
        "Collaboration tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For agencies and large-scale projects",
      features: [
        "Unlimited AI-generated designs",
        "Premium 3D visualization",
        "Ultra-high resolution downloads",
        "24/7 dedicated support",
        "Extended commercial license",
        "Custom AI model training",
        "White-label solution",
        "API access"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your design needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-amber-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                    {plan.period && (
                      <span className="text-slate-600 ml-2">/{plan.period}</span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-amber-500 text-white hover:bg-amber-600' 
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <button className="text-amber-600 hover:text-amber-700 font-medium">
            Compare all features →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;