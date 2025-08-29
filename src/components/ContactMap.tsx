import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import googlemapsIcon from '@/assets/googlemaps.webp';
import wazeIcon from '@/assets/waze.webp';
import moovitIcon from '@/assets/moovit.webp';

interface ContactFormData {
  nome: string;
  email: string;
  telefone: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  telefone?: string;
}

export const ContactMap: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nome: '',
    email: '',
    telefone: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Máscara para telefone
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validação do nome
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    } else if (formData.nome.trim().length < 2) {
      newErrors.nome = 'Nome deve ter pelo menos 2 caracteres';
    }

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    // Validação do telefone
    const phoneNumbers = formData.telefone.replace(/\D/g, '');
    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    } else if (phoneNumbers.length < 10) {
      newErrors.telefone = 'Telefone deve ter pelo menos 10 dígitos';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    let formattedValue = value;
    if (name === 'telefone') {
      formattedValue = formatPhoneNumber(value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));

    // Limpar erro do campo quando o usuário começa a digitar
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envio da requisição
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Dados do formulário enviados:', formData);
      
      // Reset do formulário
      setFormData({
        nome: '',
        email: '',
        telefone: ''
      });
      
      setIsSubmitted(true);
      
      // Reset do estado de sucesso após 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com/maps?q=Av.+das+Américas+18500+-+Sala+507+UpRise+Residencial+%26+Comercial,+Rio+de+Janeiro+-+RJ', '_blank');
  };

  const handleGoogleMapsClick = () => {
    window.open('https://maps.google.com/maps?q=Av.+das+Américas+18500+-+Sala+507+UpRise+Residencial+%26+Comercial,+Rio+de+Janeiro+-+RJ', '_blank');
  };

  const handleWazeClick = () => {
    window.open('https://waze.com/ul?ll=-22.9068,-43.1729&navigate=yes', '_blank');
  };

  const handleMoovitClick = () => {
    window.open('https://moovitapp.com/index/pt-br/transporte_público-Av_das_Américas_18500-Rio_de_Janeiro-site_1234567890', '_blank');
  };

  return (
    <section className="w-full relative overflow-hidden my-20">
      <div className="bg-[var(--bg-section)] py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--primary)] mb-4">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mapa */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden animate-fade-in-up">
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Nossa Localização
                </h3>
                
                <div className="space-y-4">
                  <div className="aspect-video w-full rounded-lg overflow-hidden relative group cursor-pointer">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1211212855023!2d-43.488323799999996!3d-23.019324599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be8035ee5152f%3A0x3b7c106b62825275!2sUPRISE%20BUSINESS%20CENTER!5e0!3m2!1spt-BR!2sbr!4v1756499972573!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    
                  </div>
                  
                  <div className="space-y-3">
                    <Card className="shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <CardContent className="flex items-start gap-3 p-4">
                        <MapPin className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-[var(--gray-600)]">UpRise Residencial & Comercial</p>
                          <p className="text-sm text-[var(--gray-100)]">Av. das Américas, 18.500 - Sala 507</p>
                          <p className="text-sm text-[var(--gray-100)]">Rio de Janeiro - RJ</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <CardContent className="flex items-center gap-3 p-4">
                        <Phone className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-[var(--gray-600)]">Telefone</p>
                          <p className="text-sm text-[var(--gray-100)]">(21) 99999-9999</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <CardContent className="flex items-center gap-3 p-4">
                        <Mail className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-[var(--gray-600)]">E-mail</p>
                          <p className="text-sm text-[var(--gray-100)]">contato@evamarcenaria.com.br</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <CardContent className="flex items-center gap-3 p-4">
                        <Clock className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-[var(--gray-600)]">Horário de Funcionamento</p>
                          <p className="text-sm text-[var(--gray-100)]">Segunda a Sexta: 8h às 18h</p>
                          <p className="text-sm text-[var(--gray-100)]">Sábado: 8h às 12h</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna direita com formulário e informações de como chegar */}
            <div className="space-y-8">
              {/* Formulário de Contato */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden animate-fade-in-up">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-6 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Envie uma Mensagem
                  </h3>
                  
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-[var(--primary)] mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-[var(--gray-600)] mb-2">Mensagem Enviada!</h3>
                      <p className="text-[var(--gray-100)]">Obrigado pelo contato. Retornaremos em breve!</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="nome" className="text-sm font-medium text-[var(--gray-600)]">
                          Nome Completo *
                        </Label>
                        <Input
                          id="nome"
                          name="nome"
                          type="text"
                          placeholder="Digite seu nome completo"
                          value={formData.nome}
                          onChange={handleInputChange}
                          className={`transition-all duration-200 ${
                            errors.nome ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                          }`}
                          disabled={isSubmitting}
                        />
                        {errors.nome && (
                          <div className="flex items-center gap-1 text-red-500 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {errors.nome}
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-[var(--gray-600)]">
                          E-mail *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`transition-all duration-200 ${
                            errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                          }`}
                          disabled={isSubmitting}
                        />
                        {errors.email && (
                          <div className="flex items-center gap-1 text-red-500 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="telefone" className="text-sm font-medium text-[var(--gray-600)]">
                          Telefone *
                        </Label>
                        <Input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          placeholder="(21) 99999-9999"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          className={`transition-all duration-200 ${
                            errors.telefone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                          }`}
                          disabled={isSubmitting}
                          maxLength={15}
                        />
                        {errors.telefone && (
                          <div className="flex items-center gap-1 text-red-500 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {errors.telefone}
                          </div>
                        )}
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Enviando...
                          </div>
                        ) : (
                          'Enviar Mensagem'
                        )}
                      </Button>

                      <p className="text-xs text-[var(--gray-100)] text-center">
                        * Campos obrigatórios. Seus dados estão seguros conosco.
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* Card Como Chegar */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden animate-fade-in-up">
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-8 flex items-center gap-3">
                    <MapPin className="w-6 h-6" />
                    Como Chegar à Nossa Loja
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Aplicativos de Navegação */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Google Maps Card */}
                      <Card className="shadow-lg bg-[var(--primary)] border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105">
                        <CardContent className="p-4 sm:p-6 h-full flex flex-col items-center justify-center">
                          <Button
                            onClick={handleGoogleMapsClick}
                            className="flex flex-col items-center gap-3 sm:gap-4 h-full w-full rounded-lg transition-all duration-200 cursor-pointer bg-transparent hover:bg-transparent p-0"
                          >
                            <div className="relative">
                              <img 
                                src={googlemapsIcon} 
                                alt="Google Maps" 
                                className="w-12 h-12 sm:w-16 sm:h-16 object-contain group-hover:scale-110 transition-transform duration-200"
                              />
                            </div>
                            <span className="text-sm font-semibold text-white text-center">Google Maps</span>
                          </Button>
                        </CardContent>
                      </Card>
                      
                      {/* Waze Card */}
                      <Card className="shadow-lg bg-[var(--primary)] border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105">
                        <CardContent className="p-4 sm:p-6 h-full flex flex-col items-center justify-center">
                          <Button
                            onClick={handleWazeClick}
                            className="flex flex-col items-center gap-3 sm:gap-4 h-full w-full rounded-lg transition-all duration-200 cursor-pointer bg-transparent hover:bg-transparent p-0"
                          >
                            <div className="relative">
                              <img 
                                src={wazeIcon} 
                                alt="Waze" 
                                className="w-12 h-12 sm:w-16 sm:h-16 object-contain group-hover:scale-110 transition-transform duration-200"
                              />
                            </div>
                            <span className="text-sm font-semibold text-white text-center">Waze</span>
                          </Button>
                        </CardContent>
                      </Card>
                      
                      {/* Moovit Card */}
                      <Card className="shadow-lg bg-[var(--primary)] border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105">
                        <CardContent className="p-4 sm:p-6 h-full flex flex-col items-center justify-center">
                          <Button
                            onClick={handleMoovitClick}
                            className="flex flex-col items-center gap-3 sm:gap-4 h-full w-full rounded-lg transition-all duration-200 cursor-pointer bg-transparent hover:bg-transparent p-0"
                          >
                            <div className="relative">
                              <img 
                                src={moovitIcon} 
                                alt="Moovit" 
                                className="w-12 h-12 sm:w-16 sm:h-16 object-contain group-hover:scale-110 transition-transform duration-200"
                              />
                            </div>
                            <span className="text-sm font-semibold text-white text-center">Moovit</span>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Subtítulo elegante */}
                    <div className="pt-4 text-center">
                      <p className="text-sm text-[var(--gray-500)] font-medium">
                        Escolha seu aplicativo preferido para navegação
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
