// Team data - verified from published sources
// IMPORTANT: Administrator must verify all credentials before publishing

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications: string[];
  specialisations: string[];
  bio: string;
  image: string | null;
  type: 'founder' | 'doctor' | 'faculty' | 'staff';
  published: boolean;
  verificationNote?: string;
  services?: string[];
}

export const TEAM: TeamMember[] = [
  {
    id: 'sunitha-devaraj',
    name: 'Sunitha Devaraj',
    role: 'Founder & Director',
    qualifications: [
      'Internationally Recognised Nutrition and Dietitian',
      'Cosmetologist',
    ],
    specialisations: [
      'HydraFacial Treatments',
      'Non-invasive Skin Rejuvenation',
      'Anti-ageing Solutions',
      'Hydration Therapy',
      'Personalised Skincare Regimens',
    ],
    bio: 'Sunitha Devaraj, the founder of LA CROWN, is an internationally recognised nutrition and dietitian and cosmetologist who has redefined the standards of skincare and beauty. With a passion for innovation and mastery in HydraFacial treatments, Sunitha has transformed countless faces — restoring youthful radiance and confidence. Renowned for her expertise in non-invasive skin rejuvenation, she blends cutting-edge technology with a deep understanding of aesthetics to deliver flawless, glowing skin.',
    image: '/assets/founder.png',
    type: 'founder',
    published: true,
    services: ['HydraFacial', 'Anti-Ageing Treatments', 'Skin Rejuvenation'],
  },
  {
    id: 'dr-ramesh',
    name: 'Dr. Ramesh',
    role: 'Medical Director',
    qualifications: [
      'M.B.B.S. — Mysore University',
      'M.D. Dermatology — Bangalore University',
    ],
    specialisations: ['Dermatology', 'Skin Treatments'],
    bio: 'Dr. Ramesh serves as Medical Director at LA CROWN, bringing extensive dermatological expertise to the clinic\'s aesthetic treatment programme.',
    image: null,
    type: 'doctor',
    published: true,
    verificationNote: 'Credentials pending administrator verification before final publication.',
    services: ['Dermatology Treatments', 'Skin Care'],
  },
  {
    id: 'dr-vikas-singh',
    name: 'Dr. Vikas Singh',
    role: 'Medical Professional',
    qualifications: [],
    specialisations: ['Dermatology', 'Aesthetic Medicine'],
    bio: 'Dr. Vikas Singh is a qualified medical professional with expertise in dermatology and aesthetic medicine at LA CROWN.',
    image: null,
    type: 'doctor',
    published: true,
    verificationNote: 'Exact qualifications and role pending administrator verification.',
    services: ['Aesthetic Treatments', 'Dermatology'],
  },
  {
    id: 'dr-usha',
    name: 'Dr. Usha',
    role: 'Medical Director',
    qualifications: [],
    specialisations: ['Obstetrics and Gynaecology', 'Women\'s Wellness'],
    bio: 'Dr. Usha is a consultant at LA CROWN with specialisation in obstetrics and gynaecology.',
    image: null,
    type: 'doctor',
    published: true,
    verificationNote: 'Full qualifications and specialisation details pending administrator verification.',
    services: ['Women\'s Health Consultation'],
  },
  {
    id: 'dr-subramani',
    name: 'Dr. Subramani',
    role: 'Consultant Surgeon',
    qualifications: [],
    specialisations: ['Cosmetic Surgery', 'Plastic Surgery', 'Craniofacial Reconstructive Surgery'],
    bio: 'Dr. Subramani is a consultant cosmetic, plastic, and craniofacial reconstructive surgeon associated with LA CROWN.',
    image: null,
    type: 'doctor',
    published: true,
    verificationNote: 'Name spelling (Subramani vs Subramini) and full qualifications pending administrator verification.',
    services: ['Cosmetic Surgery Consultation'],
  },
  {
    id: 'dr-robert-janczura',
    name: 'Dr. Robert Janczura',
    role: 'International Faculty',
    qualifications: [],
    specialisations: ['Aesthetic Medicine'],
    bio: 'Dr. Robert Janczura is an international faculty member from Poland, contributing to LA CROWN\'s aesthetic training and treatment programmes.',
    image: null,
    type: 'faculty',
    published: true,
    verificationNote: 'Current affiliation, biography and faculty role pending administrator confirmation.',
    services: [],
  },
  {
    id: 'dr-taliah-schmitt',
    name: 'Dr. Taliah Schmitt',
    role: 'International Faculty',
    qualifications: [],
    specialisations: ['Beauty and Aesthetics'],
    bio: 'Dr. Taliah Schmitt is an international faculty member from Paris, France, contributing to LA CROWN\'s training academy and aesthetic protocols.',
    image: null,
    type: 'faculty',
    published: true,
    verificationNote: 'Current affiliation, biography and faculty role pending administrator confirmation.',
    services: [],
  },
];
