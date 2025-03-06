import React from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';
import { WhatsappIcon } from './Icons';
import { Send } from 'lucide-react';

interface VehiclePurchaseFormData {
  name: string;
  email: string;
  phone: string;
  make: string;
  model: string;
  year: string;
  mileage: string;
  condition: string;
  description: string;
}

const PurchaseForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<VehiclePurchaseFormData>();

  const onSubmit = (data: VehiclePurchaseFormData) => {
    console.log(data);
    // In a real application, you would send this data to your backend
    alert('Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.');
    reset();
  };

  return (
    <div className="bg-white shadow-elegant p-8">
      <h2 className="text-2xl font-bold text-secondary mb-8 uppercase tracking-tight">Fahrzeug verkaufen</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              Telefon *
            </label>
            <input
              id="phone"
              type="tel"
              className={`input-field ${
                errors.phone ? 'border-red-500' : 'border-accent'
              }`}
              placeholder="Ihre Telefonnummer"
              {...register('phone', { required: 'Telefonnummer ist erforderlich' })}
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="make" className="block text-sm font-medium text-secondary mb-2 uppercase tracking-wider">
              Marke *
            </label>
            <input
              id="make"
              type="text"
              className={`input-field ${
                errors.make ? 'border-red-500' : 'border-accent'
              }`}
              placeholder="z.B. BMW, Mercedes, Audi"
              {...register('make', { required: 'Marke ist erforderlich' })}
            />
            {errors.make && (
              <p className="mt-2 text-sm text-red-600">{errors.make.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="model" className="block text-sm font-medium text-secondary mb-2 uppercase tracking-wider">
              Modell *
            </label>
            <input
              id="model"
              type="text"
              className={`input-field ${
                errors.model ? 'border-red-500' : 'border-accent'
              }`}
              placeholder="z.B. 3er, C-Klasse, A4"
              {...register('model', { required: 'Modell ist erforderlich' })}
            />
            {errors.model && (
              <p className="mt-2 text-sm text-red-600">{errors.model.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="year" className="block text-sm font-medium text-secondary mb-2 uppercase tracking-wider">
              Baujahr *
            </label>
            <input
              id="year"
              type="text"
              className={`input-field ${
                errors.year ? 'border-red-500' : 'border-accent'
              }`}
              placeholder="z.B. 2018"
              {...register('year', { required: 'Baujahr ist erforderlich' })}
            />
            {errors.year && (
              <p className="mt-2 text-sm text-red-600">{errors.year.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="mileage" className="block text-sm font-medium text-secondary mb-2 uppercase tracking-wider">
              Kilometerstand *
            </label>
            <input
              id="mileage"
              type="text"
              className={`input-field ${
                errors.mileage ? 'border-red-500' : 'border-accent'
              }`}
              placeholder="z.B. 75000"
              {...register('mileage', { required: 'Kilometerstand ist erforderlich' })}
            />
            {errors.mileage && (
              <p className="mt-2 text-sm text-red-600">{errors.mileage.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="condition" className="block text-sm font-medium text-secondary mb-2 uppercase tracking-wider">
              Zustand
            </label>
            <select
              id="condition"
              className="input-field border-accent appearance-none"
              {...register('condition')}
            >
              <option value="">Bitte wählen</option>
              <option value="Sehr gut">Sehr gut</option>
              <option value="Gut">Gut</option>
              <option value="Befriedigend">Befriedigend</option>
              <option value="Reparaturbedürftig">Reparaturbedürftig</option>
              <option value="Unfallauto">Unfallauto</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-secondary mb-2 uppercase tracking-wider">
            Beschreibung / Zusätzliche Informationen
          </label>
          <textarea
            id="description"
            rows={4}
            className="input-field border-accent resize-none"
            placeholder="Weitere Details zu Ihrem Fahrzeug"
            {...register('description')}
          ></textarea>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <Button type="submit" variant="primary" size="lg" className="group">
            Anfrage senden
            <Send size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          
          <a 
            href="https://wa.me/491736851896?text=Hallo%20Autopunkt%20Glonn,%20ich%20möchte%20mein%20Fahrzeug%20verkaufen." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium transition-colors uppercase tracking-wider"
          >
            <WhatsappIcon className="mr-2" />
            <span>WhatsApp Kontakt</span>
          </a>
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;