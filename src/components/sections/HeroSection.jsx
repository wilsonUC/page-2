import { useEffect, useRef, useState } from 'react'
import StatCard from '../ui/StatCard'
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleX,
  FileSpreadsheet,
  FileText,
  BookOpen,
  Lightbulb,
  MessageCircle,
  Monitor,
  Phone,
  PieChart,
  PiggyBank,
  Play,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Volume2,
  VolumeX,
  Wallet,
  Zap,
} from 'lucide-react'

const stats = [
  { value: '100%', label: 'Seguro y Privado', sublabel: 'Cifrado bancario', variant: 'emerald' },
  { value: 'S/ 30', label: 'Acceso completo', sublabel: 'Pago único', variant: 'primary' },
  { value: '24/7', label: 'Siempre Disponible', sublabel: 'Nube en tiempo real', variant: 'emerald' },
]

const benefits = [
  {
    title: 'Descubre los "gastos hormiga" que drenan tu dinero',
    description:
      'Identifica al instante a dónde se va cada centavo. Registra gastos diarios por categoría con notas y obtén la radiografía exacta de tus fugas.',
    badge: 'Control Diario',
    badgeColor: 'bg-rose-100/90 text-rose-800 border-rose-300/80',
    icon: Zap,
    iconColor: 'text-rose-600 bg-white border border-rose-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-rose-100/85 via-rose-50/70 to-rose-50/50 border-rose-200 hover:border-rose-300 hover:shadow-rose-500/10',
  },
  {
    title: 'Multiplica tu capacidad de ahorro cada mes',
    description:
      'Aparta excedentes en tu Pool de Ahorro global. Protege tu liquidez y traslada fondos a tus metas sin alterar tu balance operativo.',
    badge: 'Ahorro Real',
    badgeColor: 'bg-emerald-100/90 text-emerald-800 border-emerald-300/80',
    icon: PiggyBank,
    iconColor: 'text-emerald-600 bg-white border border-emerald-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-emerald-100/85 via-emerald-50/70 to-emerald-50/50 border-emerald-200 hover:border-emerald-300 hover:shadow-emerald-500/10',
  },
  {
    title: 'Presupuestos inteligentes que evitan sobregiros',
    description:
      'Establece límites mensuales por categoría, sigue barras de consumo visuales y registra gastos en 1 clic para no exceder tus topes.',
    badge: 'Presupuestos',
    badgeColor: 'bg-amber-100/90 text-amber-800 border-amber-300/80',
    icon: Wallet,
    iconColor: 'text-amber-600 bg-white border border-amber-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-amber-100/85 via-amber-50/70 to-amber-50/50 border-amber-200 hover:border-amber-300 hover:shadow-amber-500/10',
  },
  {
    title: 'Entiende tus finanzas en 3 segundos, no en 3 horas',
    description:
      'Panel central con 5 métricas clave en tiempo real: Balance disponible, Balance total, Ingresos, Gastos y Ahorro acumulado con filtros por periodo.',
    badge: 'Visual & Rápido',
    badgeColor: 'bg-indigo-100/90 text-indigo-800 border-indigo-300/80',
    icon: BarChart3,
    iconColor: 'text-indigo-600 bg-white border border-indigo-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-indigo-100/85 via-indigo-50/70 to-indigo-50/50 border-indigo-200 hover:border-indigo-300 hover:shadow-indigo-500/10',
  },
  {
    title: 'Metas con seguimiento de avance en vivo',
    description:
      'Fija objetivos para viajes, compras o emergencias. Asigna dinero del fondo de ahorros de forma libre o directa con fecha estimada.',
    badge: 'Objetivos',
    badgeColor: 'bg-violet-100/90 text-violet-800 border-violet-300/80',
    icon: Target,
    iconColor: 'text-violet-600 bg-white border border-violet-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-violet-100/85 via-violet-50/70 to-violet-50/50 border-violet-200 hover:border-violet-300 hover:shadow-violet-500/10',
  },
  {
    title: 'Control de gastos fijos y cuentas atrasadas',
    description:
      'Gestiona suscripciones y pagos mensuales con día de corte, abonos parciales y alertas automáticas de cobros pendientes en el dashboard.',
    badge: 'Recurrentes',
    badgeColor: 'bg-purple-100/90 text-purple-800 border-purple-300/80',
    icon: RefreshCw,
    iconColor: 'text-purple-600 bg-white border border-purple-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-purple-100/85 via-purple-50/70 to-purple-50/50 border-purple-200 hover:border-purple-300 hover:shadow-purple-500/10',
  },
  {
    title: 'Historial de 6 meses y reportes con gráficos',
    description:
      'Gráficos de dona interactivos con distribución porcentual de gastos e ingresos, comparativa semestral y tablas exportables.',
    badge: 'Reportes',
    badgeColor: 'bg-sky-100/90 text-sky-800 border-sky-300/80',
    icon: PieChart,
    iconColor: 'text-sky-600 bg-white border border-sky-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-sky-100/85 via-sky-50/70 to-sky-50/50 border-sky-200 hover:border-sky-300 hover:shadow-sky-500/10',
  },
  {
    title: 'Score de salud financiera y consejos por impacto',
    description:
      'Diagnóstico automatizado de 0 a 100 puntos con recomendaciones prácticas clasificadas en Alerta, Ahorro e Inversión con caché de 24h.',
    badge: 'Health Score',
    badgeColor: 'bg-teal-100/90 text-teal-800 border-teal-300/80',
    icon: Activity,
    iconColor: 'text-teal-600 bg-white border border-teal-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-teal-100/85 via-teal-50/70 to-teal-50/50 border-teal-200 hover:border-teal-300 hover:shadow-teal-500/10',
  },
  {
    title: 'Disponible en tu celular, tablet y computadora',
    description:
      'Instálala en tu celular como una app nativa con navegación táctil, soporte completo para Modo Oscuro/Claro y visualización compacta opcional.',
    badge: 'Multi-dispositivo',
    badgeColor: 'bg-slate-200 text-slate-800 border-slate-300',
    icon: Smartphone,
    iconColor: 'text-slate-700 bg-white border border-slate-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-slate-200/85 via-slate-100/70 to-slate-100/50 border-slate-300 hover:border-slate-400 hover:shadow-slate-500/10',
  },
  {
    title: 'Asistente financiero con Inteligencia Artificial',
    description:
      'Chatea con un asesor inteligente conectado en tiempo real a tus transacciones y balances reales para guiarte en cada decisión financiera.',
    badge: 'Potenciado por IA',
    badgeColor: 'bg-indigo-100/90 text-indigo-800 border-indigo-300/80',
    icon: Bot,
    iconColor: 'text-indigo-600 bg-white border border-indigo-200/90 shadow-sm',
    cardBg: 'bg-gradient-to-b from-blue-100/85 via-indigo-50/70 to-indigo-50/50 border-indigo-200 hover:border-indigo-300 hover:shadow-indigo-500/10',
  },
]

const comparisonRows = [
  { feature: 'Acceso desde celular, tablet y PC (App instalable)', finanzasTrack: true, excel: true, notebook: false },
  { feature: 'Dashboard en vivo con 5 métricas de balance automático', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Control de presupuestos y gasto rápido en 1 clic', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Metas de ahorro con pool global y fechas estimadas', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Gastos e ingresos fijos con alertas de corte mensual', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Asistente financiero con IA conectado a tus datos en vivo', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Score de salud financiera (0-100) y consejos prácticos', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Reportes semestrales y gráficos de dona interactivos', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Interfaz moderna con soporte para Modo Oscuro y Claro', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Registro ágil en menos de 5 segundos sin fórmulas', finanzasTrack: true, excel: false, notebook: true },
  { feature: 'Respaldo automático en la nube 24/7 y máxima privacidad', finanzasTrack: true, excel: false, notebook: false },
  { feature: 'Actualizaciones continuas de por vida incluidas', finanzasTrack: true, excel: false, notebook: false },
]



