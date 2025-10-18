import { motion } from 'motion/react';
import { Sparkles, BarChart3, TrendingUp } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--alabaster)] via-[var(--gray-50)] to-[var(--sage)] to-opacity-20 flex items-center justify-center">
      <div className="text-center space-y-8 max-w-md px-6">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-[var(--caribbean)] to-[var(--sage)] rounded-2xl flex items-center justify-center shadow-2xl">
            <Sparkles className="h-12 w-12 text-white" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl text-[var(--licorice)] mb-2">
            Analyzing Your Infrastructure
          </h2>
          <p className="text-[var(--gray-600)]">
            Processing your responses with our proprietary Three Symbioses™ framework
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-4"
        >
          {[
            { icon: BarChart3, text: 'Calculating maturity scores', delay: 0.5 },
            { icon: TrendingUp, text: 'Generating personalized recommendations', delay: 1 },
            { icon: Sparkles, text: 'Building your 90-day roadmap', delay: 1.5 },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: step.delay, duration: 0.5 }}
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[var(--gray-200)]"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ delay: step.delay, duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <step.icon className="h-5 w-5 text-[var(--caribbean)]" />
              </motion.div>
              <span className="text-[var(--gray-700)]">{step.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="relative h-2 bg-[var(--gray-200)] rounded-full overflow-hidden"
        >
          <motion.div
            className="absolute top-0 left-0 h-full progress-gradient"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </div>
  );
}
