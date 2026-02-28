import React from 'react';

export interface NavItem {
  title: string;
  path: string;
}

export interface Feature {
  title: string;
  description: string;
  link: string;
  icon?: React.ComponentType<{ className?: string; size?: number }>;
}

export interface LinkEntry {
  name: string;
  description: string;
  url: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}