const appSections = [
  {
    id: 'dashboard',
    tag: 'Control Total',
    tagColor: 'bg-[#e8f9f8] text-[#0f766e] border border-teal-200/80',
    title: 'Tu Radiografía Financiera en 3 Segundos: Sabe Exactamente Cuánto Tienes',
    description:
      'Abre la app y en un solo vistazo ten claridad absoluta: cuánto entra, cuánto sale, cuánto puedes gastar sin culpa y cuánto has logrado ahorrar este mes.',
    bullets: [
      '5 métricas claras en tiempo real',
      'Evolución mensual interactiva',
      'Desglose visual de tus gastos',
      'Alertas de balance inmediato',
    ],
    bulletDot: 'bg-[#10b981]',
    bulletColor: 'text-[#10b981]',
    imageLeft: false,
    imageSrc: '/capturas/1-dashboard.gif',
    previewBadge: 'Panel Principal • 5 Métricas',
    previewGradient: 'from-teal-500/10 via-slate-900/5 to-indigo-500/10',
  },
  {
    id: 'ingresos',
    tag: 'Ingresos Claros',
    tagColor: 'bg-[#dcfce7] text-[#15803d] border border-emerald-200/80',
    title: 'Controla Cada Entrada de Dinero y Haz Crecer tus Fuentes de Ingreso',
    description:
      'Registra tu sueldo, ventas, comisiones o proyectos freelance en 5 segundos. Mira con orgullo cómo crecen tus entradas mes a mes sin fórmulas ni enredos.',
    bullets: [
      'Sueldo, negocios y extras',
      'Totales mensuales automáticos',
      'Historial ordenado y claro',
      'Registro rápido en 5 segundos',
    ],
    bulletDot: 'bg-[#22c55e]',
    bulletColor: 'text-[#22c55e]',
    imageLeft: true,
    imageSrc: '/capturas/2-ingresos.gif',
    previewBadge: 'Entradas • Categorías Reales',
    previewGradient: 'from-emerald-500/10 via-slate-900/5 to-teal-500/10',
  },
  {
    id: 'gastos',
    tag: 'Cero Fugas',
    tagColor: 'bg-[#fee2e2] text-[#dc2626] border border-rose-200/80',
    title: 'Cierra las Fugas de Dinero y Elimina los Gastos Hormiga',
    description:
      'Descubre esos pequeños gastos invisibles que te dejan en cero antes del día 20. Regístralos al instante y mantén siempre el control en tus manos.',
    bullets: [
      'Identifica gastos innecesarios',
      'Top de gastos que vacían tu cuenta',
      'Impacto inmediato en tu saldo',
      'Historial editable en 1 toque',
    ],
    bulletDot: 'bg-[#f87171]',
    bulletColor: 'text-[#f87171]',
    imageLeft: false,
    imageSrc: '/capturas/3-gastos.gif',
    previewBadge: 'Egresos • Radiografía Financiera',
    previewGradient: 'from-rose-500/10 via-slate-900/5 to-amber-500/10',
  },
  {
    id: 'presupuestos',
    tag: 'Presupuesto Fácil',
    tagColor: 'bg-[#e0e7ff] text-[#4f46e5] border border-indigo-200/80',
    title: 'Límites Claros para que Nunca Más Termines el Mes en Cero',
    description:
      'Fija un tope para compras, salidas y comida. Las barras visuales te alertan antes de excederte para que disfrutes de tu dinero sin remordimiento.',
    bullets: [
      'Topes mensuales realistas',
      'Barras visuales tipo semáforo',
      'Botón de registro en 1 clic',
      'Te avisa antes de sobregirarte',
    ],
    bulletDot: 'bg-[#818cf8]',
    bulletColor: 'text-[#818cf8]',
    imageLeft: true,
    imageSrc: '/capturas/4-presupuestos.gif',
    previewBadge: 'Presupuestos • 1 Clic',
    previewGradient: 'from-amber-500/10 via-slate-900/5 to-orange-500/10',
  },
  /*
  // Oculto temporalmente: Metas
  {
    id: 'metas',
    tag: 'Sueños Cumplidos',
    tagColor: 'bg-[#dbeafe] text-[#2563eb] border border-blue-200/80',
    title: 'Alcanza tus Metas: Viajes, Deudas y tu Fondo de Emergencia',
    description:
      'Aparta dinero para lo que de verdad sueñas. Visualiza el avance de tus metas en tiempo real y motívate viendo cómo cada mes estás más cerca de lograrlo.',
    bullets: [
      'Fondo de tranquilidad y emergencias',
      'Metas para viajes, auto o compras',
      'Barra de avance en tiempo real',
      'Calcula cuándo alcanzarás tu meta',
    ],
    bulletDot: 'bg-[#60a5fa]',
    bulletColor: 'text-[#60a5fa]',
    imageLeft: false,
    imageSrc: '/capturas/5-metas.gif',
    previewBadge: 'Metas • Pool de Ahorro',
    previewGradient: 'from-violet-500/10 via-slate-900/5 to-purple-500/10',
  },
  // Oculto temporalmente: Recurrentes
  {
    id: 'recurrentes',
    tag: 'Cero Olvidos',
    tagColor: 'bg-[#f3e8ff] text-[#9333ea] border border-purple-200/80',
    title: 'Adiós a las Multas e Intereses por Pagos Atrasados',
    description:
      'Organiza tus suscripciones, alquiler y tarjetas con fecha de corte. Recibe alertas visuales automáticas para que nunca más pagues moras por olvidos.',
    bullets: [
      'Recordatorio automático de corte',
      'Alertas de pagos pendientes',
      'Registro de pagos y abonos',
      'Paz mental sin cobros sorpresa',
    ],
    bulletDot: 'bg-[#c084fc]',
    bulletColor: 'text-[#c084fc]',
    imageLeft: true,
    imageSrc: '/capturas/6-recurrentes.gif',
    previewBadge: 'Recurrentes • Días de Corte',
    previewGradient: 'from-purple-500/10 via-slate-900/5 to-indigo-500/10',
  },
  */
  {
    id: 'reportes',
    tag: 'Claridad Total',
    tagColor: 'bg-[#ffedd5] text-[#ea580c] border border-orange-200/80',
    title: 'Reportes Visuales que Entiendes al Instante Sin Ser Experto',
    description:
      'Gráficos interactivos limpios que te muestran con total transparencia a dónde se fue cada centavo y cómo va creciendo tu ahorro mes con mes.',
    bullets: [
      'Gráficos de dona interactivos',
      'Porcentajes claros de tus gastos',
      'Comparativa mes a mes',
      'Información lista para exportar',
    ],
    bulletDot: 'bg-[#fb923c]',
    bulletColor: 'text-[#fb923c]',
    imageLeft: false,
    imageSrc: '/capturas/7-reportes.gif',
    previewBadge: 'Reportes • Donut Charts',
    previewGradient: 'from-blue-500/10 via-slate-900/5 to-cyan-500/10',
  },
  /*
  // Oculto temporalmente: Consejos / Salud Financiera
  {
    id: 'consejos',
    tag: 'Salud Financiera',
    tagColor: 'bg-[#ccfbf1] text-[#0f766e] border border-teal-200/80',
    title: 'Tu Calificación Financiera y Consejos Directos para Mejorar',
    description:
      'Conoce tu puntuación de 0 a 100 y recibe recomendaciones prácticas para recortar gastos innecesarios, liquidar deudas y empezar a generar rendimientos.',
    bullets: [
      'Puntuación de 0 a 100 en vivo',
      'Consejos directos según tus gastos',
      'Estrategias para multiplicar tu ahorro',
      'Diagnóstico actualizado diariamente',
    ],
    bulletDot: 'bg-[#2dd4bf]',
    bulletColor: 'text-[#2dd4bf]',
    imageLeft: true,
    imageSrc: '/capturas/8-consejos.gif',
    previewBadge: 'Salud Financiera • Score 0-100',
    previewGradient: 'from-teal-500/10 via-slate-900/5 to-emerald-500/10',
  },
  */
  {
    id: 'movil',
    tag: 'Siempre Contigo',
    tagColor: 'bg-[#e0e7ff] text-[#3730a3] border border-indigo-200/80',
    title: 'Tus Finanzas en tu Bolsillo: Úsala en tu Celular o PC',
    description:
      'Lleva FinanzasTrack a donde vayas. Instálala en tu smartphone (Android o iPhone) o laptop con un solo toque y registra cualquier gasto en la calle en solo 5 segundos.',
    bullets: [
      'Instalable en tu pantalla de inicio',
      'Navegación táctil súper rápida',
      'Compatible con iPhone, Android y PC',
      'Sincronización instantánea en la nube',
    ],
    bulletDot: 'bg-[#6366f1]',
    bulletColor: 'text-[#6366f1]',
    imageLeft: true,
    imageSrc: '/capturas/pwa-mobile.jpg',
    previewBadge: 'App Móvil • Android / iOS',
    previewGradient: 'from-indigo-500/15 via-blue-900/10 to-teal-500/15',
  },
]

