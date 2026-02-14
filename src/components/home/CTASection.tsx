import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-secondary" />
      
      {/* Decorative animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-secondary-foreground/10 backdrop-blur-xl border border-secondary-foreground/20 rounded-full px-5 py-2 text-sm font-semibold text-secondary-foreground">
              ✨ Limited Time Offer
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of teams already using TaskFlow Pro to deliver projects on time and exceed expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="xl" className="bg-card text-foreground hover:bg-card/90 shadow-2xl shadow-black/20 h-14 px-8 text-lg font-semibold" asChild>
                <Link to="/register">
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="xl" variant="ghost" className="text-secondary-foreground hover:bg-secondary-foreground/10 h-14 px-8 text-lg font-semibold border-2 border-secondary-foreground/20 hover:border-secondary-foreground/40" asChild>
                <Link to="/contact">
                  Contact Sales
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-6 text-sm text-secondary-foreground/70 font-medium"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-success rounded-full"></span>
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-success rounded-full"></span>
              14-day free trial
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-success rounded-full"></span>
              Cancel anytime
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
