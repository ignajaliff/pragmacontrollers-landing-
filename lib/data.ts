/**
 * data.ts — TODO el contenido del sitio, tipado y separado del diseño.
 * Los componentes mapean estos datos; no hay texto hardcodeado en las secciones.
 */
import type { IconName } from '@/components/Icon';

export const site = {
  name: 'Pragma Controllers',
  tagline: 'Control de contratistas',
  phone: '+54 9 261 422 4820',
  email: 'contacto@pragmacontrollers.com', // placeholder — confirmar real
  offices: 'Mendoza, Argentina · Santiago de Chile, Chile',
} as const;

/* ---------- Navegación ---------- */
export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Contacto', href: '#contacto' },
];

/* ---------- Hero ---------- */
export type HeroAction = {
  label: string;
  href: string;
  variant: 'primary' | 'ghost';
  arrow?: boolean;
};

export const hero = {
  eyebrow:
    'Control de contratistas y nacionalización de empresas · Minería, Oil & Gas',
  // El titular se compone con un fragmento acentuado en bordó.
  titleBefore: 'Auditoría de proveedores y ',
  titleAccent: 'nacionalización de empresas',
  titleAfter: '.',
  lead: 'A través de nuestros servicios acompañamos a las empresas en la gestión de contratistas, nacionalización y desembarco dentro de los marcos que la legislación nacional exige.',
  actions: [
    { label: 'Solicitar diagnóstico', href: '#contacto', variant: 'primary', arrow: true },
    { label: 'Ver servicios', href: '#servicios', variant: 'ghost' },
  ] as HeroAction[],
  stats: [
    { k: '360°', v: 'Acompañamiento integral' },
    { k: 'Tiempo real', v: 'Reportes y alertas' },
    { k: 'Cuyo y Patagonia', v: 'Zona de operación' },
  ],
} as const;

/* ---------- Banda de sectores ---------- */
export type Sector = { icon: IconName; label: string };

export const sectors = {
  // El lead se renderiza con "legal y operativo" resaltado.
  leadBefore: 'Especialistas en el marco ',
  leadAccent: 'legal y operativo',
  leadAfter: ' de las industrias más exigentes de Argentina.',
  list: [
    { icon: 'mineria', label: 'Minería' },
    { icon: 'petroleo', label: 'Oil' },
    { icon: 'gas', label: 'Gas' },
  ] as Sector[],
};

/* ---------- Clientes (logos) ---------- */
export type Logo = { src: string; alt: string };

export const clients = {
  eyebrow: 'Confianza',
  title: 'Empresas que confían en nosotros.',
  lead: 'Acompañamos a compañías y proveedores del sector en el control de su cadena de contratistas.',
  // Fila 1 → izquierda, Fila 2 → derecha (reverse).
  rowA: [
    { src: '/logos/cuyosur.png', alt: 'Cuyosur S.A.' },
    { src: '/logos/capac.png', alt: 'CAPAC' },
    { src: '/logos/giorlando.png', alt: 'Grupo Giorlando' },
    { src: '/logos/acert.png', alt: 'Acert ARG Seguridad Privada' },
    { src: '/logos/gec.png', alt: 'GEC' },
  ] as Logo[],
  rowB: [
    { src: '/logos/mannor.png', alt: 'Mannor Hause S.A.' },
    { src: '/logos/geotub.png', alt: 'Geotub' },
    { src: '/logos/exppel.png', alt: 'Laboral Exppel SRL' },
    { src: '/logos/siddhi.png', alt: 'Siddhi Medicina Laboral SRL' },
  ] as Logo[],
};

/* ---------- Problema ---------- */
export const problem = {
  eyebrow: 'El riesgo invisible',
  title:
    'Una empresa puede ser demandada por los incumplimientos de sus contratistas.',
  body: 'La responsabilidad solidaria expone a tu compañía a juicios laborales y previsionales originados en terceros. Controlar el cumplimiento de cada contratista deja de ser una tarea administrativa y se vuelve una decisión estratégica de protección patrimonial.',
  highlight: 'Cada contratista no controlado es una contingencia abierta.',
  diagram: {
    title: 'Cadena de responsabilidad',
    bigNumber: '+1',
    bigNumberSub: 'punto ciego = riesgo',
    nodes: [
      { kind: 'empresa', lbl: 'Tu empresa', sub: 'responsable solidario', indent: 0 },
      { kind: 'ok', lbl: 'Contratista A', sub: 'al día', indent: 1, connectorBefore: true },
      { kind: 'risk', lbl: 'Contratista B', sub: 'incumple', indent: 1 },
      { kind: 'ok', lbl: 'Subcontratista', sub: 'sin verificar', indent: 2, connectorBefore: true },
    ],
  },
} as const;