const aiCards = [
  {
    title: 'Tu Radiografía Financiera al Instante',
    description: 'Descubre de 0 a 100 qué tan saludables son tus hábitos y qué corregir hoy para que no te falte dinero a fin de mes.',
    Icon: BarChart3,
    badge: 'Score de Salud',
  },
  {
    title: 'Consejos Directos que Salvan tu Dinero',
    description: 'Alertas automáticas cuando un gasto sea riesgoso y recomendaciones prácticas para recortar costos sin sacrificios.',
    Icon: Lightbulb,
    badge: 'Ahorro Real',
  },
  {
    title: 'Pregúntale Cualquier Duda a tu Dinero',
    description: '¿Puedo darme este gusto? ¿Cómo pago esta deuda más rápido? Tu asesor te responde al instante con tus números reales.',
    Icon: MessageCircle,
    badge: 'Chat en Vivo',
  },
  {
    title: 'Multiplica y Protege tus Ahorros',
    description: 'Estrategias claras para hacer crecer tus excedentes y construir un fondo de tranquilidad para tu futuro.',
    Icon: TrendingUp,
    badge: 'Crecimiento',
  },
]

const pricingFeatures = [
  'Acceso completo a los módulos del sistema',
  'Dashboard en tiempo real con gráficos',
  'Metas de ahorro y asignación de fondos',
  'Personalización de modo oscuro y claro',
  'Control de ingresos, gastos y ahorros',
  'Acceso desde cualquier dispositivo',
  'Soporte técnico y actualizaciones continuas',
]

const pricingBonuses = [
  {
    icon: BookOpen,
    title: 'Plantilla de Aprendizaje y Control de finanzas de Cero',
    description:
      'Estrategias paso a paso para aprender y maximizar mi ahorro de dinero planificada con el método 50 - 30 - 20.',
    value: 'Valor: S/ 30',
  },
  {
    icon: MessageCircle,
    title: 'Asesoría 1:1 sobre Crédito personal',
    description:
      'Hoja de ruta clara para construir y/o reparar tu crédito personal en 6 o 12 meses, según tu caso.',
    value: 'Valor: S/ 170',
  },
]


const faqItems = [
  {
    question: '¿El precio de S/ 30 es mensual o es un plan anual?',
    answer:
      'El precio de promoción de S/ 30 corresponde a un plan anual (acceso completo durante 1 año / 12 meses). No cobramos mensualidades: con un solo pago de S/ 30 disfrutas de acceso a toda la plataforma, bonos y actualizaciones durante todo el año.',
  },
  {
    question: '¿Tengo que conectar mis tarjetas o claves bancarias a la plataforma?',
    answer:
      'No, en ningún momento. FinanzasTrack nunca te pedirá números de tarjeta, contraseñas de banco ni accesos financieros. Tú registras tus movimientos de forma 100% privada, manual y en menos de 5 segundos, garantizando tu total seguridad.',
  },
  {
    question: '¿Cómo funciona el Asistente Financiero con Inteligencia Artificial (IA)?',
    answer:
      'La IA está conectada en tiempo real a tus transacciones y balances. Puedes chatear con ella en cualquier momento para pedirle que analice tus gastos del mes, identifique fugas de dinero, calcule cuánto puedes ahorrar o te sugiera un plan para salir de deudas.',
  },
  {
    question: '¿Cómo se instala en mi celular (Android / iPhone) y computadora?',
    answer:
      'Es muy fácil y no requiere descargas pesadas. Al ingresar desde tu navegador (Chrome en Android o Safari en iPhone), solo seleccionas "Agregar a la pantalla de inicio" o "Instalar". Se guarda directamente en tu celular como cualquier otra app, con carga ultra rápida y sin ocupar memoria de tu teléfono.',
  },
  {
    question: '¿Cómo me ayuda el sistema a no gastar de más en el mes?',
    answer:
      'El sistema calcula automáticamente tu "Balance Disponible", descontando tus gastos fijos y el dinero que decides apartar en Ahorros y Metas. Además, cada categoría de Presupuesto tiene barras de progreso visuales y alertas que te avisan antes de que superes tu límite mensual.',
  },
  {
    question: '¿Qué diferencia a FinanzasTrack de una plantilla de Excel o Google Sheets?',
    answer:
      'En Excel debes crear y mantener fórmulas complejas, es incómodo de usar en celular y no te da alertas automáticas. FinanzasTrack calcula todo en tiempo real, cuenta con botón de gasto rápido en 1 clic, gráficos interactivos de 6 meses y un asesor IA disponible 24/7.',
  },
  {
    question: '¿Cómo realizo el pago y cuánto demora la activación de mi cuenta?',
    answer:
      'El proceso toma menos de 15 minutos. Haces clic en el botón de WhatsApp, coordinamos el pago por Yape o Transferencia Bancaria, te generamos tus credenciales de acceso y puedes empezar a ordenar tus finanzas de inmediato.',
  },
]

const testimonials = [
  {
    quote:
      'Llevaba años peleando con plantillas de Excel que siempre dejaba a medias. Con FinanzasTrack anoto mis compras diarias en 5 segundos desde el celular. El cálculo automático de mi Balance Disponible me salvó de sobregirarme a fin de mes.',
    name: 'Rodrigo Salazar',
    role: 'Diseñador UI / Freelance',
    avatarBg: 'bg-emerald-100 text-emerald-700',
    highlight: 'Control de gastos diario',
    image: '/rodrigo-salazar.png',
  },
  {
    quote:
      'Lo que más me encanta es el módulo de Metas conectado al Pool de Ahorro y el Asistente IA integrado. Le pregunto cómo voy con mi presupuesto de viaje a Cusco y me da consejos financieros exactos con mis números reales.',
    name: 'Valeria Cárdenas',
    role: 'Coordinadora de Marketing',
    avatarBg: 'bg-indigo-100 text-indigo-700',
    highlight: 'Metas de ahorro e IA',
    image: '/valeria-cardenas.png',
  },
  {
    quote:
      'Tengo 8 pagos fijos entre alquiler, internet y préstamos. El sistema de transacciones recurrentes con alertas de corte y atrasos me quitó un peso enorme de encima. Pagué los S/ 30 una sola vez y valió totalmente la pena.',
    name: 'Jorge Luis Huamán',
    role: 'Ingeniero de Sistemas',
    avatarBg: 'bg-purple-100 text-purple-700',
    highlight: 'Gestión de recurrentes',
    image: '/jorge-luis-huaman.png',
  },
]

const trustStats = [
  { value: '4.9 / 5', label: 'Calificación promedio' },
  { value: '98%', label: 'Satisfacción garantizada' },
  { value: '24/7', label: 'Disponibilidad en la nube' },
]

function ComparisonStatus({ enabled }) {
  if (enabled) {
    return (
      <span className="mx-auto grid h-7 w-7 place-content-center rounded-full bg-emerald-100/90 text-emerald-600 shadow-sm border border-emerald-200/60 transition-transform duration-200 hover:scale-110">
        <Check className="h-4 w-4 stroke-[3]" />
      </span>
    )
  }
  return (
    <span className="mx-auto grid h-7 w-7 place-content-center rounded-full bg-slate-100/80 text-slate-400 border border-slate-200/60">
      <CircleX className="h-4 w-4 stroke-[2]" />
    </span>
  )
}

const COUNTDOWN_STORAGE_KEY = 'finanzastrack_offer_end_time'
const COUNTDOWN_DURATION_MS = 24 * 60 * 60 * 1000 // 24 horas

function getInitialCountdownSeconds() {
  if (typeof window === 'undefined') return 24 * 3600
  try {
    const now = Date.now()
    const stored = window.localStorage.getItem(COUNTDOWN_STORAGE_KEY)
    if (stored) {
      const endTime = parseInt(stored, 10)
      if (!isNaN(endTime) && endTime > now) {
        return Math.floor((endTime - now) / 1000)
      }
    }
    const newEndTime = now + COUNTDOWN_DURATION_MS
    window.localStorage.setItem(COUNTDOWN_STORAGE_KEY, String(newEndTime))
    return Math.floor(COUNTDOWN_DURATION_MS / 1000)
  } catch {
    return 24 * 3600
  }
}

