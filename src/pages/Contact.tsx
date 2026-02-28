import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { validateContactForm } from '../utils/contact';
import { ContactFormData, ContactFormErrors } from '../types';

const EMAILJS_SERVICE_ID = 'service_k4s9haf';
const EMAILJS_TEMPLATE_ID = 'template_a7pbhkg';
const EMAILJS_PUBLIC_KEY = 'HazlwmLrAGiEC6vdI';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSending(true);
    setSendError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: 'New Contact Form Submission',
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message 
        : typeof err === 'object' && err !== null && 'text' in err ? String((err as { text: string }).text)
        : 'Unknown error';
      console.error('EmailJS error:', err);
      setSendError(`Failed to send message: ${errorMessage}. Please try again or email us directly.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-navy to-teal text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <MessageSquare className="text-accent" size={28} />
              <span className="text-background/80 font-medium uppercase tracking-wider text-sm">
                Contact Us
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-background/90 leading-relaxed">
              Have a project in mind or want to learn more about our AI
              solutions? We'd love to hear from you. Drop us a message and
              we'll get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="md:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-xl p-8 shadow-sm text-center">
                  <div className="flex justify-center mb-4">
                    <Send className="text-accent" size={48} />
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-2">
                    Message Sent!
                  </h2>
                  <p className="text-teal text-lg">
                    Thank you for reaching out. We'll get back to you as soon as
                    possible.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-xl p-8 shadow-sm"
                  noValidate
                >
                  <h2 className="text-2xl font-bold text-navy mb-6">
                    Send Us a Message
                  </h2>
                  {/* Name Field */}
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-3 text-navy placeholder-teal/50 focus:outline-none focus:ring-2 focus:ring-teal ${
                        errors.name ? 'border-accent' : 'border-teal/30'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-accent">{errors.name}</p>
                    )}
                  </div>
                  {/* Email Field */}
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-3 text-navy placeholder-teal/50 focus:outline-none focus:ring-2 focus:ring-teal ${
                        errors.email ? 'border-accent' : 'border-teal/30'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-accent">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  {/* Message Field */}
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-3 text-navy placeholder-teal/50 focus:outline-none focus:ring-2 focus:ring-teal resize-vertical ${
                        errors.message ? 'border-accent' : 'border-teal/30'
                      }`}
                      placeholder="Tell us about your project or question..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-accent">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  {sendError && (
                    <p className="mb-4 text-sm text-accent">{sendError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send size={18} />
                    {sending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-navy">
                Contact Information
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
                <Mail className="text-accent mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-navy">Email</h3>
                  <p className="text-teal">hello@vandevercollective.com</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
                <Phone className="text-accent mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-navy">Phone</h3>
                  <p className="text-teal">Available upon request</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
                <MapPin className="text-accent mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-navy">Location</h3>
                  <p className="text-teal">Remote — Serving clients worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
