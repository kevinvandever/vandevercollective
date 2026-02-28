import { ContactFormData, ContactFormErrors } from '../types';

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  if (!data.message.trim()) errors.message = 'Message is required';
  return errors;
}
