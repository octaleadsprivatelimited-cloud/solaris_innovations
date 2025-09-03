import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  ChevronDown, 
  ChevronUp,
  HelpCircle,
  Lightbulb,
  Zap,
  Shield,
  DollarSign
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Solar Installation",
      icon: <Sun className="h-6 w-6" />,
      color: "from-yellow-400 to-orange-500",
      questions: [
        {
          question: "How long does solar panel installation take?",
          answer: "Residential installations typically take 1-3 days, commercial projects 3-7 days, and industrial installations 1-2 weeks depending on system size and complexity."
        },
        {
          question: "What is the warranty on solar panels?",
          answer: "Our solar panels come with a 25-year warranty on power output and a 10-year warranty on materials and workmanship. Inverters have a 5-10 year warranty."
        },
        {
          question: "Do I need to clean my solar panels?",
          answer: "Solar panels are self-cleaning to some extent, but we recommend cleaning them 2-4 times per year for optimal performance, especially in dusty areas."
        }
      ]
    },
    {
      title: "Cost & Savings",
      icon: <DollarSign className="h-6 w-6" />,
      color: "from-green-400 to-green-600",
      questions: [
        {
          question: "How much can I save with solar panels?",
          answer: "Most customers save 70-90% on their electricity bills. A typical 5kW residential system can save ₹6,000-₹10,000 per month depending on your current usage."
        },
        {
          question: "What is the government subsidy available?",
          answer: "The PM Solar Scheme provides up to ₹78,000 subsidy for residential installations. Commercial and industrial projects may qualify for accelerated depreciation benefits."
        },
        {
          question: "What is the payback period for solar panels?",
          answer: "With current electricity rates and subsidies, most solar installations pay for themselves in 3-5 years through electricity bill savings."
        }
      ]
    },
    {
      title: "Technical Questions",
      icon: <Zap className="h-6 w-6" />,
      color: "from-blue-400 to-blue-600",
      questions: [
        {
          question: "Will solar panels work during power cuts?",
          answer: "Grid-tied systems will shut off during power cuts for safety. If you need power during outages, consider adding a battery backup system."
        },
        {
          question: "How much space do I need for solar panels?",
          answer: "A 1kW system requires approximately 8-10 square meters of roof space. Most residential installations need 20-50 square meters depending on system size."
        },
        {
          question: "What happens on cloudy days?",
          answer: "Solar panels still generate electricity on cloudy days, though at reduced efficiency (typically 10-25% of full capacity). They work best in direct sunlight."
        }
      ]
    },
    {
      title: "Maintenance & Support",
      icon: <Shield className="h-6 w-6" />,
      color: "from-purple-400 to-purple-600",
      questions: [
        {
          question: "How often should I maintain my solar system?",
          answer: "We recommend annual professional maintenance including panel cleaning, system inspection, and performance monitoring. Basic cleaning can be done quarterly."
        },
        {
          question: "What if something goes wrong with my system?",
          answer: "We provide 24/7 support and maintenance. Most issues can be resolved remotely, and our technicians are available for on-site visits when needed."
        },
        {
          question: "Do solar panels require regular servicing?",
          answer: "Solar panels are very low-maintenance. Apart from occasional cleaning, they require minimal servicing. We provide comprehensive maintenance packages."
        }
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/blue-solar-photo-voltaic-panels-system-producing-renewable-clean-energy-rural-landscape-setting-sun_127089-3464.jpg?semt=ais_hybrid&w=740&q=80')`
        }}></div>
        
        {/* Dark Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-blue-900/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <HelpCircle className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto font-medium">
              Get answers to common questions about solar energy, installation, costs, and maintenance. 
              Everything you need to know about going solar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} text-white p-6`}>
                  <div className="flex items-center space-x-3">
                    {category.icon}
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                </div>
                
                {/* Questions */}
                <div className="p-6">
                  {category.questions.map((item, questionIndex) => {
                    const itemIndex = categoryIndex * 3 + questionIndex;
                    const isOpen = openItems.includes(itemIndex);
                    
                    return (
                      <div key={questionIndex} className="mb-4 last:mb-0">
                        <button
                          onClick={() => toggleItem(itemIndex)}
                          className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between"
                        >
                          <span className="font-medium text-gray-900 pr-4">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 p-4 bg-blue-50 rounded-lg"
                          >
                            <p className="text-gray-700 leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Lightbulb className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our solar experts are here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918019355353"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
              >
                <Zap className="mr-2 h-5 w-5" />
                Call Our Experts
              </a>
              <a
                href="https://wa.me/918019355353"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
