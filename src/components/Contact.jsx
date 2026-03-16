import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
    honeypot: '' // Spam protection
  });

  const validate = () => {
    let newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = "Name is required";
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic spam protection: check honeypot
    if (formData.honeypot) {
      console.log("Spam detected");
      return;
    }

    if (!validate()) return;

    setStatus('loading');

    try {
      // Replace these with actual EmailJS credentials
      // SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        formRef.current, 
        'YOUR_PUBLIC_KEY'
      );

      setStatus('success');
      setFormData({
        user_name: '',
        user_email: '',
        subject: '',
        message: '',
        honeypot: ''
      });
      
      // Reset status after a few seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-3xl font-outfit mb-4">Let's discuss your next <span className="text-gradient">big idea</span></h3>
                <p className="text-text-muted text-lg">
                  I'm always open to discussing new projects, creative ideas or 
                  opportunities to be part of your visions.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: <Mail className="text-primary" />, label: 'Email', val: 'munyuabrian712@gmail.com' },
                  { icon: <Phone className="text-secondary" />, label: 'Phone', val: '0719328502' },
                  { icon: <MapPin className="text-accent" />, label: 'Location', val: 'Nairobi, Kenya' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-text-muted uppercase tracking-widest">{item.label}</p>
                      <p className="text-text-main font-medium">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6 bg-linear-to-br from-primary/5 to-secondary/5 border-primary/10">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="text-primary" size={20} />
                  <span className="font-bold font-outfit text-lg">Quick Chat</span>
                </div>
                <p className="text-text-muted text-sm mb-4">Prefer a faster response? Reach out on social media or Telegram.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-card p-8 md:p-10 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      className="absolute inset-0 z-10 bg-bg-darker flex flex-col items-center justify-center text-center p-8"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
                        <CheckCircle size={48} />
                      </div>
                      <h3 className="text-3xl font-outfit mb-2">Message Sent!</h3>
                      <p className="text-text-muted max-w-xs">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="mt-8 text-primary font-medium hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - hidden from users */}
                  <input 
                    type="text" 
                    name="honeypot" 
                    value={formData.honeypot} 
                    onChange={handleChange} 
                    className="hidden" 
                    tabIndex="-1" 
                    autoComplete="off" 
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-muted">Full Name</label>
                      <input 
                        type="text" 
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full bg-white/5 border ${errors.user_name ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-text-main focus:outline-hidden focus:border-primary/50 transition-colors`}
                      />
                      {errors.user_name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.user_name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-muted">Email Address</label>
                      <input 
                        type="email" 
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full bg-white/5 border ${errors.user_email ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-text-main focus:outline-hidden focus:border-primary/50 transition-colors`}
                      />
                      {errors.user_email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.user_email}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-muted">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-main focus:outline-hidden focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-muted">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5" 
                      placeholder="Tell me more about your project..."
                      className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-text-main focus:outline-hidden focus:border-primary/50 transition-colors resize-none`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.message}</p>}
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="btn btn-primary w-full flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>Processing... <Loader2 size={18} className="animate-spin" /></>
                    ) : (
                      <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>

                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm text-center font-medium mt-4 bg-red-500/10 py-2 rounded-lg border border-red-500/20"
                    >
                      Oops! Something went wrong. Please try again later.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
