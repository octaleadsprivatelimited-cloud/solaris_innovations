import React, { useState } from 'react';
import { Sun, Calculator as CalculatorIcon, Zap, Phone, MessageCircle } from 'lucide-react';

const Calculator: React.FC = () => {
  const [monthlyBill, setMonthlyBill] = useState('');
  const [propertyType, setPropertyType] = useState('residential');
  const [result, setResult] = useState<any>(null);

  const calculateSavings = () => {
    const bill = parseFloat(monthlyBill);
    if (!bill) return;

    // Calculate system size (rough estimate)
    const systemSize = Math.ceil(bill / 1000); // 1kW per ₹1000 monthly bill
    
    // Cost calculations (2024 rates)
    const systemCost = systemSize * 1000 * 75; // ₹75 per watt
    
    // Subsidy calculation (PM Surya Ghar scheme)
    const subsidyRates = { residential: 0.40, commercial: 0.20, industrial: 0.10 };
    const subsidy = Math.min(systemCost * subsidyRates[propertyType as keyof typeof subsidyRates], 78000);
    const netCost = systemCost - subsidy;
    
    // Savings
    const monthlySavings = bill * 0.85;
    const yearlySavings = monthlySavings * 12;
    const paybackPeriod = netCost / yearlySavings;
    
    setResult({
      systemSize,
      systemCost,
      subsidy,
      netCost,
      monthlySavings,
      yearlySavings,
      paybackPeriod
    });
  };

  return (
    <div className="pt-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/blue-solar-photo-voltaic-panels-system-producing-renewable-clean-energy-rural-landscape-setting-sun_127089-3464.jpg?semt=ais_hybrid&w=740&q=80')`
        }}></div>
        
        {/* Dark Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-blue-900/70"></div>
        
        <div className="relative z-10">
          <Sun className="h-20 w-20 mx-auto mb-6 text-yellow-300 animate-pulse" />
          <h1 className="text-5xl font-bold mb-4">Solar Cost Calculator</h1>
          <p className="text-xl text-white max-w-3xl mx-auto font-medium">
            Calculate your solar installation costs, savings, and government subsidies
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <CalculatorIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900">Calculate Your Savings</h2>
                <p className="text-gray-600">Get accurate estimates with latest subsidies</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Electricity Bill (₹)
                  </label>
                  <input
                    type="number"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your monthly bill"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['residential', 'commercial', 'industrial'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setPropertyType(type)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          propertyType === type
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="capitalize">{type}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={calculateSavings}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105"
                >
                  <Zap className="inline h-5 w-5 mr-2" />
                  Calculate Savings
                </button>
              </div>

              {/* Subsidy Info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Latest Subsidies (2024-25)</h4>
                <div className="text-sm text-blue-800 space-y-1">
                  <div>• PM Surya Ghar: Up to ₹78,000</div>
                  <div>• PM KUSUM: Up to ₹1,00,000</div>
                  <div>• State Subsidies: Additional benefits</div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {!result ? (
                <div className="text-center py-12">
                  <Sun className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Enter your details to calculate savings
                  </h3>
                  <p className="text-gray-500">
                    Get accurate estimates including government subsidies
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                      <div className="text-2xl font-bold text-green-700 mb-1">
                        {result.systemSize} kW
                      </div>
                      <div className="text-sm text-green-600">System Size</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200">
                      <div className="text-2xl font-bold text-blue-700 mb-1">
                        ₹{result.subsidy.toLocaleString()}
                      </div>
                      <div className="text-sm text-blue-600">Subsidy</div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg text-center border border-yellow-200">
                      <div className="text-2xl font-bold text-yellow-700 mb-1">
                        ₹{result.netCost.toLocaleString()}
                      </div>
                      <div className="text-sm text-yellow-600">Your Cost</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-200">
                      <div className="text-2xl font-bold text-purple-700 mb-1">
                        ₹{result.yearlySavings.toLocaleString()}
                      </div>
                      <div className="text-sm text-purple-600">Yearly Savings</div>
                    </div>
                  </div>

                  {/* Detailed Results */}
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">System Cost:</span>
                      <span className="font-semibold">₹{result.systemCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Payback Period:</span>
                      <span className="font-semibold">{result.paybackPeriod.toFixed(1)} years</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Monthly Savings:</span>
                      <span className="font-semibold text-green-600">₹{result.monthlySavings.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white text-center">
                    <h3 className="text-xl font-bold mb-3">Ready to Go Solar?</h3>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href="tel:+919332777888"
                        className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        <Phone className="inline h-4 w-4 mr-2" />
                        Call Now: +91 9332-777-888
                      </a>
                      <a
                        href="/contact"
                        className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                      >
                        <MessageCircle className="inline h-4 w-4 mr-2" />
                        Get Free Quote
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
