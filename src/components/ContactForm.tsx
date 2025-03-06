import React from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // In a real application, you would send this data to your backend
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2 uppercase tracking-wider">
          Name *
        </label>
        <input
          id="name"
          type="text"
          className={`input-field ${
            errors.name ? 'border-red-500' : 'border-accent'
          }`}
          placeholder="Ihr vollständiger Name"
          {...register('name', { required: 'Name ist erforderlich' })}
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2 uppercase tracking-wider">
          E-Mail *
        </label>
        <input
          id="email"
          type="email"
          className={`input-field ${
            errors.email ? 'border-red-500' : 'border-accent'
          }`}
          placeholder="Ihre E-Mail-Adresse"
          {...register('email', { 
            required: 'E-Mail ist erforderlich',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Ungültige E-Mail-Adresse',
            }
          })}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2 uppercase tracking-wider">
          Telefon
        </label>
        <input
          id="phone"
          type="tel"
          className="input-field border-accent"
          placeholder="Ihre Telefonnummer"
          {...register('phone')}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2 uppercase tracking-wider">
          Nachricht *
        </label>
        <textarea
          id="message"
          rows={5}
          className={`input-field resize-none ${
            errors.message ? 'border-red-500' : 'border-accent'
          }`}
          placeholder="Wie können wir Ihnen helfen?"
          {...register('message', { required: 'Nachricht ist erforderlich' })}
        ></textarea>
        {errors.message && (
          <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div className="pt-4">
        <Button type="submit" variant="primary" size="lg" className="group">
          Nachricht senden
          <Send size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;