/* ---------- Servicios ---------- */
export type Service = {
  num: string;
  icon: IconName;
  title: string;
  baja: string;
  points: string[];
};

export const services = {
  eyebrow: 'Qué hacemos',
  title: 'Control de cumplimiento de punta a punta.',
  lead: 'Seis frentes de trabajo que cubren el ciclo completo de tus contratistas: del control documental al marco legal del sector.',
  items: [
    {
      num: '01',
      icon: 'shield-check',
      title: 'Auditoría y Control de Contratistas',
      baja: 'Blindaje legal y operativo para tu cadena de valor.',
      points: [
        'Plataforma web propia con IA y accesos personalizados',
        'Reportes de cumplimiento y alertas de deudores en tiempo real',
        'Auditorías in situ periódicas',
        'Control de contratistas, subcontratistas y cesionarios',
        'Análisis laboral, impositivo, de seguros y de seguridad e higiene',
        'Soporte para certificación ISO 9001 y análisis de costos para licitación',
      ],
    },
    {
      num: '02',
      icon: 'file-text',
      title: 'Gestión Documental Corporativa',
      baja: 'Tu documentación al día, sin demoras ni rechazos.',
      points: [
        'Organización y auditoría previa antes de subir a los portales de tus clientes',
        'Seguimiento de vencimientos y estados de validación',
        'Mesa de ayuda y enlace con las áreas responsables',
      ],
    },
    {
      num: '03',
      icon: 'trending-up',
      title: 'Asesoría Estratégica y Mitigación de Riesgos',
      baja: 'Datos precisos para decisiones críticas.',
      points: [
        'Análisis predictivo de estados contables para elegir contratistas solventes',
        'Informes de mayores costos, actualización de tarifas y valoración de contingencias',
        'Asesoramiento en convenios colectivos aplicables a tu sector',
      ],
    },
    {
      num: '04',
      icon: 'users',
      title: 'Capacitaciones y Talleres de Integración',
      baja: 'Alineación de equipos para un ambiente laboral eficiente.',
      points: [
        'Formación en control de documentación laboral, previsional y de seguros',
        'Técnicas de resolución y mitigación de conflictos sindicales',
      ],
    },
    {
      num: '05',
      icon: 'building',
      title: 'Nacionalización y Desembarco de Empresas',
      baja: 'Aceleramos la inserción legal y comercial de proveedores.',
      points: [
        'Constitución e inscripción societaria (arts. 118 y 123) en la Dirección de Personas Jurídicas',
        'Altas e inscripciones en ARCA (ex-AFIP) y Rentas provinciales',
        'Inscripción en regímenes de proveedores',
        'Contrataciones, liquidación de sueldos e impuestos, libros y registros',
      ],
    },
    {
      num: '06',
      icon: 'scale',
      title: 'Marco Legal en Minería, Oil & Gas',
      baja: 'Cumplimiento adaptado al régimen vigente, nacional y provincial.',
      points: [
        'Gestión de permisos y concesiones (derecho administrativo minero)',
        'Normativa ambiental nacional y provincial',
        'Estructuración financiera y tributaria (Régimen de Inversiones Mineras e incentivos)',
        'Compliance, licencia social y due diligence',
      ],
    },
  ] as Service[],
};

/* ---------- Metodología ---------- */
export type Step = { num: string; title: string; body: string };

export const methodology = {
  eyebrow: 'Cómo trabajamos',
  title: 'Un proceso ordenado, de extremo a extremo.',
  lead: 'Cuatro etapas que transforman el control de contratistas en una rutina previsible y auditable.',
  steps: [
    { num: '01', title: 'Diagnóstico', body: 'Relevamos tu nómina de contratistas y el marco normativo aplicable.' },
    { num: '02', title: 'Implementación', body: 'Cargamos la documentación en la plataforma y definimos requisitos por contratista.' },
    { num: '03', title: 'Control continuo', body: 'Auditamos, alertamos vencimientos y verificamos en campo.' },
    { num: '04', title: 'Reporte y mejora', body: 'Reportes analíticos para la toma de decisiones y reducción de contingencias.' },
  ] as Step[],
};

