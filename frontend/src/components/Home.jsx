import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
          radial-gradient(
            circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(238, 242, 255, 0.8) 0%,
            rgba(219, 234, 254, 0.6) 10%,
            rgba(199, 210, 254, 0.4) 25%,
            rgba(249, 250, 251, 0.1) 50%
          ),
          linear-gradient(90deg, 
            rgba(238, 242, 255, 0.5) ${mousePosition.x - 30}%, 
            rgba(219, 234, 254, 0.3) ${mousePosition.x}%,
            rgba(238, 242, 255, 0.5) ${mousePosition.x + 30}%
          ),
          linear-gradient(180deg,
            #ffffff,
            #f8fafc
          )
        `
      }}
    >
      <Navbar />
      
      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.4 }}
        className="py-12"
      >
        <CategoryCarousel />
      </motion.div>

      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.6 }}
        className="py-12 bg-gray-50"
      >
        <LatestJobs />
      </motion.div>

      {/* New How It Works Section */}
      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.5 }}
        className="py-16 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-1/4 w-3/4 h-0.5 bg-blue-200 -z-10" />
            
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold mb-2">Create Profile</h3>
                <p className="text-gray-600">Build your professional profile with skills and experience</p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold mb-2">Explore Jobs</h3>
                <p className="text-gray-600">Browse through thousands of relevant job opportunities</p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold mb-2">Apply & Track</h3>
                <p className="text-gray-600">Submit applications and track your progress</p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold mb-2">Get Hired</h3>
                <p className="text-gray-600">Land your dream job and start your new journey</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* New Featured Industries Section */}
      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.6 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Industries
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: 'Technology', icon: '💻', jobs: '5,234', color: 'blue' },
              { title: 'Healthcare', icon: '🏥', jobs: '3,456', color: 'green' },
              { title: 'Finance', icon: '💰', jobs: '2,789', color: 'purple' },
              { title: 'Education', icon: '📚', jobs: '1,890', color: 'yellow' },
              { title: 'Marketing', icon: '📢', jobs: '2,345', color: 'pink' },
              { title: 'Engineering', icon: '⚙️', jobs: '4,567', color: 'indigo' },
              { title: 'Design', icon: '🎨', jobs: '1,678', color: 'red' },
              { title: 'Sales', icon: '🤝', jobs: '3,234', color: 'orange' },
            ].map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-${industry.color}-50 p-6 rounded-xl shadow-sm cursor-pointer`}
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
                <p className="text-gray-600">{industry.jobs} open positions</p>
                <div className="mt-4">
                  <Link to="/browse" className="text-sm text-blue-600 hover:text-blue-800">
                    Browse Jobs →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* New Job Seeker Benefits Section */}
      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.7 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits for Job Seekers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">
                Premium Features 
                <span className="ml-2 text-sm font-medium px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                  Upcoming
                </span>
              </h3>
              <ul className="space-y-4">
                {[
                  'Early access to new job postings',
                  'AI-powered job recommendations',
                  'Resume builder and review',
                  'Interview preparation tools',
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">
                Career Resources 
                <span className="ml-2 text-sm font-medium px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                  Upcoming
                </span>
              </h3>
              <ul className="space-y-4">
                {[
                  'Professional development courses',
                  'Career coaching sessions',
                  'Networking events',
                  'Industry insights and reports',
                ].map((resource, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{resource}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.8 }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  )
}

export default Home