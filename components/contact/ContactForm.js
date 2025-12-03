'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(null), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t('contactPage.form.name.label')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t('contactPage.form.name.placeholder')}
          className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#1A1D1A] border ${
            errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] dark:focus:ring-[#52B788] transition-all`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t('contactPage.form.email.label')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t('contactPage.form.email.placeholder')}
          className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#1A1D1A] border ${
            errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] dark:focus:ring-[#52B788] transition-all`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t('contactPage.form.phone.label')}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={t('contactPage.form.phone.placeholder')}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#1A1D1A] border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] dark:focus:ring-[#52B788] transition-all"
        />
      </div>

      {/* Company Field */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t('contactPage.form.company.label')}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder={t('contactPage.form.company.placeholder')}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#1A1D1A] border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] dark:focus:ring-[#52B788] transition-all"
        />
      </div>

      {/* Service Type Dropdown */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t('contactPage.form.service.label')}
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#1A1D1A] border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] dark:focus:ring-[#52B788] transition-all"
        >
          <option value="">{t('contactPage.form.service.placeholder')}</option>
          <option value="website">{t('contactPage.form.service.options.website')}</option>
          <option value="mobile">{t('contactPage.form.service.options.mobile')}</option>
          <option value="desktop">{t('contactPage.form.service.options.desktop')}</option>
          <option value="ai">{t('contactPage.form.service.options.ai')}</option>
          <option value="custom">{t('contactPage.form.service.options.custom')}</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t('contactPage.form.message.label')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t('contactPage.form.message.placeholder')}
          rows={6}
          className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#1A1D1A] border ${
            errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] dark:focus:ring-[#52B788] transition-all resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2D6A4F] to-[#52B788] dark:from-[#52B788] dark:to-[#74C69D] text-white font-semibold text-lg hover:shadow-lg hover:shadow-[#2D6A4F]/50 dark:hover:shadow-[#52B788]/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
      >
        {status === 'sending' ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            {t('contactPage.form.sending')}
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            {t('contactPage.form.submit')}
          </>
        )}
      </button>

      {/* Success Message */}
      {status === 'success' && (
        <div className="p-4 rounded-xl bg-green-100 dark:bg-green-900/30 border border-green-500 flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
          <p className="text-green-800 dark:text-green-200">
            {t('contactPage.form.success')}
          </p>
        </div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-100 dark:bg-red-900/30 border border-red-500 flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-red-800 dark:text-red-200">
            {t('contactPage.form.error')}
          </p>
        </div>
      )}
    </form>
  );
}
