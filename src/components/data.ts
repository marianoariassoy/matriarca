import { Facebook, Instagram } from './icons'

export const languages = [
  {
    title: 'esp',
    code: 'es'
  },
  {
    title: 'eng',
    code: 'en'
  }
]

export const menu = [
  {
    es: {
      title: 'Tienda'
    },
    en: {
      title: 'Shop'
    },
    path: '#tienda'
  },
  {
    es: {
      title: 'Indumentaria'
    },
    en: {
      title: 'Clothing'
    },
    path: '#tienda'
  },
  {
    es: {
      title: 'Hogar'
    },
    en: {
      title: 'Home'
    },
    path: '#tienda'
  },
  {
    es: {
      title: 'Capsulas'
    },
    en: {
      title: 'Capsules'
    },
    path: '#tienda'
  },
  {
    es: {
      title: 'Nosotras'
    },
    en: {
      title: 'About us'
    },
    path: '#nosotras'
  },
  {
    es: {
      title: 'Materia prima'
    },
    en: {
      title: 'Raw material'
    },
    path: '#materia-prima'
  },
  {
    es: {
      title: 'Comunidad Matriarca'
    },
    en: {
      title: 'Matriarca Community'
    },
    path: '#comunidad'
  },
  {
    es: {
      title: 'Blog'
    },
    en: {
      title: 'Blog'
    },
    path: '#blog'
  },
  {
    es: {
      title: 'Contacto'
    },
    en: {
      title: 'Contact'
    },
    path: '#contacto'
  }
]

export const social = [
  {
    title: 'Facebook',
    url: 'https://www.instagram.com/matriarca.artenativo',
    icon: Facebook()
  },
  {
    title: 'Instagram',
    url: 'https://www.facebook.com/matriarca.com.ar',
    icon: Instagram()
  }
]

export const whatsapp = {
  title: 'WhatsApp',
  phone: 'https://wa.me/+5491130000000'
}

export const dataContact = {
  es: {
    name: 'Nombre y apellido*',
    city: 'Ciudad',
    email: 'E-Mail*',
    subject: 'Asunto',
    phone: 'Teléfono*',
    country: 'País',
    message: 'Constula',
    send: 'Enviar',
    thanks: '¡Su mensaje fue enviado! Gracias por contactarte con nosotros.',
    error: 'Se produjo un error al enviar el mensaje :-(',
    required: 'Por favor completá este dato'
  },
  en: {
    name: 'Name and surname*',
    city: 'City',
    email: 'E-Mail*',
    subject: 'Subject',
    phone: 'Phone*',
    country: 'Country',
    message: 'Message',
    send: 'Send',
    thanks: 'Your message was sent! Thank you for contacting us.',
    error: 'An error occurred while sending the message :-(',
    required: 'Please complete this field'
  }
}