function HeroSection() {
  const [openFaq, setOpenFaq] = useState(0)
  const [countdownSeconds, setCountdownSeconds] = useState(getInitialCountdownSeconds)
  // 1. Video Horizontal Superior (arriba)
  const [isHorizontalPlaying, setIsHorizontalPlaying] = useState(false)
  const horizontalVideoRef = useRef(null)

  const handlePlayHorizontal = () => {
    setIsHorizontalPlaying(true)
    if (horizontalVideoRef.current) {
      horizontalVideoRef.current.play()
    }
  }

  // 2. Stories / Reels Widget (como en Instagram / EmbedSocial)
  const [activeStoryIndex, setActiveStoryIndex] = useState(0)
  const [isVerticalAppPlaying, setIsVerticalAppPlaying] = useState(false)
  const [isVerticalAppMuted, setIsVerticalAppMuted] = useState(false)
  const [verticalAppProgress, setVerticalAppProgress] = useState(0)
  const verticalAppRef = useRef(null)

  const handleToggleVerticalAppPlay = () => {
    if (verticalAppRef.current) {
      if (isVerticalAppPlaying) {
        verticalAppRef.current.pause()
        setIsVerticalAppPlaying(false)
      } else {
        if (isRealCasePlaying && realCaseRef.current) {
          realCaseRef.current.pause()
          setIsRealCasePlaying(false)
        }
        if (isHorizontalPlaying && horizontalVideoRef.current) {
          horizontalVideoRef.current.pause()
          setIsHorizontalPlaying(false)
        }
        verticalAppRef.current.play()
        setIsVerticalAppPlaying(true)
      }
    }
  }

  const handleToggleVerticalAppMute = (e) => {
    e.stopPropagation()
    if (verticalAppRef.current) {
      verticalAppRef.current.muted = !isVerticalAppMuted
      setIsVerticalAppMuted(!isVerticalAppMuted)
    }
  }

  const handleVerticalAppTimeUpdate = () => {
    if (verticalAppRef.current && verticalAppRef.current.duration) {
      const prog = (verticalAppRef.current.currentTime / verticalAppRef.current.duration) * 100
      setVerticalAppProgress(prog)
    }
  }

  // 3. Video Vertical 2: Caso Real con Dinero en Efectivo e IA
  const [isRealCasePlaying, setIsRealCasePlaying] = useState(false)
  const [isRealCaseMuted, setIsRealCaseMuted] = useState(false)
  const [realCaseProgress, setRealCaseProgress] = useState(0)
  const realCaseRef = useRef(null)

  const handleToggleRealCasePlay = () => {
    if (realCaseRef.current) {
      if (isRealCasePlaying) {
        realCaseRef.current.pause()
        setIsRealCasePlaying(false)
      } else {
        if (isVerticalAppPlaying && verticalAppRef.current) {
          verticalAppRef.current.pause()
          setIsVerticalAppPlaying(false)
        }
        if (isHorizontalPlaying && horizontalVideoRef.current) {
          horizontalVideoRef.current.pause()
          setIsHorizontalPlaying(false)
        }
        realCaseRef.current.play()
        setIsRealCasePlaying(true)
      }
    }
  }

  const handleToggleRealCaseMute = (e) => {
    e.stopPropagation()
    if (realCaseRef.current) {
      realCaseRef.current.muted = !isRealCaseMuted
      setIsRealCaseMuted(!isRealCaseMuted)
    }
  }

  const handleRealCaseTimeUpdate = () => {
    if (realCaseRef.current && realCaseRef.current.duration) {
      const prog = (realCaseRef.current.currentTime / realCaseRef.current.duration) * 100
      setRealCaseProgress(prog)
    }
  }

  const handleSlideStories = (direction) => {
    if (direction === 'prev') {
      setActiveStoryIndex((prev) => (prev === 0 ? 1 : 0))
    } else {
      setActiveStoryIndex((prev) => (prev === 1 ? 0 : 1))
    }
  }

  useEffect(() => {
    const updateCountdown = () => {
      try {
        const now = Date.now()
        let stored = window.localStorage.getItem(COUNTDOWN_STORAGE_KEY)
        let endTime = stored ? parseInt(stored, 10) : null

        // Si no existe o ya vencieron las 24 horas, inicia un nuevo ciclo continuo de 24 horas
        if (!endTime || isNaN(endTime) || endTime <= now) {
          endTime = now + COUNTDOWN_DURATION_MS
          window.localStorage.setItem(COUNTDOWN_STORAGE_KEY, String(endTime))
        }

        const remaining = Math.max(0, Math.floor((endTime - now) / 1000))
        setCountdownSeconds(remaining)
      } catch {
        setCountdownSeconds((prev) => (prev > 0 ? prev - 1 : 24 * 3600))
      }
    }

    updateCountdown()
    const id = window.setInterval(updateCountdown, 1000)
    return () => window.clearInterval(id)
  }, [])

  const countdownDays = Math.floor(countdownSeconds / 86400)
  const countdownHours = Math.floor((countdownSeconds % 86400) / 3600)
  const countdownMinutes = Math.floor((countdownSeconds % 3600) / 60)
  const countdownSecs = countdownSeconds % 60

  return (
    <main className="w-full">
      {/* ============================================================== */}
      {/* HERO SECTION CON FONDO DEGRADADO (IDENTIDAD FINANZAS TRACK)    */}
      {/* ============================================================== */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#dbeafe] via-[#e0e7ff]/75 via-40% to-[#ccfbf1] pb-16 pt-10 sm:pb-20 sm:pt-14 md:pb-24 md:pt-16 border-b border-indigo-100/70 shadow-[0_4px_25px_rgba(37,99,235,0.06)]">
        {/* Resplandores ambientales decorativos que potencian el degradado */}
        <div
          className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-teal-400/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-[700px] rounded-full bg-indigo-300/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6">
          {/* 1. HERO PRINCIPAL */}
          <section id="inicio" className="scroll-mt-24 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-white/90 px-4 py-1.5 text-xs font-bold text-rose-700 shadow-sm backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-rose-600" />
              <span>¿SIENTES QUE EL DINERO DESAPARECE CADA MES?</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl md:leading-[1.15]">
              Sistema web de Finanzas Personales.{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500 bg-clip-text text-transparent">
                Deja de preguntarte a dónde se va tu dinero.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              La forma más simple de controlar tus ingresos y gastos de la mano con la IA los 365 días. Olvídate de Excel, libretas, hojas complicadas.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4">
              <a
                href="#precio"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 text-base font-bold text-white shadow-[0_4px_16px_rgba(5,150,105,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-[0_8px_24px_rgba(5,150,105,0.45)] sm:w-auto"
              >
                <span>Quiero Ordenar Mis Finanzas Ahora</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#beneficios"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300/90 bg-white/90 px-7 py-4 text-base font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-slate-400 hover:bg-white sm:w-auto"
              >
                <span>Ver cómo funciona 👇</span>
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5 text-emerald-800 bg-emerald-50/90 border border-emerald-200/80 rounded-full px-3 py-1 shadow-sm">
                <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[3]" /> Plan Anual S/ 30
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 bg-white/85 border border-slate-200/80 rounded-full px-3 py-1 shadow-sm">
                <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[3]" /> Acceso anual completo
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 bg-white/85 border border-slate-200/80 rounded-full px-3 py-1 shadow-sm">
                <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[3]" /> Sin mensualidades
              </span>
            </div>
          </section>

          {/* 2. STATS CARDS */}
          <section className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                sublabel={stat.sublabel}
                variant={stat.variant}
              />
            ))}
          </section>
        </div>

        {/* Suave difuminado al final del degradado */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-[#f1f5f9]/70"
          aria-hidden="true"
        />
      </div>

      {/* CONTENEDOR PRINCIPAL DEL RESTO DE LA PÁGINA */}
      <div className="mx-auto w-full px-4 pb-20 pt-10 sm:px-6">
        {/* 3. DEMO VIDEO CARD (HORIZONTAL - ARRIBA) */}
        <section className="group mx-auto mt-14 w-full max-w-5xl rounded-3xl border border-slate-200/90 bg-white p-5 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10 md:p-7">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3.5 min-w-0">
              <span className="relative flex h-12 w-12 min-h-[48px] min-w-[48px] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#1d4ed8] via-[#0284c7] to-[#2dd4bf] p-2.5 shadow-md shadow-teal-500/25">
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[logo-shine_3.5s_infinite]"
                  aria-hidden="true"
                />
                <img
                  src="/v4.svg"
                  alt="FinanzasTrack"
                  className="relative z-10 h-7 w-7 object-contain drop-shadow-sm shrink-0"
                />
              </span>
              <div className="min-w-0">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                  Demostración en Video
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Conoce la interfaz fluida y las funciones clave de FinanzasTrack en acción (20 seg)
                </p>
              </div>
            </div>

            <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Tour de la Plataforma
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-inner">
            <div className="relative w-full aspect-video bg-slate-950 flex items-center justify-center">
              <video
                ref={horizontalVideoRef}
                poster="/finanzastrack-horizontal-poster.jpg"
                className="h-full w-full object-contain rounded-2xl"
                controls={isHorizontalPlaying}
                playsInline
                preload="metadata"
                onPlay={() => {
                  setIsHorizontalPlaying(true)
                  if (isVerticalAppPlaying && verticalAppRef.current) {
                    verticalAppRef.current.pause()
                    setIsVerticalAppPlaying(false)
                  }
                  if (isRealCasePlaying && realCaseRef.current) {
                    realCaseRef.current.pause()
                    setIsRealCasePlaying(false)
                  }
                }}
                onPause={() => setIsHorizontalPlaying(false)}
              >
                <source src="/finanzastrack-horizontal.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video HTML5.
              </video>

              {/* Portada personalizada con botón de Play animado */}
              {!isHorizontalPlaying && (
                <div
                  onClick={handlePlayHorizontal}
                  className="group/overlay absolute inset-0 z-10 flex cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-slate-950/30 transition-all duration-300 hover:bg-slate-950/10"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handlePlayHorizontal()
                    }
                  }}
                  aria-label="Reproducir video de demostración de FinanzasTrack"
                >
                  <img
                    src="/finanzastrack-horizontal-poster.jpg"
                    alt="Vista previa de FinanzasTrack"
                    className="absolute inset-0 h-full w-full object-cover sm:object-contain transition-transform duration-500 ease-out group-hover/overlay:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-slate-950/40 transition-opacity duration-300 group-hover/overlay:opacity-75" />

                  <div className="relative z-20 flex flex-col items-center gap-3.5 p-4 text-center">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute inline-flex h-20 w-20 sm:h-24 sm:w-24 animate-ping rounded-full bg-indigo-500/30 duration-1000" />
                      <span className="absolute inline-flex h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-indigo-600/40 blur-md" />

                      <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-indigo-600 to-teal-500 p-4 text-white shadow-[0_0_30px_rgba(99,102,241,0.6)] ring-4 ring-white/30 transition-all duration-300 group-hover/overlay:scale-110 group-hover/overlay:ring-white/60 group-hover/overlay:shadow-[0_0_40px_rgba(99,102,241,0.85)] active:scale-95">
                        <Play className="ml-1 h-7 w-7 sm:h-9 sm:w-9 fill-white text-white transition-transform duration-300 group-hover/overlay:scale-105" />
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-slate-900/85 px-4 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-xl backdrop-blur-md transition-all duration-300 group-hover/overlay:bg-indigo-900/90 group-hover/overlay:border-indigo-400/60">
                      <Sparkles className="h-3.5 w-3.5 text-teal-400 animate-pulse" />
                      <span>Haz clic para ver el recorrido de 20 segundos</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 4. BENEFICIOS */}
        <section id="beneficios" className="mx-auto mt-24 w-full max-w-6xl scroll-mt-24">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Beneficios Claros</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Di adiós al desorden financiero.{' '}
              <span className="text-indigo-600">Tus cuentas bajo control en minutos.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              Herramientas diseñadas para que ahorrar y ordenar tus gastos sea fácil y motivador.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((b) => (
              <article
                key={b.title}
                className={`group rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${b.cardBg}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`grid h-10 w-10 place-content-center rounded-xl ${b.iconColor} shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                    <b.icon className="h-5 w-5" />
                  </span>
                  <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-wide ${b.badgeColor}`}>
                    {b.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold leading-snug text-slate-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {b.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* 4.5 WIDGET DE REELS / HISTORIAS ESTILO INSTAGRAM (EMBEDSOCIAL) */}
        <section id="experiencia-movil" className="mx-auto mt-24 w-full max-w-5xl scroll-mt-24">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-indigo-50/90 px-4 py-1.5 text-xs font-bold text-indigo-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
              <span>MIRA LA APP EN ACCIÓN REAL</span>
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Descubre FinanzasTrack{' '}
              <span className="bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                en acción directa
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              Mira cómo funciona la app en el día a día y conoce el caso real con dinero en efectivo que demuestra cómo poner orden a tus finanzas.
            </p>
          </div>

          {/* Carrusel de Stories / Reels con flechas laterales */}
          <div className="relative mx-auto flex items-center justify-center gap-4 sm:gap-6 py-4">
            {/* Flecha Izquierda (<) */}
            <button
              type="button"
              onClick={() => handleSlideStories('prev')}
              className="group/arrow z-30 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-slate-200/90 text-slate-700 transition-all duration-200 hover:scale-110 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-[0_8px_25px_rgba(79,70,229,0.2)] active:scale-95"
              aria-label="Historia anterior"
            >
              <ChevronLeft className="h-6 w-6 stroke-[2.5] transition-transform group-hover/arrow:-translate-x-0.5" />
            </button>

            {/* Contenedor de las dos Story Cards */}
            <div className="flex items-center justify-center gap-5 sm:gap-8 w-full">
              {/* HISTORIA 1: App Móvil (finanzastrack-vertical.mp4) */}
              <div
                className={`relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-slate-950 shadow-2xl transition-all duration-300 select-none group/story ${
                  activeStoryIndex === 0 ? 'ring-2 ring-indigo-500/40 scale-100 opacity-100' : 'sm:scale-95 sm:opacity-95'
                } ${activeStoryIndex === 1 ? 'hidden md:block' : 'block'}`}
              >
                {/* Barra de progreso superior estilo Instagram Story */}
                <div className="absolute top-3 inset-x-3.5 z-30 flex gap-1 pointer-events-none">
                  <div className="h-1 flex-1 bg-white/35 rounded-full overflow-hidden backdrop-blur-sm">
                    <div
                      className="h-full bg-white rounded-full transition-all duration-100 shadow-sm"
                      style={{ width: `${verticalAppProgress}%` }}
                    />
                  </div>
                </div>

                {/* Cabecera superior: Badge perfil + Logo Instagram + Botón Audio */}
                <div className="absolute top-6 inset-x-3.5 z-30 flex items-center justify-between">
                  {/* Pastilla de perfil estilo EmbedSocial / Instagram */}
                  <div className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 shadow-md border border-white/60">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#1d4ed8] via-[#0284c7] to-[#2dd4bf] p-1 shadow-sm">
                      <img src="/v4.svg" alt="FinanzasTrack" className="h-3.5 w-3.5 object-contain" />
                    </span>
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-1 leading-none">
                        <span className="text-[12px] font-bold text-slate-900 tracking-tight">finanzastrack</span>
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#0095f6]">
                          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7l-4.1-4.1 1.4-1.4 2.7 2.7 6.9-6.9 1.4 1.4-8.3 8.3z" />
                        </svg>
                      </div>
                      <span className="text-[9px] text-slate-500 font-medium leading-tight mt-0.5">App Móvil • 25s</span>
                    </div>
                  </div>

                  {/* Icono de Instagram y botón de volumen */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handleToggleVerticalAppMute}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:bg-black/80 transition-transform active:scale-90"
                      aria-label={isVerticalAppMuted ? 'Activar sonido' : 'Silenciar sonido'}
                    >
                      {isVerticalAppMuted ? (
                        <VolumeX className="h-3.5 w-3.5 text-rose-300" />
                      ) : (
                        <Volume2 className="h-3.5 w-3.5 text-emerald-300" />
                      )}
                    </button>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-md">
                      <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Video de fondo a pantalla completa dentro de la card */}
                <div
                  className="relative h-full w-full cursor-pointer"
                  onClick={handleToggleVerticalAppPlay}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleToggleVerticalAppPlay()
                    }
                  }}
                  aria-label={isVerticalAppPlaying ? 'Pausar historia' : 'Reproducir historia'}
                >
                  <video
                    ref={verticalAppRef}
                    src="/finanzastrack-vertical.mp4"
                    poster="/finanzastrack-vertical-poster.jpg"
                    playsInline
                    preload="metadata"
                    muted={isVerticalAppMuted}
                    onTimeUpdate={handleVerticalAppTimeUpdate}
                    onPlay={() => setIsVerticalAppPlaying(true)}
                    onPause={() => setIsVerticalAppPlaying(false)}
                    onEnded={() => {
                      setIsVerticalAppPlaying(false)
                      setVerticalAppProgress(0)
                    }}
                    className="h-full w-full object-cover"
                  >
                    Tu navegador no soporta la reproducción de video HTML5.
                  </video>

                  {/* Botón Central Play cuando está pausado */}
                  {!isVerticalAppPlaying && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/35 backdrop-blur-[1px] transition-all group-hover/story:bg-black/20">
                      <div className="relative flex items-center justify-center">
                        <span className="absolute inline-flex h-16 w-16 animate-ping rounded-full bg-white/40 duration-1000" />
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-2xl transition-transform duration-300 group-hover/story:scale-110">
                          <Play className="ml-0.5 h-6 w-6 fill-slate-900 text-slate-900" />
                        </div>
                      </div>
                      <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white border border-white/20 shadow-md">
                        <Sparkles className="h-3 w-3 text-teal-300" />
                        Ver app en celular
                      </span>
                    </div>
                  )}

                  {/* Pie de foto estilo Instagram Reel / Story */}
                  <div className="absolute bottom-0 inset-x-0 z-20 p-4 pt-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white pointer-events-none">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold text-white border border-white/30">
                        📱 App Instalable
                      </span>
                    </div>
                    <p className="text-xs text-white/95 leading-relaxed font-medium line-clamp-2">
                      Navegación táctil y registro en 5 segundos sin fórmulas.
                      <span className="font-bold text-teal-300 ml-1">#FinanzasTrack #AppMovil</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* HISTORIA 2: Caso Real con Dinero en Efectivo e IA (finanzastrack.mp4) */}
              <div
                className={`relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-slate-950 shadow-2xl transition-all duration-300 select-none group/story ${
                  activeStoryIndex === 1 ? 'ring-2 ring-indigo-500/40 scale-100 opacity-100' : 'sm:scale-95 sm:opacity-95'
                } ${activeStoryIndex === 0 ? 'hidden md:block' : 'block'}`}
              >
                {/* Barra de progreso superior estilo Instagram Story */}
                <div className="absolute top-3 inset-x-3.5 z-30 flex gap-1 pointer-events-none">
                  <div className="h-1 flex-1 bg-white/35 rounded-full overflow-hidden backdrop-blur-sm">
                    <div
                      className="h-full bg-white rounded-full transition-all duration-100 shadow-sm"
                      style={{ width: `${realCaseProgress}%` }}
                    />
                  </div>
                </div>

                {/* Cabecera superior: Badge perfil + Logo Instagram + Botón Audio */}
                <div className="absolute top-6 inset-x-3.5 z-30 flex items-center justify-between">
                  {/* Pastilla de perfil estilo EmbedSocial / Instagram */}
                  <div className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 shadow-md border border-white/60">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#1d4ed8] via-[#0284c7] to-[#2dd4bf] p-1 shadow-sm">
                      <img src="/v4.svg" alt="FinanzasTrack" className="h-3.5 w-3.5 object-contain" />
                    </span>
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-1 leading-none">
                        <span className="text-[12px] font-bold text-slate-900 tracking-tight">finanzastrack</span>
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#0095f6]">
                          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7l-4.1-4.1 1.4-1.4 2.7 2.7 6.9-6.9 1.4 1.4-8.3 8.3z" />
                        </svg>
                      </div>
                      <span className="text-[9px] text-slate-500 font-medium leading-tight mt-0.5">Caso Real • 11s</span>
                    </div>
                  </div>

                  {/* Icono de Instagram y botón de volumen */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handleToggleRealCaseMute}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:bg-black/80 transition-transform active:scale-90"
                      aria-label={isRealCaseMuted ? 'Activar sonido' : 'Silenciar sonido'}
                    >
                      {isRealCaseMuted ? (
                        <VolumeX className="h-3.5 w-3.5 text-rose-300" />
                      ) : (
                        <Volume2 className="h-3.5 w-3.5 text-emerald-300" />
                      )}
                    </button>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-md">
                      <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Video de fondo a pantalla completa dentro de la card */}
                <div
                  className="relative h-full w-full cursor-pointer"
                  onClick={handleToggleRealCasePlay}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleToggleRealCasePlay()
                    }
                  }}
                  aria-label={isRealCasePlaying ? 'Pausar historia' : 'Reproducir historia'}
                >
                  <video
                    ref={realCaseRef}
                    src="/finanzastrack.mp4"
                    poster="/finanzastrack-poster.jpg"
                    playsInline
                    preload="metadata"
                    muted={isRealCaseMuted}
                    onTimeUpdate={handleRealCaseTimeUpdate}
                    onPlay={() => setIsRealCasePlaying(true)}
                    onPause={() => setIsRealCasePlaying(false)}
                    onEnded={() => {
                      setIsRealCasePlaying(false)
                      setRealCaseProgress(0)
                    }}
                    className="h-full w-full object-cover"
                  >
                    Tu navegador no soporta la reproducción de video HTML5.
                  </video>

                  {/* Botón Central Play cuando está pausado */}
                  {!isRealCasePlaying && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/35 backdrop-blur-[1px] transition-all group-hover/story:bg-black/20">
                      <div className="relative flex items-center justify-center">
                        <span className="absolute inline-flex h-16 w-16 animate-ping rounded-full bg-white/40 duration-1000" />
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-2xl transition-transform duration-300 group-hover/story:scale-110">
                          <Play className="ml-0.5 h-6 w-6 fill-slate-900 text-slate-900" />
                        </div>
                      </div>
                      <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white border border-white/20 shadow-md">
                        <Sparkles className="h-3 w-3 text-teal-300" />
                        Ver caso real con IA
                      </span>
                    </div>
                  )}

                  {/* Pie de foto estilo Instagram Reel / Story */}
                  <div className="absolute bottom-0 inset-x-0 z-20 p-4 pt-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white pointer-events-none">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold text-white border border-white/30">
                        💵 Efectivo & Copiloto IA
                      </span>
                    </div>
                    <p className="text-xs text-white/95 leading-relaxed font-medium line-clamp-2">
                      "Sin datos registrados no hay análisis". Controla tus billetes al instante.
                      <span className="font-bold text-amber-300 ml-1">#AhorroReal #Finanzas</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Flecha Derecha (>) */}
            <button
              type="button"
              onClick={() => handleSlideStories('next')}
              className="group/arrow z-30 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-slate-200/90 text-slate-700 transition-all duration-200 hover:scale-110 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-[0_8px_25px_rgba(79,70,229,0.2)] active:scale-95"
              aria-label="Siguiente historia"
            >
              <ChevronRight className="h-6 w-6 stroke-[2.5] transition-transform group-hover/arrow:translate-x-0.5" />
            </button>
          </div>

          {/* Indicadores de carrusel para móviles */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4">
            <button
              type="button"
              onClick={() => setActiveStoryIndex(0)}
              className={`h-2 rounded-full transition-all ${
                activeStoryIndex === 0 ? 'w-6 bg-indigo-600' : 'w-2 bg-slate-300'
              }`}
              aria-label="Ver App Móvil"
            />
            <button
              type="button"
              onClick={() => setActiveStoryIndex(1)}
              className={`h-2 rounded-full transition-all ${
                activeStoryIndex === 1 ? 'w-6 bg-indigo-600' : 'w-2 bg-slate-300'
              }`}
              aria-label="Ver Caso Real"
            />
          </div>

          {/* Banner CTA debajo del widget */}
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-8 text-center text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 border border-indigo-500/20">
            <div className="text-left">
              <p className="text-base sm:text-lg font-bold text-white">
                ¿Listo para tener el control total de tu dinero en tu celular y computadora?
              </p>
              <p className="text-xs sm:text-sm text-indigo-200/80 mt-1">
                Plan anual completo por un pago único de S/ 30.
              </p>
            </div>
            <a
              href="#precio"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5"
            >
              <span>Quiero Acceder Ahora</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* 5. TABLA COMPARATIVA */}
        <section className="mx-auto mt-24 w-full max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Comparativa Directa</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              ¿Por qué elegir <span className="text-indigo-600">FinanzasTrack</span>?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              Comprueba por qué miles de usuarios dejaron atrás las libretas y hojas de Excel complicadas.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/40">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr>
                  <th className="w-[42%] border-b border-r border-slate-200 px-6 py-5 text-left text-base font-bold text-slate-900">
                    Funcionalidades Clave
                  </th>
                  <th className="w-[26%] border-b border-r border-indigo-200/80 bg-indigo-50/60 px-6 py-5 text-center">
                    <span className="relative mx-auto mb-2 grid h-10 w-10 place-content-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#1d4ed8] via-[#0284c7] to-[#2dd4bf] p-2 shadow-md shadow-teal-500/25">
                      <span
                        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[logo-shine_3.5s_infinite]"
                        aria-hidden="true"
                      />
                      <img
                        src="/v4.svg"
                        alt="FinanzasTrack"
                        className="relative z-10 h-6 w-6 object-contain drop-shadow-sm"
                      />
                    </span>
                    <p className="text-lg font-bold text-indigo-900">FinanzasTrack</p>
                  </th>
                  <th className="w-[16%] border-b border-r border-slate-200 px-5 py-5 text-center">
                    <span className="mx-auto mb-2 grid h-10 w-10 place-content-center rounded-2xl border border-emerald-200/80 bg-emerald-50 text-emerald-600 shadow-sm transition-transform duration-200 hover:scale-105">
                      <FileSpreadsheet className="h-5 w-5 stroke-[2]" />
                    </span>
                    <p className="text-base font-semibold text-slate-700">Excel / Sheets</p>
                  </th>
                  <th className="w-[16%] border-b border-slate-200 px-5 py-5 text-center">
                    <span className="mx-auto mb-2 grid h-10 w-10 place-content-center rounded-2xl border border-amber-200/80 bg-amber-50 text-amber-600 shadow-sm transition-transform duration-200 hover:scale-105">
                      <BookOpen className="h-5 w-5 stroke-[2]" />
                    </span>
                    <p className="text-base font-semibold text-slate-700">Cuaderno</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="transition-colors hover:bg-slate-50/60">
                    <td className="border-b border-r border-slate-200 px-6 py-3.5 text-sm font-medium text-slate-800">
                      {row.feature}
                    </td>
                    <td className="border-b border-r border-indigo-100 bg-indigo-50/30 px-6 py-3.5 text-center">
                      <ComparisonStatus enabled={row.finanzasTrack} />
                    </td>
                    <td className="border-b border-r border-slate-200 px-5 py-3.5 text-center">
                      <ComparisonStatus enabled={row.excel} />
                    </td>
                    <td className="border-b border-slate-200 px-5 py-3.5 text-center">
                      <ComparisonStatus enabled={row.notebook} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. FUNCIONALIDADES DETALLADAS (SHOWCASE ZIG-ZAG) */}
        <section id="funcionalidades" className="mx-auto mt-28 w-full max-w-6xl scroll-mt-24">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Herramientas que Transforman tu Economía</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Cada función pensada para que <span className="text-indigo-600">tu dinero rinda mucho más</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              Diseñado para personas reales que quieren dejar atrás el estrés de fin de mes y ver crecer sus ahorros con total facilidad.
            </p>
          </div>

          <div className="mt-14 space-y-16 md:space-y-20">
            {appSections.map((sec) => (
              <article
                key={sec.id}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${sec.imageLeft ? '' : 'lg:[&>*:first-child]:order-2'
                  }`}
              >
                {/* Contenedor Mockup / Espacio de Imagen */}
                <div className="group/mockup relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_16px_35px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_20px_45px_rgba(79,70,229,0.12)]">
                  {/* Cabecera estilo navegador / app */}
                  <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/90 px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg border border-slate-200/70 bg-white px-3 py-0.5 text-[11px] font-medium text-slate-600 shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>finanzastrack.site/{sec.id}</span>
                    </div>
                    <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {sec.previewBadge}
                    </span>
                  </div>

                  {/* Espacio reservado para la captura de pantalla */}
                  <div className={`relative flex min-h-[260px] sm:min-h-[310px] w-full items-center justify-center overflow-hidden bg-gradient-to-br ${sec.previewGradient} bg-slate-50`}>
                    <img
                      src={sec.imageSrc}
                      alt={`Vista de ${sec.title}`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/mockup:scale-[1.02]"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          e.currentTarget.nextElementSibling.classList.remove('hidden');
                          e.currentTarget.nextElementSibling.classList.add('flex');
                        }
                      }}
                    />
                    {/* Placeholder elegante en caso de no cargar la imagen todavía */}
                    <div className="hidden flex-col items-center justify-center gap-3 p-8 text-center text-slate-400">
                      <span className="grid h-14 w-14 place-content-center rounded-2xl bg-white text-indigo-600 border border-indigo-100 shadow-md">
                        <TrendingUp className="h-7 w-7 stroke-[2.5]" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-slate-800">Captura: {sec.tag}</p>
                        <p className="text-xs text-slate-500 mt-0.5">Espacio reservado para imagen: <code className="text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">{sec.imageSrc}</code></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información Descriptiva del Módulo */}
                <div className="flex flex-col justify-center">
                  <span className={`inline-flex w-fit rounded-full px-3.5 py-1 text-xs font-bold ${sec.tagColor}`}>
                    {sec.tag}
                  </span>
                  <h3 className="mt-3.5 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                    {sec.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                    {sec.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {sec.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 md:text-sm">
                        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${sec.bulletDot}`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 7. MÓDULO DE INTELIGENCIA ARTIFICIAL */}
        <section className="mx-auto mt-24 w-full max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 text-white shadow-2xl shadow-indigo-950/30 md:p-12">
            <div className="relative z-10">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/20 px-3.5 py-1 text-xs font-bold text-indigo-300 backdrop-blur-md">
                    <Bot className="h-4 w-4" />
                    <span>TU ASESOR FINANCIERO EN EL BOLSILLO</span>
                  </div>
                  <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                    Tu Asesor Financiero en el Bolsillo 24/7 que te dice exactamente cómo ahorrar
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-indigo-200/90 md:text-base">
                    No necesitas saber de finanzas ni ser economista. Tu copiloto con inteligencia artificial analiza tus gastos en tiempo real, frena fugas de dinero y te guía paso a paso para que te sobre dinero a fin de mes.
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-4 py-1.5 text-xs font-bold text-emerald-300">
                    <Sparkles className="h-4 w-4" />
                    Copiloto Financiero 24/7
                  </span>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {aiCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/15"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid h-10 w-10 place-content-center rounded-xl bg-indigo-500 text-white shadow-md shadow-indigo-500/30">
                        <card.Icon className="h-5 w-5" />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">
                        {card.badge}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-white">{card.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-indigo-200/80">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. PRECIO Y OFERTA */}
        <section id="precio" className="mx-auto mt-28 w-full max-w-4xl scroll-mt-24">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 shadow-sm">
              <Zap className="h-3.5 w-3.5 text-indigo-600" />
              ACCESO COMPLETO Y PERMANENTE
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Invierte una sola vez, <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">ahorra toda la vida</span>
            </h2>
            <p className="mt-2.5 text-sm md:text-base text-slate-600">
              Sin mensualidades, sin renovaciones obligatorias ni tarifas ocultas.
            </p>
          </div>

          {/* Mockup de Dispositivos sobre la Oferta */}
          <div className="relative z-10 mx-auto mt-6 mb-6 sm:mb-8 w-full max-w-3xl px-3 flex justify-center">
            <img
              src="/device-group1.png"
              alt="FinanzasTrack en Computadora, Laptop y Celular"
              className="w-full max-w-[760px] h-auto object-contain drop-shadow-[0_25px_40px_rgba(15,23,42,0.14)] animate-subtle-float"
            />
          </div>

          {/* Tarjeta de Oferta con Identidad Oficial FinanzasTrack */}
          <article className="rounded-3xl border-2 border-indigo-200/80 bg-white overflow-hidden shadow-2xl shadow-indigo-600/10 transition-all duration-300">
            {/* Cabecera Degradada con Paleta Oficial FinanzasTrack */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 p-6 sm:p-7 text-center text-white relative overflow-hidden">
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[logo-shine_4s_infinite]"
                aria-hidden="true"
              />
              <p className="text-xs md:text-sm font-bold tracking-wider uppercase opacity-95 flex items-center justify-center gap-1.5">
                <span>🎉</span> OFERTA ESPECIAL POR TIEMPO LIMITADO
              </p>
              <h3 className="mt-1 text-2xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-sm">
                ¡Aprovecha el 90% de Descuento!
              </h3>
            </div>

            <div className="p-6 md:p-10">
              {/* Comparativa de Precios en 2 Columnas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                {/* Tarjeta Precio Normal */}
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-6 text-center flex flex-col justify-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">PRECIO NORMAL - ANUAL</p>
                  <p className="mt-1 text-xs text-slate-500">Sin la oferta</p>
                  <div className="my-2">
                    <span className="text-4xl md:text-5xl font-black text-slate-400 line-through decoration-rose-500 decoration-[3px]">
                      S/ 300
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-500">+ S/ 200 en bonos</p>
                </div>

                {/* Tarjeta Precio Hoy con 90% OFF */}
                <div className="relative rounded-2xl border-2 border-indigo-500 bg-gradient-to-br from-indigo-50/90 via-blue-50/40 to-teal-50/50 p-6 text-center shadow-lg shadow-indigo-500/10">
                  <div className="absolute top-3.5 right-3.5 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-black uppercase text-amber-950 shadow-sm animate-pulse">
                    90% OFF
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">PRECIO HOY - ANUAL</p>
                  <p className="mt-1 text-xs text-slate-600">
                    <span className="line-through text-slate-400">S/ 300</span> (sistema + 2 bonos)
                  </p>
                  <div className="my-2 flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-black text-indigo-700">S/</span>
                    <span className="text-5xl md:text-6xl font-black tracking-tight text-indigo-600">30</span>
                  </div>
                  <span className="inline-block text-xs font-bold text-indigo-800 bg-indigo-100/70 border border-indigo-200 px-3 py-0.5 rounded-full">
                    ¡Todo incluido! • Plan Anual
                  </span>
                </div>
              </div>

              {/* Botón Central Grande de Acción (WhatsApp / Compra) */}
              <div className="text-center mb-10">
                <a
                  href="https://wa.me/51980570301?text=%C2%A1Hola!%20FinanzasTrack%20deseo%20mi%20acceso%20a%20la%20app%20."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-col items-center justify-center w-full sm:w-auto rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 hover:from-blue-700 hover:via-indigo-700 hover:to-teal-600 text-white px-10 py-4.5 shadow-xl shadow-indigo-600/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-600/40 active:translate-y-0"
                >
                  <div className="flex items-center justify-center gap-2.5 text-lg sm:text-xl font-extrabold tracking-wide">
                    <Sparkles className="h-5 w-5 fill-white stroke-none" />
                    <span>OBTENER ESTA OFERTA AHORA →</span>
                  </div>
                  <span className="text-xs font-medium text-indigo-100 mt-1">
                    Haz clic aquí • Activación inmediata vía WhatsApp
                  </span>
                </a>

                {/* Botón de llamada para celular */}
                <div className="mt-3 md:hidden">
                  <a
                    href="tel:+51980570301"
                    className="inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-600 hover:text-indigo-600"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>O si prefieres, puedes llamarnos al +51 980 570 301</span>
                  </a>
                </div>
                <p className="mt-2.5 text-xs text-slate-500">
                  Aceptamos Yape, Plin y Transferencia Bancaria • Activación en 15 minutos
                </p>
              </div>

              {/* Lista: Lo que incluye tu compra */}
              <div className="mb-10">
                <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-slate-900 mb-4">
                  <Check className="h-5 w-5 text-indigo-600 stroke-[3]" />
                  <span>Lo que incluye tu acceso completo:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pricingFeatures.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                      <span className="grid h-5 w-5 place-content-center rounded-full bg-indigo-100/80 text-indigo-700 shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2 BONOS EXCLUSIVOS GRATIS */}
              <div className="mb-10 pt-8 border-t border-slate-100">
                <div className="mb-4 flex items-center gap-2 text-base md:text-lg font-extrabold text-slate-900">
                  <span className="text-xl">🎁</span>
                  <span>+ 2 BONOS EXCLUSIVOS GRATIS:</span>
                </div>

                <div className="space-y-3.5">
                  {pricingBonuses.map((bono) => (
                    <div
                      key={bono.title}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 rounded-2xl border border-amber-200/80 bg-amber-50/50 p-4 sm:p-5 transition-all hover:bg-amber-50 hover:border-amber-300 shadow-sm"
                    >
                      <div className="flex items-start sm:items-center gap-3.5">
                        <span className="grid h-11 w-11 shrink-0 place-content-center rounded-xl bg-amber-100/90 text-amber-800 border border-amber-200 shadow-sm">
                          <bono.icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-sm sm:text-base font-bold text-slate-900">{bono.title}</p>
                          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{bono.description}</p>
                        </div>
                      </div>
                      <span className="shrink-0 self-start sm:self-center inline-flex items-center rounded-full bg-amber-100 text-amber-900 px-3.5 py-1 text-xs font-black border border-amber-200/90 shadow-sm">
                        {bono.value}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-center text-xs sm:text-sm text-slate-600">
                  Valor total de los bonos:{' '}
                  <span className="line-through font-bold text-slate-400">S/ 200</span>{' '}
                  <span className="font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-md ml-1">
                    ¡GRATIS HOY CON TU ACCESO!
                  </span>
                </p>
              </div>

              {/* Badges de Confianza */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 pb-2 border-t border-slate-100 text-xs sm:text-sm font-bold text-slate-700">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-indigo-600 stroke-[3]" /> UN SOLO PAGO AL AÑO
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-indigo-600 stroke-[3]" /> ACTIVACIÓN INMEDIATA
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-indigo-600 stroke-[3]" /> ACCESO ANUAL COMPLETO
                </span>
              </div>

              {/* Caja de Contador de Urgencia */}
              <div className="mx-auto mt-6 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 text-center">
                <p className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-slate-800">
                  <span>⏰</span> Oferta por tiempo limitado
                </p>
                <div className="mt-3 flex items-center justify-center gap-2 sm:gap-3">
                  <div className="flex flex-col items-center">
                    <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-content-center rounded-xl bg-slate-900 text-lg sm:text-xl font-black text-white shadow-md">
                      {String(countdownDays).padStart(2, '0')}
                    </div>
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Días</span>
                  </div>
                  <span className="text-xl font-black text-slate-400 self-start mt-2">:</span>
                  <div className="flex flex-col items-center">
                    <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-content-center rounded-xl bg-slate-900 text-lg sm:text-xl font-black text-white shadow-md">
                      {String(countdownHours).padStart(2, '0')}
                    </div>
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Horas</span>
                  </div>
                  <span className="text-xl font-black text-slate-400 self-start mt-2">:</span>
                  <div className="flex flex-col items-center">
                    <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-content-center rounded-xl bg-slate-900 text-lg sm:text-xl font-black text-white shadow-md">
                      {String(countdownMinutes).padStart(2, '0')}
                    </div>
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Min</span>
                  </div>
                  <span className="text-xl font-black text-slate-400 self-start mt-2">:</span>
                  <div className="flex flex-col items-center">
                    <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-content-center rounded-xl bg-slate-900 text-lg sm:text-xl font-black text-white shadow-md">
                      {String(countdownSecs).padStart(2, '0')}
                    </div>
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Seg</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  Al finalizar el contador, la oferta volverá a su precio regular de <span className="font-bold text-slate-700">S/ 300</span>.
                </p>
              </div>
            </div>

            {/* Barra inferior de Garantía y Seguridad */}
            <div className="bg-slate-50/90 border-t border-slate-100 px-4 pt-4 pb-7 sm:pb-8 text-center rounded-b-3xl">
              <p className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-600">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Compra 100% segura • Activación Inmediata • Garantía de Satisfacción</span>
              </p>
            </div>
          </article>
        </section>

        {/* 9. TESTIMONIOS Y SOCIAL PROOF */}
        <section className="mx-auto mt-28 w-full max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Testimonios</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Lo que opinan nuestros <span className="text-indigo-600">usuarios</span>
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
              Personas reales que ordenaron sus finanzas con FinanzasTrack.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 sm:gap-14 md:grid-cols-3 md:gap-6 pt-4">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 pt-12 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5"
              >
                {/* Avatar flotante centrado sobre el borde superior */}
                <div className="absolute -top-11 left-1/2 -translate-x-1/2">
                  <div className="relative h-22 w-22 sm:h-24 sm:w-24 overflow-hidden rounded-full border-4 border-white shadow-lg bg-slate-100">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400" />
                      ))}
                    </div>
                    {t.highlight && (
                      <span className="rounded-full border border-indigo-100 bg-indigo-50/70 px-2.5 py-0.5 text-[10px] font-bold text-indigo-700 whitespace-nowrap">
                        {t.highlight}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {trustStats.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
              >
                <p className="text-2xl font-extrabold tracking-tight text-indigo-600 sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-600">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 10. PREGUNTAS FRECUENTES (FAQ) */}
        <section id="faq" className="mx-auto mt-28 mb-12 sm:mb-16 w-full max-w-3xl scroll-mt-24">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Preguntas Frecuentes</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Resolvemos todas tus dudas
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Todo lo que necesitas saber antes de empezar.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index

              return (
                <article
                  key={item.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-200 ${isOpen ? 'border-indigo-200 bg-indigo-50/20 shadow-sm' : 'border-slate-200 bg-white shadow-sm hover:border-slate-300'
                    }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span className="text-sm font-bold text-slate-900">{item.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : ''
                        }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-indigo-100/60 px-6 py-4 text-xs leading-relaxed text-slate-600">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}

export default HeroSection