/* ---------- Plataforma ---------- */
export type DashStat = { k: string; l: string; state: 'apto' | 'warn' | 'nok' };
export type DashRow = {
  co: string;
  meta: string;
  expiry: string;
  status: 'apto' | 'warn' | 'nok';
  statusLabel: string;
};

export const platform = {
  eyebrow: 'Tecnología propia',
  title: 'Una plataforma que centraliza el control de tus contratistas.',
  lead: 'Documentación, cumplimiento, vencimientos y habilitación de contratistas en un solo lugar, con inteligencia artificial, alertas automáticas y accesos diferenciados para tu empresa, tus contratistas y nuestro equipo auditor.',
  caps: [
    'Trazabilidad documental completa',
    'Semáforo de habilitación: apto · por vencer · no apto',
    'Reportes exportables',
    'Accesos diferenciados por perfil',
  ],
  dash: {
    title: 'Panel de habilitación · Contratistas',
    stats: [
      { k: '142', l: 'Aptos', state: 'apto' },
      { k: '18', l: 'Por vencer', state: 'warn' },
      { k: '7', l: 'No aptos', state: 'nok' },
    ] as DashStat[],
    rows: [
      { co: 'Servicios Andinos S.A.', meta: 'Movimiento de suelos', expiry: 'Vence 12/08', status: 'apto', statusLabel: 'Apto' },
      { co: 'Transporte Cuyo SRL', meta: 'Logística pesada', expiry: 'Vence 18/06', status: 'warn', statusLabel: 'Por vencer' },
      { co: 'Montajes del Oeste', meta: 'Obra electromecánica', expiry: 'ART vencida', status: 'nok', statusLabel: 'No apto' },
      { co: 'Perforaciones SJ', meta: 'Sondeos', expiry: 'Vence 30/09', status: 'apto', statusLabel: 'Apto' },
    ] as DashRow[],
  },
};

/* ---------- Por qué Pragma ---------- */
export type Pillar = { icon: IconName; title: string; body: string };

export const why = {
  eyebrow: 'Por qué Pragma',
  title: 'Criterio jurídico-económico real.',
  lead: 'Dirigidos por profesionales del derecho y economistas, no solo un software.',
  pillars: [
    { icon: 'scale', title: 'Criterio jurídico real', body: 'Dirigidos por profesionales del derecho, no solo un software.' },
    { icon: 'chip', title: 'Tecnología con IA', body: 'Control en tiempo real, no planillas que se desactualizan.' },
    { icon: 'eye', title: 'Verificación en campo', body: 'Auditamos que lo declarado coincida con la operación.' },
    { icon: 'map-pin', title: 'Foco regional', body: 'Conocimiento del marco minero de la región de Cuyo.' },
  ] as Pillar[],
};

/* ---------- Contacto ---------- */
export type ContactInfo = { icon: IconName; label: string; value: string };

export const contact = {
  eyebrow: 'Hablemos',
  title: 'Controlemos juntos tu cadena de contratistas.',
  lead: 'Contanos sobre tu operación y te mostramos cómo reducir tu exposición legal.',
  info: [
    { icon: 'phone', label: 'Teléfono', value: site.phone },
    { icon: 'mail', label: 'Email', value: site.email },
    { icon: 'map-pin', label: 'Oficinas', value: 'Mendoza, Argentina · Santiago de Chile, Chile' },
  ] as ContactInfo[],
  form: {
    note: 'Te respondemos dentro de las 48 hs hábiles.',
    success: '¡Gracias! Recibimos tu consulta y te contactaremos pronto.',
    submitLabel: 'Solicitar diagnóstico',
    sentLabel: 'Enviado ✓',
  },
};

/* ---------- Footer ---------- */
export const footer = {
  desc: 'Auditoría y control de contratistas, gestión documental y asesoría legal-estratégica para minería, oil y gas.',
  navTitle: 'Navegación',
  contactTitle: 'Contacto',
  contactLines: [site.phone, site.email],
  officesTitle: 'Oficinas',
  officeLines: ['Mendoza, Argentina', 'Santiago de Chile, Chile'],
  copyright:
    '© 2026 Pragma Controllers — Consultoría para minería, oil y gas · Mendoza — Santiago de Chile',
  tagline: 'Diseñado con criterio. Construido con tecnología.',
};
